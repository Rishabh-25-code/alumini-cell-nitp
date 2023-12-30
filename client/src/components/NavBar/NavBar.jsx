import { Link } from "react-router-dom";
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { FiX } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const [focus, setFocus] = useState(-1);
  const [popup, setPopup] = useState(-1);
  const [colorChange, setColorchange] = useState(true);

  const changeNavbarColor = () => {
    // if (window.scrollY >= 0) {
    //   setColorchange(true);
    // } else {
    //   setColorchange(false);
    // }
  };

  window.addEventListener("scroll", changeNavbarColor);

  const navLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About NITP",
      children: [
        {
          name: "About NITP",
          link: "/about",
        },
        {
          name: "History of NITP",
          link: "/history",
        },
        {
          name: "Notable Alumni",
          link: "/notableAlumni",
        },
        {
          name: "Gallery",
          link: "/gallery",
        }
      ]
    },
    {
      name: "Alumni Database",
      children: [
        {
          name: "UG",
          link: "/alumni-database?type=ug",
        },
        {
          name: "PG",
          link: "/alumni-database?type=pg",
        },
        {
          name: "Ph.D",
          link: "/alumni-database?type=phd",
        },
        {
          name: "Faculty/Staff",
          link: "/alumni-database?type=faculty-staff",
        },
      ]
    },
    {
      name: "Alumni Speaks",
      children: [
        {
          name: "Blogs",
          link: "/blogs",
        },
        {
          name: "Alumni News",
          link: "/news",
        },
        {
          name: "Job Openings from Alumni",
          link: "/jobs",
        },
        {
          name: "Internship via Alumni",
          link: "/internships",
        },
      ]
    },
    {
      name: "Alumni Meets",
      children: [
        {
          name: "Next Alumni Meet",
          link: "/alumni-meet",
        },
        {
          name: "Previous Meets",
          link: "/prev-alumni-meets",
        },
      ]
    },
    {
      name: "NIT Patna Bihta Campus",
      link: "/bihtacampus",
    },
    {
      name: "Contribute",
      link: "/contribute",
    }
  ];

  return (
    <>
      <nav
        className={`fixed w-[100%] items-center justify-center ${colorChange &&
          "border-b bg-black transition-all delay-100 z-10  ease-in-out bg-opacity-50 backdrop-blur-sm border-gray-800 shadow-md"
          }`}
      >
        <div className="flex items-center justify-between lg:w-[65rem] md:w-[95%] px-4 md:px-3 py-3 m-auto text-lg">
          <div className="flex items-center">
            <Link to="/">
              <img
                src="logo.jfif"
                height={120}
                width={120}
                alt="logo"
                className="h-[3.4rem] w-[3.4rem] rounded-full"
              />
            </Link>
          </div>

          <div className="md:flex gap-7 hidden items-center text-[0.92rem]">
            {navLinks.map((link, index) => {
              if (link.children) {
                return (
                  <div key={index} className="nav-link">
                    <button
                      onClick={() => setPopup(index)}
                      onMouseOver={() => {
                        if (popup > -1) {
                          setPopup(-1);
                        } else {
                          setPopup(index);
                        }
                      }}
                      style={{ textDecoration: "none" }}
                      className="flex items-center gap-1"
                    >
                      <p className="text-white hover:text-blue-400">{link.name}</p>
                      <MdKeyboardArrowDown className={`${popup === index && "rotate-180 transition-all delay-75 ease-in text-blue-400"}`} size={24} />
                    </button>

                    <div onMouseLeave={() => setPopup(-1)}
                      className={`bg-gray-950 shadow-lg -ml-1 mt-2 border border-gray-800 px-5 w-48 py-5 rounded-xl absolute flex-col  ${popup === index ? "flex" : "hidden"}`}>
                      <ul className="dropdown flex flex-col gap-2">
                        {
                          link.children.map((child, i) => (
                            <Link
                              onClick={() => setPopup(-1)}
                              style={{ textDecoration: "none" }}
                              to={child.link}
                              className="dropdown-link mb-2"
                              key={i}
                            >
                              <p className="text-gray-400 hover:text-blue-400">
                                {child.name}
                              </p>
                            </Link>
                          ))
                        }
                      </ul>
                    </div>
                  </div>
                )
              }
              else {
                return (
                  <Link key={index} style={{ textDecoration: "none" }} to={link.link}>
                    <p
                      onClick={() => setFocus(index)}
                      className="text-white hover:text-blue-400"
                    >
                      {link.name}
                    </p>
                  </Link>
                )
              }
            })
            }
          </div>

          <button
            type="button"
            onClick={() => {
              if (menu == false) {
                setMenu(true);
              } else {
                setMenu(false);
              }
            }}
            className="animate-pulse md:hidden bg-blue-50 z-[100000] border focus:ring-[2.5px] focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-lg px-2.5 py-2.5 text-center items-center dark:focus:ring-gray-400 dark:bg-gray-800 border-gray-900 text-white hover:bg-gray-700 mr-2"
          >
            {!menu ? <HiMenuAlt3 /> : <FiX />}
          </button>
        </div>
      </nav>

      {menu && (
        <div className="md:hidden lg:hidden xl:hidden fixed flex flex-col items-start text-base px-7 py-2 justify-center gap-2 inset-0 w-full h-full z-[100] shadow-md text-white bg-gray-950">
          <button
            type="button"
            onClick={() => {
              if (menu == false) {
                setMenu(true);
              } else {
                setMenu(false);
              }
            }}
            className="animate-pulse md:hidden bg-blue-50 top-3 right-6 border focus:ring-[2.5px] focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-lg px-2.5 py-2.5 mt-2 text-center items-center dark:focus:ring-gray-400 dark:bg-gray-800 border-gray-900 text-white hover:bg-gray-700 absolute"
          >
            {!menu ? <HiMenuAlt3 /> : <FiX />}
          </button>
          {navLinks.map((link, index) => {
            if (link.children) {
              return (
                <div className="flex flex-col gap-1">
                  <div className="text-sky-500">
                    {link.name}
                  </div>
                  <div>
                    {link.children.map((child, i) => (
                      <Link
                        style={{ textDecoration: "none" }}
                        to={child.link}
                        className="dropdown-link mb-2 text-base"
                        key={i}
                      >
                        <p className="text-gray-400 hover:text-blue-400">
                          {child.name}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )
            } else {
              return (
                <Link
                  style={{ textDecoration: "none" }}
                  to={link.link}
                  className="dropdown-link mb-2"
                  key={index}
                >
                  <p className="text-sky-500 hover:text-blue-400">
                    {link.name}
                  </p>
                </Link>
              )
            }
          })}
        </div>
      )}
    </>
  );
};

export default NavBar;
