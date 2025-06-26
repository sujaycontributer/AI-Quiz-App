"use client"

import { useState } from "react";
import { useScore } from "./ScoreProvider";

interface option {
  id: number;
  option: string;
}

export interface quizProps {
  questionId: number;
  question: string;
  options: option[];
  correctAnsId: number;
}


export default function Quiz ({questionId, question, options,  correctAnsId}:quizProps) {
     const [selectedOption, setSelectedOption] = useState <number | null> (null);
     const [finalAns, setFinalAns] = useState<boolean >(false);
     const [ansRight, setAnsRight] = useState<boolean | null>(null);
     const {score, setScore, qnSolved, setQnSolved} = useScore();
    //  console.log(score)

  // Handler for when a radio button (option) is changed
    const handleOptionChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(Number(event.target.value));
    console.log('Selected option:', event.target.value); // For demonstration
  };

  // Handler for the submit button (optional, for demonstration)
  const handleSubmit = () => {
    if (selectedOption) {
     const ans = selectedOption === correctAnsId ? true : false;
     setFinalAns(true);
     setAnsRight(ans);
     if(ans) {
      setScore(score+1);
     }
     setQnSolved(qnSolved + 1);
    }
  };
    return <div>
        <div className="flex items-center justify-center  p-4  bg-black">
      {/* Quiz card container */}
      <div className="max-w-md w-full bg-white p-4 md:p-6 rounded-xl shadow-4xl border border-gray-200">
        {/* Quiz Question */}
        <h2 className="text-md md:text-xl font-extrabold text-gray-800 mb-6 text-center">
          Q.{questionId} {question}
        </h2>

        {/* Quiz Options Container */}
        <div className="space-y-2">
          {options.map((op) => (
            <label htmlFor={`q${questionId}_option${op.id}`} key={op.option}  className={`cursor-pointer flex gap-8 border-2 rounded-md px-1 md:px-2 hover:border-blue-400`}>

              <div
                className={`
                   w-full p-2 md:p-4 border-2 border-gray-300 border-none flex items-center
                  transition-all duration-300 ease-in-out
                  hover:bg-gray-50 
                  ${selectedOption === op.id ? 'bg-blue-50 border-blue-500 text-blue-800 shadow-md' : 'text-gray-700'}
                `}
              >
                <span className="text-sm font-medium">{op.option}</span>
              </div>

              <input
                type="radio"
                name={`quiz_question_${questionId}`} // 'name' attribute groups radio buttons
                value={op.id?.toString()}
                id={`q${questionId}_option${op.id}`}
                className="accent-blue-600"
                checked={selectedOption === op.id} // Controlled component
                onChange={handleOptionChange}
              />
              
            </label>
          ))}
        </div>

        {/* Submit button */}
        <button
          onClick={handleSubmit}
          className="mt-8 w-full bg-blue-800 text-white py-3 px-6 rounded-lg font-semibold text-lg
                     hover:bg-blue-950 focus:outline-none focus:ring-4 focus:ring-blue-300
                     transition-all duration-300 ease-in-out shadow-md
                     disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!selectedOption || finalAns} // Disable if no option is selected
        >
          Submit Answer
        </button>
        {finalAns && <div className={`w-[90%] mx-auto text-center mt-4 p-3 z-40 ${ansRight ? 'bg-green-100 text-green-800 border border-green-300': 'bg-red-100 text-red-800 border border-red-300' }`}>

          {ansRight ? "Your answer is correct 🎉" : "Your answer is Incorrect"}

        </div> }

      </div>
    </div>
    </div>
}