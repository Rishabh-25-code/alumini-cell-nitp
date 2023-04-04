import React from 'react'
import './Newsletter.scss'
import Heading from '../../components/Headings/Heading'
import News from './News'

const Newsletter = () => {

  const newsletters = [
    {
      date:"2022-11-01",
      title:"News Heading 1",
      info:"Details about the news..."
    },
    {
      date:"2022-11-01",
      title:"News Heading 2",
      info:"Details about the news..."
    },
    {
      date:"2022-11-01",
      title:"News Heading",
      info:"Details about the news..."
    },
    {
      date:"2022-11-01",
      title:"News Heading",
      info:"Details about the news..."
    },
    {
      date:"2022-11-01",
      title:"News Heading",
      info:"Details about the news..."
    },
    {
      date:"2022-11-01",
      title:"News Heading",
      info:"Details about the news..."
    },
  ]



  return (
    <div className='pt-16'>
      <Heading heading="NEWS" />
      <div className='news-grid lg:max-w-[85rem] m-auto'>
        {
          newsletters.map((news,index)=>(
            <News key={index} date={news.date} title={news.title} info={news.info} id={index} />
          ))
        }
      </div>
    </div>
  )
}

export default Newsletter