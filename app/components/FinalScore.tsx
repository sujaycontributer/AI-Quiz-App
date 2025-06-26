
export default function FinalScore ({score, accuracy}: {score: number, accuracy: number}) {
    return <div className="w-full h-[40%]   p-4 rounded-md shadow-2xl z-50 flex justify-center items-center bg-gray-200 text-black border border-dashed border-neutral-200">
        <div className="flex flex-col gap-2 ">
                <h1 className="font-extrabold text-xl text-green-600">Quiz Submitted!</h1>
                <span className="font-semibold">Your Score: {score} / 15 ✅ </span> 
                <span className="font-semibold">Accuracy: {accuracy} </span> 
                <button className="w-40 mt-4 px-4 py-2 bg-gray-300 rounded-md cursor-pointer text-black hover:text-gray-200 hover:bg-gray-400 transition duration-200 ease-in-out">Save your score</button>

        </div>
    </div>
}