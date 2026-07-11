import React from 'react'
import { FaStar } from "react-icons/fa";
import { getImageURL } from '../../services/files';


const AlumniCard = ({ alum }) => {
    return (
        <div data-aos="fade-in" className='surface-card rounded-3xl border border-slate-200'>
            <div className='relative flex transition flex-col lg:items-start items-center justify-start lg:py-6 py-8 lg:gap-3 md:gap-3 gap-6 px-5 lg:max-w-full max-w-[22rem] m-auto'>
                <div className='relative lg:h-28 md:h-32 h-36 lg:w-28 md:w-32 w-36 rounded-3xl flex items-center justify-center lg:min-w-[6rem]'>
                    <img loading='lazy' className='lg:h-28 md:h-32 h-36 lg:w-28 md:w-32 w-36 rounded-3xl object-cover shadow-lg shadow-slate-200' src={getImageURL(alum.image)} alt="project" />
                    <FaStar className='absolute -bottom-2 -right-2 lg:text-3xl text-5xl text-[#ffc547]'/>
                </div>
                <div className='w-full flex flex-col lg:text-left text-center'>
                    <h3 className='text-xl font-semibold text-sky-800'>{alum.name}</h3>
                    <h3 className='mb-2 text-slate-600'>({alum.designation})</h3>
                    <p className='lg:text-base text-sm text-justify text-slate-600 md:block leading-7'>{alum.about}</p>
                </div>
            </div>
        </div>
    )
}

export default AlumniCard
