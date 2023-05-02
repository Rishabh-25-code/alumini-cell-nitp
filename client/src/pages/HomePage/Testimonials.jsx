import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {

    const testimonials = [
        {
            id: 0,
            name: "Name",
            image: "images/Alumni3.jpg",
            batch: "Batch",
            designation: "Designation",
            message: "Message"
        },
        {
            id: 1,
            name: "Name",
            image: "images/Alumni1.jpg",
            batch: "Batch",
            designation: "Designation",
            message: "Message"
        },
        {
            id: 3,
            name: "Name",
            image: "images/Alumni1.jpg",
            batch: "Batch",
            designation: "Designation",
            message: "Message"
        }
    ]

    return (
        <div className='pb-10 bg-gray-900 py-10'>
            <h1 className="mt-10 lg:ml-10 md:ml-10 p-5 text-center text-sky-400 lg:text-5xl md:text-4xl text-4xl font-bold leading-tight mb-10">
                What our Alumni say about us
            </h1>

            <div className='flex flex-wrap m-auto px-5 items-center justify-evenly mb-10'>
                {testimonials.slice(0, 3).map((event, id) => (
                    <TestimonialCard data={event} key={id} />
                ))}
            </div>
        </div>
    )
}

const TestimonialCard = ({ data }) => {
    return (
        <div>
            <div className='flex items-center overflow-hidden w-full rounded-xl border border-gray-700 max-w-[24rem] border-b-8 border-b-sky-500 hover:border-b-sky-700 p-7 hover:border-gray-600 hover:scale-105 transition-all delay-75 ease-in hover:bg-gray-800'>
                <div className='flex flex-col'>
                    <FaQuoteLeft className='text-sky-400' size={41} />
                    <p className='text-white font-medium mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit illo at fugiat aperiam ipsa numquam quod voluptates laboriosam unde minus!</p>

                    <div className='mt-6 flex gap-2 items-center'>
                        <div>
                            <div className='rounded-full w-14 h-14 overflow-hidden'>
                                <img src={data.image} alt={data.name} className='w-full h-full object-cover' />
                            </div>
                        </div>
                        <div>
                            <h1 className='text-white font-bold text-base'>Nitish Kumar <span>
                                (1998)</span></h1>
                            <p className='text-gray-400'>CM Of Bihar</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Testimonials