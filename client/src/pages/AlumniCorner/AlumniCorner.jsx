import React from 'react'
import Heading from '../../components/Headings/Heading'
import Card from "../../components/Carousel/Card";
import Profile from '../../components/Profile/Profile';

const AlumniCorner = () => {
  return (
    <div>
      <Heading heading="Alumni Corner"></Heading>
      <Card
        head="Nobody is bothered about an instiution more than its Alumini."
        writer="~ K Narayan Murthy"
      />
      <Profile
        name="Lorem Ipsum"
        designation="Lorem Ipsum"
        img="https://picsum.photos/200"
      />
    </div>
  )
}

export default AlumniCorner