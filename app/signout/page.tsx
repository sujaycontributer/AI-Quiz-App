"use client"

import { signOut } from "next-auth/react"

const SiginOut = () => {
    return <div className="">
        <button className="bg-white text-black p-3" onClick={() => signOut({callbackUrl: "/signin"})}>Sign out</button>
    </div>
}
export default SiginOut;