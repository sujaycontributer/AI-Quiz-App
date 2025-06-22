
import { DefaultSession, DefaultUser } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string; // Your database user ID
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    id: string; // Your database user ID (if using adapter)
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id: string; // Your database user ID in the JWT
  }
}