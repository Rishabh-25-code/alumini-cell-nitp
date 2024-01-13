import Loader from "../../../components/Loader/index";
import { getUserTestimonials, deleteDocument } from "../../../services/documents";
import { useQuery } from '@tanstack/react-query';
import MarkDown from "../../../components/MarkDown";
import { getImageURL, deleteFile } from "../../../services/files";
import { toast } from "react-toastify";
import { FaTrash } from 'react-icons/fa';


const Experiences = ({ user }) => {
    const { data: experiences, isLoading, isError, refetch } = useQuery({
        queryKey: ['experiences', user.$id],
        queryFn: () => getUserTestimonials('experiences', user.$id)
    });

    if (isLoading) {
        return (
            <div className='w-full h-[10rem] flex items-center justify-center'><Loader /></div>
        )
    }

    if (isError) {
        return (
            <div className='py-10'>Someting went wrong!</div>
        )
    }

    const deleteExperience = async (id) => {
        try {
            const experience = experiences.find((experience) => experience.$id === id);
            if (experience.imgUrl) {
                await Promise.all([deleteFile(experience.imgUrl), deleteDocument('experiences', id)])
            } else {
                await deleteDocument('experiences', id);
            }
            
            await refetch();
            toast.success('Experience deleted successfully');
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="py-5">
            <div className="flex gap-10 flex-col w-full">
                {
                    experiences && experiences.length === 0 ?
                        <div className="text-center text-sky-500 h-32 py-12">No experience shared yet!</div>
                        : experiences.map((experience, index) => (
                            <div key={index} className="relative border border-gray-800 w-full rounded-2xl p-5">
                                <button onClick={() => {
                                    const ans = confirm('Are you sure you want to delete this experience?');
                                    if (ans) {
                                        deleteExperience(experience.$id);
                                    }
                                }} className="absolute right-6 top-6">
                                    <FaTrash className="text-red-500 md:text-2xl text-xl cursor-pointer" />
                                </button>
                                <div className="flex flex-col w-full justify-center items-center">
                                    <h1 className='lg:text-4xl md:text-3xl lg:max-w-2xl max-w-xl text-2xl px-6 text-sky-500 text-center font-bold py-5'>{experience.title}</h1>
                                    {experience.imgUrl && <img className="lg:h-[32rem] md:h-[28rem] my-5" src={getImageURL(experience.imgUrl, 720)} alt={experience.title} />}
                                </div>

                                <MarkDown content={experience.message} />

                                <div className="flex flex-col pt-5">
                                    <p className='text-white font-medium'>{experience.name} ({experience.batch} {experience.branch})</p>
                                    <p className='text-gray-300 text-sm'>{experience.currentPost} @{experience.currentCompany}</p>
                                    <p className="text-sm">{experience.currentCity}</p>
                                </div>

                                <div className="pt-5">
                                    {
                                        experience.tags.map((tag, index) => (
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

export default Experiences