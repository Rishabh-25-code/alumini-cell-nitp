import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({ data }) => {
    return (
        <Link to={`/blog/${data.id}`}>
            <div className='w-[23rem] p-4 border-2 hover:border-gray-800 hover:scale-[102%] transition-all delay-75 ease-in border-gray-900 rounded-2xl mt-5'>
                <div className='flex items-center h-44 overflow-hidden w-full rounded-lg border border-gray-900'>
                    <img className='w-full' src={data.image} alt={data.name} />
                </div>
                <p className='text-gray-400 pt-2 pl-2'>{data.clubName}</p>
                <h3 className='text-xl font-semibold pl-2'>{data.name}</h3>
                <div className='bg-gray-800 rounded-lg p-3 flex justify-between mt-4'>
                    <div>
                        <p className='text-gray-400 text-sm'>Date</p>
                        <p className='text-medium'>{new Intl.DateTimeFormat('en-AU').format(new Date(data.date))}</p>
                    </div>

                    <div className='text-right'>
                        <p className='text-gray-400 text-sm'>Tags</p>
                        {
                            data.tag.map((tag, id) => (
                                <span key={id} className='text-sm mr-1 text-blue-400'>#{tag}</span>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default BlogCard