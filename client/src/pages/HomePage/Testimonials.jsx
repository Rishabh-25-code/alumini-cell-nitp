import React, { useState } from 'react'
import { FaQuoteLeft } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md"

const Testimonials = () => {

    const [activeIndex, setActiveIndex] = useState(0);

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
            designation: "Frontend Engineer @ Netflix",
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
        <div className='pb-10 bg-gray-900 py-10'>
            <h1 className="mt-10 lg:ml-10 md:ml-10 p-5 text-center text-sky-400 lg:text-5xl md:text-4xl text-4xl font-bold leading-tight mb-10">
                What our Alumni say about us
            </h1>

            <div className='relative w-full overflow-y-auto overflow-x-hidden py-10'>
                <div className='flex m-auto px-5 items-center justify-evenly mb-10 gap-10'>
                    <TestimonialCard data={activeIndex <= 0 ? testimonials.at(-1) : testimonials[activeIndex - 1]} />
                    <TestimonialCard data={testimonials[activeIndex]} />
                    <TestimonialCard data={activeIndex == testimonials.length - 1 ? testimonials[0] : testimonials[activeIndex + 1]} />
                </div>
                <div className='flex lg:justify-between md:justify-between justify-center lg:gap-0 md:gap-0 gap-10 items-center lg:px-10 md:px-10 px-5 bg-gray-400 absolute lg:top-44 md:top-44 w-full h-0'>
                    <button onClick={() => {
                        if (activeIndex === 0) {
                            setActiveIndex(testimonials.length - 1);
                        } else {
                            setActiveIndex(activeIndex - 1);
                        }
                    }} className='text-white rounded-full lg:p-4 md:p-4 p-3 bg-sky-600 bg-opacity-80 hover:bg-sky-800 shadow-lg'><MdOutlineKeyboardArrowLeft size={32} /></button>
                    <button onClick={() => {
                        if (activeIndex === testimonials.length - 1) {
                            setActiveIndex(0);
                        } else {
                            setActiveIndex(activeIndex + 1);
                        }
                    }} className='text-white rounded-full lg:p-4 md:p-4 p-3 bg-sky-600 hover:bg-sky-800 bg-opacity-80 shadow-lg'><MdOutlineKeyboardArrowRight size={32} /></button>
                </div>
            </div>
        </div>
    )
}

const TestimonialCard = ({ data }) => {
    return (
        <div className='lg:w-[24rem] md:w-[24rem] w-[100%]'>
            <div className='flex items-center overflow-hidden lg:w-[24rem] md:w-[24rem] w-[85vw] rounded-xl border border-gray-700  border-b-8 border-b-sky-600 hover:border-b-sky-500 p-7 hover:border-gray-600 hover:scale-105 transition-all delay-75 ease-in hover:bg-gray-800'>
                <div className='flex flex-col'>
                    <FaQuoteLeft className='text-sky-400' size={41} />
                    <p className='text-white font-medium mt-3'>{data.message}</p>

                    <div className='mt-6 flex gap-2 items-center'>
                        <div>
                            <div className='rounded-full w-14 h-14 overflow-hidden'>
                                <img src={data.image} alt={data.name} className='w-full h-full object-cover' />
                            </div>
                        </div>
                        <div>
                            <h1 className='text-white font-bold text-base'>{data.name} <span>
                                (1998)</span></h1>
                            <p className='text-gray-400 text-sm'>{data.designation}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Testimonials