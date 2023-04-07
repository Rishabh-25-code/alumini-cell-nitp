import { Link } from "react-router-dom";
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { FiX } from "react-icons/fi";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const [focus, setFocus] = useState(-1);
  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 0) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);

  const navLinks = [
    
    {
      name: "About",
      link: "/About",
    },
    {
      name: "Notable-Alumni",
      link: "/notablealumni",
    },
    {
      name: "Alumni-Corner",
      link: "/alumnicorner",
    },
    {
      name: "Interaction",
      link: "/interaction",
    },
    {
      name: "Donate",
      link: "/donate",
    },
    {
      name: "Events",
      link: "/Events",
    },
    {
      name: "Resources",
      link: "/resources",
    },
    
    {
      name: "Team",
      link: "/Team",
    },
  ];

  return (
    <div
      className={`fixed z-10 w-[100%] items-center justify-center ${
        colorChange &&
        "border-b bg-gray-700 transition-all delay-100  ease-in-out bg-opacity-20 backdrop-blur-md border-gray-700 shadow-md"
      }`}
    >
      <div className="flex items-center justify-between lg:w-[75rem] md:w-[100%] px-4 md:px-3 py-5 m-auto text-lg">
        <div className="flex items-center">
          <Link to="/">
            <img src="/images/logo.svg" alt="logo" className="h-12" />
          </Link>
        </div>
        <div className="flex items-center">
          <ul className="md:flex gap-7 hidden items-center">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link style={{ textDecoration: "none" }} to={link.link}>
                  <p
                    onClick={() => setFocus(index)}
                    className={`text-blue-400 hover:text-blue-600 ${
                      index === focus && "text-white"
                    }`}
                  >
                    {link.name}
                  </p>
                </Link>
              </li>
            ))}

            {/* <li>
              <Link style={{ textDecoration: "none" }} to="/events">
                <p className="text-blue-400 hover:text-white">Events</p>
              </Link>
                  </li> */}
          </ul>

          <button
            type="button"
            onClick={() => {
              if (menu == false) {
                setMenu(true);
              } else {
                setMenu(false);
              }
            }}
            className="animate-pulse md:hidden text-gray-900 bg-blue-50 hover:bg-blue-50 border border-gray-200 focus:ring-[2.5px] focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-lg px-2.5 py-2.5 text-center items-center dark:focus:ring-gray-400 dark:bg-gray-800 dark:border-gray-900 dark:text-white dark:hover:bg-gray-700 mr-2"
          >
            {!menu ? <HiMenuAlt3 /> : <FiX />}
          </button>
        </div>
      </div>
      {menu && (
        <div className="md:hidden fixed top-[4rem] right-0 bg-white rounded-xl w-[12rem] py-2 mr-5 shadow-md text-gray-800 dark:text-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 border">
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link style={{ textDecoration: "none" }} to={link.link}>
                  <button
                    className={`hover:underline hover:border-blue-300 dark:hover:border-blue-300  border-4 border-white dark:border-gray-900 py-1.5 w-[100%] pl-4 cursor-pointer hover:bg-blue-50 dark:hover:bg-gray-400 text-left`}
                    onclick={() => {
                      setMenu(false);
                    }}
                  >
                    {link.name}
                  </button>
                </Link>
              </li>
            ))}
            {/* <li>
              <Link style={{ textDecoration: "none" }} to="/">
                <button
                  onClick={() => {
                    setMenu(false);
                  }}
                  className="hover:underline hover:border-blue-300 dark:hover:border-blue-300  border-4 border-white dark:border-gray-900 py-1.5 w-[100%] pl-4 cursor-pointer hover:bg-blue-50 dark:hover:bg-gray-400 text-left"
                >
                  Home
                </button>
              </Link>
            </li>*/}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
