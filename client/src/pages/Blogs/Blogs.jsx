import Loader from '../../components/Loader';
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from 'react-router-dom';
import BlogCard from '../AlumniCorner/BlogCard';
import Heading from '../../components/Headings/Heading';
import Meta from '../../components/Meta/Meta';
import { getPaginatedPublishedDocs } from '../../services/documents';
import { useState } from 'react';

const Blogs = () => {
  const [searchParams, setSearchParams] = useSearchParams({ offset: 0 });
  const page = parseInt(searchParams.get('page')) || 1;
  const [itemsPerPage] = useState(24);

  const { data: blogs, isPending, isError } = useQuery({
    queryKey: ['blogs'],
    queryFn: () => getPaginatedPublishedDocs('blogs', itemsPerPage, itemsPerPage * (page - 1)),
  });

  const changeParams = async (key, value) => {
    setSearchParams((prev) => {
      prev.set(key, value);
      return prev;
    }, { replace: true });
    window.scrollTo(0, 0);
    refetch();
  }

  return (
    <div>
      <Meta name="Blogs" />
      <Heading heading="Blogs by our Alumni"></Heading>
      <div className='flex flex-wrap gap-6 m-auto px-5 items-center justify-center mb-32'>
        {isPending ? <Loader /> :
          isError ? <div className='text-center text-red-500'>Something went wrong!</div> :
            blogs && blogs.length === 0 ? <div className='text-center py-16 font-medium text-sky-500'>No blogs found!</div> :
              blogs.map((blog) => (
                <BlogCard data={blog} key={blog.$id} />
              ))}
      </div>

      {blogs && blogs.length !== 0 && (
        <>
          <div data-aos="fade-up" className="text-center px-3 pt-16">
            Showing <span className="text-sky-500">{blogs.length}</span> results of page <span className="text-sky-500">{page}</span>.
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
              disabled={itemsPerPage > blogs.length}
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

export default Blogs