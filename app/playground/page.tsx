"use client"

import { useState } from "react";
import Quiz from "../components/Quiz";
import { quizProps } from "../components/Quiz";
import axios from "axios";

export default function Playground () {
    const [quiz, setQuiz] = useState<quizProps[]>([]);
    const [topic, setTopic] = useState("");
    const [searchOpen, setSearchOpen] = useState<boolean>(true);
    // console.log(typeof(quiz))

    const topicHandler = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        console.log(e.target.value);
        setTopic(e.target.value);
    }
    const handleSubmit = async () => {
        
      try{
         const response = await axios.post("/api/v1/search", {
            topic: topic
        });
        // console.log(response.data.data);
        setQuiz(response.data.data);
        setSearchOpen(false);

      }catch(error:any) {
        if (!window.navigator.onLine) {
            alert("You are offline. Please connect to the internet.");
        } else {
            alert("Something went wrong: " + error.message);
        }
      }
        
    }

    return <div className="p-4 w-full relative z-30">
        
        <div className={`${searchOpen ? 'block': 'hidden'} shadow-md fixed left-1/2 -translate-x-1/2 z-50  md:w-[30%]  md:h-[25%]   mt-[60vh]  bg-gray-500 rounded-md`}>

            <textarea className="resize-none w-full h-full  rounded-md md:border-[1px] border-gray-400 pt-4 pl-2 text-md 
                                focus:border-blue-950 focus:outline-none text-gray-300 " placeholder="Give the topics..." onChange={topicHandler}>

            </textarea>
            <button className="absolute bottom-0.5 right-1 md:bottom-2 md:right-2 bg-black  text-white px-1 py-0.5 md:px-3 md:py-1 text-sm rounded hover:bg-blue-700 transition" onClick={handleSubmit}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
            </button>
            
        </div>

       {quiz.length > 0 && <div className="flex flex-col gap-2 ">
            {quiz.map((q:quizProps) => (<Quiz key={q.questionId} questionId={q.questionId} question={q.question} options={q.options} correctAnsId={q.correctAnsId} />)) }
       </div>}

    </div>
}