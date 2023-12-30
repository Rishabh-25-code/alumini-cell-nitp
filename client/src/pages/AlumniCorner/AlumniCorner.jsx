import React from 'react'
import Heading from '../../components/Headings/Heading'
import Card from "../../components/Carousel/Card";
import Meta from '../../components/Meta/Meta';



const AlumniCorner = () => {

  return (
    <div>
      <Meta name="Alumni Corner - NIT Patna" />
      <Heading heading="Alumni Corner"></Heading>
      <Card
        head="Nobody is bothered about an instiution more than its Alumini."
        writer="~ K Narayan Murthy"
      />
    </div>
  )
}

export default AlumniCorner