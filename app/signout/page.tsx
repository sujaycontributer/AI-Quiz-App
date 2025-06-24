"use client"

import { signOut } from "next-auth/react"

const SiginOut = () => {
    return <div className="">
        <button className="bg-white text-blue-600 p-3 mt-4" onClick={() => signOut()}>Sign out</button>
    </div>
}
export default SiginOut;