"use client"

import axios from "axios";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { quizProps } from "./Quiz";


export default function FinalScore ({score, accuracy, questionsolved, submit, setSubmit, setQuiz, setSearchOpen}: {score: number, accuracy?: number, questionsolved: number, submit: boolean, setSubmit: (val:boolean) => void, setQuiz: (val: quizProps[])=> void, setSearchOpen: (val: boolean) => void})  {
    const {data: session, status} = useSession();
    const acrcy = Math.floor((score/15) *100);
    console.log(`in frontend value: ${questionsolved}`);
    const handler =  async () => {
        if(!session){
            redirect('/api/auth/signin');
        }
        const userId = session.user.id;
        const data = await axios.put(`/api/v1/quiz/${userId}`,{
            score,
            accuracy:acrcy,
            questionsSolved:questionsolved,
        });
        setSubmit(false);
        setQuiz([]);
        setSearchOpen(true);

        
        
        // console.log(data.data);
    }
    return <div className={`w-[30%] h-[30%]   ${!submit ? 'hidden': 'block'} mx-auto fixed top-[50%] left-1/2 -translate-x-1/2 p-2 rounded-md shadow-2xl z-50 flex justify-center items-center bg-gray-200 text-black border border-dashed border-neutral-200`}>
        {/* <div className="">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>

        </div> */}
        <div className="flex flex-col gap-2 p-1 w-full h-full relative">
                <div className="absolute top-1 right-1 hover:bg-gray-300 rounded-lg cursor-pointer" onClick={()=> setSubmit(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
                <h1 className="font-extrabold text-xl text-center text-green-600">Quiz Submitted!</h1>
                <span className="font-semibold text-center">Your Score: {score} / 15 ✅ </span> 
                <span className="font-semibold text-center">Accuracy: {acrcy}% </span> 
                <button className="w-40 mt-4 px-4 py-2 bg-gray-300 rounded-md mx-auto cursor-pointer text-black hover:text-gray-200 hover:bg-gray-400 transition duration-200 ease-in-out" onClick={handler}>Save your score</button>

        </div>
    </div>
}