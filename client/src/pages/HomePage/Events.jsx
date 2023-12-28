import React from 'react'
import EventCard from '../Events/EventCard'
import { RxArrowRight } from 'react-icons/rx'
import { Link } from 'react-router-dom'

const Events = () => {

    const events = [
        {
            id: 0,
            name: "Event Name",
            image: "https://firebasestorage.googleapis.com/v0/b/nitp-alumni-cell.appspot.com/o/images%2FnHvpVQyjC-PKJ_Desk%20Photo.jpg?alt=media&token=95c792d4-bace-4b56-b5fc-f6aff77cc0e4",
            clubName: "Alumni Cell",
            description: "Details about the event.",
            date: "2023-05-25",
            time: "10:00 AM",
            venue: "LT-1",
            link: "https://www.google.com"
        },
        {
            id: 1,
            name: "Event Name",
            image: "https://firebasestorage.googleapis.com/v0/b/nitp-alumni-cell.appspot.com/o/images%2FnHvpVQyjC-PKJ_Desk%20Photo.jpg?alt=media&token=95c792d4-bace-4b56-b5fc-f6aff77cc0e4",
            clubName: "Alumni Cell",
            description: "Details about the event.",
            date: "2023-05-25",
            time: "10:00 AM",
            venue: "LT-1",
            link: "https://www.google.com"
        },
        {
            id: 2,
            name: "Event Name",
            image: "https://firebasestorage.googleapis.com/v0/b/nitp-alumni-cell.appspot.com/o/images%2FnHvpVQyjC-PKJ_Desk%20Photo.jpg?alt=media&token=95c792d4-bace-4b56-b5fc-f6aff77cc0e4",
            clubName: "Alumni Cell",
            description: "Details about the event.",
            date: "2023-05-25",
            time: "10:00 AM",
            venue: "LT-1",
            link: "https://www.google.com"
        },
        {
            id: 3,
            name: "Event Name",
            image: "https://firebasestorage.googleapis.com/v0/b/nitp-alumni-cell.appspot.com/o/images%2FnHvpVQyjC-PKJ_Desk%20Photo.jpg?alt=media&token=95c792d4-bace-4b56-b5fc-f6aff77cc0e4",
            clubName: "Alumni Cell",
            description: "Details about the event.",
            date: "2023-05-25",
            time: "10:00 AM",
            venue: "LT-1",
            link: "https://www.google.com"
        },
        {
            id: 4,
            name: "Event Name",
            image: "https://firebasestorage.googleapis.com/v0/b/nitp-alumni-cell.appspot.com/o/images%2FnHvpVQyjC-PKJ_Desk%20Photo.jpg?alt=media&token=95c792d4-bace-4b56-b5fc-f6aff77cc0e4",
            clubName: "Alumni Cell",
            description: "Details about the event.",
            date: "2023-05-25",
            time: "10:00 AM",
            venue: "LT-1",
            link: "https://www.google.com"
        },
        {
            id: 5,
            name: "Event Name",
            image: "https://firebasestorage.googleapis.com/v0/b/nitp-alumni-cell.appspot.com/o/images%2FnHvpVQyjC-PKJ_Desk%20Photo.jpg?alt=media&token=95c792d4-bace-4b56-b5fc-f6aff77cc0e4",
            clubName: "Alumni Cell",
            description: "Details about the event.",
            date: "2023-05-25",
            time: "10:00 AM",
            venue: "LT-1",
            link: "https://www.google.com"
        },
    ]

    return (
        <div className='pb-10'>
            <h1 className="mb-2.5 mt-10 lg:ml-10 md:ml-10 p-5 lg:text-left md:text-left text-center text-sky-400 lg:text-5xl md:text-4xl text-4xl font-bold leading-tight">
                Life at NIT Patna
            </h1>

            <div className='flex flex-wrap m-auto px-5 items-center justify-evenly mb-10'>
                {events.slice(0, 3).map((event, id) => (
                    <EventCard data={event} key={id} />
                ))}
            </div>

            <Link to="/events" className='bg-sky-400 absolute right-20 hover:bg-sky-500 text-white font-semi-bold py-2 px-4 rounded-full flex items-center'>
                <button className="mr-2">
                    View All
                </button>
                <RxArrowRight size={24}/>
            </Link>
        </div>
    )
}

export default Events