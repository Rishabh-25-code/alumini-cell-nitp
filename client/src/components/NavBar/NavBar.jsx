import { Link } from "react-router-dom";
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { FiX } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const [focus, setFocus] = useState(-1);
  const [popup, setPopup] = useState(-1);
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
      name: "Gallery",
      link: "/gallery",
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
      name: "Blogs",
      link: "/blogs",
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
      className={`fixed z-10 w-[100%] items-center justify-center ${colorChange &&
        "border-b bg-gray-900 transition-all delay-100  ease-in-out bg-opacity-20 backdrop-blur-md border-gray-700 shadow-md"
        }`}
    >
      <div className="flex items-center justify-between lg:w-[65rem] md:w-[95%] px-4 md:px-3 py-4 m-auto text-lg">
        <div className="flex items-center">
          <Link to="/">
            <img src="/images/logo.svg" alt="logo" className="h-12" />
          </Link>
        </div>
        <div className="flex items-center">
          <ul className="md:flex gap-7 hidden items-center">
            <li>
              <Link style={{ textDecoration: "none" }} to="/about">
                <p
                  onClick={() => setFocus(0)}
                  className="text-white hover:text-blue-400"
                >
                  About
                </p>
              </Link>
            </li>

            <li>
              <Link style={{ textDecoration: "none" }} to="/team">
                <p
                  onClick={() => setFocus(0)}
                  className="text-white hover:text-blue-400"
                >
                  Team
                </p>
              </Link>
            </li>

            <li className="nav-link">
              <button onClick={() => setPopup(1)} onMouseOver={() => {
                if (popup > -1) {
                  setPopup(-1);
                } else {
                  setPopup(1);
                }
              }} style={{ textDecoration: "none" }} className="flex items-center gap-1">
                <p
                  className="text-white hover:text-blue-400">
                  Alumni Corner
                </p>
                <MdKeyboardArrowDown className={`${popup === 1 && "rotate-180 transition-all delay-75 ease-in text-blue-400"}`} size={24} />
              </button>

              <div onMouseLeave={() => {
                setPopup(-1);
              }} className={`bg-gray-900 shadow-lg bg-opacity-90 -ml-1 mt-2 border border-gray-800 px-5 w-48 py-5 rounded-xl absolute flex-col  ${popup === 1 ? 'flex' : "hidden"}`}>
                <ul className="dropdown flex flex-col gap-2">
                  <li className="dropdown-link mb-2">
                    <Link onClick={() => setPopup(-1)} style={{ textDecoration: "none" }} to="/alumnicorner">
                      <p className="text-gray-400 hover:text-blue-400">
                        Overview
                      </p>
                    </Link>
                  </li>
                  <li className="dropdown-link mb-2">
                    <Link onClick={() => setPopup(-1)} style={{ textDecoration: "none" }} to="/blogs">
                      <p className="text-gray-400 hover:text-blue-400">
                        Blogs
                      </p>
                    </Link>
                  </li>
                  <li className="dropdown-link mb-2">
                    <Link onClick={() => setPopup(-1)} style={{ textDecoration: "none" }} to="/news">
                      <p className="text-gray-400 hover:text-blue-400">
                        News
                      </p>
                    </Link>
                  </li>
                  <li className="dropdown-link mb-2">
                    <Link onClick={() => setPopup(-1)} style={{ textDecoration: "none" }} to="/gallery">
                      <p className="text-gray-400 hover:text-blue-400">
                        Gallery
                      </p>
                    </Link>
                  </li>
                  <li className="dropdown-link mb-2">
                    <Link onClick={() => setPopup(-1)} style={{ textDecoration: "none" }} to="/notablealumni">
                      <p className="text-gray-400 hover:text-blue-400">
                        Notable Alumni
                      </p>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="nav-link">
              <button onClick={() => setPopup(0)} onMouseOver={() => {
                if (popup > -1) {
                  setPopup(-1);
                } else {
                  setPopup(0);
                }
              }} style={{ textDecoration: "none" }} className="flex items-center gap-1">
                <p
                  className="text-white hover:text-blue-400">
                  Activities
                </p>
                <MdKeyboardArrowDown className={`${popup === 0 && "rotate-180 transition-all delay-75 ease-in text-blue-400"}`} size={24} />
              </button>

              <div onMouseLeave={() => {
                setPopup(-1);
              }} className={`bg-gray-900 bg-opacity-90 -ml-1 mt-2 border border-gray-800 px-5 w-48 py-5 rounded-xl absolute flex-col ${popup === 0 ? 'flex' : "hidden"}`}>
                <ul className="dropdown flex flex-col">
                  <li className="dropdown-link mb-2">
                    <Link onClick={() => setPopup(-1)} style={{ textDecoration: "none" }} to="/events">
                      <p className="text-gray-400 hover:text-blue-400">
                        Events
                      </p>
                    </Link>
                  </li>
                  <li className="dropdown-link mb-2">
                    <Link onClick={() => setPopup(-1)} style={{ textDecoration: "none" }} to="/interaction">
                      <p className="text-gray-400 hover:text-blue-400">
                        Interaction
                      </p>
                    </Link>
                  </li>
                  <li className="dropdown-link mb-2">
                    <Link onClick={() => setPopup(-1)} style={{ textDecoration: "none" }} to="/resources">
                      <p className="text-gray-400 hover:text-blue-400">
                        Resources
                      </p>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <Link style={{ textDecoration: "none" }} to="/donate">
                <p
                  className="text-white hover:text-blue-400" >
                  Donate
                </p>
              </Link>
            </li>

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
            className="animate-pulse md:hidden bg-blue-50 border focus:ring-[2.5px] focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-lg px-2.5 py-2.5 text-center items-center dark:focus:ring-gray-400 dark:bg-gray-800 border-gray-900 text-white hover:bg-gray-700 mr-2"
          >
            {!menu ? <HiMenuAlt3 /> : <FiX />}
          </button>

        </div>
      </div>
      {menu && (
        <div className="md:hidden fixed top-[4rem] right-0  rounded-xl w-[12rem] py-2 mr-5 shadow-md text-white bg-gray-900 border-gray-700 border">
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link style={{ textDecoration: "none" }} to={link.link}>
                  <button
                    className={`hover:underline hover:border-blue-300 dark:hover:border-blue-300  border-4 border-white dark:border-gray-900 py-1.5 w-[100%] pl-4 cursor-pointer hover:bg-gray-700  text-left`}
                    onClick={() => {
                      setMenu(false);
                    }}
                  >
                    {link.name}
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
