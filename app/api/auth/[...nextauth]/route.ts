
// app/api/auth/[...nextauth]/route.js (or .ts)
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const googleClientId = process.env.GOOGLE_CLIENT_ID as string;
const gooogleClientSecret = process.env.GOOGLE_CLIENT_SECRET as string;

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: googleClientId,
      clientSecret: gooogleClientSecret,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session:any, token }) {
      if (token?.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
    async signIn({ user: any, account: any, profile: any }) {
        console.log("User signed in:", user);
        console.log("Account:", account);
        console.log("Profile:", profile);
        // Save user to your database here if needed
        return true;
    },
  },
};

// NextAuth returns a handler function that you can then export for GET and POST requests
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };