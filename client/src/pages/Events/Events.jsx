import { useState, useEffect, memo, useCallback } from "react"
import Heading from '../../components/Headings/Heading'
import Card from "../../components/Carousel/Card";
import EventCard from './EventCard'
import Meta from '../../components/Meta/Meta';
import Loader from "../../components/Loader";
import { useQuery } from "@tanstack/react-query"
import { getDocuments } from "../../services/documents"

const Events = () => {
  // const events = [
  //   {
  //     id: 0,
  //     name: "Conference on Computational Intelligence Communications and Business Analytics.",
  //     image: "/images/events/computational intelligence.jpg",
  //     clubName: " CSE Department",
  //     description: " ",
  //     date: "2024-01-23",
  //     time: "10:00 AM",
  //     venue: "Meghnadh Saha Hall",
  //     link: "https://www.google.com"
  // },
  //   {
  //       id: 1,
  //       name: "Alumni Meet 2023",
  //       image: "/images/Meet5300/DSC_0139-min.jpg",
  //       clubName: "Alumni Cell",
  //       description: " ",
  //       date: "2023-12-24",
  //       time: "10:00 AM",
  //       venue: "OAT",
  //       link: "https://www.google.com"
  //   },
  //   {
  //       id: 2,
  //       name: "ICEFEET",
  //       image: "/images/icefeet/icefeet12.jpeg",
  //       clubName: "IEEE",
  //       description: " ",
  //       date: "2023-12-23",
  //       time: "10:00 AM",
  //       venue: "Visvesvaraya Hall",
  //       link: "https://www.google.com"
  //   },
  //   {
  //       id: 3,
  //       name: "One Mic Stand",
  //       image: "/images/events/standup-min.jpg",
  //       clubName: "Natvansh",
  //       description: " ",
  //       date: "2023-11-07",
  //       time: "10:00 AM",
  //       venue: "LT-1",
  //       link: "https://www.google.com"
  //   },
  //   {
  //       id: 4,
  //       name: "Vimantriki",
  //       image: "/images/events/vimantriki-min.jpg",
  //       clubName: "Tesla",
  //       description: " ",
  //       date: "2023-11-04",
  //       time: "10:00 AM",
  //       venue: "Visvesvaraya Hall",
  //       link: "https://www.google.com"
  //   },
  //   {
  //       id: 5,
  //       name: "Eccentrica 5.0",
  //       image: "/images/events/eccentrica-min.jpg",
  //       clubName: "",
  //       description: " ",
  //       date: "2023-11-22",
  //       time: "10:00 AM",
  //       venue: "OAT",
  //       link: "https://www.google.com"
  //   },
  //   {
  //       id: 6,
  //       name: "Physics Workshop",
  //       image: "/images/events/physicsworkshop-min.jpg",
  //       clubName: "",
  //       description: " ",
  //       date: "2023-05-25",
  //       time: "10:00 AM",
  //       venue: "LT-1",
  //       link: "https://www.google.com"
  //   },
  //   {
  //       id: 7,
  //       name: "Doodle Art",
  //       image: "/images/events/doodle-min.jpg",
  //       clubName: "Expresso",
  //       description: " ",
  //       date: "2023-11-10",
  //       time: "10:00 AM",
  //       venue: "SAC Building",
  //       link: "https://www.google.com"
  //   }
  // ]
    const { data, isLoading, isError } = useQuery({
        queryKey: ["events"],
        queryFn: () => getDocuments("events"),
        staleTime: Infinity,
    });
//   useEffect(() => {
//     if (error) {
//         console.error("Error fetching data:", error);
//     }
// }, [error]);


  return (
    <div>
      <Meta name="Events" />
      <Heading heading="EVENTS"></Heading>
      <Card
        head=""
        writer=""
      />

      <h1 className='heading-head-text pt-16'>Past Events</h1>

      
      <div className="">
                    {isLoading ? (
                        <div className="flex justify-center items-center h-[10rem] w-full">
                            <Loader />
                        </div>
                    ) : isError ? (
                        <p>Something went wrong.</p>
                    ) : (
                      <div className='flex flex-wrap m-auto px-5 gap-y-5 gap-8 items-center justify-center mb-10'>
                      {data.map((event, index) => (
                        <EventCard data={event} key={index} />
                      ))}
                    </div>
                    )}
                </div>
    </div>
  )
}

export default Events