"use client"
import Home from "../page";
import Playground from "../playground/page";
import Acheivements from "../acheivements/page";
import Link from "next/link";

export default function Navbar () {

    
    return <div className={`fixed z-50 h-4rem w-full  py-4 md:p-5 sm:text-sm  top-0 left-0  bg-black text-gray-400 md:border-b md:border-b-gray-500  `} >

        <div className="w-[70%] p-1 mx-auto flex justify-between items-center gap-1 md:gap-4 cursor-pointer ">
            <div className="font-extrabold hidden md:block">
                <span className="bg-white  text-center text-xl text-black mr-0.5 px-0.5 rounded-md">AI </span> <span className="text-xl text-white">Quiz</span> 
            </div>
        <div className="flex gap-4">
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
        </div>

    </div>
}