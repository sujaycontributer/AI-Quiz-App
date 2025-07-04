"use client"
import Home from "../page";
import Playground from "../playground/page";
import Acheivements from "../acheivements/page";
import {signIn, signOut, useSession} from "next-auth/react"
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";

export default function Navbar () {
    const {data:session, status} = useSession();
    const pathname = usePathname();
    
    return <div className={`fixed z-50 h-4rem w-full  py-4 md:p-5 sm:text-sm bg-blue-400 top-0 left-0   text-white md:border-b md:border-b-gray-500`} >

        <div className="w-[90%] p-1 mx-auto flex justify-between md:justify-between md:items-center gap-1 md:gap-4 cursor-pointer ">
            <div className="hidden md:block font-extrabold shadow-2xl" onClick={() => redirect("/")}>
                <span className="bg-white  text-center text-xl text-black mr-0.5 px-0.5 py-1 rounded-md cursor-pointer">QuizCraft </span> <span className="text-xl text-white">AI</span>
            </div>
        <div className={` ${status === 'authenticated'? 'block': 'hidden'} flex mx-auto gap-4`}>
            <div className={`rounded-md font-semibold hover:text-green-600 ${pathname === '/home'? 'text-green-600' : '' }`}>
            <Link href={"/home"}>
                Home
            </Link>
            </div>  
        <div className={`rounded-md font-semibold hover:text-green-600 ${pathname === '/playground' ? 'text-green-600':''}`} >
            <Link href={"/playground"}>
                Playground
            </Link>
        </div>
        <div className={`rounded-md font-semibold hover:text-green-600 ${pathname === '/acheivements'? 'text-green-600':''}`}>
            <Link href={"/acheivements"}>
                Acheivements
            </Link>
        </div>
        <div>

        </div>
        </div>

       { status != "authenticated" &&  <div>
            <button className="bg-white text-gray-800 px-6 py-1  shadow-xl md:py-2 rounded-sm  cursor-pointer hover:bg-gray-300" onClick={() => signIn("google", {callbackUrl: "/"})}>Login</button>
        </div>}

        {/* { status === "authenticated" &&  <span className="p-1 bg-white shadow-xl px-2 rounded-sm cursor-pointer text-gray-800" onClick={() => signOut({callbackUrl:'/'})}>
            Logout
        </span>} */}

        </div>

    </div>
}