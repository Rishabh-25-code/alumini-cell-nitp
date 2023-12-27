import React from 'react'
import './Heading.scss'

const Heading = ({ heading, heading1 }) => {
    return (
        <div className='relative'>
            <div className='heading-banner  flex flex-col'>
                <h2 className='heading-head-text'>{heading}</h2>
                <p className='heading-head-text text-6xl pt-4'>{heading1}</p>
            </div>
        </div>
    )
}

export default Heading