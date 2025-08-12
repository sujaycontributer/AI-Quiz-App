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
    
    return <div className={`fixed z-50 md:max-w-[80%] mx-auto rounded-md shadow-md h-4rem w-full font-bold py-4 md:p-5 sm:text-sm bg-black/40 backdrop-blur-sm shadow-4xl top-0 left-0 right-0 text-gray-100 md:border-b md:border-gray-500`} >

        <div className="w-[95%] p-1 mx-auto flex justify-between md:justify-between md:items-center gap-1 md:gap-4 cursor-pointer ">
            <div className="hidden md:block font-extrabold shadow-2xl" onClick={() => redirect("/")}>
                <span className="bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400 bg-clip-text text-transparent text-center text-xl  mr-0.5 px-0.5 py-1 rounded-md cursor-pointer">QuizCraft AI </span>
            </div>
        <div className={` ${status === 'authenticated'? 'block': 'hidden'} flex mx-auto gap-4`}>
            <Link href={"/home"} className={`rounded-md font-semibold hover:text-green-600 ${pathname === '/home'? 'text-green-600' : '' }`}>
                <div>
                    Home
                </div>
            </Link>  
            <Link href={"/playground"} className={`rounded-md font-semibold hover:text-green-600 ${pathname === '/playground' ? 'text-green-600':''}`} >
                <div >
                    Playground
                </div>
            </Link>
            <Link href={"/acheivements"} className={`rounded-md font-semibold hover:text-green-600 ${pathname === '/acheivements'? 'text-green-600':''}`}>
                <div>
                    Acheivements
                </div>
            </Link>
            <div>

        </div>
        </div>

       { status != "authenticated" &&  <div>
            <button className="bg-gray-800 text-gray-200 border border-gray-600 px-6 md:px-6 py-1 z-10 shadow-xl md: rounded-xl cursor-pointer hover:text-gray-500 transition-all delay-75" onClick={() => signIn("google", {callbackUrl: "/"})}>Sign In</button>
        </div>}

        {/* { status === "authenticated" &&  <span className="p-1 bg-white shadow-xl px-2 rounded-sm cursor-pointer text-gray-800" onClick={() => signOut({callbackUrl:'/'})}>
            Logout
        </span>} */}

        </div>

    </div>
}