import React from "react";
import 'react-slideshow-image/dist/styles.css'
import { Fade, Zoom, Slide } from 'react-slideshow-image'
import { Link } from 'react-router-dom'

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
    return (
        <div className="slide-container">
            <Fade duration={1000}>
                {slideImages.map((image, index) => (
                    <div key={index}>
                        {/* <div className="flex w-full items-center justify-center h-440 bg-cover bg-center" style={{backgroundImage: `url(${image.url})`}}> */}
                        <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center', height: '450px', backgroundSize: 'cover', backgroundPosition: '2% 5%', backgroundImage: `url(${image.url})` }}>
                            <span style={{ spanStyle }}>
                                <div  data-aos="fade-right" className="absolute w-full inset-0 text-left pt-32 lg:pl-24 md:pl-16 pl-8 bg-gradient-to-r  from-[rgba(0,0,0,0.7)] via-[rgba(0,0,0,0.5)] to-transparent">
                                    <h5 className="lg:text-4xl md:text-3xl text-2xl font-bold pb-2">
                                        <span className="text-sky-500">Connect.</span> Give. Cherish.
                                    </h5>
                                    <p className="lg:text-7xl md:text-6xl text-4xl font-bold">
                                        WELCOME BACK
                                    </p>
                                    <p className='lg:text-xl text-lg pb-5 pt-2 text-gray-300'>
                                        Register now and become a member of <br /> Alumni Association of NIT Patna.
                                    </p>
                                    <Link to="https://forms.gle/cFkqtE3wx2T7Wr5CA " target="_blank">
                                        <button className="px-5 py-2.5 bg-sky-500 text-white text-lg font-medium hover:scale-105 transition-all delay-75 rounded-xl ease-in hover:bg-sky-600" >
                                            Register Now
                                        </button>
                                    </Link>
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
