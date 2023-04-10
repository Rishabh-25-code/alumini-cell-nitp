import React, { useState, useEffect } from "react";
import "./Newsletter.scss";
import Heading from "../../components/Headings/Heading";
import News from "./News";
import { db } from "../../firebase";
import { toast } from "react-toastify";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

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

  //delete newsletter
  const deleteNews = async (id) => {
    try {
      await deleteDoc(doc(db, "news", id));
      // setNewsletters(newsletters.filter((news) => news.id !== id));
      toast.success("News deleted successfully!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="pt-16">
      <Heading heading="NEWS" />
      <div className="news-grid lg:max-w-[85rem] m-auto">
        {loading ? (
          <div>loading...</div>
        ) : (
          newsletters.map((news, index) => (
            <div key={index}>
              <News
                date={"1-02-2023"}
                title={news.title}
                info={news.details}
                id={index}
              />
              <button onClick={() => deleteNews(news.id)}> DELETE </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Newsletter;
