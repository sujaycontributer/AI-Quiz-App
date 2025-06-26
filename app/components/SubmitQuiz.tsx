
const SubmitQuiz = ({setSubmit}: {setSubmit: (value:boolean) => void}) => {
    return <div className="w-[30%] mx-auto h-15">
        <button className="w-full rounded-lg shadow-2xl cursor-pointer bg-white text-black items-center py-3 font-semibold hover:text-green-400" onClick={() => setSubmit(true)}>
            Submit the quiz
        </button>
    </div>
}
export default SubmitQuiz;