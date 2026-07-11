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
      <div className="page-shell">
      <div className="surface-card grid text-slate-800 px-6 md:px-10 pt-12 pb-10 gap-8 text-center md:grid-cols-3 lg:gap-12 rounded-3xl">
        <div data-aos="fade-right">
          <h1 className="mb-1 lg:text-left md:text-left text-center text-sky-800 lg:text-4xl md:text-3xl text-3xl font-bold leading-tight">
            From Director's Desk
          </h1>
          <h5 className="text-3xl font-semibold text-center md:text-left mt-10 text-slate-950">
            Prof. P. K. Jain
          </h5>
          <ul className="text-center md:text-left">
            <h6 className="mb-4 text-sky-700 font-semibold">
              Director of NIT Patna
            </h6>

            <h6 className="mb-4 font-medium text-slate-600 leading-7">
              Prof. Pradip K. Jain joined as a Lecturer of Electronics Engineering at BHU's Institute of Technology in 1981, becoming a Professor in 2001. Currently, he serves as Director of the NIT, Patna.
            </h6>
          </ul>
        </div>
        <div data-aos="zoom-in">
          <div className="m-auto my-12 flex justify-center items-center lg:h-80 h-64 lg:w-80 w-64 rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-300">
            <img
              src="/images/PKJ_Desk_Photo.jpg"
              className="shadow-lg h-full dark:shadow-black/30  "
              alt="Director's Desk"
            />
          </div>
        </div>
        <div>
          <FaQuoteLeft data-aos="fade-up" size={38} className="text-sky-700 mb-6" />
          <h4 data-aos="fade-up" className="lg:text-2xl text-xl lg:text-left md:text-left text-justify font-semibold text-sky-800 pb-4">Celebrating <span className="text-rose-600">100 Years</span> of NIT, Patna</h4>
          <div className="mb-10 lg:text-left md:text-left text-justify text-slate-600 leading-7">
            <p data-aos="fade-up">We are celebrating the 100 years of the glorious history of
              Engineering Education in Bihar, which started with the establishment
              of Bihar College of Engineering (BCE), Patna in 1924. </p>
            <p data-aos="fade-up">
              Since then, the Engineering Education has undergone a sea change
              and has been instrumental in the development of the Bihar region.
            </p>
          </div>

          <Link aria-label={"Know More about NIT Patna"} data-aos="fade-up" to="/history"><button
            type="button"
            style={{
              textDecoration: "none",
              textAlign: "left",
              display: "flex",
              alignItems: "start",
            }}
          >
            <p className="flex text-left items-center text-lg text-sky-700 hover:text-sky-900 font-semibold">History on NIT, Patna<BsArrowUpRight size={23} className="ml-1" /></p>
          </button></Link>
        </div>
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

      <Faq />
    </>
  );
};

export default HomePage;
