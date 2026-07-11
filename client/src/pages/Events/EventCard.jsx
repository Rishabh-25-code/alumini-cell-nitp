import { Link } from 'react-router-dom'
import { getImageURL } from '../../services/files'

const EventCard = ({ data }) => {
    
    //getting date from date and time
    const eventDate = new Date(data.date);
    const date = eventDate.toLocaleDateString('en-GB');


    return (
        <div data-aos="fade-up" className='surface-card max-w-sm w-full p-4 rounded-2xl mt-5 transition hover:-translate-y-1'>
            <div className='flex items-center lg:h-52 md:h-48 h-44 overflow-hidden w-full rounded-xl border border-slate-200'>
                <img loading='lazy' className='w-full h-full object-cover' src={getImageURL(data.image)} alt={data.title} />
            </div>
            <p className='text-slate-500 pt-2 pl-2'>{data.organizer}</p>
            <h3 className='text-xl font-semibold pl-2 text-slate-950'>{data.title.length > 56 ? data.title.substring(0,56) + "...": data.title}</h3>
            <div className='bg-slate-50 rounded-xl p-3 flex justify-between mt-2 flex-col border border-slate-200'>
                <div className='flex justify-between'>
                    <div>
                        <p className='text-slate-500 text-sm'>Date</p>
                        <p className='text-medium'>{date}</p>
                    </div>

                    <div className='text-right'>
                        <p className='text-slate-500 text-sm'>Venue</p>
                        <p className='text-medium'>{data.venue}</p>
                    </div>
                </div>

                {/* <div className='flex justify-between'>
                    <div>
                        <p className='text-gray-400 text-sm'>Time</p>
                        <p className='text-medium'>{data.time}</p>
                    </div>

                    <div className='text-right'>
                        <p className='text-gray-400 text-sm'>See Photos</p>
                        <Link style={{ textDecoration: "none", color: "skyblue" }} to="/events" className='text-medium text-blue-500'>Click</Link>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default EventCard
