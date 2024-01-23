import React from 'react'
import { FaStar } from "react-icons/fa";

const AlumniCard = ({ alum }) => {
    return (
        <div data-aos="fade-in" className='rounded-3xl shadow-lg bg-[#000000] hover:bg-gray-950 border border-gray-900'>
            <div className='relative flex hover:scale-[98%] transition lg:flex-row md:flex-col flex-col lg:items-start items-center justify-start  lg:py-6 py-10 lg:gap-3 md:gap-3 gap-6 px-5 lg:max-w-full max-w-[24rem] m-auto'>
                <div className='relative lg:h-24 md:h-32 h-36 lg:w-24 md:w-32 w-36 rounded-full flex items-center justify-center lg:min-w-[6rem]'>
                    <img loading='lazy' className=' lg:h-24 md:h-32 h-36 lg:w-24 md:w-32 w-36 rounded-full' src={alum.image} alt="project" />
                    <FaStar className='absolute bottom-0 lg:text-3xl text-5xl right-0 text-[#ffc547]' />
                </div>
                <div className='w-full flex flex-col lg:text-left text-center'>
                    <h3 className='text-xl font-semibold text-sky-500'>{alum.name}</h3>
                    <h3 className='mb-2'>({alum.designation})</h3>
                    <p className='lg:text-base text-sm text-justify text-gray-400 md:block'>{alum.about}</p>
                </div>
            </div>
        </div>
    )
}

export default AlumniCard