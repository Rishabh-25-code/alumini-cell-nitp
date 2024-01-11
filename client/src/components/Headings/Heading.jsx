import React from 'react'
import './Heading.scss'

const Heading = ({ heading, heading1 }) => {
    return (
        <div className='relative'>
            <div className='heading-banner  flex flex-col'>
                <h2 className='heading-head-text'>{heading}</h2>
                <p className='heading-head-text lg:text-6xl md:text5xl text-4xl pt-4'>{heading1}</p>
            </div>
        </div>
    )
}

export default Heading;

const PageHeading = ({ heading, heading1 }) => {
    return (
        <div className='py-5'>
            <div className='flex gap-2'>
                <h2 className='md:text-4xl text-3xl font-bold text-sky-500'>{heading}</h2>
                <p className='md:text-4xl text-3xl font-bold text-white'>{heading1}</p>
            </div>
        </div>
    )
}

export { PageHeading }