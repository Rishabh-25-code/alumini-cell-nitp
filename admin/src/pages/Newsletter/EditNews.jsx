import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc, getDoc, updateDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function CreateNews() {
  const navigate = useNavigate();
  const url = window.location.href;
  const uid = url.substring(url.lastIndexOf("/") + 1);

  const [formData, setFormData] = useState({
    title: "",
    details: "",
    date: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const getNews = () => {
    const docRef = doc(db, "news", uid);
    getDoc(docRef)
      .then((doc) => {
        if (doc.exists()) {
          setFormData({
            title: doc.data().title,
            details: doc.data().details,
            date: doc.data().date,
          });
        } else {
          // doc.data() will be undefined in this case
          toast.error("No such document!");
        }
      })
      .catch((error) => {
        toast.error("Error getting document");
      });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    if (formData.title === "" || formData.details === "" || formData.date) return;
    setSubmitting(true);
    try {
      const docRef = updateDoc(doc(db, "news", uid), formData);
      toast.success("News edited successfully!");
      setFormData({
        ...formData,
        title: "",
        details: "",
        date: "",
      });
      navigate("/news");
    } catch (e) {
      toast.error(e.message);
    }
    setSubmitting(false);
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <>
      <div className="pt-16">
        <section className="container mx-auto my-10 w-96">
          <header>Edit News</header>
          <form onSubmit={handleEdit}>
            <div className="space-y-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-full">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Title
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      required
                      placeholder="Title"
                      id="title"
                      value={formData.title}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-span-full">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Date
                  </label>
                  <div className="mt-2">
                    <input
                      type="date"
                      required
                      placeholder="Date"
                      id="date"
                      value={formData.date}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Details
                  </label>
                  <div className="mt-2">
                    <textarea
                      type="text"
                      required
                      placeholder="Details"
                      id="details"
                      value={formData.details}
                      className="block w-full h-36 rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="cover-photo"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Cover photo
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-300"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div className="mt-4 text-center justify-center flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span className="text-center">Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        PNG, JPG, GIF up to 2MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              {/* <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button> */}
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                disabled={submitting}
              >
                Submit
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}

export default CreateNews;

// import React from 'react'
// import './Newsletter.scss'
// import Heading from '../../components/Headings/Heading'
// import News from './News'
// import newsDashboard from './addNews'

// const Newsletter = () => {
//   return (
//     <div className='pt-16'>
//       <Heading heading="NEWS" />
//       <div className='news-grid lg:max-w-[85rem] m-auto'>
//         <newsDashboard />
//       </div>
//     </div>
//   )
// }

// export default Newsletter
