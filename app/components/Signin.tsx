"use client"

import { signIn } from "next-auth/react";

export default function Login() {
    return <div className="flex justify-center items-center h-screen">
        <div className=" sm:w-[30%] bg-black font-sans  flex flex-col items-center p-8 rounded-xl shadow-4xl shadow-white-100  border-gray-200">
            <div className="text-black text-xl md:text-3xl shadow-2xl  font-extrabold"><span className="text-white">Welcome to</span> <span className="text-green-700">QuizCraft AI</span></div>
            <div className="mt-2 font-semibold text-md shadow-md text-gray-300">Log in to start practice!</div>

            <div className="mt-10">
                <button className="bg-white text-black px-10 md:px-20 py-4 shadow-xl font-semibold rounded-xl hover:scale-102 cursor-pointer hover:bg-gray-200 transition-all ease-in-out" onClick={() => signIn("google",{callbackUrl: "/"})}>Continue with Google</button>
            </div>

        </div>


    </div>
}

