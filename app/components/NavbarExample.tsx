import React from 'react';

// This is the main functional component for the entire page
export default function NavbarExample() {
  return (
    <div className="h-screen bg-black p-4">
      <Navbar />
      
      {/* Hero section content */}
      <div className="max-w-2xl mx-auto flex justify-center h-screen p-4">
        <span className="mt-[170px] text-4xl font-extrabold text-gray-100">
          Transform Your Photos
          <h1 className="text-center"> with <span className="bg-gradient-to-r from-violet-400 to-red-500 bg-clip-text text-transparent">AI Magic</span> </h1>
        </span>
      </div>

      {/* Placeholder content for scrolling */}
      <div className="h-screen bg-white flex justify-center">
        <h1 className="text-black">fdksfwk3io dcnjwee cjenwnwinciw</h1>
      </div>
    </div>
  );
}

// This is the Navbar functional component created from your HTML
const Navbar = () => {
  return (
    <div className="fixed top-3 left-1/2 -translate-x-1/2 flex justify-between items-center w-[95%] md:w-3/4 max-w-2xl py-4 px-6 rounded-xl z-50 bg-black/40 backdrop-blur-sm shadow-4xl h-[60px] border border-gray-800">
      {/* Brand/Logo Section */}
      <div>
        <h1 className="font-extrabold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">100xDevs</h1>
      </div>

      {/* Navigation Links Section */}
      <div className="flex gap-3 font-semibold text-gray-100">
        <a href="#" className="hover:text-gray-300 transition-colors">API</a>
        <a href="#" className="hover:text-gray-300 transition-colors">Documentation</a>
        <a href="#" className="hover:text-gray-300 transition-colors">Profile</a>
      </div>
    </div>
  );
};