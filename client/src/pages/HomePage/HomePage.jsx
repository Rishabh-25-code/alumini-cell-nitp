import "./HomePage.scss";
import { useRef, useEffect } from "react";
import homePageImg from "../../../public/images/homePageImg.jpg";
import { Carousel, initTE, Ripple } from "tw-elements";

const HomePage = () => {
  document.title = "ALUMNI Cell NIT Patna | Home";
  initTE({ Carousel, Ripple });

  return (
    <div className="pt-16 bg-black h-1/5">
      <div
        id="carouselExampleCaptions"
        className="relative "
        data-te-carousel-init
        data-te-carousel-slide
      >
        <div className="relative embed-responsive-4by3 w-full  after:clear-both after:block after:content-['']">
          <video className="w-full" autoPlay loop muted>
            <source
              src="https://rr3---sn-cvh76nlk.c.drive.google.com/videoplayback?expire=1681946342&ei=pj5AZNSjI4SZ-LYP2fC6kA8&ip=157.42.235.127&cp=QVRNU0pfVVNSQ1hPOlNSdnlGazl6ekMyUFhmV1YzNzVrTTNPdGNWNW9mTF9rRDlTdW9wb3RRYWM&id=d39054a6dde74da7&itag=22&source=webdrive&requiressl=yes&mh=MV&mm=32&mn=sn-cvh76nlk&ms=su&mv=m&mvi=3&pl=19&ttl=transient&susc=dr&driveid=1rIJqw4d0smyZSmOX_KYSf_i-R69RYqfM&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=34.690&lmt=1677048739767355&mt=1681931080&subapp=DRIVE_WEB_FILE_VIEWER&txp=0011224&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRAIgX9xNdkDq9Fc2ZQfiD3Wh1Zi7QEKk0uY9kXp_AlBzyUECICrUwpj3AiPV8Yhb75N6cypgcTQ17aoBxbMX5swuVty7&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAKEIuSNdVjRNAIHQglzhV6EXyZlCaKP3_HIWXT-zvYEbAiAO8bzsfnDdwcchFoN4jn3Ln2jLip76lPMEMgEi45F4Kg==&cpn=qcN0vWGl5O11ej6G&c=WEB_EMBEDDED_PLAYER&cver=1.20230416.00.00"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-x-[15%] bottom-96 hidden py-20 text-center text-white md:block">
            <h5 className="text-4xl font-bold font-serif">
              Connect. Give. Cherish.
            </h5>
            <p className="text-7xl font-bold font-serif">WELCOME BACK</p>
          </div>
        </div>
      </div>

      <div className="grid bg-white text-black p-20  gap-6 text-center md:grid-cols-3 lg:gap-12">
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
              Institute AI & ML Chair Professor
            </h6>
            <h6 className="mb-4 font-semibold text-primary dark:text-primary-500">
              Dean – Alumni and Corporate
            </h6>
            <h6 className="mb-4 font-semibold text-primary dark:text-primary-500">
              Relations
            </h6>
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
          <button
            type="button"
            className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          >
            <a href="https://drive.google.com/file/d/1Z4t3povLq2PqdWXaGeJ2g55ge9PbG_Jy/view?sz=w320">READ MORE</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
