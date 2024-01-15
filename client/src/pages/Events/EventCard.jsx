import { Link } from 'react-router-dom'

const EventCard = ({ data }) => {
    return (
        <div data-aos="fade-up" className='w-[20rem] p-4 border-2 hover:border-gray-800 border-gray-900 rounded-2xl mt-5'>
            <div className='flex items-center h-44 overflow-hidden w-full rounded-lg border border-gray-900'>
                <img loading='lazy' className='w-full' src={data.image} alt={data.name} />
            </div>
            <p className='text-gray-400 pt-2 pl-2'>{data.clubName}</p>
            <h3 className='text-xl font-semibold pl-2'>{data.name}</h3>
            <p className='text-gray-400 pt-1 pl-2'>{data.description.length !== 0 ? data.description.substring(0, 90) + "..." : null}</p>
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
                        <p className='text-gray-400 text-sm'>See Photos</p>
                        <Link style={{ textDecoration: "none", color: "skyblue" }} to="/events" className='text-medium text-blue-500'>Click</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventCard