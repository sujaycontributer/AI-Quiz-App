"use client"

import axios from "axios";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";


export default function FinalScore ({score, accuracy, questionsolved, submit}: {score: number, accuracy?: number, questionsolved: number, submit: boolean}) {
    const {data: session, status} = useSession();
    const acrcy = Math.floor((score/15) *100);
    console.log(score);
    const handler =  async () => {
        if(!session){
            redirect('/api/auth/signin');
        }
        const userId = session.user.id;
        const data = await axios.put(`/api/v1/quiz/${userId}`,{
            score,
            accuracy,
            questionsolved,
        })
    }
    return <div className={`w-[30%] h-[30%] ${!submit ? 'hidden': 'block'} mx-auto fixed top-[50%] left-1/2 -translate-x-1/2 p-2 rounded-md shadow-2xl z-50 flex justify-center items-center bg-gray-200 text-black border border-dashed border-neutral-200`}>
        <div className="flex flex-col gap-2 p-1">
                <h1 className="font-extrabold text-xl text-green-600">Quiz Submitted!</h1>
                <span className="font-semibold">Your Score: {score} / 15 ✅ </span> 
                <span className="font-semibold">Accuracy: {acrcy}% </span> 
                <button className="w-40 mt-4 px-4 py-2 bg-gray-300 rounded-md cursor-pointer text-black hover:text-gray-200 hover:bg-gray-400 transition duration-200 ease-in-out" onClick={handler}>Save your score</button>

        </div>
    </div>
}