import React from 'react'
import BlogCard from '../AlumniCorner/BlogCard'
import { RxArrowRight } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getPaginatedPublishedDocs } from '../../services/documents'
import Loader from '../../components/Loader'
import Heading1 from '../../components/Headings/Heading1'



const Blogs = () => {
    const { data: blogs, isLoading, isError } = useQuery({
        queryKey: ['homepage-blog'],
        queryFn: () => getPaginatedPublishedDocs('blogs', 3, 0),
    });


    return (
        <div className='my-10 mb-36 lg:px-16 md:px-6 px-6'>
            <Heading1 details={"Our alumni actively contribute to the intellectual discourse by passionately writing blogs on a diverse range of topics."} text1={"Our Latest"} text2={" Blogs"} />

            {isLoading ? <Loader /> :
                isError ? <div className='text-center text-red-500'>Something went wrong!</div> :
                    <div className='grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center m-auto my-10 min-h-[16rem]'>
                        {blogs && blogs.slice(0, 3).map((blog) => (
                            <BlogCard data={blog} key={blog.$id} />
                        ))}
                    </div>}

            <Link data-aos="zoom-in" to="/blogs" className='bg-sky-400 absolute lg:right-20 md:right-16 right-12 hover:bg-sky-500 text-white font-semi-bold py-2 px-4 rounded-full flex items-center'>
                <button className="mr-2">
                    View All
                </button>
                <RxArrowRight size={24} />
            </Link>
        </div>
    )
}

export default Blogs