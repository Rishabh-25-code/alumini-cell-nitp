import React, { lazy, Suspense } from 'react';
import { PageHeading } from '../../../components/Headings/Heading';
import { useSearchParams } from 'react-router-dom';
import { Loading } from '../../../components/Loader';

// Lazy load the CreateJob and PreviousPosts components
const CreateJob = lazy(() => import('./CreateJob'));
const PreviousPosts = lazy(() => import('./PreviousPosts'));

const PostJob = () => {
  const [searchParams, setSearchParams] = useSearchParams({ tab: 'prev-posts' });

  return (
    <div className='lg:px-9 px-4'>
      <PageHeading heading='Post' heading1='a Job' />

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
          Your Posted Jobs
        </button>
        <button
          onClick={() => {
            setSearchParams({ tab: 'create-job' });
          }}
          className={`font-medium border-b-2 ${searchParams.get('tab') === 'create-job'
              ? 'border-sky-500 text-sky-500'
              : ' text-gray-400 border-b-black'
            }`}
        >
          Post a Job
        </button>
      </div>

      <Suspense fallback={<Loading />}>
        {searchParams.get('tab') === 'prev-posts' ? (
          <PreviousPosts />
        ) : (
          <CreateJob />
        )}
      </Suspense>
    </div>
  );
};

export default PostJob;
