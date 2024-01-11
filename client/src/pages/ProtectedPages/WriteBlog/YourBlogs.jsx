import Loader from "../../../components/Loader/index";
import { getUserTestimonials } from "../../../services/documents";
import { useQuery } from '@tanstack/react-query';
import MarkDown from "../../../components/MarkDown";
import { getImageURL } from "../../../services/files";

const YourBlogs = ({ user }) => {

    const { data: blogs, isPending, isError } = useQuery({
        queryKey: ['blogs', user.$id],
        queryFn: () => getUserTestimonials('blogs', user.$id),
        onSuccess: (data) => {
            console.log(data)
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


    return (
        <div className="py-5">
            <div className="flex gap-10 flex-col w-full">
                {
                    blogs && blogs.length === 0 ? <div className="text-center text-sky-500 font-medium py-12">No blogs found!</div> :
                        blogs.map((blog, index) => (
                            <div key={index} className="border border-gray-800 w-full rounded-2xl p-5">
                                <h1 className='md:text-3xl text-2xl text-sky-500 text-center font-bold py-5'>{blog.title}</h1>

                                {blog.imgUrl && <img className="w-full pb-10" src={getImageURL(blog.imgUrl, 720)} alt="hero" />}

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
                            </div>
                        ))
                }
            </div>
        </div>
    )
}

export default YourBlogs;