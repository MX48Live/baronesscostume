import { NextRequest, NextResponse } from "next/server";
import { verifyCredentials, createAuthSession } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const { id, password } = await request.json();

    if (!id || !password) {
      return NextResponse.json(
        { error: "ID and password are required" },
        { status: 400 },
      );
    }

    const isValid = await verifyCredentials(id, password);

    if (isValid) {
      await createAuthSession();
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 },
      );
    }
  } catch (error) {
    console.error("Auth error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
