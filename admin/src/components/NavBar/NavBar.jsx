import { Link } from "react-router-dom";
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { FiX } from "react-icons/fi";
import useAuth from "../../hooks/useAuth";


const NavBar = () => {
    const { user } = useAuth();
    const [menu, setMenu] = useState(false);
    const navLinks = [
        {
            name: "Home",
            path: "/",
            id: 0,
        },
        {
            name: "Blogs",
            path: "/blogs",
            id: 1,
        },
        {
            name: "Experiences",
            path: "/experiences",
            id: 2,
        },
        {
            name: "Jobs",
            path: "/jobs",
            id: 3,
        },
        {
            name: "Internships",
            path: "/internships",
            id: 4,
        },
        {
            name: "Alumni",
            path: "/alumnis",
            id: 5,
        },
        {
            name: "Events",
            path: "/events",
            id: 2,
        },
        {
            name: "Notable Alumni",
            path: "/notable-alumni",
            id: 2,
        },
        {
            name: "Gallery",
            path: "/gallery",
            id: 3,
        },
    ]

    return (
        <>
            <nav
                className={`fixed w-[100%] items-center justify-center border-b bg-black transition-all delay-100 z-50  ease-in-out bg-opacity-50 backdrop-blur-sm border-gray-800 shadow-md`}
            >
                <div className="flex items-center justify-between lg:w-full lg:px-5 md:w-[96%] px-4 md:px-3 lg:py-3 py-2.5 m-auto text-lg">
                    <div className="flex items-center">
                        <Link to="/">
                            <img src="/images/logo512.png" height={120} width={120} alt="logo" className="lg:h-14 h-12 lg:w-14 w-12 rounded-full" />
                        </Link>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="lg:flex gap-5 hidden items-center text-[0.92rem]">
                            {navLinks.map((link, index) => (
                                <Link key={link.name} style={{ textDecoration: "none" }} to={link.path}>
                                    <p
                                        className="text-white hover:text-blue-400"
                                    >
                                        {link.name}
                                    </p>
                                </Link>
                            ))}
                        </div>


                        <div className="flex items-center gap-3">
                            {
                                user ?
                                    <Link to="/profile">
                                        <button>
                                            <img className="h-11 w-11 rounded-full" src={`https://cloud.appwrite.io/v1/avatars/initials?name=${user.name.split(" ").join("+")}&width=80&height=80`} alt={user.name} />
                                        </button>
                                    </Link>
                                    :
                                    <Link to="/signin">
                                        <button className="bg-sky-500 text-white shadow hover:bg-sky-600 text-sm w-fit px-6 py-2.5 rounded-xl">
                                            SignIn
                                        </button>
                                    </Link>
                            }

                            <button
                                type="button"
                                onClick={() => {
                                    if (menu == false) {
                                        setMenu(true);
                                    } else {
                                        setMenu(false);
                                    }
                                }}
                                className="animate-pulse lg:hidden bg-blue-50 z-[100000] border focus:ring-[2.5px] focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-lg px-2.5 py-2.5 text-center items-center dark:focus:ring-gray-400 dark:bg-gray-800 border-gray-900 text-white hover:bg-gray-700 mr-2"
                            >
                                {!menu ? <HiMenuAlt3 /> : <FiX />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            {menu && (
                <div className="lg:hidden xl:hidden fixed flex flex-col items-start text-base px-7 py-2 justify-center gap-2 inset-0 w-full h-full z-[100] shadow-md text-white bg-black">
                    <button
                        type="button"
                        onClick={() => setMenu(!menu)}
                        className="animate-pulse lg:hidden bg-blue-50 top-3 right-6 border focus:ring-[2.5px] focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-lg px-2.5 py-2.5 mt-2 text-center items-center dark:focus:ring-gray-400 dark:bg-gray-800 border-gray-900 text-white hover:bg-gray-700 absolute"
                    >
                        {!menu ? <HiMenuAlt3 /> : <FiX />}
                    </button>
                    {navLinks.map((link) => (
                        <Link
                            style={{ textDecoration: "none" }}
                            to={link.path}
                            className="dropdown-link mb-2"
                            key={link.name}
                            onClick={() => setMenu(!menu)}
                        >
                            <p className="text-sky-500 text-lg font-medium hover:text-white">
                                {link.name}
                            </p>
                        </Link>
                    ))}
                </div>

            )}

        </>
    )
}

export default NavBar;