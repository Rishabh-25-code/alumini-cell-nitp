import Loader from '../../components/Loader';
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from 'react-router-dom';
import BlogCard from '../AlumniCorner/BlogCard';
import Heading from '../../components/Headings/Heading';
import Meta from '../../components/Meta/Meta';
import { getPaginatedDocuments } from '../../services/documents';

const Blogs = () => {
  const [searchParams, setSearchParams] = useSearchParams({ offset: 0 });

  const { data: blogs, isPending, isError } = useQuery({
    queryKey: ['blogs'],
    queryFn: () => getPaginatedDocuments('blogs', 20, parseInt(searchParams.get('offset')) || 0),
  });

  return (
    <div>
      <Meta name="Blogs" />
      <Heading heading="Blogs by our Alumni"></Heading>
      <div className='flex flex-wrap gap-6 m-auto px-5 items-center justify-center mb-32'>
        {isPending && <Loader />}
        {isError && <div className='text-center text-red-500'>Something went wrong!</div>}

        {blogs && blogs.map((blog) => (
          <BlogCard data={blog} key={blog.$id} />
        ))}
      </div>
    </div>
  )
}

export default Blogs