import React from "react";
import { Link } from "react-router-dom";
const HomePage = () => {
  document.title = "Admin login | Alumni Portal";
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="">
        <h1 className="lg:text-8xl md:text-7xl text-6xl font-bold text-center bg-gradient-to-r from-gray-200 via-gray-500 to-gray-900 bg-clip-text text-transparent animate-pulse">
          Admin Portal
        </h1>

        <div className="pt-10 flex items-center justify-center m-auto ">
          <Link to="/login">
            <button className="bg-gray-400 hover:bg-gray-700 text-white text-2xl font-bold py-3 px-7 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              Log in
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
