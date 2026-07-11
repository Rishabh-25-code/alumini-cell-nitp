import React from 'react'
import { FaShare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { getImageURL } from '../../services/files';
import { toast } from 'react-toastify';

const BlogCard = ({ data, type }) => {
    return (
        <div className='surface-card max-w-sm w-full p-4 rounded-2xl mt-5 transition hover:-translate-y-1'>
            <Link data-aos="fade-up" to={`/${type === "experience" ? "experience" : "blog"}/${data.$id}`}>
                <div className='flex items-center justify-center h-44 overflow-hidden bg-cover w-full rounded-xl border border-slate-200'>
                    <img loading='lazy' className='w-full h-44 object-cover' src={getImageURL(data.imgUrl)} alt={data.name} />
                </div>
                <p className='text-slate-500 pt-4 pl-2'>{
                    data.tags.map((tag, id) => (
                        <span key={id} className='text-sm mr-1 text-sky-700'>#{tag}</span>
                    ))
                }</p>
                <h3 className='text-xl font-semibold pl-2 text-slate-950 leading-8'>{data.title}</h3>
            </Link>

            <div className='bg-slate-50 border border-slate-200 rounded-xl p-3 flex justify-between mt-4'>
                <div>
                    <p className='text-slate-500 text-sm'>Date</p>
                    <p className='text-medium text-slate-900'>{new Intl.DateTimeFormat('en-AU').format(new Date(data.$createdAt))}</p>
                </div>


                <button
                    type="button"
                    className="text-lg font-medium text-sky-700 hover:text-sky-900 mt-3 self-end"
                    onClick={() => {
                        const shareItem = {
                            title: "Check out this blog by NITP Alumni.",
                            text: data.title + " by " + data.name,
                            url: `https://alumini-nitp.vercel.app/${type === "experience" ? "experience" : "blog"}/${data.$id}`,
                        }

                        if (navigator.share) {
                            navigator.share(shareItem)
                                .catch((error) => {
                                    console.error('Error sharing')
                                });
                        } else {
                            toast.error("Your browser does not support Web Share API");
                        }
                    }}
                >
                    Share <FaShare className='inline-block ml-2' />
                </button>
            </div>
        </div>
    )
}

export default BlogCard
