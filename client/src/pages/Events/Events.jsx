import React from 'react'
import './Events.scss'
import Heading from '../../components/Headings/Heading'
import Card from "../../components/Carousel/Card";
import EventCard from './EventCard'

const Events = () => {

  const events = [
    {
      id: 0,
      name: "Algorand Introductory Session",
      image: "https://github.com/Harshkumar62367/CampusCrate/raw/main/CampusCrate.png",
      clubName: "TESLA Club",
      description: "Algorand is a public, decentralized, permissionless blockchain and cryptocurrency protocol that aims to deliver decentralization, scale and security for all participants. Algorand uses a Pure Proof-of-Stake (PPoS) consensus protocol that ensures full participation, protection, and speed within a truly decentralized network. With blocks finalized in seconds, Algorand’s transaction throughput is on par with large payment and financial networks. And Algorand is the first blockchain to provide immediate transaction finality.",
      date: "2023-05-25",
      time: "10:00 AM",
      venue: "LT-1",
      link: "https://www.google.com"
    },
    {
      id: 1,
      name: "Algorand Introductory Session",
      image: "https://github.com/Harshkumar62367/CampusCrate/raw/main/CampusCrate.png",
      clubName: "TESLA Club",
      description: "Algorand is a public, decentralized, permissionless blockchain and cryptocurrency protocol that aims to deliver decentralization, scale and security for all participants. Algorand uses a Pure Proof-of-Stake (PPoS) consensus protocol that ensures full participation, protection, and speed within a truly decentralized network. With blocks finalized in seconds, Algorand’s transaction throughput is on par with large payment and financial networks. And Algorand is the first blockchain to provide immediate transaction finality.",
      date: "2023-05-25",
      time: "10:00 AM",
      venue: "LT-1",
      link: "https://www.google.com"
    },
    {
      id: 2,
      name: "Algorand Introductory Session",
      image: "https://github.com/Harshkumar62367/CampusCrate/raw/main/CampusCrate.png",
      clubName: "TESLA Club",
      description: "Algorand is a public, decentralized, permissionless blockchain and cryptocurrency protocol that aims to deliver decentralization, scale and security for all participants. Algorand uses a Pure Proof-of-Stake (PPoS) consensus protocol that ensures full participation, protection, and speed within a truly decentralized network. With blocks finalized in seconds, Algorand’s transaction throughput is on par with large payment and financial networks. And Algorand is the first blockchain to provide immediate transaction finality.",
      date: "2023-05-25",
      time: "10:00 AM",
      venue: "LT-1",
      link: "https://www.google.com"
    },
    {
      id: 3,
      name: "Algorand Introductory Session",
      image: "https://github.com/Harshkumar62367/CampusCrate/raw/main/CampusCrate.png",
      clubName: "TESLA Club",
      description: "Algorand is a public, decentralized, permissionless blockchain and cryptocurrency protocol that aims to deliver decentralization, scale and security for all participants. Algorand uses a Pure Proof-of-Stake (PPoS) consensus protocol that ensures full participation, protection, and speed within a truly decentralized network. With blocks finalized in seconds, Algorand’s transaction throughput is on par with large payment and financial networks. And Algorand is the first blockchain to provide immediate transaction finality.",
      date: "2023-05-25",
      time: "10:00 AM",
      venue: "LT-1",
      link: "https://www.google.com"
    },
    {
      id: 4,
      name: "Algorand Introductory Session",
      image: "https://github.com/Harshkumar62367/CampusCrate/raw/main/CampusCrate.png",
      clubName: "TESLA Club",
      description: "Algorand is a public, decentralized, permissionless blockchain and cryptocurrency protocol that aims to deliver decentralization, scale and security for all participants. Algorand uses a Pure Proof-of-Stake (PPoS) consensus protocol that ensures full participation, protection, and speed within a truly decentralized network. With blocks finalized in seconds, Algorand’s transaction throughput is on par with large payment and financial networks. And Algorand is the first blockchain to provide immediate transaction finality.",
      date: "2023-05-25",
      time: "10:00 AM",
      venue: "LT-1",
      link: "https://www.google.com"
    },
    {
      id: 5,
      name: "Algorand Introductory Session",
      image: "https://github.com/Harshkumar62367/CampusCrate/raw/main/CampusCrate.png",
      clubName: "TESLA Club",
      description: "Algorand is a public, decentralized, permissionless blockchain and cryptocurrency protocol that aims to deliver decentralization, scale and security for all participants. Algorand uses a Pure Proof-of-Stake (PPoS) consensus protocol that ensures full participation, protection, and speed within a truly decentralized network. With blocks finalized in seconds, Algorand’s transaction throughput is on par with large payment and financial networks. And Algorand is the first blockchain to provide immediate transaction finality.",
      date: "2023-05-25",
      time: "10:00 AM",
      venue: "LT-1",
      link: "https://www.google.com"
    },
  ]



  return (
    <div>
      <Heading heading="EVENTS"></Heading>
      {/* <Card
        head="Important events that were held in our college."
        writer="like the alumini meet of the 19's batch"
      /> */}

      <div className='flex flex-wrap gap-6 m-auto px-5 items-center justify-center mb-32'>
        {events.map((event, id) => (
          <EventCard data={event} key={id} />
        ))}
      </div>

    </div>
  )
}

export default Events