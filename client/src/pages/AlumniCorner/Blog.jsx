import { useQuery } from '@tanstack/react-query';
import { getDocument } from '../../services/documents';
import { FaShare } from "react-icons/fa";
import { useParams } from 'react-router-dom'
import { BsDot } from 'react-icons/bs'
import Meta from '../../components/Meta/Meta';
import Loader from '../../components/Loader';
import { getImageURL } from '../../services/files';
import MarkDown from '../../components/MarkDown';
import { toast } from "react-toastify"

const Blog = () => {
  const { blogId } = useParams();

  const { data: blog, isPending, isError } = useQuery({
    queryKey: ['blog', blogId],
    queryFn: () => getDocument('blogs', blogId)
  });


  return (
    <div className='pt-36 min-h-screen'>
      <Meta name={blog ? blog.title : "Blog - NIT Patna"} />

      {isPending ? <div className='w-full h-[10rem] flex items-center justify-center'><Loader /></div> :
        isError ? <div className='text-center text-red-500'>Something went wrong!</div> :
          blog && blog.status !== "published" ? <div className='text-center py-24 text-red-500'>Blog not found!</div> :
            blog &&
            <div className='m-auto flex flex-col items-center justify-center'>
              <h1 className='lg:text-4xl md:text-3xl text-2xl font-bold lg:max-w-3xl md:max-w-2xl px-6 text-center m-auto text-sky-500 my-10 mt-6'>{blog.title}</h1>

              <div className='flex items-center lg:h-96 md:h-72 h-64 overflow-hidden lg:w-[70%] md:w-[80%] w-[85%] rounded-lg border border-gray-900'>
                <img className='w-full' src={getImageURL(blog.imgUrl)} alt={blog.title} />
              </div>

              <div className='flex items-center pt-5'>
                <p className='text-gray-400'>{blog.name}</p>
                <BsDot size={20} className='text-gray-300' />
                <p className='text-gray-400'>{new Intl.DateTimeFormat('en-AU').format(new Date(blog.$createdAt))}</p>
                <BsDot size={20} className='text-gray-300' />
                <p className='text-gray-400'>3 min read</p>
              </div>

              <div className='flex flex-wrap justify-end text-center pt-2'>
                {
                  blog.tags.map((tag, id) => (
                    <span key={id} className='text-sm mr-1 text-blue-400'>#{tag}</span>
                  ))
                }
              </div>

              <div className='lg:w-[70%] md:w-[80%] w-[85%] text-lg mt-10 flex flex-col'>
                <MarkDown content={blog.message}></MarkDown>

                <button
                  type="button"
                  className="text-lg font-medium text-sky-400 hover:scale-105 mt-5 self-end"
                  onClick={() => {
                    const shareItem = {
                      title: "Check out this blog by NITP Alumni.",
                      text: blog.title + " by " + blog.name,
                      url: `https://alumni.nitp.ac.in/blogs/${blog.$id}`,
                    }

                    if (navigator.share) {
                      navigator.share(shareItem)
                        .catch((error) => toast.error('Error sharing'));
                    } else {
                      toast.error("Your browser does not support Web Share API");
                    }
                  }}
                >
                  Share <FaShare className='inline-block ml-2' />
                </button>
              </div>
            </div>
      }
    </div >
  )
}

export default Blog;