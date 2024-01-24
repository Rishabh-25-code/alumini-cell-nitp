import React from 'react'
import EventCard from '../Events/EventCard'
import { RxArrowRight } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import Heading1 from '../../components/Headings/Heading1'

const Events = () => {

    const events = [
        {
            id: 0,
            name: "Conference on Computational Intelligence Communications and Business Analytics.",
            image: "/images/events/computational intelligence.jpg",
            clubName: " CSE Department",
            description: " ",
            date: "2024-01-23",
            time: "10:00 AM",
            venue: "Meghnadh Saha Hall",
            link: "https://www.google.com"
        },
        {
            id: 1,
            name: "Alumni Meet 2023",
            image: "/images/Meet5300/DSC_0139-min.jpg",
            clubName: "Alumni Cell",
            description: " ",
            date: "2023-12-24",
            time: "10:00 AM",
            venue: "OAT",
            link: "https://www.google.com"
        },
        {
            id: 2,
            name: "ICEFEET",
            image: "/images/icefeet/icefeet12.jpeg",
            clubName: "IEEE",
            description: " ",
            date: "2023-12-23",
            time: "10:00 AM",
            venue: "Visvesvaraya Hall",
            link: "https://www.google.com"
        },

        {
            id: 3,
            name: "One Mic Stand",
            image: "/images/events/standup-min.jpg",
            clubName: "Natvansh",
            description: " ",
            date: "2023-11-07",
            time: "10:00 AM",
            venue: "LT-1",
            link: "https://www.google.com"
        },
        {
            id: 4,
            name: "Vimantriki",
            image: "/images/events/vimantriki-min.jpg",
            clubName: "Tesla",
            description: " ",
            date: "2023-11-04",
            time: "10:00 AM",
            venue: "Visvesvaraya Hall",
            link: "https://www.google.com"
        },

        {
            id: 5,
            name: "Eccentrica 5.0",
            image: "/images/events/eccentrica-min.jpg",
            clubName: "",
            description: " ",
            date: "2023-11-22",
            time: "10:00 AM",
            venue: "OAT",
            link: "https://www.google.com"
        },
        {
            id: 6,
            name: "Physics Workshop",
            image: "/images/events/physicsworkshop-min.jpg",
            clubName: "",
            description: " ",
            date: "2023-05-25",
            time: "10:00 AM",
            venue: "LT-1",
            link: "https://www.google.com"
        },
        {
            id: 7,
            name: "Doodle Art",
            image: "/images/events/doodle-min.jpg",
            clubName: "Expresso",
            description: " ",
            date: "2023-11-10",
            time: "10:00 AM",
            venue: "SAC Building",
            link: "https://www.google.com"
        },
    ]

    return (
        <div className="my-10 mb-36 lg:px-24 md:px-16 px-6">
            <Heading1 details={"We host a variety of events throughout the year to engage and connect with our esteemed alumni, providing platforms for networking, professional development, and fostering a sense of continued community among our graduates."} text1={"Eventful Life at"} text2={" NIT Patna"} />

            <div className='flex flex-wrap m-auto mt-20 gap-y-5 gap-5 items-center justify-evenly mb-10'>
                {events.slice(0, 3).map((event, id) => (
                    <EventCard data={event} key={id} />
                ))}
            </div>

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