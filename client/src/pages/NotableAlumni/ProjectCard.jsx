import React from 'react'

const ProjectCard = ({ imgUrl, title, desc, Branch }) => {
    return (
        <div className='relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-gray-800 bg-gray-900 md:h-80 md:place-items-center '>
            <img className='h-40 w-40 m-auto rounded-full' src="/images/Alumni3.jpg" alt="project" />
            <div className='w-full md:w-2/3 flex flex-col  p-3'>
                <h3 className='mb-2 text-2xl font-semibold  text-center md:text-start '>{title}</h3>
                <h3 className='mb-4 text-lg  text-center  md:text-start'>({Branch})</h3>
                <p className=' text-md text-gray-400 text-center md:block md:text-start'>{desc}</p>
            </div>
        </div>
    )
}

export default ProjectCard