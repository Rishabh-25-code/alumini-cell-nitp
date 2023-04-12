



import React from "react";
import "./Newsletter.scss";
// import { Link } from "react-router-dom";
import Heading from "../../components/Headings/Heading";
// import { db } from "../../firebase";
// import { collection, getDoc, doc } from "firebase/firestore";

const NewsId = () => {
//   const newsRef = collection(db, "news", "zjKbUppUdfeCkU2eQi93");
//   const getNews = async () => {
//     try {
//       await getDoc(newsRef);
//       const data = doc.data();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getNews();
//   }, []);

  return (
    <div className="pt-16">
      <Heading heading="Specific News" />
      <div>
        <h1>Work In Progress...</h1>
      </div>
      <div data-aos="fade-up" className="newsletter-card shadow-md">
        {/* <div className="card-info">
          <p className="text-base text-gray-400 font-medium">{data.title}</p>
          <h1 className="text-2xl font-semibold py-1">{data.title}</h1>
          <p className="text-base text-gray-400 font-medium">{data.details}</p>
        </div> */}
      </div>
    </div>
  );
};

export default NewsId;
