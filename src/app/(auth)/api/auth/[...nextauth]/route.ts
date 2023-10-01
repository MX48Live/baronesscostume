import { signOut } from "next-auth/react";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

function checkAvailableEmail(email: string) {
  const availableEmail = ["mx48live@gmail.com"];
  if (availableEmail.indexOf(email.toLowerCase()) != -1) {
    return true;
  } else {
    return false;
  }
}

export const authOption = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET ?? "",
  pages: {
    signIn: "/signin",
    signOut: "/signout",
  },
  callbacks: {
    async signIn({ user }: any) {
      if (user && checkAvailableEmail(user.email)) {
        return true;
      } else {
        return `/not-found`;
      }
    },
    async redirect() {
      return `/admin`;
    },
  },
  theme: {
    colorScheme: "light" as const,
  },
};

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
