import { lazy, Suspense } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PageHeading } from "../../../components/Headings/Heading";
import useAuth from "../../../hooks/useAuth";
const ComposeBlog = lazy(() => import('./ComposeBlog'));
const YourBlogs = lazy(() => import('./YourBlogs'));
import { Loading } from '../../../components/Loader';

const WriteBlog = () => {
  const { user } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams({ tab: 'prev-posts' });

  return (
    <div className='lg:px-9 px-4'>
      <PageHeading heading='Your' heading1='Blogs' />

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
          Your Posted Blog
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
          Write a Blog
        </button>
      </div>

      <Suspense fallback={<Loading />}>
        {searchParams.get('tab') === 'prev-posts' ? (
          <YourBlogs user={user} />
        ) : (
          <ComposeBlog user={user} />
        )}
      </Suspense>

    </div>
  )
}

export default WriteBlog;