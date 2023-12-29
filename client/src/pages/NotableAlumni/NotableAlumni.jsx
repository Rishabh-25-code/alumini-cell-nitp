import React from 'react'
import './Projects.scss'
import Heading from '../../components/Headings/Heading'
import ProjectCard from './ProjectCard'

const NotableAlumni = () => {

  const data = [
    {
      imgUrl: "../../../public/images/faculty.png",
      desc: "Short Description about the alumni.",
      title: "Alumni's name",
      Branch: 'B.Tech. Electrical,1981'
    },
    {
      imgUrl: "../../../public/images/faculty.png",
      desc: "Short Description about the alumni.",
      title: "Alumni's name",
      Branch: 'B.Tech. Electrical,1981'
    },
    {
      imgUrl: "../../../public/images/faculty.png",
      desc: "Short Description about the alumni.",
      title: "Alumni's name",
      Branch: 'B.Tech. Electrical,1981'
    },
    {
      imgUrl: "../../../public/images/faculty.png",
      desc: "Short Description about the alumni.",
      title: "Alumni's name",
      Branch: 'B.Tech. Electrical,1981'
    },
    {
      imgUrl: "../../../public/images/faculty.png",
      desc: "Short Description about the alumni.",
      title: "Alumni's name",
      Branch: 'B.Tech. Electrical,1981'
    },
    {
      imgUrl: "../../../public/images/faculty.png",
      desc: "Short Description about the alumni.",
      title: "Alumni's name",
      Branch: 'B.Tech. Electrical,1981'
    },
  ]

  return (
    <div>
      <Heading heading="Notable Alumni" heading1="of NIT Patna"></Heading>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-16 gap-8 py-16'>
        {
          data.map((project, i) => (
            <ProjectCard key={i} imgUrl={project.imgUrl} desc={project.desc} title={project.title} Branch={project.Branch} />
          ))
        }
      </div>
    </div>
  )
}

export default NotableAlumni