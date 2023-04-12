import React, { useState, useEffect } from "react";
import "./Newsletter.scss";
import Heading from "../../components/Headings/Heading";
import News from "./News";
import { db } from "../../firebase";
import { toast } from "react-toastify";
import { collection, getDocs, deleteDoc, doc, query } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

const Newsletter = () => {
  const [newsletters, setNewsletters] = useState();
  const [loading, setLoading] = useState(true);
  const newsRef = collection(db, "news");
  const navigate = useNavigate();

  // get newsletters from firebase
  const getEvents = async () => {
    setLoading(true);
    try {
      const newsSnap = await getDocs(query(newsRef));
      setNewsletters(
        newsSnap.docs.map((doc) => ({ uid: doc.id, ...doc.data() }))
      );
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
    const confirm = window.confirm(
      "Are you sure you want to delete this Newsletter?"
    );
    if (!confirm) return;

    try {
      await deleteDoc(doc(db, "news", id));
      toast.success("News deleted successfully!");
      setNewsletters(newsletters.filter((news) => news.uid !== id));
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleEdit = (id) => {
    navigate(`/editNews/${id}`);
  };

  return (
    <div className="pt-16">
      <Heading heading="NEWS" />
      <div className="news-grid lg:max-w-[85rem] m-auto">
        {loading ? (
          <div>loading...</div>
        ) : newsletters.length === 0 ? (
          <div className="flex mt-10 gap-10 flex-col items-center justify-center">
            <h3>No Newsletters to show.</h3>
            <Link to="/createNews"><button className="py-2 px-10 bg-gradient-to-r text-white font-medium rounded-full from-indigo-500 to-sky-600">Create Newsletter</button></Link>
          </div>
        ) : (
          newsletters.map((news, index) => (
            <div key={index} className="">
              <News date={"1-02-2023"} title={news.title} info={news.details} />
              <div className="justify-center flex space-x-10">
                <button
                  onClick={() => deleteNews(news.uid)}
                  className="inline-block rounded bg-danger px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)]"
                >
                  {" "}
                  DELETE{" "}
                </button>
                <button
                  onClick={() => handleEdit(news.uid)}
                  className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  {" "}
                  EDIT{" "}
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Newsletter;
