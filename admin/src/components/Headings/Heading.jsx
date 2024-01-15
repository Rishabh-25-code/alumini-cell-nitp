import React from 'react'
import './Heading.scss'

const Heading = ({ heading }) => {
    return (
        <h1 className='font-extrabold text-transparent lg:text-6xl md:text-5xl text-4xl bg-clip-text bg-gradient-to-r from-blue-100  to-sky-600 large-heading ml-10'>{heading}</h1>
    )
}

export default Heading