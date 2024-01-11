import { lazy, Suspense } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PageHeading } from "../../../components/Headings/Heading";
import useAuth from "../../../hooks/useAuth";
const CreateExperience = lazy(() => import('./CreateExperience'));
const Experiences = lazy(() => import('./Experiences'));
import { Loading } from '../../../components/Loader';
import Meta from '../../../components/Meta/Meta';

const ShareExperience = () => {
  const { user } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams({ tab: 'prev-posts' });

  return (
    <div className='lg:px-9 px-4'>
      <Meta title="Share Experience | Alumni NITP" />
      <PageHeading heading='Share' heading1='Experience' />

      <div className='border-b border-gray-800 w-fit flex gap-5 text-base'>
        <button
          onClick={() => {
            setSearchParams({ tab: 'prev-posts' });
          }}
          className={`font-medium border-b-2 ${searchParams.get('tab') === 'prev-posts'
            ? 'border-sky-500 text-sky-500'
            : 'text-gray-400 border-b-black'
            }`}
        >
          Your Posted Experiences
        </button>
        <button
          onClick={() => {
            setSearchParams({ tab: 'new-post' });
          }}
          className={`font-medium border-b-2 ${searchParams.get('tab') === 'new-post'
            ? 'border-sky-500 text-sky-500'
            : ' text-gray-400 border-b-black'
            }`}
        >
          Post an Experience
        </button>
      </div>

      <Suspense fallback={<Loading />}>
        {searchParams.get('tab') === 'prev-posts' ? (
          <Experiences user={user} />
        ) : (
          <CreateExperience user={user} />
        )}
      </Suspense>

    </div>
  )
}

export default ShareExperience;