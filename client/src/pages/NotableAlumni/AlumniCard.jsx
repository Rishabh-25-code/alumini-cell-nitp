import React from 'react'

const AlumniCard = ({ alum }) => {
    return (
        <div className='relative flex lg:flex-row md:flex-col flex-col lg:items-start items-center justify-start rounded-2xl shadow-lg border border-gray-900 bg-gray-950 lg:py-6 py-10 lg:gap-3 md:gap-3 gap-6 lg:px-4 px-5 lg:max-w-full max-w-[24rem] m-auto'>
            <div className='lg:h-24 md:h-32 h-36 lg:w-24 md:w-32 w-36 rounded-full flex items-center justify-center lg:min-w-[6rem]'>
                <img className='lg:h-24 md:h-32 h-36 lg:w-24 md:w-32 w-36 rounded-full' src={alum.image} alt="project" />
            </div>
            <div className='w-full flex flex-col lg:text-left text-center'>
                <h3 className='text-xl font-semibold'>{alum.name}</h3>
                <h3 className='mb-2'>({alum.designation})</h3>
                <p className='text-sm text-justify text-gray-400 md:block'>{alum.about}</p>
            </div>
        </div>
    )
}

export default AlumniCard