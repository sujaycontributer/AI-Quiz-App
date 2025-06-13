"use client"
import Home from "../page";
import Playground from "../playground/page";
import Acheivements from "../acheivements/page";
import Link from "next/link";

export default function Navbar () {
    
    return <div className="fixed z-50 h-4rem w-full p-2 md:p-5 sm:text-sm  top-0 left-0  bg-black text-gray-400 border-b border-b-gray-500 flex justify-center items-center gap-2 md:gap-4 ">

        <div className="rounded-md font-semibold hover:text-gray-500">
            <Link href={"/home"}>
                Home
            </Link></div>
        <div className="rounded-md font-semibold hover:text-green-600">
            <Link href={"/playground"}>
                Playground
            </Link></div>
        <div className="rounded-md font-semibold hover:text-gray-500">
            <Link href={"/acheivements"}>
                Acheivements
            </Link>
        </div>

    </div>
}