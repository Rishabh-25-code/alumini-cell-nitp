import React from 'react'
import './Events.scss'
import Heading from '../../components/Headings/Heading'
import Card from "../../components/Carousel/Card";
import EventCard from './EventCard'

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
      name: "Alumni Meet 2022",
      image: "images/Meet5300/DSC_0197-min.jpg",
      clubName: "Alumni Cell",
      description: "Details to be updated...",
      date: "to be updated",
      time: "to be updated",
      venue: "to be updated",
      link: "https://www.google.com"
    },
    {
      id: 2,
      name: "Alumni Meet 2021",
      image: "images/Meet5300/DSC_0191-min.jpg",
      clubName: "Alumni Cell",
      description: "Details to be updated...",
      date: "to be updated",
      time: "to be updated",
      venue: "to be updated",
      link: "https://www.google.com"
    },


  ]



  return (
    <div>
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