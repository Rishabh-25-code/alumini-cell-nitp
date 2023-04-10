import React from "react";
import "./Newsletter.scss";
import {Link} from 'react-router-dom'

const News = ({ date, title, info, id }) => {

  return (
    <>
      <div data-aos="fade-up" className="newsletter-card shadow-md">
        <div className="card-img flex items-center justify-center">
          <img
            className="hover:scale-[102%] transition-all delay-75 ease-in"
            src="images/faculty.png"
            alt="Event-image"
          />
        </div>
        <div className="card-info">
          <p className="text-base text-gray-400 font-medium">{date}</p>
          <h1 className="text-2xl font-semibold py-1">{title}</h1>
          <p className="text-base text-gray-400 font-medium">
            {info.slice(0,100)}
          </p>
          <Link to={`/news/${id}`}>
            <button>Read</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default News;
