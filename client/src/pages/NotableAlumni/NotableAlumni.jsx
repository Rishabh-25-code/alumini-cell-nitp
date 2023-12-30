import React from 'react'
import './Projects.scss'
import Heading from '../../components/Headings/Heading'
import AlumniCard from './AlumniCard'
import Meta from '../../components/Meta/Meta'

const NotableAlumni = () => {

  const notableAlums = [
    {
      name: "Manas Bihari Verma",
      designation: "Scientist",
      about: "Manas Bihari Verma was an Indian aeronautical scientist instrumental in the development of the light combat aircraft, Tejas. In 2018, he was conferred the Padma Sri civilian honour by the President of India.",
      image: "./notable-alumni/manas-bihari-verma.jpg",
      id: 1
    },
    {
      name: "Shri. Nitish Kumar",
      designation: "Chief Minister of Bihar",
      about: "Nitish Kumar is an Indian politician who has been the Chief Minister of Bihar, a state in eastern India, since 2017. Previously he served as the Chief Minister of Bihar from 2005 to 2014 and from 2015 to 2017.",
      image: "./notable-alumni/nitish-kumar.webp",
      id: 2
    },
    {
      name: "Dr. Ratan Kumar Sinha",
      designation: "Former Chairman, Atomic Energy Commission",
      about: "Dr. Ratan Kumar Sinha is an Indian nuclear scientist who served as the chairman of the Atomic Energy Commission of India and the Secretary to the Government of India, Department of Atomic Energy from 2012 to 2015.",
      image: "./notable-alumni/Ratan_Kumar_Sinha.jpg",
      id: 3
    },
    {
      name: "Bindeshwari Dubey",
      designation: "Former Chief Minister of Bihar",
      about: "Bindeshwari Dubey was an Indian politician from Bihar. He was a member of the Indian National Congress and served as the Chief Minister of Bihar from 1985 to 1988.",
      image: "./notable-alumni/vindeshwari-dubey.webp",
      id: 4
    },
    {
      name: "Bhubaneswar Behera",
      designation: "Engineer, writer and scholar",
      about: "Bhubaneswar Behera was an engineer, writer and scholar from the Kalahandi district of Odisha. He was born in a village called Kusurla in Kalahandi district. He was the first person from Kalahandi to become an engineer.",
      image: "./notable-alumni/bubneshwar-behere.jpg",
      id: 5
    },
    {
      name: "Dr. Parth p Gopmandal",
      designation: "Assistant Professor",
      about: "Dr. Partha P. Gopmandal. Asst. Prof., Dept. of Mathematics. He currently works at the Department of Mathematics, National Institute of Technology Durgapur.",
      image: "./notable-alumni/parth-p-gopmandal.jfif",
      id: 6
    },
    {
      name: "Ajit Kumar Mehta",
      designation: "Former Member of Parliament",
      about: "Ajit Kumar Mehta was member of 6th Lok Sabha from Samastipur in Bihar State, India. He was elected to 7th, 11th and 12th Lok Sabha from Samastipur. Before joining active politics, Mehta was an educationist, working as professor at Birla Institute of Technology Mesra. ",
      image: "./notable-alumni/Ajit_Kumar_Mehta.jpg",
      id: 7
    }
  ]


  return (
    <div>
      <Meta name="Notable Alumni" />
      <Heading heading="Notable Alumni" heading1="of NIT Patna"></Heading>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-start items-start lg:px-5 px-6 lg:gap-6 gap-8 py-16'>
        {
          notableAlums.map((alum, i) => (
            <AlumniCard key={i} alum={alum} />
          ))
        }
      </div>
    </div>
  )
}

export default NotableAlumni