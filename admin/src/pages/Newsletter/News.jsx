import React from 'react'
import './Newsletter.scss'

const News = () => {
  return (
    <>
      <div data-aos="fade-up" className="newsletter-card shadow-md">
        <div className="card-img flex items-center justify-center">
          <img className='hover:scale-[102%] transition-all delay-75 ease-in' src="../../../public/images/faculty.png" alt="Event-image" />
        </div>
        <div className="card-info">
          <p className='text-base text-gray-400 font-medium'>2022-11-01</p>
          <h1 className='text-2xl font-semibold py-1'>News Heading</h1>
          <p className='text-base text-gray-400 font-medium'>Details about the news..</p>
          <a href="#">
            <button>Read →</button>
          </a>
        </div>
      </div>
    </>
  )
}

export default News