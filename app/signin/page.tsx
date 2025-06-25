"use client"

import { useSession, signIn, signOut } from "next-auth/react";
import Login from "../components/Signin";

export default function Signin() {
    // return <div className="flex justify-center items-center h-screen">
    // <button className=" bg-white hover:bg-gray-200  transition-all ease-in-out text-black shadow-xl rounded-md cursor-pointer px-6 py-2" onClick={() => signIn("google", {callbackUrl: "/"})}>Sign in with Google</button>
    // </div>
    return <div>
        <Login />
    </div>
}
