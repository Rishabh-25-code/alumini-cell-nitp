import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";
import { Navigation, Pagination, Parallax, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./AlumniTestimonial.scss";

const Testimonials = () => {

    const testimonials = [
        {
            id: 0,
            name: "Manas Bihari Verma",
            image: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Dr._Manas_receiving_Padma_Shri_award_%28cropped%29.jpg",
            batch: "1987",
            designation: "Indian Aeronautical Scientist",
            message: "The Cultural Society organizes a cultural extravaganza under the name Mélange – the melting pot of talents."
        },
        {
            id: 1,
            name: "Sudhanshu Ranjan",
            image: "https://avatars.githubusercontent.com/u/77230416?v=4",
            batch: "2024",
            designation: "Software Engineer @Oracle",
            message: "The institute has been ranked 63 among engineering colleges by the National Institutional Ranking Framework (NIRF) in 2022."
        },
        {
            id: 2,
            name: "Rishabh Prakash",
            image: "/images/Alumni1.jpg",
            batch: "2024",
            designation: "Software Engineer @ Google",
            message: "The institute has been ranked 8th among the top 10 engineering colleges in India by the India Today magazine in 2017 and 2018."
        },
        {
            id: 3,
            name: "PA Sangma",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Ratan_Kumar_Sinha.jpg/480px-Ratan_Kumar_Sinha.jpg",
            batch: "1989",
            designation: "Former CM of Meghalaya",
            message: "The Common Room Society organizes indoor games competitions like chess, carom, table tennis, badminton, and Su-doku championship."
        },
        {
            id: 4,
            name: "Ratan Kumar Sinha",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Ratan_Kumar_Sinha.jpg/480px-Ratan_Kumar_Sinha.jpg",
            batch: "Batch",
            designation: "Chairman of AEC",
            message: "The institute has been ranked 8th among the top 10 engineering colleges in India by the India Today magazine in 2017 and 2018."
        },
        {
            id: 5,
            name: "Nitish Kumar",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Nitish_Kumar_in_February_2007.jpg/359px-Nitish_Kumar_in_February_2007.jpg",
            batch: "1995",
            designation: "CM of Bihar",
            message: "Incubation Center is officially in the list of incubators under the Bihar & Start Policy 2017."
        },
        {
            id: 6,
            name: "Bindeshwari Dubey",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/B.dubey%283%29.jpg/383px-B.dubey%283%29.jpg",
            batch: "1980",
            designation: "Formar CM of Bihar",
            message: "These hostels now can accommodate all of the students because of the newly constructed Brahmaputra hostel making it a fully residential campus."
        }
    ]

    return (
        <div className=' bg-gray-900 py-16'>
            <h1
                data-aos="fade-in"
                className="font-semibold lg:text-5xl md:text-4xl text-3xl text-center  items-center  "
            >
                Testimonials from our <span className="text-sky-500">Alumni</span>
            </h1>

            <div className="mt-20 lg:px-16 md:px-10 px-5 relative">
                <Swiper
                    data-aos="zoom-in"
                    modules={[Navigation, Pagination, Parallax, A11y]}

                    // parallax={true}
                    pagination={{
                        clickable: true,
                        // dynamicBullets: true,
                    }}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                        clickable: true,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                        1280: {
                            slidesPerView: 3,
                            spaceBetween: 70,
                        },
                    }}
                >


                    <div className=" flex   items-center ">
                        {testimonials.map((data) => (
                            <SwiperSlide key={data.id}>
                                <div className="mb-10">
                                    <TestimonialCard
                                        key={data.id}
                                        data={data}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>

                <div className="swiper-button-prev bg-black hover:bg-black bg-opacity-50 hover:bg-opacity-40 text-white p-6 rounded-full"></div>
                <div className="swiper-button-next bg-black hover:bg-black bg-opacity-50 hover:bg-opacity-40 text-white p-6 rounded-full"></div>
            </div>
        </div>
    )
}

const TestimonialCard = ({ data }) => {
    return (
        <div data-aos="zoom-in" className='flex ' >
            <div className='border-[1px] border-gray-500 border-b-cyan-500 hover:border-b-cyan-600 border-b-8 rounded-2xl w-full  p-5 pb-7 hover:scale-[101%] z-0 hover:z-10 bg-[#090c14] transition-all delay-[30ms] ease-in-out m-1'>
                <div className='h-[10rem] rounded overflow-hidden '>
                    <p>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-sky-400 mb-6" height="38" width="38" xmlns="http://www.w3.org/2000/svg"><path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z">
                        </path>
                        </svg>
                    </p>
                    <p className='text-justify m-5'>{data.message}</p>
                </div>
                <div className='flex items-center lg:gap-5 md:gap-3 gap-2 mt-6'>
                    <div>
                        <img loading='lazy' className='w-12 h-12 bg-cover bg-center rounded-full ' src={data.image} alt={data.name} />
                    </div>
                    <div>
                        <h2 className='text-base font-semibold'>{data.name}</h2>
                        <p className='text-gray-500 text-sm font-medium leading-5 mt-1'>
                            {data.designation}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Testimonials