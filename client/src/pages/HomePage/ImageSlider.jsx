import React from "react";
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image'
import { Link } from 'react-router-dom'
import useAuth from "../../hooks/useAuth";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const slideImages = [
    {
        url: '/images/sliderimages/img1.jpg',
        kicker: "Connect. Inspire. Cherish.",
        title: "Welcome back",
        description: "Register now and become a member of the Alumni Association of NIT Patna.",
        position: "center 42%",
    },
    {
        url: '/images/sliderimages/img2.jpg',
        kicker: "A lifelong community",
        title: "Stay close to NITP",
        description: "Discover alumni stories, meets, opportunities, and updates from your institute network.",
        position: "center 45%",
    },
    {
        url: '/images/sliderimages/img3.jpg',
        kicker: "Centenary legacy",
        title: "Celebrate the journey",
        description: "Explore the people and milestones shaping one hundred years of engineering education in Bihar.",
        position: "center 48%",
    },
    {
        url: '/images/sliderimages/img4.jpg',
        kicker: "Give back. Grow together.",
        title: "Build the bridge",
        description: "Share jobs, internships, experiences, and mentorship with the next generation of NIT Patna.",
        position: "center 45%",
    },
];

const sliderButton = (direction) => (
    <button
        type="button"
        aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
        className="mx-3 hidden h-12 w-12 items-center justify-center rounded-full border border-white/35 bg-white/90 text-slate-900 shadow-lg backdrop-blur transition hover:bg-white md:flex"
    >
        {direction === "prev" ? <FiArrowLeft size={22} /> : <FiArrowRight size={22} />}
    </button>
);

const sliderProperties = {
    duration: 4200,
    transitionDuration: 700,
    canSwipe: true,
    pauseOnHover: true,
    prevArrow: sliderButton("prev"),
    nextArrow: sliderButton("next"),
    indicators: () => (
        <span className="mx-1 inline-block h-2.5 w-2.5 rounded-full bg-white/70 shadow ring-1 ring-slate-900/10 transition" />
    ),
};

function ImageSlider() {
    const { user } = useAuth();
    const cta = user
        ? { label: "Go to dashboard", to: "/dashboard" }
        : { label: "Join the network", to: "/signup" };

    return (
        <section className="slide-container relative overflow-hidden bg-slate-950">
            <Fade {...sliderProperties}>
                {slideImages.map((image, index) => (
                    <div key={index} className="relative">
                        <div
                            className="relative flex min-h-[calc(100vh-5rem)] max-h-[760px] w-full items-center overflow-hidden md:min-h-[660px]"
                            style={{
                                backgroundImage: `url(${image.url})`,
                                backgroundPosition: image.position,
                                backgroundSize: "cover",
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-sky-950/90 via-slate-950/54 to-slate-950/8" />
                            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--surface)] to-transparent" />
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:52px_52px] opacity-20" />

                            <div data-aos="fade-right" className="page-shell relative z-10 pt-16 text-left">
                                <div className="max-w-3xl">
                                    <p className="mb-5 w-fit rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-sky-100 backdrop-blur">
                                        {image.kicker}
                                    </p>
                                    <h1 className="max-w-3xl text-5xl font-bold leading-[0.95] text-white drop-shadow-xl md:text-7xl lg:text-8xl">
                                        {image.title}
                                    </h1>
                                    <p className='max-w-2xl pb-8 pt-6 text-lg leading-8 text-slate-100 md:text-xl'>
                                        {image.description}
                                    </p>
                                    <div className="flex flex-wrap items-center gap-3">
                                        <Link to={cta.to}>
                                            <button className="rounded-full bg-white px-6 py-3 text-base font-semibold text-sky-950 shadow-xl shadow-slate-950/20 transition hover:bg-sky-50">
                                                {cta.label}
                                            </button>
                                        </Link>
                                        <Link to="/alumni-database?role=ug&page=1&type=name&search=">
                                            <button className="rounded-full border border-white/35 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur transition hover:bg-white/20">
                                                Explore alumni
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Fade>
        </section>
    )
}

export default ImageSlider;
