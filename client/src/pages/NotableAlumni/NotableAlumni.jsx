import Heading from '../../components/Headings/Heading'
import { getDocuments } from '../../services/documents';
import AlumniCard from './AlumniCard'
import { useQuery } from '@tanstack/react-query';
import Meta from '../../components/Meta/Meta'

const NotableAlumni = () => {

  const { isLoading, data, isError } = useQuery({
    queryKey: ['notable-alumni'],
    queryFn: () => getDocuments('notable-alumni'),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });

  return (
    <div className=''>
      <Meta name="Notable Alumni" />
      <Heading heading="Notable Alumni" heading1="of NIT Patna"></Heading>
      <div className='w-full'>
        {isLoading ?
          <p className='text-sky-500 text-center my-16'>Loading...</p> :
          isError ?
            <p className='text-sky-500 text-center my-16'>Error</p> :
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:px-5 px-6 lg:gap-6 gap-8 py-16'>
              {
                data && data.length > 0 &&
                data.map((alum, i) => (
                  <AlumniCard key={i} alum={alum} />
                ))
              }
            </div>
        }
      </div>
    </div>
  )
}

export default NotableAlumni