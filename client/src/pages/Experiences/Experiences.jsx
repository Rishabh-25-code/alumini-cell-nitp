import Loader from '../../components/Loader';
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from 'react-router-dom';
import BlogCard from '../AlumniCorner/BlogCard';
import Heading from '../../components/Headings/Heading';
import Meta from '../../components/Meta/Meta';
import { getPaginatedDocuments } from '../../services/documents';

const Experiences = () => {
  const [searchParams, setSearchParams] = useSearchParams({ offset: 0 });

  const { data: experiences, isPending, isError } = useQuery({
    queryKey: ['experiences'],
    queryFn: () => getPaginatedDocuments('experiences', 20, parseInt(searchParams.get('offset')) || 0),
  });

  return (
    <div>
      <Meta name="Experiences" />
      <Heading heading="Experiences by our Alumni"></Heading>

      <div className='flex justify-center align items center text-2xl'>
        <h1>This Page is currently under development data shown is merely a sample</h1>
      </div>

      <div className='flex flex-wrap gap-6 m-auto px-5 items-center justify-center mb-32'>
        {isPending && <Loader />}
        {isError && <div className='text-center text-red-500'>Something went wrong!</div>}

        {experiences && experiences.map((experience) => (
          <BlogCard type="experience" data={experience} key={experience.$id} />
        ))}
      </div>
    </div>
  )
}

export default Experiences