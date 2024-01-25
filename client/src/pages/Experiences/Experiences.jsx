import Loader from '../../components/Loader';
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from 'react-router-dom';
import BlogCard from '../AlumniCorner/BlogCard';
import Heading from '../../components/Headings/Heading';
import Meta from '../../components/Meta/Meta';
import { getPaginatedPublishedDocs } from '../../services/documents';
import { useState, useEffect } from 'react';
import { FiSearch } from "react-icons/fi";

const Experiences = () => {
  const [searchParams, setSearchParams] = useSearchParams({ page: 1, search: "" });
  const page = parseInt(searchParams.get('page')) || 1;
  const search = searchParams.get('search') || "";
  const [itemsPerPage] = useState(15);
  const [searchText, setSearchText] = useState(search);

  const { data: experiences, isLoading, isError } = useQuery({
    queryKey: ['experiences', page, search],
    queryFn: () => getPaginatedPublishedDocs('experiences', itemsPerPage, itemsPerPage * (page - 1), "published", search, "title"),
  });

  const changeParams = async (key, value) => {
    setSearchParams((prev) => {
      prev.set(key, value);
      if (key === "search") prev.set("page", 1);
      return prev;
    }, { replace: true });
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      changeParams('search', searchText);
    }, 500);

    // Cleanup the timer on component unmount
    return () => clearTimeout(debounceTimer);
  }, [searchText]);


  return (
    <div>
      <Meta name="Experiences" />
      <Heading heading="Experiences by our Alumni"></Heading>

      <div className='lg:w-[80%] w-full md:px-6 px-3 mt-5  m-auto relative flex md:gap-3 gap-2 items-center'>
        <div className='flex-1 relative w-full'>
          <input value={searchText} onChange={(e) => setSearchText(e.target.value)} type="search" placeholder="Search experience by title.." className="w-full pl-10 px-5 md:py-2.5 py-2 rounded-xl bg-gray-950 text-gray-200 font-normal" />
          <FiSearch className="absolute md:top-4 top-3 text-xl left-3.5 text-gray-400" />
        </div>
      </div>

      <div className='flex flex-wrap gap-6 m-auto px-5 items-center justify-center mb-32 mt-16'>
        {isLoading ? <Loader /> :
          isError ? <div className='text-center text-red-500'>Something went wrong!</div> :
            experiences && experiences.length === 0 ? <div className='text-center py-16 font-medium text-sky-500'>No experiences found!</div> :
              experiences.map((experience) => (
                <BlogCard type="experience" data={experience} key={experience.$id} />
              ))}
      </div>

      {experiences && experiences.length !== 0 && (
        <>
          <div data-aos="fade-up" className="text-center px-3 pt-16">
            Showing <span className="text-sky-500">{experiences.length}</span> results of page <span className="text-sky-500">{page}</span>.
          </div>

          <div data-aos="fade-up" className="flex items-center justify-center pt-5 gap-10 px-6">
            <button
              disabled={page <= 1}
              onClick={() => changeParams('page', page - 1)}
              className="px-8 py-2.5 rounded-xl bg-white disabled:bg-gray-400 text-gray-900 text-lg font-semibold"
            >
              Prev
            </button>
            <button
              disabled={itemsPerPage > experiences.length}
              onClick={() => changeParams('page', page + 1)}
              className="px-8 py-2.5 rounded-xl bg-white disabled:bg-gray-400 text-gray-900 text-lg font-semibold"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Experiences