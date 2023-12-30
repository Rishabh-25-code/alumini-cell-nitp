import "./HomePage.scss";
import { Link } from "react-router-dom";
import SliderNews from "../../components/SliderNews/SliderNews";
import { FaQuoteLeft } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import Events from "./Events";
import Blogs from "./Blogs";
import Testimonials from "./Testimonials";
import QuickLinks from "../../components/QuickLinks/QuickLinks";
import ImageSlider from "./ImageSlider";
import NotableAlumniMarquee from "../../components/NotableAlumni/NotableAlumniMarquee";

const HomePage = () => {
  document.title = "ALUMNI Cell NIT Patna | Home";

  return (
    <>
      <div className="h-1/5">

        <ImageSlider />

        <QuickLinks />

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
            <h4 className="lg:text-2xl text-xl lg:text-left md:text-left text-justify font-semibold text-sky-500 pb-4">Celebrating <span className="text-pink-500">100 Years</span> of NIT, Patna</h4>
            <p className="mb-10 lg:text-left md:text-left text-justify">
              We are celebrating the 100 years of the glorious history of
              Engineering Education in Bihar, which started with the establishment
              of Bihar College of Engineering (BCE), Patna in 1900. <br/><br/>
              Since then, the Engineering Education has undergone a sea change
              and has been instrumental in the development of the Bihar region. <br/>
            </p>

            <Link to="/history"><button
              type="button"
              className="flex items-center text-lg text-sky-400 hover:text-sky-600"
            >
              READ MORE <BsArrowUpRight size={23} className="ml-1" />
            </button></Link>
          </div>
        </div>

        {/* Events Section */}

        <Events />

        <NotableAlumniMarquee/>

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
      </div>
    </>
  );
};

export default HomePage;
