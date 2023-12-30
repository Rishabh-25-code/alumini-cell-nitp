import React from 'react'
import './Events.scss'
import Heading from '../../components/Headings/Heading'
import Card from "../../components/Carousel/Card";
import EventCard from './EventCard'
import Meta from '../../components/Meta/Meta';

const Events = () => {

  const events = [
    {
      id: 0,
      name: "Alumni Meet 2023",
      image: "images/Meet5300/DSC_0202-min.jpg",
      clubName: "Alumni Cell",
      description: "Details to be updated...",
      date: "2023-12-24",
      time: "10:00 AM",
      venue: "OAT, NIT Patna",
      link: "https://www.google.com"
    },
    {
      id: 1,
      name: "Vimantriki",
      image: "/images/events/vimantriki-min.jpg",
      clubName: "Tesla",
      description: "Details to be updated",
      date: "2023-11-04",
      time: "10:00 AM",
      venue: "Visvesvaraya Hall",
      link: "https://www.google.com"
  },
  {
      id: 2,
      name: "One Mic Stand",
      image: "/images/events/standup-min.jpg",
      clubName: "Natvansh",
      description: "Details to be updated",
      date: "2023-11-07",
      time: "10:00 AM",
      venue: "",
      link: "https://www.google.com"
  },
  {
      id: 3,
      name: "Doodle Art",
      image: "/images/events/doodle-min.jpg",
      clubName: "Expresso",
      description: "Details to be updated",
      date: "2023-11-10",
      time: "10:00 AM",
      venue: "SAC Building",
      link: "https://www.google.com"
  },
  {
      id: 4,
      name: "Eccentrica 5.0",
      image: "/images/events/eccentrica-min.jpg",
      clubName: "",
      description: "Details to be updated",
      date: "2023-11-22",
      time: "10:00 AM",
      venue: "OAT",
      link: "https://www.google.com"
  },
  {
      id: 5,
      name: "Physics Workshop",
      image: "/images/events/physicsworkshop-min.jpg",
      clubName: "",
      description: "Details to be updated",
      date: "2023-05-25",
      time: "10:00 AM",
      venue: "",
      link: "https://www.google.com"
  },


  ]



  return (
    <div>
      <Meta name="Events" />
      <Heading heading="EVENTS"></Heading>
      <Card
        head=""
        writer=""
      />
      <br></br>
      <br></br>

      <h1 className='heading-head-text'>Past Events</h1>

      <div className='flex flex-wrap gap-6 m-auto px-5 items-center justify-center mb-32'>
        {events.map((event, id) => (
          <EventCard data={event} key={id} />
        ))}
      </div>
    </div>
  )
}

export default Events