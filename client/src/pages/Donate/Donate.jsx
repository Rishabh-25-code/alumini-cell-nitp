import { useRef, useEffect } from "react";
import Heading from '../../components/Headings/Heading'

import "./Donate.scss";
import Donation from "../../../public/images/donation.jpg";

const Donate = () => {

  return (
    <div className="pt-16 bg-black">
      <div className="relative flex items-center justify-center w-full h-[10vh] "></div>
      <div className="flex items-center justify-center h-full ">
          <img
          className="object-cover h-100 w-full .. "
          src={Donation}
        />
      </div>
      
      <div className="absolute inset-x-[5%] flex flex-col gap-3 items-center justify-center py-10 text-center text-white">
            <h5 className="lg:text-3xl md:text-2xl text-1xl font-bold font-serif">
            Giving Back to NIT Patna
            </h5>
            <p className="lg:text-5xl md:text-4xl text-3xl font-bold font-serif">
            Make a Donation
            </p>
          </div>

      <div className="w-[100%] lg:py-[10rem] grid bg-blue text-white p-20  md:py-[10rem] py-[6rem]  relative items-center ">
        <div className="mb-12 md:mb-0" >
          <p className="mb-4 text-xl text-center md:text-left">
          As NITP campus and community grow, so must its financial resources. Support for the Campaign for NITP will ensure the success of the College’s mission to offer an excellent education to promising and motivated students in the Bronx. 
          It will allow NITP to continue meeting the changing needs of our students, our faculty, our campus, and our community while serving as a cultural and economic anchor in the region.
          Please consider supporting scholarships to keep our students on track for the future they still believe in and are working hard to obtain. We have received more than 5,000 scholarship requests from students in the last year. 
          You may make your gift online using the link below.
        </p>
        <div className="flex justify-center text-2xl">

        <button
            type="button"
            className="inline-block rounded bg-sky-800 px-20 pb-10 pt-2.5 text-xs font-medium uppercase leading-normal text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-100 "
          >
            <a
              className="text-white text-2xl decoration-none hover:text-white"
              href=""
            >
              DONATE
            </a>
          </button>
        </div>
        </div>
        </div>
        <p className="w-[100%]  grid bg-blue text-white p-20  md:py-[10rem] py-[6rem]  relative items-center ">
        
          <li>Here is the list of Top Donors of NIT Patna: Top Donors</li>
          <li>To donate, please visit : click here</li>
          <li>For any query, please contact-</li>
          <li>Prof. </li>
          <li>Dean of Resources and Alumni Affairs</li>
          <li>NAtional Institute of Technology, Patna</li>
          <li> Ph. 0612 237 1715 </li>
          <li>E-mail: </li>

        </p>
      </div>
  );
};

export default Donate;