import "./HomePage.scss";
import { useRef, useEffect } from "react";
import homePageImg from "../../../public/images/homePageImg.jpg";

const HomePage = () => {
  document.title = "ALUMNI Cell NIT Patna | Home";

  return (
    <div className="pt-16 bg-black">
      <div className="w-[100%] lg:py-[10rem] md:py-[10rem] py-[6rem] lg:gap-0 md:gap-0 gap-10 relative items-center flex lg:flex-row md:flex-row flex-col-reverse justify-evenly">
        <div className="">
          <h1 className="lg:text-4xl text-3xl font-semibold text-sky-500 py-5">
            ALUMNI Cell NIT Patna
          </h1>
          <h3 className="text-gray-500 font-medium text-xl pb-5">
            Official alumni page for NITP
          </h3>
          <p className="max-w-[19rem] text-gray-200 text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
            magnam quia nihil nobis iusto veniam atque, non deserunt minus
            veritatis! Perspiciatis suscipit aut ipsum soluta dicta sed.
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
  );
};

export default HomePage;
