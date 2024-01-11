import React, { lazy, Suspense } from 'react';
import { PageHeading } from "../../../components/Headings/Heading"
import { useSearchParams } from 'react-router-dom';
import { Loading } from '../../../components/Loader';
import Meta from '../../../components/Meta/Meta';

// Lazy load the CreateJob and PreviousPosts components
const CreateInternship = lazy(() => import('./CreateInternship'));
const PreviousPosts = lazy(() => import('./PreviousPosts'));

const PostInternship = () => {
  const [searchParams, setSearchParams] = useSearchParams({ tab: 'prev-posts' });

  return (
    <div className='lg:px-9 px-4'>
      <PageHeading heading='Post' heading1='an Internship' />
      <Meta title="Post Internship | Alumni NITP" />

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
          Your Posts
        </button>
        <button
          onClick={() => {
            setSearchParams({ tab: 'post-internship' });
          }}
          className={`font-medium border-b-2 ${searchParams.get('tab') === 'post-internship'
            ? 'border-sky-500 text-sky-500'
            : ' text-gray-400 border-b-black'
            }`}
        >
          New Post
        </button>
      </div>

      <Suspense fallback={<Loading />}>
        {searchParams.get('tab') === 'prev-posts' ? (
          <PreviousPosts />
        ) : (
          <CreateInternship />
        )}
      </Suspense>
    </div>
  )
}

export default PostInternship