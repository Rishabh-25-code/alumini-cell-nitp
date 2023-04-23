import "./HomePage.scss";
import { useRef, useEffect } from "react";
import homePageImg from "../../../public/images/homePageImg.jpg";
// import "tw-elements";
// import { Carousel, initTE, Ripple } from "tw-elements";

const HomePage = () => {
  document.title = "ALUMNI Cell NIT Patna | Home";
  // initTE({ Carousel, Ripple });

  return (
    <div className=" bg-black h-1/5">
      <div className="relative flex items-center justify-center w-full h-[100vh] overflow-hidden bg-black after:clear-both after:block after:content-['']">
        <div className="flex items-center justify-center h-full">
          {/* <video className="h-[100vh] w-full" autoPlay={true} loop={true} muted={true}>
            <source
              src="https://firebasestorage.googleapis.com/v0/b/nitp-alumni-cell.appspot.com/o/videos%2Felectric.mp4?alt=media&token=3aeb8b8b-5090-4c40-9087-188875adfe3b"
              type="video/mp4"
              className="h-[100vh] w-full"
            />
          </video> */}
          <div class="video-container">
            <video autoPlay={true} loop={true} muted={true}>
              <source src="https://firebasestorage.googleapis.com/v0/b/nitp-alumni-cell.appspot.com/o/videos%2FNITP%20Video.mp4?alt=media&token=29071eb1-2639-4781-8231-59c64b71f319" type="video/mp4" />
            </video>
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

      <div className="grid bg-black text-white p-20  gap-6 text-center md:grid-cols-3 lg:gap-12">
        <div className="mb-12 md:mb-0">
          <h1 className="mb-4 text-5xl font-semibold text-center md:text-left">
            From Director's Desk
          </h1>
          <h5 className="mb-4 text-2xl font-semibold text-center md:text-left">
            Prof. P. K. Jain
          </h5>
          <ul className="text-center md:text-left">
            <h6 className="mb-4 font-semibold text-primary dark:text-primary-500">
              Director of NIT Patna
            </h6>
            <h6 className="mb-4 font-semibold text-primary dark:text-primary-500">
            Field/ Area of Specialization: Electronics and Communication Engineering
            </h6>
            <h6 className="mb-4 font-semibold text-primary dark:text-primary-500">
              Dean - Alumni and Corporate Relations
            </h6>
            {/* <h6 className="mb-4 font-semibold text-primary dark:text-primary-500">
              
            </h6> */}
          </ul>
        </div>
        <div className="mb-12 md:mb-0">
          <div className="mb-12 flex justify-center ">
            <img
              src="https://raw.githubusercontent.com/Rajnishk4310/HealthXoxo/main/images/PKJ_Desk%20Photo.jpg"
              className="w-96 rounded-full shadow-lg dark:shadow-black/30"
            />
          </div>
        </div>
        <div className="mb-12 md:mb-0">
          <p className="mb-4 text-xl text-center md:text-left">
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
            through the DEAN ACR's office, inspires and invites these varied
            groups to continue supporting the aspirations of NIT Patna - an
            “Institute of Eminence.” We commit to using our donors' endowments
            with integrity towards enhancing the welfare of our students and
            faculty.
          </p>
          <button
            type="button"
            className="inline-block rounded bg-sky-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-100"
          >
            <a
              className="text-white decoration-none hover:text-white"
              href=""
            >
              READ MORE
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
