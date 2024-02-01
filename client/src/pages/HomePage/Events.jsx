import React from 'react'
import EventCard from '../Events/EventCard'
import { RxArrowRight } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import Heading1 from '../../components/Headings/Heading1'
import { useQuery } from "@tanstack/react-query"
import { getDocuments } from "../../services/documents"
import Loader from '../../components/Loader'

const Events = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["events"],
        queryFn: () => getDocuments("events"),
        staleTime: Infinity,
    });

    return (
        <div className="my-10 mb-36 lg:px-16 md:px-6 px-6">
            <Heading1 details={"We host a variety of events throughout the year to engage and connect with our esteemed alumni, providing platforms for networking, professional development, and fostering a sense of continued community among our graduates."} text1={"Eventful Life at"} text2={" NIT Patna"} />


            {isLoading ? <Loader /> :
                isError ? <div className='text-center text-red-500'>Something went wrong!</div> :
                    <div className='grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center m-auto my-10 min-h-[16rem]'>
                        {data && data.slice(0, 3).map((event) => (
                            <EventCard data={event} key={event.$id} />
                        ))}
                    </div>}

            <Link data-aos="zoom-in" to="/events" className='bg-sky-400 absolute lg:right-20 md:right-16 right-12 hover:bg-sky-500 text-white font-semi-bold py-2 px-4 rounded-full flex items-center'>
                <button className="mr-2">
                    View All
                </button>
                <RxArrowRight size={24} />
            </Link>
        </div>
    )
}

export default Events