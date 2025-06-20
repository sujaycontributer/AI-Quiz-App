import CircularProgress from "../components/CircularProgress";

export default function Home() {
  return <div className="p-4 flex flex-col md:flex-row  gap-10 md:gap-4">
    <div className="flex gap-2">
      <div className="w-[180px] md:w-[250px] h-[100px] flex flex-col justify-center items-center  p-1 md:p-2 border-[1px] rounded-xl shadow-2xl border-gray-400">
      <div className=" text-gray-400 ">
        <div className=" p-2"><span className="p-1 text-sm md:text-xl text-green-400 font-extrabold">Total Quiz</span></div>
      </div>
      <div className="rounded-full text-white text-2xl font-bold ">
        100
      </div>
    </div>

    <div className="w-[180px] md:w-[250px] h-[100px] flex flex-col justify-center items-center  p-1 md:p-2 border-[1px] rounded-xl shadow-2xl border-gray-400">
      <div className=" text-gray-400 ">
        <div className=" p-2"><span className="p-1 text-sm md:text-xl text-green-400 font-extrabold">Questions solved</span></div>
      </div>
      <div className="rounded-full text-white text-2xl font-semibold ">
        100
      </div>
    </div>
    </div>
    <CircularProgress />

  </div>
}