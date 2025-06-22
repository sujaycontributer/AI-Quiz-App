
// app/api/auth/[...nextauth]/route.js (or .ts)
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/app/lib/prisma";


const googleClientId = process.env.GOOGLE_CLIENT_ID as string;
const gooogleClientSecret = process.env.GOOGLE_CLIENT_SECRET as string;

interface Session {
    user: {
      id: string; // Add your custom property here
      name?: string | null;
      email?: string | null;
      image?: string | null;
    }
}

const authOptions = {                     // const authOptions = { ... }' for App Router
                                         // 1. **Adapter:** Link NextAuth.js to your database
  adapter: PrismaAdapter(prisma),

  // 2. **Providers:** Define the authentication providers you'll use
  providers: [
    GoogleProvider({
      clientId: googleClientId,
      clientSecret: gooogleClientSecret,
    }),
  ],

  // 3. **Callbacks:** Customize session data and JWT
  callbacks: {
    // This callback runs when a JWT is created or updated
    async jwt({ token, user }) {
      // 'user' is only present on first sign-in or when a new JWT is issued
      if (user) {
        // When using an adapter, user.id is the ID from your database
        token.id = user.id;
      }
      return token;
    },
    // This callback runs when a session is accessed (client or server)
    async session({ session, token }) {
      // Add the database user ID to the session object that your app receives
      if (token.id) {
        session.user.id = token.id;
      }
      return session;
    },
  },

  // 4. **Session Strategy:** Explicitly use JWTs (default with adapters too)
  session: {
    strategy: "jwt",
  },

  // Optional: Enable debug mode in development for verbose logging
  // debug: process.env.NODE_ENV === "development",
};


// For App Router:
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

