import React, { useState, useEffect } from "react";
import "./Newsletter.scss";
import Heading from "../../components/Headings/Heading";
import News from "./News";
import { db } from "../../firebase";
import { collection, query, orderBy, getDocs } from "firebase/firestore";

const Newsletter = () => {
  const [newsletters, setNewsletters] = useState();
  const [loading, setLoading] = useState(true);
  const newsRef = collection(db, "news");

  // get newsletters from firebase
  const getEvents = async () => {
    setLoading(true);
    try {
      const eventSnap = await getDocs(newsRef);
      const data = eventSnap.docs.map((doc) => doc.data());
      setNewsletters(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div className="pt-16">
      <Heading heading="NEWS" />
      <div className="news-grid lg:max-w-[85rem] m-auto">
        {loading ? (
          <div>loading...</div>
        ) : (
          newsletters.map((news, index) => (
            <News
              key={index}
              date={news.date}
              title={news.title}
              info={news.details}
              id={index}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Newsletter;
