"use client"

import axios from "axios";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { quizProps } from "./Quiz";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

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
    return <div className={`w-[80%] md:w-[30%] h-[50%] md:h-[55%] ${inter.className} border-t-4 rounded-lg border-blue-500  ${!submit ? 'hidden': 'block'} mx-auto fixed top-[27%] md:top-[35%] left-1/2 -translate-x-1/2 p-2  shadow-2xl z-50 flex justify-center items-center bg-gray-200 text-black`}>
       
        <div className="flex flex-col h-full  gap-2 p-1 w-full relative">
            
                <div className="absolute top-1 right-1 bg-neutral-100 hover:bg-gray-300 rounded-lg bordert4 cursor-pointer" onClick={()=> setSubmit(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
                <h1 className="font-extrabold md:text-2xl text-center mt-6 text-green-600">Quiz Submitted!</h1>
                <span className="md:text-lg text:sm mt-4 text-center text-gray-600">Your Score: </span> 
                <span className="mx-auto text-5xl mt-2 font-extrabold text-blue-600">{score} / 15  </span>
                <span className="text-lg text-gray-600  text-center">Accuracy:</span> 
                <span className="mx-auto text-5xl font-extrabold text-green-600 mt-2"> {acrcy}% </span>
                <button className="w-40 mt-4 md:mt-6 px-4 py-2 shadow-2xl] bg-blue-500 hover:bg-blue-600 rounded-md mx-auto cursor-pointer text-white hover:text-gray-200  transition duration-200 ease-in-out" onClick={handler}>Save your score</button>

        </div>
    </div>
}