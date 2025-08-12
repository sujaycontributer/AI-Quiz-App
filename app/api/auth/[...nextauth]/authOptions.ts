import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/app/lib/prisma";

const googleClientId = process.env.GOOGLE_CLIENT_ID as string;
const gooogleClientSecret = process.env.GOOGLE_CLIENT_SECRET as string;

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET as string,
  providers: [
    GoogleProvider({
      clientId: googleClientId,
      clientSecret: gooogleClientSecret,
    }),
  ],
  session: {
    strategy: "jwt", // Explicitly define JWT strategy
  },
  callbacks: {
    // This callback is now critical if you want to save users to your DB
    async signIn({ user, account, profile }) {
      // 'user' here is the data from Google (id, name, email, image)
      // 'profile' is the raw data from Google
      // 'account' has provider details like access_token

      
      // Checking if user already exists in YOUR database
      let existingUser = await prisma.user.findFirst({
        where: { email: user.email as string},
      });

      if (!existingUser) {
        // If it's a new user, create a new record in my database
        existingUser = await prisma.user.create({
          data: {
            name: user.name as string,
            email: user.email as string,
            image: user.image as string,
            emailVerified: new Date(), // Google login implies email is verified
            quizdata: {
              create:{}
            }
          },
        });
        console.log("New user created in DB:", existingUser.id);
      } else {
        
        await prisma.user.update({
          where: { id: existingUser.id },
          data: {
            name: user.name as string,
            image: user.image as string,
            // You might update emailVerified if it wasn't before
            // emailVerified: new Date(),
          },
        });
        // console.log("Existing user updated in DB:", existingUser.id);
      }

      // You can pass the database user's ID to the JWT token now
      // This 'existingUser.id' is now YOUR database ID.
      (user as any).dbId = existingUser.id; // Temporarily add to user object for JWT callback
                                           // Or, more robustly, fetch again in jwt callback if needed
      // --- MANUAL DATABASE INTERACTION ENDS HERE ---

      return true; // Allow sign-in
    },

    async jwt({ token, user }) {
      // If 'user' is present, it means a sign-in or session update happened
      // Here, 'user' now has the 'dbId' we manually added in signIn callback.
      if (user) {
        token.id = (user as any).dbId || user.id;
         // Use your DB ID if available, else provider's ID
        // Or if you didn't add dbId in signIn, you could fetch it here:
        // const dbUser = await prisma.user.findUnique({ where: { email: token.email } });
        // if (dbUser) token.id = dbUser.id;
      }
      return token;
    },

    async session({ session, token }) {
      // This remains largely the same: take from token, put into session
      if (token.id) {
        session.user.id = token.id;
      }
      return session;
    },
  },
};