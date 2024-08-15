import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Activities from "./Activities";


const HomePage = () => {
  document.title = "Admin login | Alumni Portal";
  const { user, handleLogout } = useAuth();

  return (
    <div className="flex justify-center items-center pt-24 w-full">
      <div className="mt-5 w-full">
        <h2 className="text-sky-500 text-center md:text-4xl text-3xl font-bold">
          Welcome to
        </h2>
        <h1 className="lg:text-6xl md:text-5xl text-4xl font-bold text-center bg-gradient-to-r from-sky-400 via-pink-500 to-gray-600 bg-clip-text text-transparent">
          Admin Portal
        </h1>

        <p className="text-center pt-5 flex items-center flex-col gap-5">
          <span className="text-xl text-gray-300 font-medium">
            {user ? `You are logged in as : ${user.name}` : "Please login/register to continue"}
          </span>

          {!user ?
            <button className="bg-sky-600 hover:bg-sky-700 active:bg-gray-500 text--white px-8 py-2.5 rounded-full" onClick={handleLogout}>
              <Link to="/signin">
                Log In
              </Link>
            </button>
            :
            ""
          }

        </p>

        {!user ? <div className="pt-10 flex items-center justify-center m-auto ">
          <Link to="/signup">
            <button className="bg-gray-400 hover:bg-gray-700 text-white text-2xl font-bold py-3 px-7 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              Register
            </button>
          </Link>
        </div>
          :
          <Activities />
        }
      </div>
    </div >
  );
};
export default HomePage;
