import React from 'react'
import './Projects.scss'
import Heading from '../../components/Headings/Heading'
import ProjectCard from './ProjectCard'

const NotableAlumni = () => {

  const data = [
    {
      imgUrl:"../../../public/images/faculty.png",
      desc:"Short Description about the alumni.",
      title:"Alumni's name"
    },
    {
      imgUrl:"../../../public/images/faculty.png",
      desc:"Short Description about the alumni.",
      title:"Alumni's name"
    },
    {
      imgUrl:"../../../public/images/faculty.png",
      desc:"Short Description about the alumni.",
      title:"Alumni's name"
    },
    {
      imgUrl:"../../../public/images/faculty.png",
      desc:"Short Description about the alumni.",
      title:"Alumni's name"
    },
    {
      imgUrl:"../../../public/images/faculty.png",
      desc:"Short Description about the alumni.",
      title:"Alumni's name"
    },
  ]

  return (
    <div>
      <Heading heading="Notable Alumni" heading1="of NIT Patna"></Heading>
      <div className='project-container'>
        {
          data.map((project,i)=>(
              <ProjectCard key={i} imgUrl={project.imgUrl} desc={project.desc} title={project.title}/>
          ))
        }
      </div> 
    </div>
  )
}

export default NotableAlumni