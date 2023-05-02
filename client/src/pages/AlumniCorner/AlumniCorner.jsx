import React from 'react'
import Heading from '../../components/Headings/Heading'
import Card from "../../components/Carousel/Card";
import Awards from "../../components/Awards/Awards"
import Testimonials from '../../components/Testimonials/Testimonials';


const AlumniCorner = () => {

  return (
    <div>
      <Heading heading="Alumni Corner"></Heading>
      <Card
        head="Nobody is bothered about an instiution more than its Alumini."
        writer="~ K Narayan Murthy"
      />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h2 className='heading-head-text'>Awards</h2>
      <Awards />
      <h2 className='heading-head-text'>Testimonials</h2>
      <Testimonials />
    </div>
  )
}

export default AlumniCorner