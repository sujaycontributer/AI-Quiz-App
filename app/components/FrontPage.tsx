import Link from "next/link";

export default async function FrontPage(){
    return <div className="p-4 ">
     <div className="mt-26 font-sans md:text-3xl font-semibold text-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent">
        
          Welcome to QuizCraft AI!
          <p className="md:mt-1">
            Unleash your curiosity and challenge your knowledge With QuizCraft AI
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