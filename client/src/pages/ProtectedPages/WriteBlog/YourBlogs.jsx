import Loader from "../../../components/Loader/index";
import { getUserTestimonials, deleteDocument } from "../../../services/documents";
import { useQuery } from '@tanstack/react-query';
import MarkDown from "../../../components/MarkDown";
import { getImageURL, deleteFile } from "../../../services/files";
import { toast } from "react-toastify";
import { FaTrash } from 'react-icons/fa';

const YourBlogs = ({ user }) => {

    const { data: blogs, isPending, isError, refetch } = useQuery({
        queryKey: ['blogs', user.$id],
        queryFn: () => getUserTestimonials('blogs', user.$id),
        onSuccess: (data) => {
            console.log(data);
        }

    });

    if (isPending) {
        return (
            <div className='w-full h-[10rem] flex items-center justify-center'><Loader /></div>
        )
    }

    if (isError) {
        return (
            <div className='py-10'>Someting went wrong!</div>
        )
    }

    const deleteBlog = async (id) => {
        try {
            const blog = blogs.find((blog) => blog.$id === id);
            if (blog.imgUrl) {
                await Promise.all([deleteFile(blog.imgUrl), deleteDocument('blogs', id)])
            } else {
                await deleteDocument('blogs', id);
            }

            toast.success('Blog deleted successfully');
            await refetch();
        } catch (error) {
            toast.error(error.message);
        }
    }

    const getStatusColor = (status) => {
        switch (status.toLowerCase()) {
          case 'reviewing':
            return 'text-yellow-500';
          case 'rejected':
            return 'text-red-500';
          case 'published':
            return 'text-green-500';
          default:
            return '';
        }
      };
      
      const toTitleCase = (str) => {
        return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
      };
      


    return (
        <div className="py-5">
            <div className="flex gap-10 flex-col w-full">
                {

                    blogs && blogs.length === 0 ? <div className="text-center text-sky-500 font-medium py-12">No blogs found!</div> :

                        blogs.map((blog, index) => (
                            <div key={index} className="border relative border-gray-800 w-full rounded-2xl p-5">
                                <button onClick={() => {
                                    const ans = confirm('Are you sure you want to delete this blog?');
                                    if (ans) {
                                        deleteBlog(blog.$id);
                                    }
                                }
                                } className="absolute right-6 top-6">
                                    <FaTrash className="text-red-500 md:text-2xl text-xl cursor-pointer" />
                                </button>
                                <div className="flex flex-col w-full justify-center items-center">
                                    <h1 className='lg:text-4xl md:text-3xl lg:max-w-2xl max-w-xl text-2xl px-6 text-sky-500 text-center font-bold py-5'>{blog.title}</h1>
                                    {blog.imgUrl && <img className="lg:h-[32rem] md:h-[28rem] my-5" src={getImageURL(blog.imgUrl, 720)} alt={blog.title} />}
                                </div>

                                <MarkDown content={blog.message} />

                                <div className="flex flex-col pt-5">
                                    <p className='text-white font-medium'>{blog.name} ({blog.batch} {blog.branch})</p>
                                    <p className='text-gray-300 text-sm'>{blog.currentPost} @{blog.currentCompany}</p>
                                    <p className="text-sm">{blog.currentCity}</p>
                                </div>

                                <div className="pt-5">
                                    {
                                        blog.tags.map((tag, index) => (
                                            <span key={index} className="inline-block bg-gray-900 rounded-full px-3 py-1 text-sm font-semibold text-sky-500 mr-2 mb-2">#{tag}</span>
                                        ))
                                    }
                                </div>
                                <div>
                                    <h1 className="text-lg font-bold">Status: </h1>
                                    <h2 className={`text-xl ${getStatusColor(blog.status)}`}>{toTitleCase(blog.status)}</h2>
                                    <h1 className="text-lg font-bold mt-2">Feedback:</h1>
                                    <h2 className="text-gray-700">{blog.statusDesc || "No feedback from Admin"}</h2>
                                </div>

                            </div>
                        ))
                }
            </div>
        </div>
    )
}

export default YourBlogs;