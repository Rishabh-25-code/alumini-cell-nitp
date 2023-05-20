import React from 'react'
import './Events.scss'
import Heading from '../../components/Headings/Heading'
import Card from "../../components/Carousel/Card";
import EventCard from './EventCard'

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
    <div>
      <Heading heading="EVENTS"></Heading>
      <div className='flex flex-wrap gap-6 m-auto px-5 items-center justify-center mb-32'>
        {events.map((event, id) => (
          <EventCard data={event} key={id} />
        ))}
      </div>
      <h1 className='heading-head-text'>Past Events</h1>
      <br></br>
      <br></br>
      <Card
        head="Important events that were held in our college."
        writer="like the alumini meet of the 19's batch"
      />

    </div>
  )
}

export default Events