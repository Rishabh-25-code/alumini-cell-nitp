import React from 'react'
import './Events.scss'
import Heading from '../../components/Headings/Heading'
import Card from "../../components/Carousel/Card";

const Events = () => {
  return (
    <div>
      <Heading heading="EVENTS"></Heading>
      <Card
        head="Important events that were held in our college."
        writer="like the alumini meet of the 19's batch"
      />
    </div>
  )
}

export default Events