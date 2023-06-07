import React from 'react'
import './Projects.scss'
import Heading from '../../components/Headings/Heading'
import ProjectCard from './ProjectCard'

const NotableAlumni = () => {

  const data = [
    {
      imgUrl: "./images/faculty.png",
      desc: "Short Description about the alumni.",
      title: "Alumni's name",
      Branch: 'B.Tech. Electrical,1981',
    },
    {
      imgUrl: "./images/faculty.png",
      desc: "Short Description about the alumni.",
      title: "Alumni's name",
      Branch: 'B.Tech. Electrical,1981',
    },
    {
      imgUrl: "./images/faculty.png",
      desc: "Short Description about the alumni.",
      title: "Alumni's name",
      Branch: 'B.Tech. Electrical,1981',
    },
    {
      imgUrl: "./images/faculty.png",
      desc: "Short Description about the alumni.",
      title: "Alumni's name",
      Branch: 'B.Tech. Electrical,1981',
    },
    {
      imgUrl: "./images/faculty.png",
      desc: "Short Description about the alumni.",
      title: "Alumni's name",
      Branch: 'B.Tech. Electrical,1981',
    },
  ]

  return (
    <div>
      <Heading heading="Notable Alumni" heading1="of NIT Patna"></Heading>
      <div className='project-container flex flex-col gap-10 md:grid grid-wrap grid-cols-2 gap-10 p-5 '>
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