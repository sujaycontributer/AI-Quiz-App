"use client"

import { signOut } from "next-auth/react"

const SiginOut = () => {
    return <div className="flex justify-center items-center h-screen">
        <button className="bg-white text-black px-4 py-2 rounded-sm" onClick={() => signOut({callbackUrl: "/"})}>Sign out</button>
    </div>
}
export default SiginOut;