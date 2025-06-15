"use client"
import { useState } from "react";

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
     const [selectedOption, setSelectedOption] = useState(0);

  // Define the quiz question and options
  // const quizData = {
  //   question: "What is the capital of Japan?",
  //   options: [
  //     { id: 'tokyo', value: 'tokyo', text: 'Tokyo' },
  //     { id: 'seoul', value: 'seoul', text: 'Seoul' },
  //     { id: 'beijing', value: 'beijing', text: 'Beijing' },
  //     { id: 'bangkok', value: 'bangkok', text: 'Bangkok' },
  //   ],
  //   correctAnswer: 'tokyo', // In a real app, this would be handled on the backend
  // };

  // Handler for when a radio button (option) is changed
  const handleOptionChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(Number(event.target.value));
    console.log('Selected option:', event.target.value); // For demonstration
  };

  // Handler for the submit button (optional, for demonstration)
  const handleSubmit = () => {
    if (selectedOption) {
      const isCorrect = selectedOption === correctAnsId;
      alert(`Your answer "${selectedOption}" is ${isCorrect ? 'Correct!' : 'Incorrect.'}`);
    } else {
      alert('Please select an option first!');
    }
  };
    return <div>
        <div className="flex items-center justify-center  p-4 bg-black">
      {/* Quiz card container */}
      <div className="max-w-md w-full bg-white p-6 rounded-xl shadow-2xl border border-gray-200">
        {/* Quiz Question */}
        <h2 className="text-xl font-extrabold text-gray-800 mb-6 text-center">
          Q.{questionId} {question}
        </h2>

        {/* Quiz Options Container */}
        <div className="space-y-2">
          {options.map((op) => (
            <label key={op.id} className={`cursor-pointer flex gap-8 border-2 rounded-md px-1 md:px-2 hover:border-blue-400`}>

              <div
                className={`
                   w-full p-2 md:p-4 border-2 border-gray-300 border-none flex items-center
                  transition-all duration-300 ease-in-out
                  hover:bg-gray-50 
                  ${selectedOption === op.id ? 'bg-blue-50 border-blue-500 text-blue-800 shadow-md' : 'text-gray-700'}
                `}
              >
                <span className="text-lg font-medium">{op.option}</span>
              </div>

              <input
                type="radio"
                name="quiz_question" // 'name' attribute groups radio buttons
                value={op.id}
                id={op.option}
                className=""
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
          disabled={!selectedOption} // Disable if no option is selected
        >
          Submit Answer
        </button>
      </div>
    </div>
    </div>
}