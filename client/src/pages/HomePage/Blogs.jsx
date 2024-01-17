import React from 'react'
import BlogCard from '../AlumniCorner/BlogCard'
import { RxArrowRight } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getPaginatedDocuments } from '../../services/documents'
import Loader from '../../components/Loader'



const Blogs = () => {
    const { data: blogs, isPending, isError } = useQuery({
        queryKey: ['homepage-blog'],
        queryFn: () => getPaginatedDocuments('blogs', 3, 0),
    });


    return (
        <div className='pb-10 mb-20'>
            <h1 data-aos="fade-right"  className="mb-2.5 mt-10 lg:ml-10 md:ml-10 p-5 lg:text-left md:text-left text-center text-sky-400 lg:text-5xl md:text-4xl text-4xl font-bold leading-tight">
                Blogs by our <span className='text-white'>Alumni</span>
            </h1>

            <div className='flex flex-wrap m-auto px-5 items-center justify-evenly mb-10 min-h-[16rem]'>
                {isPending && <Loader />}
                {isError && <div className='text-center text-red-500'>Something went wrong!</div>}

                {blogs && blogs.map((blog) => (
                    <BlogCard data={blog} key={blog.$id} />
                ))}
            </div>

            <Link data-aos="zoom-in"  to="/blogs" className='bg-sky-400 absolute lg:right-20 md:right-16 right-12 hover:bg-sky-500 text-white font-semi-bold py-2 px-4 rounded-full flex items-center'>
                <button className="mr-2">
                    View All
                </button>
                <RxArrowRight size={24} />
            </Link>
        </div>
    )
}

export default Blogs