import React from 'react'


const Card = ({ member }) => {
    return (
        <div data-aos="zoom-in" className='border w-[18.5rem] border-gray-800 bg-[#0f0e0e] hover:bg-[#131212] p-5 rounded-3xl transition-all delay-[30ms] ease-in-out hover:border-gray-700 hover:scale-[101%] border-b-4 border-b-sky-700 hover:border-b-sky-500' id="Team_main_1">
            <div className='flex items-center justify-center my-3'>
                <div>
                    <img className='rounded-full h-[7rem] w-[7rem]  border-2 border-[#121212] border-y-sky-500 border-r-sky-500 p-1 hover:scale-[105%] transition-all delay-75 ease-in' id='Team_img' src={member.image} alt={member.image} />
                </div>
            </div>

            <div className='text-xl'>
                {member.name}
            </div>
            <div className='text-sky-500 font-medium text-lg'>
                {member.roll_no}
            </div>
            <div className='text-gray-400 my-3 text-sm'>
                {member.degree}
            </div>
            <div className='py-3'>
                <a href={`mailto:${member.email}`} >
                    <span className='text-sky-400 px-4 py-1.5 rounded-xl bg-sky-900'>{member.email}</span>
                </a>
            </div>

            
        </div>
    )
}

export default Card