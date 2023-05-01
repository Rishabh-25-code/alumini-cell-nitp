import React from 'react'

const EventCard = ({ data }) => {
    return (
        <div className='w-[21rem] p-4 border-2 hover:border-gray-800 hover:scale-[102%] transition-all delay-75 ease-in border-gray-900 rounded-2xl mt-5'>
            <div className='flex items-center h-44 overflow-hidden w-full rounded-lg border border-gray-900'>
                <img className='w-full' src={data.image} alt={data.name} />
            </div>
            <p className='text-gray-400 pt-2 pl-2'>{data.clubName}</p>
            <h3 className='text-xl font-semibold pl-2'>{data.name}</h3>
            <p className='text-gray-400 pt-1 pl-2'>{data.description.substring(0, 90) + "..."}</p>
            <div className='bg-gray-800 rounded-lg p-3 flex justify-between mt-2 flex-col'>
                <div className='flex justify-between'>
                    <div>
                        <p className='text-gray-400 text-sm'>Date</p>
                        <p className='text-medium'>{data.date}</p>
                    </div>

                    <div className='text-right'>
                        <p className='text-gray-400 text-sm'>Venue</p>
                        <p className='text-medium'>{data.venue}</p>
                    </div>
                </div>

                <div className='flex justify-between'>
                    <div>
                        <p className='text-gray-400 text-sm'>Time</p>
                        <p className='text-medium'>{data.time}</p>
                    </div>

                    <div className='text-right'>
                        <p className='text-gray-400 text-sm'>Reg. Link</p>
                        <a target='_blank' href={data.link} className='text-medium text-blue-500'>Click</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventCard