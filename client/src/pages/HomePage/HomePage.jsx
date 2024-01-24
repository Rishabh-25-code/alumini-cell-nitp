import { Link } from "react-router-dom";
import { FaQuoteLeft } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import Events from "./Events";
import Blogs from "./Blogs";
import Testimonials from "./Testimonials";
import QuickLinks from "../../components/QuickLinks/QuickLinks";
import ImageSlider from "./ImageSlider";
import NotableAlumniMarquee from "../../components/NotableAlumni/NotableAlumniMarquee";
import Meta from "../../components/Meta/Meta";
import Welcome from "../../components/Welcome/Welcome";
import Gallery from "./Gallery";
import Faq from "../../components/Faqs/Faq";

const HomePage = () => {

  return (
    <>
      <Meta name="Alumni Cell - NITP" />

        <ImageSlider />

        <Welcome />

        <QuickLinks />


        {/* Director section starts here */}
        <div className="grid bg-gray-900 text-white px-10 pt-20 pb-10 gap-6 text-center md:grid-cols-3 lg:gap-12">
          <div data-aos="fade-right">
            <h1 className="mb-2.5 lg:text-left md:text-left text-center text-sky-400 lg:text-5xl md:text-4xl text-4xl font-bold leading-tight">
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
          <div data-aos="zoom-in">
            <div className="m-auto my-12 flex justify-center items-center lg:h-80 h-64 lg:w-80 w-64 rounded-full overflow-hidden">
              <img
                src="/images/PKJ_Desk_Photo.jpg"
                className="shadow-lg h-full dark:shadow-black/30"
              />
            </div>
          </div>
          <div>
            <FaQuoteLeft data-aos="fade-up" size={38} className="text-sky-400 mb-6" />
            <h4 data-aos="fade-up" className="lg:text-2xl text-xl lg:text-left md:text-left text-justify font-semibold text-sky-500 pb-4">Celebrating <span className="text-pink-500">100 Years</span> of NIT, Patna</h4>
            <div className="mb-10 lg:text-left md:text-left text-justify">
              <p data-aos="fade-up">We are celebrating the 100 years of the glorious history of
                Engineering Education in Bihar, which started with the establishment
                of Bihar College of Engineering (BCE), Patna in 1924. </p>
              <p data-aos="fade-up">
                Since then, the Engineering Education has undergone a sea change
                and has been instrumental in the development of the Bihar region.
              </p>
            </div>

            <Link data-aos="fade-up" to="/history"><button
              type="button"
              style={{
                textDecoration: "none",
                textAlign: "left",
                display: "flex",
                alignItems: "start",
              }}
            >
              <p className="flex text-left items-center text-lg text-sky-400 hover:text-sky-600">READ MORE <BsArrowUpRight size={23} className="ml-1" /></p>
            </button></Link>
          </div>
        </div>

        {/* Events Section */}

        <Events />

        <NotableAlumniMarquee />

        {/* Blogs section starts here */}
        <Blogs />

        {/* Testimonials section starts here */}
        <Testimonials />

        <Gallery />

        <Faq/>
    </>
  );
};

export default HomePage;
