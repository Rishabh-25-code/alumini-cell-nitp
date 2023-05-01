import "./HomePage.scss";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { CiPaperplane } from "react-icons/ci";
import Newsletter from "../Newsletter/Newsletter";
import SliderNews from "../../components/SliderNews/SliderNews";

const HomePage = () => {
  document.title = "ALUMNI Cell NIT Patna | Home";

  return (
    <>
      <div className="bg-black h-1/5">
        <div className="relative flex items-center justify-center w-full h-[100vh] overflow-hidden bg-black after:clear-both after:block after:content-['']">
          <div className="flex items-center justify-center h-full">
            <div className="video-container">
              <video autoPlay={true} loop={true} muted={true}>
                <source
                  src="https://firebasestorage.googleapis.com/v0/b/nitp-alumni-cell.appspot.com/o/videos%2FNITP%20Video.mp4?alt=media&token=29071eb1-2639-4781-8231-59c64b71f319"
                  type="video/mp4"
                />
              </video>
              <div className="h-[100vh] w-full bg-black bg-opacity-50 absolute top-0"></div>
            </div>
            <div className="absolute inset-x-[15%] flex flex-col gap-3 items-center justify-center py-20 text-center text-white">
              <h5 className="lg:text-4xl md:text-3xl text-2xl font-bold font-serif">
                Connect. Give. Cherish.
              </h5>
              <p className="lg:text-7xl md:text-6xl text-5xl font-bold font-serif">
                WELCOME BACK
              </p>
            </div>
          </div>
        </div>

        <h1 className="mb-2.5 mt-10 text-5xl font-medium leading-tight">
          <span className="ml-5 text-center align-baseline lg:text-[0.95em] md:text-[0.75em] sm: text-[0.55em] font-bold leading-none text-primary-700 bg-black">
            News & Announcement
          </span>
        </h1>
        <div className="newsNotification">
          <div
            className="newsContainer"
            data-aos="fade-right"
            data-aos-offset="150"
          >
            <div className="newsSVG">
              <img
                className="imgSection"
                src="/images/Alumni1.jpg"
                alt="not found"
              />
            </div>
            <div>
              <SliderNews />
            </div>
          </div>

          <div className="newsPhoneView">
            <SliderNews />
          </div>
        </div>

        {/* Director section starts here */}
        <h1 className="mb-2.5 mt-10 text-5xl font-medium leading-tight">
          <span className="ml-5 text-center align-baseline lg:text-[0.95em] md:text-[0.75em] sm: text-[0.55em] font-bold leading-none text-primary-700 bg-black">
            From Director's Desk
          </span>
        </h1>
        <div className="grid bg-gray-900 text-white p-20  gap-6 text-center md:grid-cols-3 lg:gap-12">
          <div className="mb-12 md:mb-0">
            {/* <h1 className="mb-4 text-5xl font-semibold text-center md:text-left">
                  From Director's Desk
                </h1> */}
            <h5 className="mb-4 text-3xl font-semibold text-center md:text-left">
              Prof. P. K. Jain
            </h5>
            <ul className="text-center md:text-left">
              <h6 className="mb-4 font-semibold text-primary dark:text-primary-500">
                Director of NIT Patna
              </h6>

              <h6 className="mb-4 font-semibold text-primary dark:text-primary-500">
                Prof. Pradip K. Jain joined as a Lecturer of Electronics
                Engineering at Institute of Technology, Banaras Hindu University
                in 1981, and became Professor in the Year 2001. He has made
                significant contribution in the areas of analysis, modeling and
                development of high power microwave tubes and gyrotron devices.
              </h6>
            </ul>
          </div>
          <div className="mb-12 md:mb-0">
            <div className="mb-12 flex justify-center ">
              <img
                src="https://raw.githubusercontent.com/Rajnishk4310/HealthXoxo/main/images/PKJ_Desk%20Photo.jpg"
                // src={director}
                className="w-96 rounded-full shadow-lg dark:shadow-black/30"
              />
            </div>
          </div>
          <div className="mb-12 md:mb-0">
            <p className="mb-4 text-2xl text-center md:text-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="inline-block h-7 w-7 pr-2"
                viewBox="0 0 24 24"
              >
                <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
              </svg>
              Alumni, corporates and philanthropists have been generously
              contributing towards the development of NIT Patna. The Institute,
              through the DEAN ACR’s office, inspires and invites these varied
              groups to continue supporting the aspirations of NIT Patna - an
              “Institute of Eminence.” We commit to using our donors’ endowments
              with integrity towards enhancing the welfare of our students and
              faculty.
            </p>
            <a
            // href="https://drive.google.com/file/d/1Z4t3povLq2PqdWXaGeJ2g55ge9PbG_Jy/view?sz=w320"
            >
              <button
                type="button"
                className="inline-block rounded bg-gray-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-gray-400"
              >
                READ MORE
              </button>
            </a>
          </div>
        </div>

        {/* Gallery section starts here */}
        <div>
          <div>
            <h1 className="mb-2.5 mt-10 text-5xl font-medium leading-tight">
              <span className="ml-5 text-center align-baseline lg:text-[0.95em] md:text-[0.75em] sm: text-[0.55em] font-bold leading-none text-primary-700 bg-black">
                Gallery
              </span>
            </h1>
          </div>
          <div className="  columns-4  sm:columns-8 mx-3 mt-4 gap-5 bg-black  ">
            <div className="columns-1 ">
              <div className="overflow-hidden  ">
                <img
                  className="border-black rounded-3xl max-w-full h-auto aspect-square hover:scale-125 duration-500 p-2 "
                  src="/images/pic2.jpg"
                />
              </div>
              <div className="my-6 overflow-hidden  ">
                <img
                  className="border-black rounded-3xl w-full h-auto aspect-square hover:scale-125 duration-500 p-2  "
                  src="/images/pic1.jpg"
                />
              </div>
              <div className="my-6 overflow-hidden ">
                <img
                  className="border-black rounded-3xl w-full  aspect-square p-2 hover:scale-125 duration-500 "
                  src="/images/pic3.jpg"
                />
              </div>
              <div className="my-6 overflow-hidden ">
                <img
                  className="border-black rounded-3xl w-full aspect-square p-2 hover:scale-125 duration-500 "
                  src="/images/pic8.jpg"
                />
              </div>
              <div className="my-6 overflow-hidden ">
                <img
                  className="border-black rounded-3xl w-full aspect-square p-2 hover:scale-125 duration-500 "
                  src="/images/pic6.jpg"
                />
              </div>
              <div className="my-6  overflow-hidden">
                <img
                  className="border-black rounded-3xl w-full aspect-square p-2 hover:scale-125 duration-500 "
                  src="/images/pic5.jpg"
                />
              </div>
              <div className="my-6  overflow-hidden ">
                <img
                  className="border-black rounded-3xl max-w-full aspect-square p-2 hover:scale-125 duration-500 "
                  src="/images/pic4.jpg"
                />
              </div>
              <div className=" aspect-square sm:my-6 p-2 max-w-full h-auto flex align-center   ">
                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="  bg-gray-700 border border-black rounded-3xl px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  <a
                    className=" text-xs sm:text-lg text-white hover:font-bold"
                    href="/gallery"
                  >
                    See More
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-20 bg-opacity-20 backdrop-blur-0 rounded-[2rem] lg:w-[70%] w-[90%] m-auto mb-24 z-[1999999]">
          <h3
            data-aos="fade-up"
            className="text-center font-bold text-5xl pt-20 text-sky-500"
          >
            Become a Member
          </h3>
          <p className="text-lg font-medium text-center">
            Register now and become a member of <br />
            Alumni Association of NIT Patna.
          </p>
          <div>
            <Link to="/register">
              <button className="px-5 py-2.5 animate-bounce bg-sky-500 text-white text-lg font-medium hover:scale-105 transition-all delay-75 rounded-xl ease-in hover:bg-sky-600">
                Register Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
