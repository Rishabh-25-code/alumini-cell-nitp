import React from 'react'
import Heading from "../../components/Headings/Heading";
import Meta from "../../components/Meta/Meta";
import { getPaginatedUnpublishedDocs, deleteDocument } from '../../services/documents';
import { useQuery } from "@tanstack/react-query";
import { useSearchParams, Link } from "react-router-dom";
import Loader from "../../components/Loader";
import { useState } from "react";
import { toast } from "react-toastify";
import { FaTrash } from 'react-icons/fa'

const Testimonials = () => {
  const [searchParams, setSearchParams] = useSearchParams({ page: 1, type: 'reviewing' });
  const type = searchParams.get('type') || 'reviewing';
  const page = parseInt(searchParams.get('page')) || 1;
  const [itemsPerPage, setItemsPerPage] = useState(24);

  const { data: Testimonials, isLoading, isError, refetch, error } = useQuery({
    queryKey: ['testimonials', page, type],
    queryFn: () => getPaginatedUnpublishedDocs('testimonials', itemsPerPage, itemsPerPage * (page - 1), type),
  });

  const changeParams = async (key, value) => {
    setSearchParams((prev) => {
      prev.set(key, value);
      return prev;
    }, { replace: true });
    window.scrollTo(0, 0);
    refetch();
  }

  const changeType = (newType) => {
    changeParams('type', newType);
    changeParams('page', 1);
  }

  const deleteTestimonial = async (id) => {
    try {
      await deleteDocument('testimonials', id);
      refetch();
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div className='pt-24'>
      <Meta name="Testimonials" />
      <Heading heading="Testimonials"></Heading>

      <div className='px-10 flex mt-6 gap-4'>
        <button onClick={() => {
          changeType('reviewing')
        }} className={`border-[#e9e1e1] border font-semibold  px-5 py-2 text-base rounded-xl hover:bg-[#e9e1e1] hover:text-gray-900 ${type === "reviewing" ? 'bg-[#e9e1e1] text-gray-900' : 'text-[#e9e1e1]'}`}>
          Reviewing
        </button>
        <button onClick={() => changeType('published')} className={`border-[#e9e1e1] border font-semibold  px-5 py-2 text-base rounded-xl hover:bg-[#e9e1e1] hover:text-gray-900 ${type === "published" ? 'bg-[#e9e1e1] text-gray-900' : 'text-[#e9e1e1]'}`}>
          Published
        </button>
        <button onClick={() => changeType('rejected')} className={`border-[#e9e1e1] border font-semibold  px-5 py-2 text-base rounded-xl hover:bg-[#e9e1e1] hover:text-gray-900 ${type === "rejected" ? 'bg-[#e9e1e1] text-gray-900' : 'text-[#e9e1e1]'}`}>
          Rejected
        </button>
      </div>
      <div className="flex flex-col gap-16 pt-10 items-center justify-center">
        {isLoading ? (
          <div className="py-16">
            <Loader />
          </div>
        ) : isError ? <div className="text-center text-red-500 py-16">{error.message}</div> :
          Testimonials.length === 0 ? <div className="text-center py-16 font-medium text-sky-500">No Testimonials found! </div>
            : (
              <div className="lg:w-[90%] md:w-[95%] gap-6 w-full m-auto px-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mb-32 mt-10 place-items-center">
                {Testimonials.map((Testimonial, idx) => <TestimonialCard deleteTestimonial={deleteTestimonial} data={Testimonial} key={idx} />)}
              </div>
            )}

        {Testimonials && Testimonials.length !== 0 && (
          <>
            <div data-aos="fade-up" className="text-center px-3 pt-16">
              Showing <span className="text-sky-500">{Testimonials.length}</span> results of page <span className="text-sky-500">{page}</span>.
            </div>

            <div data-aos="fade-up" className="flex items-center justify-center gap-10 px-6">
              <button
                disabled={page <= 1}
                onClick={() => changeParams('page', page - 1)}
                className="px-8 py-2.5 rounded-xl bg-white disabled:bg-gray-400 text-gray-900 text-lg font-semibold"
              >
                Prev
              </button>
              <button
                disabled={itemsPerPage > Testimonials.length}
                onClick={() => changeParams('page', page + 1)}
                className="px-8 py-2.5 rounded-xl bg-white disabled:bg-gray-400 text-gray-900 text-lg font-semibold"
              >
                Next
              </button>
            </div>
          </>
        )}

      </div>
    </div>
  )
}

export default Testimonials;


const TestimonialCard = ({ data, deleteTestimonial }) => {
  return (
    <Link data-aos="fade-up"
      to={`/testimonial/${data.$id}`}
      className="w-full max-w-sm min-w-[18rem] rounded-2xl relative">
        <button onClick={(e) => {
            e.preventDefault();
            const res = window.confirm('Are you sure you want to delete this testimonial?');
            if (res) {
              toast.promise(
                deleteTestimonial(data.$id),
                {
                  loading: 'Deleting testimonial...',
                  success: 'Testimonial deleted successfully!',
                  error: 'Failed to delete testimonial!'
                })
            }
          }} className='absolute z-40 top-5 right-5 p-2 text-rose-500 hover:text-red-500'>
            <FaTrash size={22} />
          </button>
      <div data-aos="fade-up" className='flex' >
        <div className='border-[1px] border-gray-500 border-b-cyan-500 hover:border-b-cyan-600 border-b-8 rounded-2xl w-full p-3 pt-5 pb-7 hover:scale-[101%] z-0 hover:z-10 transition-all delay-[30ms] ease-in-out m-1 bg-[#000000] bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] py-10'>
          <div className='rounded'>
            <p className='px-2'>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-sky-400 mb-6" height="38" width="38" xmlns="http://www.w3.org/2000/svg"><path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z">
              </path>
              </svg>
            </p>
            <p className='text-justify m-2'>{data.message}</p>
          </div>
          <div className='flex items-center lg:gap-5 md:gap-3 gap-2 mt-6 px-2'>
            <div>
              <h2 className='text-base font-medium'><span className='text-sky-500 font-semibold text-lg'>{data.name}</span> ({data.branch} {data.batch})</h2>
              <p className='text-gray-500 text-sm font-medium leading-5 mt-1'>
                {data.currentPost} at {data.currentCompany}
              </p>
              <p>
                <span className='text-gray-500 text-sm font-medium leading-5 mt-1'>
                  {data.currentCity}, {data.currentLocation}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}