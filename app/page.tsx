import Link from "next/link";

export default function Home() {
  return (
    <div className="p-4 ">
     <div className="mt-26 md:text-3xl font-semibold text-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent">
        
          Welcome to QuizCraft AI!
          <p className="md:mt-1">
            Unleash your curiosity and challenge your knowledge With QuizCraft AI
          </p>

          <button className="bg-[#A9F36A] font-semibold text-sm rounded-sm m-5 p-2 text-gray-700 hover:cursor-pointer hover:text-black"><Link  href={"/playground"} >Let's play</Link></button>

     </div>
    </div>
  );
}
