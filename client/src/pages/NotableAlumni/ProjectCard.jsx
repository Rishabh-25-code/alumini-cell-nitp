import React from 'react'

const ProjectCard = ({ imgUrl, title, desc, Branch }) => {
    return (
        <div className='relative flex lg:flex-row md:flex-row flex-col rounded-2xl shadow-lg border border-gray-800 bg-gray-900 py-6 px-3 lg:gap-2 md:gap-2 gap-6'>
            <img className='lg:h-24 md:h-24 h-32 lg:w-24 md:w-24 w-32 m-auto rounded-full' src="/images/Alumni3.jpg" alt="project" />
            <div className='w-full md:w-2/3 flex flex-col'>
                <h3 className='text-2xl font-semibold  text-center md:text-start '>{title}</h3>
                <h3 className='mb-2 text-lg text-center md:text-start'>({Branch})</h3>
                <p className=' text-md text-gray-400 text-center md:block md:text-start'>{desc}</p>
            </div>
        </div>
    )
}

export default ProjectCard