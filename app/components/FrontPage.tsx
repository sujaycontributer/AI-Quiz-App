import Link from "next/link";

export default async function FrontPage(){
    return <div className="p-4 ">
     <div className="mt-26 font-sans md:text-3xl font-extrabold text-center text-gray-200">
        
          Welcome to <span className="bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400 bg-clip-text text-transparent">QuizCraft AI!</span>
          <p className="md:mt-1">
            Unleash your curiosity and challenge your knowledge With <span className="bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400 bg-clip-text text-transparent">QuizCraft AI</span>
          </p>

          <Link  href={"/playground"} >
          <button className="parent bg-gradient-to-b from-purple-500 via-green-500 to-red-500 z-20 text-transparent bg-clip-text shadow-[4px_12px_300px_20px_rgba(67,_230,_38,_0.67)] relative font-semibold  text-sm  rounded-4xl m-8 px-10 py-2 hover:cursor-pointer hover:text-white hover:-translate-y-[5px] transition-all ease-in-out delay-100">
            <div className="absolute top-2 mx-auto animate-ping bg-blue-500  h-[50%] w-[95px] rounded-full">
            </div>
              <div className="flex gap-3">
                  <span >Let's Play</span> <span className="child text-white z-10 transition-all delay-75"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span>

              </div>
          </button>
          </Link>

     </div>
     
    </div>
}