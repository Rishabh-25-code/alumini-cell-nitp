import "./HomePage.scss";
import { Link } from "react-router-dom";
import SliderNews from "../../components/SliderNews/SliderNews";
import { FaQuoteLeft } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import Events from "./Events";
import Blogs from "./Blogs";
import Testimonials from "./Testimonials";

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


        <h1 className="mb-2.5 mt-10 lg:ml-10 md:ml-10 p-5 lg:text-left md:text-left text-center text-sky-400 lg:text-5xl md:text-4xl text-4xl font-bold leading-tight">
          News & Announcement
        </h1>
        <div className="bg-black py-10">
          <div className="flex items-center justify-evenly">
            <div className="lg:w-[30rem] md:w-[24rem] lg:flex md:flex hidden"><img className="" src="/images/Alumni1.jpg" alt="not found" /></div>
            <div className="lg:w-[35rem] md:w-[28rem] w-[95%]"><SliderNews /></div>
          </div>
        </div>

        {/* Director section starts here */}

        <div className="grid bg-gray-900 text-white p-20 px-10 pt-10  gap-6 text-center md:grid-cols-3 lg:gap-12">
          <div className="mb-12 md:mb-0">
            <h1 className="mb-2.5 mt-10 lg:text-left md:text-left text-center text-sky-400 lg:text-5xl md:text-4xl text-4xl font-bold leading-tight">
              From Director's Desk
            </h1>
            <h5 className="text-3xl font-semibold text-center md:text-left mt-10">
              Prof. P. K. Jain
            </h5>
            <ul className="text-center md:text-left">
              <h6 className="mb-4 text-sky-400 font-semibold">
                Director of NIT Patna
              </h6>

              <h6 className="mb-4 font-medium">
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
            <FaQuoteLeft size={38} className="text-sky-400 mb-6" />
            <p className="mb-10 text-lg lg:text-left md:text-left text-justify">
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
              className="flex items-center text-lg text-sky-400 hover:text-sky-600"
            >
              READ MORE <BsArrowUpRight size={23} className="ml-1" />
            </button>
          </div>
        </div>

        {/* Events Section */}

        <Events />

        {/* Blogs section starts here */}
        <Blogs />

        {/* Testimonials section starts here */}
        <Testimonials />

        {/* Gallery section starts here */}
        <div className="p-10">
          <div className="p-2">
            <h1 className="mb-2.5 mt-10 lg:text-left md:text-left text-center text-sky-400 lg:text-5xl md:text-4xl text-4xl font-bold leading-tight">
              Gallery
            </h1>
          </div>

          <div className="columns-4  sm:columns-8 mx-3 mt-4 gap-5 bg-black  ">
            <div className="columns-1">
              <div className="overflow-hidden  rounded-2xl">
                <img
                  className="border-black max-w-full h-auto aspect-square hover:scale-125 duration-500 "
                  src="/images/pic2.jpg"
                />
              </div>
              <div className="my-6 overflow-hidden  rounded-2xl  ">
                <img
                  className="border-black w-full h-auto aspect-square hover:scale-125 duration-500  "
                  src="/images/pic1.jpg"
                />
              </div>
              <div className="my-6 overflow-hidden  rounded-2xl ">
                <img
                  className="border-black w-full  aspect-square  hover:scale-125 duration-500 "
                  src="/images/pic3.jpg"
                />
              </div>
              <div className="my-6 overflow-hidden  rounded-2xl ">
                <img
                  className="border-black w-full aspect-square hover:scale-125 duration-500 "
                  src="/images/pic8.jpg"
                />
              </div>
              <div className="my-6 overflow-hidden  rounded-2xl ">
                <img
                  className="border-black w-full aspect-square  hover:scale-125 duration-500 "
                  src="/images/pic6.jpg"
                />
              </div>
              <div className="my-6 overflow-hidden  rounded-2xl">
                <img
                  className="border-black w-full aspect-square  hover:scale-125 duration-500 "
                  src="/images/pic5.jpg"
                />
              </div>
              <div className="my-6 overflow-hidden  rounded-2xl ">
                <img
                  className="border-black max-w-full aspect-square  hover:scale-125 duration-500 "
                  src="/images/pic4.jpg"
                />
              </div>

              <Link to="/gallery" className="aspect-square p-2 max-w-full h-auto align-center border-2 border-dashed rounded-2xl border-sky-500 flex items-center justify-center bg-sky-950">
                <button
                  type="button"
                  className="text-lg font-medium text-sky-400 hover:scale-105"
                >
                  See All
                </button>
              </Link>

            </div>
          </div>
        </div>



        <div className='flex flex-col items-center justify-center gap-20 bg-opacity-20 backdrop-blur-0 rounded-[2rem] lg:w-[70%] w-[90%] m-auto mb-24 z-[1999999]'>
          <h3 data-aos="fade-up" className='text-center font-bold lg:text-5xl md:text-4xl text-3xl pt-20 text-sky-500 '>Become a Member</h3>
          <p className='lg:text-xl text-lg  font-medium text-center'>
            Register now and become a member of <br />Alumni Association of NIT Patna.
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
