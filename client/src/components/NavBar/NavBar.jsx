import { Link } from "react-router-dom";
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { FiX } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import useAuth from "../../hooks/useAuth";

const NavBar = () => {
  const { user } = useAuth();
  const [menu, setMenu] = useState(false);
  const [popup, setPopup] = useState(-1);

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
          link: "/alumni-database?role=ug",
        },
        {
          name: "PG",
          link: "/alumni-database?role=pg",
        },
        {
          name: "Ph.D",
          link: "/alumni-database?role=phd",
        },
        {
          name: "Faculty/Staff",
          link: "/alumni-database?role=faculty-staff",
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
          name: "News",
          link: "/experiences",
        },
        {
          name: "Jobs via Alumni",
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
      name: "NITP Bihta Campus",
      link: "/bihtacampus",
    },
    {
      name: "Dashboard",
      link: "/dashboard",
    }
  ];

  return (
    <div className="relative">
      <nav
        className={`fixed w-[100%] items-center justify-center border-b bg-black transition-all delay-100 z-50  ease-in-out bg-opacity-50 backdrop-blur-sm border-gray-800 shadow-md`}
      >
        <div className="flex items-center justify-between w-full lg:px-10 md:w-[96%] px-4 md:px-3 py-3 m-auto text-lg">
          <div className="flex items-center">
            <Link to="/">
              <img
                src="logo.jfif"
                height={120}
                width={120}
                alt="logo"
                className="lg:h-14 h-12 lg:w-14 w-12 rounded-full"
              />
            </Link>
          </div>

          <div className="lg:flex gap-3.5 hidden items-center text-[0.92rem]">
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
                      onMouseLeave={() => setPopup(-1)}
                      style={{ textDecoration: "none" }}
                      className="flex items-center text-white hover:text-sky-400"
                    >
                      <p className="">{link.name}</p>
                      <MdKeyboardArrowDown className={`${popup === index && "mt-1 transition-all"}`} size={24} />
                    </button>

                    <div onMouseLeave={() => setPopup(-1)} onMouseOver={() => {
                      setPopup(index);
                    }}>
                      <div
                        className={`bg-gray-950 shadow-lg -ml-1 border border-gray-800 px-5 w-48 py-5 rounded-xl absolute flex-col  ${popup === index ? "flex" : "hidden"}`}>
                        <ul className="dropdown flex flex-col gap-1.5">
                          {
                            link.children.map((child, i) => (
                              <Link
                                onClick={() => setPopup(-1)}
                                style={{ textDecoration: "none" }}
                                to={child.link}
                                className="dropdown-link mb-2"
                                key={i + "child"}
                              >
                                <p className="text-gray-400 hover:text-blue-400 w-full">
                                  {child.name}
                                </p>
                              </Link>
                            ))
                          }
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              }
              else {
                return (
                  <Link key={index + "other"} style={{ textDecoration: "none" }} to={link.link}>
                    <p
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

          <div className="flex items-center gap-3">
            {
              user ?
                <Link to="/profile">
                  <img title="profile" src={`https://cloud.appwrite.io/v1/avatars/initials?name=${user.name.split(" ").join("+")}&width=80&height=80`} alt="profile" className="h-11 w-11 hover:scale-105 transition-all rounded-full" />
                </Link> :
                <Link to="/signin">
                  <button className="bg-sky-500 text-white shadow hover:bg-sky-600 text-sm w-fit px-6 py-2.5 rounded-xl">
                    SignIn
                  </button>
                </Link>
            }

            <button
              type="button"
              aria-label={menu ? "Close Menu" : "Open Menu"}
              onClick={() => {
                if (menu == false) {
                  setMenu(true);
                } else {
                  setMenu(false);
                }
              }}
              className="lg:hidden z-[100000] border focus:ring-[2.5px] focus:outline-none font-medium rounded-lg text-lg px-2.5 py-2.5 text-center items-center focus:ring-gray-400 bg-gray-800 border-gray-900 text-white hover:bg-gray-700 mr-2"
            >
              {!menu ? <HiMenuAlt3 /> : <FiX />}
            </button>
          </div>
        </div>
      </nav>


      <div className={`lg:hidden xl:hidden fixed flex flex-col items-start text-base px-7 py-2 justify-center gap-2 inset-0 w-full h-full z-[100] shadow-md text-white bg-gray-950 transition-all ease-in-out delay-150 ${menu ? "translate-x-0" : "translate-x-[100%]"}`}>
        <button
          type="button"
          aria-label={menu ? "Close Menu" : "Open Menu"}
          onClick={() => setMenu(!menu)}
          className="animate-pulse lg:hidden top-3 right-6 border focus:ring-[2.5px] focus:outline-none font-medium rounded-lg text-lg px-2.5 py-2.5 mt-2 text-center items-center focus:ring-gray-400 bg-gray-800 border-gray-900 text-white hover:bg-gray-700 absolute"
        >
          {!menu ? <HiMenuAlt3 /> : <FiX />}
        </button>
        {navLinks.map((link, index) => {
          if (link.children) {
            return (
              <div key={index} className="flex flex-col sm:gap-0 gap-1">
                <div className="text-sky-500">
                  {link.name}
                </div>
                <div>
                  {link.children.map((child, i) => (
                    <Link
                      style={{ textDecoration: "none" }}
                      to={child.link}
                      className="dropdown-link text-base"
                      key={i + "child"}
                      onClick={() => setMenu(!menu)}
                    >
                      <p className="text-gray-400 sm:py-0 py-0.5 hover:text-blue-400">
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
                onClick={() => setMenu(!menu)}
              >
                <p className="text-sky-500 hover:text-blue-400">
                  {link.name}
                </p>
              </Link>
            )
          }
        })}
      </div>
    </div>
  );
};

export default NavBar;
