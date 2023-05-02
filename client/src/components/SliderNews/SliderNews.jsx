import React from 'react'
import './SliderNews.css'

const newsdata = [
  {
    title: "news event",
    content: "Five days Online STTP on Security and Privacy Trends in Internet of Things (IoT)",
    link: "/"
  },
  {
    title: "Event 1",
    content: "Notice : stage-2 and stage-3 examination for the recruitment to the post of Junior Assistant",
    link: "/news/blog1"
  },
  {
    title: "Event 2",
    content: " Notice : stage-2 and stage-3 examination for the recruitment to the post of Junior Assistant ",
    link: "/news/blog2"
  },
  {
    title: "Event 3",
    content: " Notice : stage-2 and stage-3 examination for the recruitment to the post of Junior Assistant",
    link: "/news/blog3"
  },
  {
    title: "Event 4",
    content: " Notice : stage-2 and stage-3 examination for the recruitment to the post of Junior Assistant ",
    link: "/news/blog4"
  },
  {
    title: "Event 5",
    content: " Notice : stage-2 and stage-3 examination for the recruitment to the post of Junior Assistant ",
    link: ""
  },
  {
    title: "Event 6",
    content: " Notice : stage-2 and stage-3 examination for the recruitment to the post of Junior Assistant ",
    link: ""
  },
  {
    title: "Event 7",
    content: " Notice : stage-2 and stage-3 examination for the recruitment to the post of Junior Assistant ",
    link: ""
  },
  {
    title: "Event event",
    content: "Five days Online STTP on Security and Privacy Trends in Internet of Things (IoT)",
    link: "/"
  },
  {
    title: "Event blog 1",
    content: "Notice : stage-2 and stage-3 examination for the recruitment to the post of Junior Assistant",
    link: "/news/blog1"
  },
  {
    title: "Robotica blog 2",
    content: " Notice : stage-2 and stage-3 examination for the recruitment to the post of Junior Assistant ",
    link: "/news/blog2"
  },
  {
    title: "Event 3",
    content: " Notice : stage-2 and stage-3 examination for the recruitment to the post of Junior Assistant",
    link: "/news/blog3"
  },
  {
    title: "Event 4",
    content: " Notice : stage-2 and stage-3 examination for the recruitment to the post of Junior Assistant ",
    link: "/news/blog4"
  },
  {
    title: "Event 5",
    content: " Notice : stage-2 and stage-3 examination for the recruitment to the post of Junior Assistant ",
    link: ""
  },
  {
    title: "Event 6",
    content: " Notice : stage-2 and stage-3 examination for the recruitment to the post of Junior Assistant ",
    link: ""
  },
  {
    title: "Event 7",
    content: " Notice : stage-2 and stage-3 examination for the recruitment to the post of Junior Assistant ",
    link: ""
  },
  {
    title: "Event event",
    content: "Five days Online STTP on Security and Privacy Trends in Internet of Things (IoT)",
    link: "/"
  },
  {
    title: "Event 1",
    content: "Notice : stage-2 and stage-3 examination for the recruitment to the post of Junior Assistant",
    link: "/news/blog1"
  },
  {
    title: "Event 2",
    content: " Notice : stage-2 and stage-3 examination for the recruitment to the post of Junior Assistant ",
    link: "/news/blog2"
  },
  {
    title: "Event 3",
    content: " Notice : stage-2 and stage-3 examination for the recruitment to the post of Junior Assistant",
    link: "/news/blog3"
  },
  {
    title: "Event 4",
    content: " Notice : stage-2 and stage-3 examination for the recruitment to the post of Junior Assistant ",
    link: "/news/blog4"
  },
  {
    title: "Event 5",
    content: " Notice : stage-2 and stage-3 examination for the recruitment to the post of Junior Assistant ",
    link: ""
  },
  {
    title: "Event 6",
    content: " Notice : stage-2 and stage-3 examination for the recruitment to the post of Junior Assistant ",
    link: ""
  },
  {
    title: "Event 7",
    content: " Notice : stage-2 and stage-3 examination for the recruitment to the post of Junior Assistant ",
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