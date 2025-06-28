// components/Playground.tsx
"use client";
import { useState } from "react";
import Quiz, { quizProps } from "./Quiz";
import axios from "axios";
import Loader from "./ui/Loader";
import FinalScore from "./FinalScore";
import SubmitQuiz from "./SubmitQuiz";
import { useScore } from "./ScoreProvider";

export default function Playground() {
  const [quiz, setQuiz] = useState<quizProps[]>([]);
  const [topic, setTopic] = useState("");
  const [searchOpen, setSearchOpen] = useState(true);
  const [loader, setLoader] = useState(false);
  const [submit, setSubmit] = useState(false);

  const { score, setScore, qnSolved, setQnSolved } = useScore();

  const topicHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTopic(e.target.value);
  };

  const handleSubmit = async () => {
    setLoader(true);
    try {
      const response = await axios.post("/api/v1/search", { topic });
      setQuiz((response.data as any).data);
      setSearchOpen(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  if (loader)
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loader />
      </div>
    );

  return (
    <div className="p-4 w-full relative z-30">
      {/* Topic Box */}
      <div
        className={`${
          searchOpen ? "block" : "hidden"
        } shadow-md fixed left-1/2 -translate-x-1/2 z-50 w-[300px] h-[100px] md:w-[30%] md:h-[25%] mt-[60vh] bg-gray-500 rounded-md`}
      >
        <textarea
          className="resize-none w-full h-full rounded-md md:border-[1px] border-gray-400 pt-4 pl-2 text-md focus:border-blue-950 focus:outline-none text-white"
          placeholder="Give the topics..."
          onChange={topicHandler}
        />
        <button
          className="absolute bottom-0.5 right-1 md:bottom-2 md:right-2 bg-black text-white px-1 py-0.5 md:px-3 md:py-1 text-sm rounded hover:bg-blue-700 transition"
          onClick={handleSubmit}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            />
          </svg>
        </button>
      </div>

      {/* Quiz */}
      {quiz.length > 0 && (
        <div className="flex flex-col gap-2">
          {quiz.map((q) => (
            <Quiz key={q.questionId} {...q} />
          ))}
        </div>
      )}

      {/* Submit + Score */}
      {submit && <div className="fixed inset-0 z-50 bg-black/60 blur-4xl"></div>}
      {quiz.length > 0 && !submit && <SubmitQuiz setSubmit={setSubmit} />}
      {submit && <FinalScore score={score} setSubmit={setSubmit} questionsolved={qnSolved} submit={submit} />}
    </div>
  );
}
