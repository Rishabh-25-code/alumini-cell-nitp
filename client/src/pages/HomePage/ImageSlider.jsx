import React from "react";
import 'react-slideshow-image/dist/styles.css'
import { Fade, Zoom, Slide } from 'react-slideshow-image'
import { Link } from 'react-router-dom'

const slideImages = [
    {
        url: 'https://img.jagranjosh.com/images/2022/April/1142022/Screenshot%202022-03-14%20155423.jpg',
    },
    {
        url: 'https://web.nitp.ac.in/alumni/html/images/DSC_1334.jpg',
    },
    {
        url: 'https://web.nitp.ac.in/alumni/html/images/DSC_0841.jpg',
    },
    {
        url: 'https://web.nitp.ac.in/alumni/html/images/DSC_1074.jpg',
    },
    {
        url: 'https://web.nitp.ac.in/alumni/html/images/DSC_1197.jpg',
    }
];

const divstyle = {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '440px',
    bakgroundSize: 'cover'
}
const spanStyle = {
    fontSize: "20px",
    background: "#efefef",
    color: "#fff"
}

function ImageSlider() {
    return (
        <div className="slide-container">
            <Fade>
                {slideImages.map((image, index) => (
                    <div key={index}>
                        <div style={{ ...divstyle, backgroundImage: `url(${image.url})` }}>
                            <span style={{ spanStyle }}>
                                <div className="absolute w-full inset-0 text-left pt-32 lg:pl-24 md:pl-16 pl-8 bg-gradient-to-r  from-[rgba(0,0,0,0.7)] via-[rgba(0,0,0,0.5)] to-transparent">
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
