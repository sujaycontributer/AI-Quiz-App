
import { redirect, usePathname } from "next/navigation";
import CircularProgress from "../components/CircularProgress";
import { useSession, signIn, signOut } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import axios from "axios";

export default async function Home() {
  const session = await getServerSession(authOptions);
  let data:any;

   if (!session) {
    redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/signin`);
  }

  if(session) {
        const userId = session.user?.id;
        const response:any = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/quiz/${userId}`);
        data = response.data.quizdata;
        
  }
   
  

  return <div className="p-4 flex flex-col md:flex-row gap-10 md:gap-4 md:max-w-2xl mx-auto">
    <div className="flex  gap-2">
      <div className="w-[180px] md:w-[250px] h-[100px] flex flex-col justify-center items-center  p-1 md:p-2 border-[1px] rounded-xl shadow-2xl border-gray-400">
      <div className=" text-gray-400 ">
        <div className=" p-2"><span className="p-1 text-sm md:text-xl text-green-400 font-extrabold">Total Quiz</span></div>
      </div>
      <div className="rounded-full text-white text-2xl font-bold ">
        {data.totalquiz}
      </div>
    </div>

    <div className="w-[180px] md:w-[250px] h-[100px] flex flex-col justify-center items-center  p-1 md:p-2 border-[1px] rounded-xl shadow-2xl border-gray-400">
      <div className=" text-gray-400 ">
        <div className=" p-2"><span className="p-1 text-sm md:text-xl text-green-400 font-extrabold">Questions solved</span></div>
      </div>
      <div className="rounded-full text-white text-2xl font-semibold ">
        {data.questionsSolved}
      </div>
    </div>
    </div>
    <CircularProgress  accuracy={data.accuracy}/>

  </div>
}