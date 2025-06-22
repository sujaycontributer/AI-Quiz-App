"use client"

import { useSession, signIn, signOut } from "next-auth/react";

export default function Signin() {
    return <div className="flex justify-center items-center h-screen">
    <button className="text-blue-400 cursor-pointer px-4 py-2" onClick={() => signIn("google", {callbackUrl: "/"})}>Sign in with Google</button>
    </div>
}
