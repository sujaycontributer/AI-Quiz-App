
// app/api/auth/[...nextauth]/route.js (or .ts)
import NextAuth from "next-auth";
import { authOptions } from "./authOptions";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

