import BlogCard from '../../components/Cards/BlogCard';
import Heading from '../../components/Headings/Heading';
import Meta from '../../components/Meta/Meta';
import { getPaginatedUnpublishedDocs } from '../../services/documents';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import Loader from '../../components/Loader';
import { useState } from 'react';

const Blogs = () => {
    const [searchParams, setSearchParams] = useSearchParams({ page: 1, type: 'reviewing' });
    const type = searchParams.get('type') || 'reviewing';
    const page = parseInt(searchParams.get('page')) || 1;
    const [itemsPerPage, setItemsPerPage] = useState(24);

    const { data: blogs, isPending, isError, refetch } = useQuery({
        queryKey: ['blogs', page, type],
        queryFn: () => getPaginatedUnpublishedDocs('blogs', itemsPerPage, itemsPerPage * (page - 1), type),
    });

    const changeParams = async (key, value) => {
        setSearchParams((prev) => {
            prev.set(key, value);
            return prev;
        }, { replace: true });
        window.scrollTo(0, 0);
        refetch();
    }

    const changeType = (newType) => {
        changeParams('type', newType);
        changeParams('page', 1);
    }

    return (
        <div className='pt-24'>
            <Meta name="Blogs" />
            <Heading heading="Blogs"></Heading>
            <div className='px-10 flex mt-6 gap-4'>
                <button onClick={() => {
                    changeType('reviewing')
                }} className={`border-[#e9e1e1] border font-semibold  px-5 py-2 text-base rounded-xl hover:bg-[#e9e1e1] hover:text-gray-900 ${type === "reviewing" ? 'bg-[#e9e1e1] text-gray-900' : 'text-[#e9e1e1]'}`}>
                    Reviewing
                </button>
                <button onClick={() => changeType('published')} className={`border-[#e9e1e1] border font-semibold  px-5 py-2 text-base rounded-xl hover:bg-[#e9e1e1] hover:text-gray-900 ${type === "published" ? 'bg-[#e9e1e1] text-gray-900' : 'text-[#e9e1e1]'}`}>
                    Published
                </button>
                <button onClick={() => changeType('rejected')} className={`border-[#e9e1e1] border font-semibold  px-5 py-2 text-base rounded-xl hover:bg-[#e9e1e1] hover:text-gray-900 ${type === "rejected" ? 'bg-[#e9e1e1] text-gray-900' : 'text-[#e9e1e1]'}`}>
                    Rejected
                </button>
            </div>

            <div className='flex flex-wrap gap-6 m-auto px-5 items-center justify-center mb-32 mt-10'>
                {isPending ? <Loader /> :
                    isError ? <div className='text-center text-red-500'>Something went wrong!</div> :
                        blogs.length === 0 ? <div className='text-center py-16 font-medium text-sky-500'>No blogs found!</div> :
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

export default Blogs;
