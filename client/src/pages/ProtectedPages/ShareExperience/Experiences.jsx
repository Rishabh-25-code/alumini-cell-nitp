import Loader from "../../../components/Loader/index";
import { getUserTestimonials } from "../../../services/documents";
import { useQuery } from '@tanstack/react-query';
import MarkDown from "../../../components/MarkDown";
import { getImageURL } from "../../../services/files";


const Experiences = ({ user }) => {
    const { data: experiences, isLoading, isError } = useQuery({
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


    return (
        <div className="py-5">
            <div className="flex gap-10 flex-col w-full">
                {
                    experiences && experiences.map((experience, index) => (
                        <div key={index} className="border border-gray-800 w-full rounded-2xl p-5">
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