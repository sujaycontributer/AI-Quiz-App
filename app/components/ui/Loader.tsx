
const Loader = () => {
    return  <div className="flex justify-center items-center h-20"> {/* Optional: Adjust height as needed */}
      <div
        className="
          border-4
          border-gray-300
          border-t-blue-500
          rounded-full
          w-10
          h-10
          animate-spinner {/* Apply the custom animation */}
        "
      ></div>
</div>
}

export default Loader;