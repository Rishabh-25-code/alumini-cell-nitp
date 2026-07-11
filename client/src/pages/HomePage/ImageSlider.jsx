import React from "react";
import 'react-slideshow-image/dist/styles.css'
import { Fade, Zoom, Slide } from 'react-slideshow-image'
import { Link } from 'react-router-dom'
import useAuth from "../../hooks/useAuth";

const slideImages = [
    {
        url: '/images/sliderimages/img1.jpg',
    },
    {
        url: '/images/sliderimages/img2.jpg',
    },
    {
        url: '/images/sliderimages/img3.jpg',
    },
    {
        url: '/images/sliderimages/img4.jpg',
    },
];

const spanStyle = {
    fontSize: "20px",
    background: "#efefef",
    color: "#fff"
}

function ImageSlider() {
    const { user } = useAuth();

    return (
        <div className="slide-container">
            <Fade duration={1000}>
                {slideImages.map((image, index) => (
                    <div key={index}>
                        {/* <div className="flex w-full items-center justify-center h-440 bg-cover bg-center" style={{backgroundImage: `url(${image.url})`}}> */}
                        <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center', height: '560px', backgroundSize: 'cover', backgroundPosition: '2% 5%', backgroundImage: `url(${image.url})` }}>
                            <span style={{ spanStyle }}>
                                <div data-aos="fade-right" className="absolute w-full inset-0 text-left pt-36 lg:pl-24 md:pl-16 pl-8 bg-gradient-to-r from-[rgba(8,47,73,0.78)] via-[rgba(15,23,42,0.48)] to-[rgba(15,23,42,0.08)]">
                                    <h5 className="lg:text-3xl md:text-2xl text-xl font-semibold pb-3">
                                        <span className="text-sky-200">Connect.</span> Inspire. Cherish.
                                    </h5>
                                    <p className="lg:text-7xl md:text-6xl text-4xl font-bold max-w-4xl leading-[0.95] text-white drop-shadow-lg">
                                        WELCOME BACK
                                    </p>
                                    <p className='lg:text-xl text-lg pb-7 pt-5 text-slate-100 max-w-xl leading-8'>
                                        Register now and become a member of <br /> Alumni Association of NIT Patna.
                                    </p>
                                    {user ? <Link to="/dashboard">
                                        <button className="px-6 py-3 bg-white text-sky-900 text-base font-semibold hover:bg-sky-50 transition-all delay-75 rounded-full ease-in shadow-lg" >
                                            Dashboard
                                        </button>
                                    </Link> :
                                        <Link to="/signup">
                                            <button className="px-6 py-3 bg-white text-sky-900 text-base font-semibold hover:bg-sky-50 transition-all delay-75 rounded-full ease-in shadow-lg" >
                                                Sign Up
                                            </button>
                                        </Link>}
                                </div>
                            </span>
                        </div>
                    </div>
                ))}
            </Fade>
        </div>
    )
}

export default ImageSlider;
