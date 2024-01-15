import Loader from '../../components/Loader';
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from 'react-router-dom';
import BlogCard from '../AlumniCorner/BlogCard';
import Heading from '../../components/Headings/Heading';
import Meta from '../../components/Meta/Meta';
import { getPaginatedPublishedDocs } from '../../services/documents';
import { useState } from 'react';

const Experiences = () => {
  const [searchParams, setSearchParams] = useSearchParams({ page: 1 });
  const page = parseInt(searchParams.get('page')) || 1;
  const [itemsPerPage] = useState(24);

  const { data: experiences, isPending, isError, refetch } = useQuery({
    queryKey: ['experiences'],
    queryFn: () => getPaginatedPublishedDocs('experiences', itemsPerPage, itemsPerPage * (page - 1)),
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
      <Meta name="Experiences" />
      <Heading heading="Experiences by our Alumni"></Heading>

      <div className='flex justify-center align items center text-2xl'>
        <h1>This Page is currently under development data shown is merely a sample</h1>
      </div>

      <div className='flex flex-wrap gap-6 m-auto px-5 items-center justify-center mb-32'>
        {isPending ? <Loader /> :
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