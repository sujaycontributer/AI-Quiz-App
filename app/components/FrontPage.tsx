import Link from "next/link";

export default async function FrontPage(){
    return <div className="p-4 ">
     <div className="mt-26 font-sans md:text-3xl font-extrabold text-center text-gray-200">
        
          Welcome to <span className="bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400 bg-clip-text text-transparent">QuizCraft AI!</span>
          <p className="md:mt-1">
            Unleash your curiosity and challenge your knowledge With <span className="bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400 bg-clip-text text-transparent">QuizCraft AI</span>
          </p>

          <Link  href={"/playground"} >
          <button className="bg-gradient-to-b from-purple-500 via-green-500 to-red-500 z-20 text-transparent bg-clip-text shadow-[4px_12px_300px_20px_rgba(67,_230,_38,_0.67)]  relative font-semibold  text-sm  rounded-sm m-8 px-10 py-2 hover:cursor-pointer hover:text-white">
            <div className="absolute top-2 animate-ping bg-blue-500  h-[50%] w-[70px] rounded-full">
            </div>
            
              Let's play
          </button>
          </Link>

     </div>
     
    </div>
}