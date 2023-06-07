import React from 'react'

const ProjectCard = ({ imgUrl, title, desc, Branch }) => {
    return (

        <div className=' w-[70%] h-80 m-auto flex gap-5 p-4  bg-gray-900 border-solid border-2 border-gray-800 rounded-md my-15 text-white shadow-sm '>
            <img className='h-40 w-40 m-auto rounded-full' src="/images/Alumni3.jpg" alt="project" />
            <div className='text-start m-auto'>
                <h3 className='mb-2 text-2xl font-semibold '>{title}</h3>
                <h3 className='mb-5 text-lg'>({Branch})</h3>
                <p className=' text-md text-gray-400'>{desc}</p>
            </div>
        </div>

    )
}

export default ProjectCard