import { cookies } from "next/headers";

const AUTH_COOKIE_NAME = "admin-auth";

// Get the secret key for token signing
const getSecretKey = () => {
  if (process.env.JWT_SECRET) {
    return process.env.JWT_SECRET;
  }
  
  // In production (Vercel), this should always be set
  if (process.env.NODE_ENV === "production") {
    throw new Error("JWT_SECRET environment variable is required in production!");
  }
  
  // Development fallback
  console.warn("⚠️  JWT_SECRET not set! Using default secret for development only.");
  return "development-secret-only";
};

// Simple but secure token creation using Web Crypto API
async function createSecureToken(sessionId: string, timestamp: number): Promise<string> {
  const secret = getSecretKey();
  const payload = {
    sessionId,
    timestamp,
    type: "admin",
    nonce: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  };
  
  // Create a simple but secure token using HMAC-like approach
  const tokenData = `${sessionId}:${timestamp}:${payload.nonce}:${payload.type}`;
  const signature = await createSignature(tokenData, secret);
  
  return Buffer.from(JSON.stringify({ data: tokenData, sig: signature })).toString('base64');
}

// Create signature using Web Crypto API
async function createSignature(data: string, secret: string): Promise<string> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  
  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(data));
  return Buffer.from(signature).toString('base64');
}

// Verify token signature
async function verifyToken(token: string): Promise<{ valid: boolean; data?: any }> {
  try {
    const decoded = JSON.parse(Buffer.from(token, 'base64').toString());
    const { data, sig } = decoded;
    
    // Verify signature
    const expectedSig = await createSignature(data, getSecretKey());
    if (sig !== expectedSig) {
      return { valid: false };
    }
    
    // Parse token data
    const [sessionId, timestamp, nonce, type] = data.split(':');
    
    // Check if token is expired (24 hours)
    const tokenAge = Date.now() - parseInt(timestamp);
    const maxAge = 24 * 60 * 60 * 1000; // 24 hours
    
    if (tokenAge > maxAge || type !== 'admin') {
      return { valid: false };
    }
    
    return { 
      valid: true, 
      data: { sessionId, timestamp: parseInt(timestamp), nonce, type } 
    };
  } catch (error) {
    return { valid: false };
  }
}

export async function verifyCredentials(
  id: string,
  password: string,
): Promise<boolean> {
  const adminId = process.env.ADMIN_ID;
  const adminPassword = process.env.ADMIN_PASSWORD;

  return id === adminId && password === adminPassword;
}

export async function createAuthSession(): Promise<void> {
  const cookieStore = cookies();
  
  // Create a secure token with unique session ID
  const sessionId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  const timestamp = Date.now();
  const token = await createSecureToken(sessionId, timestamp);

  cookieStore.set(AUTH_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // HTTPS required on Vercel
    sameSite: "lax", // Better Vercel compatibility
    maxAge: 60 * 60 * 24, // 24 hours
    path: "/",
  });
}

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = cookies();
  const authCookie = cookieStore.get(AUTH_COOKIE_NAME);

  if (!authCookie?.value) {
    return false;
  }

  try {
    // Verify the secure token
    const verification = await verifyToken(authCookie.value);
    return verification.valid;
  } catch (error) {
    // Token is invalid, expired, or tampered with
    console.log("Auth token validation failed:", error);
    return false;
  }
}

export async function clearAuthSession(): Promise<void> {
  const cookieStore = cookies();
  cookieStore.delete(AUTH_COOKIE_NAME);
}
