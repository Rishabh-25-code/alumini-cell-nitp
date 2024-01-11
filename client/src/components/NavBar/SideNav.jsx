import { FaUser, FaUserGraduate, FaPen, FaBug } from "react-icons/fa";
import { GiGiftOfKnowledge } from "react-icons/gi";
import { MdWork, MdFeedback, MdEngineering, MdSpaceDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";


const SideNav = () => {
  const [show, setShow] = useState(false);

  const links = [
    {
      name: "Dashboard",
      icon: <MdSpaceDashboard className="inline-block" />,
      path: "/dashboard",
    },
    {
      name: "Profile",
      icon: <FaUser className="inline-block" />,
      path: "/profile",
    },
    {
      name: "Alumni Profile",
      icon: <FaUserGraduate className="inline-block" />,
      path: "/alumni-profile",
    },
    {
      name: "Share Experience",
      icon: <GiGiftOfKnowledge className="inline-block" />,
      path: "/share-experience",
    },
    {
      name: "Write a Blog",
      icon: <FaPen className="inline-block" />,
      path: "/write-a-blog",
    },
    {
      name: "Post a Job",
      icon: <MdWork className="inline-block" />,
      path: "/post-a-job?tab=prev-posts",
    },
    {
      name: "Post an Internship",
      icon: <MdEngineering className="inline-block" />,
      path: "/post-an-internship",
    },
    {
      name: "Give Testimonial",
      icon: <MdFeedback className="inline-block" />,
      path: "/give-testimonial",
    },
    {
      name: "Report a Bug",
      icon: <FaBug className="inline-block" />,
      path: "/report-bug",
    }
  ]


  return (
    <div className={`border-r z-20 lg:sticky md:relative transition-all top-0 fixed bg-gray-900 border-b border-gray-800 px-3 py-5 lg:flex md:flex flex-col gap-2 items-start w-[16rem] h-screen pt-24 ${show ? null : "lg:left-0 md:left-0 lg:translate-x-0 md:translate-x-0 translate-x-[-100%]"}`}>
      <button onClick={() => setShow(!show)} className="bg-gray-900 absolute lg:hidden md:hidden top-[9rem] animate-pulse -right-9 px-2 pl-4 py-2.5 rounded-xl border border-gray-700">
        {
          show ?
            <IoIosArrowBack className="text-gray-300 text-2xl" />
            :
            <IoIosArrowForward className="text-gray-300 text-2xl" />
        }
      </button>
      <h2 className="font-bold text-sky-500 text-xl px-4 py-2">Welcome User!</h2>
      <div className="flex flex-col lg:gap-1 gap-3 sm:gap-4">
        {
          links.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className="w-full rounded-xl"
            >
              {({ isActive }) => (
                <button onClick={() => setShow(false)} className={`text-gray-300 w-full flex items-center gap-3 font-medium text-start px-4 py-2 rounded-xl ${isActive ? "bg-sky-500 text-gray-900 rounded-xl" : "hover:bg-gray-700"}`}>
                  {link.icon} {link.name}
                </button>
              )}
            </NavLink>
          ))
        }
      </div>
    </div>
  )
}

export default SideNav