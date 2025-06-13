
export default function Playground () {
    return <div className="p-4 w-full z-50  relative">
        
        <div className="fixed   md:w-[30%] md:h-[25%]  ml-[40%] mt-[60vh] mx-auto">
            <textarea className="resize-none w-full h-full rounded-md border-2 border-gray-400 pt-4 pl-2 text-md transition duration-200 ease-in-out
                                focus:border-blue-950 focus:outline-none text-gray-300 " placeholder="Give the topics...">

            </textarea>
            <button className="absolute bottom-2 right-2 bg-black  text-white px-3 py-1 text-sm rounded hover:bg-blue-700 transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
            </button>
            
        </div>

        <div className="flex flex-col justify-center items-center">
            
        </div>

    </div>
}