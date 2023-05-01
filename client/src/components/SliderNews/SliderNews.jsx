import React from 'react'
import './SliderNews.css'

const newsdata = [
  {
    title: "Robotica event",
    content: "Robotics Club Fresher's Orientation on 5th February 2022",
    link: "/"
  },
  {
    title: "Robotica blog 1",
    content: " Robotica's 1st Blog - `3D Printing` is out now ",
    link: "/news/blog1"
  },
  {
    title: "Robotica blog 2",
    content: " Robotica's 2nd Blog - `Will Automation Lead To Mass Unemployment ?` is out now ",
    link: "/news/blog2"
  },
  {
    title: "Robotica blog 3",
    content: " Robotica's 3rd Blog - `How useful have robots been during this Pandemic ?` is out now ",
    link: "/news/blog3"
  },
  {
    title: "Robotica blog 4",
    content: " Robotica's 4th Blog - `Intro to BlockChain` is out now ",
    link: "/news/blog4"
  },
  {
    title: "Robotica blog 5",
    content: " Robotica's 5th Blog - `Data Privacy and Data Breach` is out now ",
    link: ""
  },
  {
    title: "Robotica blog 6",
    content: " Robotica's 6th Blog - `5G Technology` is out now ",
    link: ""
  },
  {
    title: "Robotica blog 7",
    content: " Robotica's 7th Blog - `Green Computing` is out now ",
    link: ""
  },
  {
    title: "Robotica event",
    content: "Robotics Club Fresher's Orientation on 5th February 2022",
    link: "/"
  },
  {
    title: "Robotica blog 1",
    content: " Robotica's 1st Blog - `3D Printing` is out now ",
    link: "/news/blog1"
  },
  {
    title: "Robotica blog 2",
    content: " Robotica's 2nd Blog - `Will Automation Lead To Mass Unemployment ?` is out now ",
    link: "/news/blog2"
  },
  {
    title: "Robotica blog 3",
    content: " Robotica's 3rd Blog - `How useful have robots been during this Pandemic ?` is out now ",
    link: "/news/blog3"
  },
  {
    title: "Robotica blog 4",
    content: " Robotica's 4th Blog - `Intro to BlockChain` is out now ",
    link: "/news/blog4"
  },
  {
    title: "Robotica blog 5",
    content: " Robotica's 5th Blog - `Data Privacy and Data Breach` is out now ",
    link: ""
  },
  {
    title: "Robotica blog 6",
    content: " Robotica's 6th Blog - `5G Technology` is out now ",
    link: ""
  },
  {
    title: "Robotica blog 7",
    content: " Robotica's 7th Blog - `Green Computing` is out now ",
    link: ""
  },
  {
    title: "Robotica event",
    content: "Robotics Club Fresher's Orientation on 5th February 2022",
    link: "/"
  },
  {
    title: "Robotica blog 1",
    content: " Robotica's 1st Blog - `3D Printing` is out now ",
    link: "/news/blog1"
  },
  {
    title: "Robotica blog 2",
    content: " Robotica's 2nd Blog - `Will Automation Lead To Mass Unemployment ?` is out now ",
    link: "/news/blog2"
  },
  {
    title: "Robotica blog 3",
    content: " Robotica's 3rd Blog - `How useful have robots been during this Pandemic ?` is out now ",
    link: "/news/blog3"
  },
  {
    title: "Robotica blog 4",
    content: " Robotica's 4th Blog - `Intro to BlockChain` is out now ",
    link: "/news/blog4"
  },
  {
    title: "Robotica blog 5",
    content: " Robotica's 5th Blog - `Data Privacy and Data Breach` is out now ",
    link: ""
  },
  {
    title: "Robotica blog 6",
    content: " Robotica's 6th Blog - `5G Technology` is out now ",
    link: ""
  },
  {
    title: "Robotica blog 7",
    content: " Robotica's 7th Blog - `Green Computing` is out now ",
    link: ""
  },
]

const SliderNews = () => {
  return (

    <div className="slider">
      <div className="slide-track">

        {newsdata.map((obj, i) => {
          var pclass = "news news" + (i + 1);
          return (
            <div key={i} className="slide">
              <p className={`${pclass} `}><a href={obj.link} target="_parent">{obj.content}</a></p>
            </div>
          )
        })}

      </div>
    </div>

  )
}

export default SliderNews