import "./HomePage.scss";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import homePageImg from "../../../public/images/homePageImg.jpg";
import Heading from "../../components/Headings/Heading";
import pic1 from "../../../public/images/pic1.jpg";
import pic2 from "../../../public/images/pic2.jpg";
import pic3 from "../../../public/images/pic3.jpg";
import pic4 from "../../../public/images/pic4.jpg";
import pic5 from "../../../public/images/pic5.jpg";
import pic6 from "../../../public/images/pic6.jpg";
import pic7 from "../../../public/images/pic7.jpg";
import pic8 from "../../../public/images/pic8.jpg";
import director from "../../../public/images/PKJ_Desk Photo.jpg";
import {CiPaperplane} from  "react-icons/ci";

import { Carousel, initTE } from "tw-elements";
initTE({ Carousel });
// Initialization for ES Users
import { Ripple } from "tw-elements";

initTE({ Ripple });

const HomePage = () => {
  document.title = "ALUMNI Cell NIT Patna | Home";

  return (
    <>
      <div className=" pt-16">
        <div className="w-[100%] lg:py-[10rem] md:py-[10rem] py-[6rem] lg:gap-0 md:gap-0 gap-10 relative items-center flex lg:flex-row md:flex-row flex-col-reverse justify-evenly">
          <div className="">
            <h1 className="lg:text-4xl text-3xl font-semibold text-sky-500 py-5">
              ALUMNI Cell NIT Patna
            </h1>
            <h3 className="text-gray-500 font-medium text-xl pb-5">
              Official alumni page for NITP
            </h3>
            <p className="max-w-[19rem] text-gray-200 text-lg">
              The Alumni Association of NIT Patna is the central alumni body of
              the institute that brings together the alumni of NIT Patna(earlier
              Bihar College of enginering) and it is an independent registered
              body registered under the Society Registration Act.
            </p>
          </div>
          <div className="flex items-center lg:h-[24rem] md:h-[15rem] justify-center h-auto">
            <img
              className="lg:h-[24rem] md:h-[15rem] lg:w-auto md:w-auto w-[80%] mx-5"
              src={homePageImg}
            />
          </div>
        </div>
      </div>

      {/* Carousel starts here */}

      <div className="container-sm px-1">
        <div
          id="carouselExampleIndicators"
          className="relative "
          data-te-carousel-init
          data-te-carousel-slide
        >
          {/* <!--Carousel indicators--> */}

          <div
            className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
            data-te-carousel-indicators
          >
            <button
              type="button"
              data-te-target="#carouselExampleIndicators"
              data-te-slide-to="0"
              data-te-carousel-active
              className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-te-target="#carouselExampleIndicators"
              data-te-slide-to="1"
              className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-te-target="#carouselExampleIndicators"
              data-te-slide-to="2"
              className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
              aria-label="Slide 3"
            ></button>
          </div>

          {/* <!--Carousel items--> */}
          <div className="relative w-full  overflow-hidden after:clear-both after:block after:content-['']">
            {/* <!--First item--> */}
            <div
              className="relative  float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
              data-te-carousel-active
            >
              <img
                src={pic2}
                className="block w-full h-[80vh]"
                alt="Wild Landscape"
              />
            </div>
            {/* <!--Second item--> */}
            <div
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
            >
              <img src={pic5} className="block w-full h-[80vh]" alt="Camera" />
            </div>
            {/* <!--Third item--> */}
            <div
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
            >
              <img
                src={pic4}
                className="block w-full h-[80vh]"
                alt="Exotic Fruits"
              />
            </div>
          </div>

          {/* <!--Carousel controls - prev item--> */}
          <button
            className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button"
            data-te-target="#carouselExampleIndicators"
            data-te-slide="prev"
          >
            <span className="inline-block h-8 w-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Previous
            </span>
          </button>
          {/* <!--Carousel controls - next item--> */}
          <button
            className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button"
            data-te-target="#carouselExampleIndicators"
            data-te-slide="next"
          >
            <span className="inline-block h-8 w-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Next
            </span>
          </button>
        </div>
      </div>

      {/* News and Announcement section starts here */}
      <div className=" p-4  ">
        <div className="max-w-[1600px] my-4   sm:grid grid-cols-4  mx-auto">
          <div className="px-5 col-span-3 bg-red-400 rounded-[20px]">
            <div className="flex justify-between pb-2 ">
              <h1 className="text-black">News & Announcement</h1>
             <Link className="text-black no-underline hover:no-underline"> View All</Link>
            </div>

            <div className="px-5 py-8 overflow-y-auto max-h-[170px] scrollbar-hidden ">
            <div className="flex  ">
            <CiPaperplane className=""  />
               <p className="pl-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, fuga?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, nulla?  </p> 
                </div>
                <div className="flex">
            <CiPaperplane  />
               <p className="pl-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, fuga?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, odio? </p> 
                </div>
                <div className="flex">
            <CiPaperplane  />
               <p className="pl-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, fuga?Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, consectetur? </p> 
                </div>
                <div className="flex">
            <CiPaperplane  />
               <p className="pl-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, fuga?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, optio! </p> 
                </div>
                <div className="flex">
            <CiPaperplane  />
               <p className="pl-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, fuga?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, at. </p> 
                </div>
                <div className="flex">
            <CiPaperplane  />
               <p className="pl-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, fuga?Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, commodi! </p> 
                </div>
                <div className="flex">
            <CiPaperplane  />
               <p className="pl-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, fuga?Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, facilis! </p> 
                </div>
                <div className="flex">
            <CiPaperplane  />
               <p className="pl-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, fuga?Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, doloremque. </p> 
                </div>
                <div className="flex">
            <CiPaperplane  />
               <p className="pl-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, fuga?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolorem. </p> 
                </div>
            </div>
          </div>

          <div className=" sm:px-5 my-10 md:my-0 col-span-1 hover:scale-95 duration-1000   ">
            <div className="px-5">
              <h1 className="text-white">Become a Member</h1>
              <hr className="max-w-[25%] " />
            </div>

            <div className="py-4 px-12">
              <p>
                Register now and become a member of Alumni Association of NIT
                Patna.
              </p>
              <p className="py-3">Not registered yet?</p>
            </div>
            <div className="">
            <button className="bg-red-500 px-4 py-2 mx-[5em] mb-7 text-white rounded-full hover:bg-red-700 hover:scale-95 duration-1000 " type="button">
                  <Link
                    to="/register"
                    className=""
                  >
                    Register now
                  </Link>
                  
                </button> 
             
            </div>
          </div>
        </div>
      </div>

      {/* Gallery section starts here */}
      <div>
        <h1 className="mx-3 text-lg">Gallery</h1>
        <div class="  columns-4  sm:columns-8 mx-3 mt-4 gap-5 bg-black  ...">
          <div className="columns-1 ">
            <div className="overflow-hidden  ">
              <img
                class="max-w-full h-auto aspect-square hover:scale-125 duration-1000 p-2  ..."
                src={pic2}
              />
            </div>
            <div className="my-6 overflow-hidden  ">
              <img
                class="w-full h-auto aspect-square hover:scale-125 duration-1000 p-2  ..."
                src={pic1}
              />
            </div>
            <div className="my-6 overflow-hidden ">
              <img
                class="w-full  aspect-square p-2 hover:scale-125 duration-1000 ..."
                src={pic3}
              />
            </div>
            <div className="my-6 overflow-hidden ">
              <img
                class="w-full aspect-square p-2 hover:scale-125 duration-1000 ..."
                src={pic8}
              />
            </div>
            <div className="my-6 overflow-hidden ">
              <img
                class="w-full aspect-square p-2 hover:scale-125 duration-1000 ..."
                src={pic5}
              />
            </div>
            <div className="my-6  overflow-hidden">
              <img
                class="w-full aspect-square p-2 hover:scale-125 duration-1000 ..."
                src={pic7}
              />
            </div>
            <div className="my-6  overflow-hidden ">
              <img
                class="max-w-full aspect-square p-2 hover:scale-125 duration-1000 ..."
                src={pic4}
              />
            </div>
            <div className=" aspect-square sm:my-6 p-2 max-w-full h-auto flex align-center   ">
              <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="  bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                <a
                  className=" text-xs sm:text-lg text-black hover:font-bold"
                  href="/gallery"
                >
                  {" "}
                  See More{" "}
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>






     {/* Director message starts here  */}


       {/* <div className="bg-[#2699fb] p-4 ">
        <div className="max-w-[1240px] my-10  border border-black flex justify-between  mx-auto">
          <div className="border border-[blue] px-5 w-[20%] ">
            <div className=" ">
              <img src={director} alt="" className="rounded-xl" />
            </div>

           
          </div>

          <div className="border border-[green] w-[100%] px-5">
            <div className="">
              <h1>Become a Member</h1>
            </div>

            <div className="py-4">
              <p>
                Register now and become a member of Alumni Association of NIT
                Patna.
              </p>
              <p className="py-3">Not registered yet?</p>
            </div>
            <div className="">
            <button className="bg-red-500 px-4 py-2 mx-[5em] mb-7 text-white rounded-full" type="button">
                  <Link
                    to="/register"
                    className="text-white"
                  >
                    Register now
                  </Link>
                  
                </button> 
             
            </div>
          </div>
        </div>
      </div>  */}




    </>
  );
};

export default HomePage;
