import Loader from "../../../components/Loader/index";
import { getUserTestimonials } from "../../../services/documents";
import { useQuery } from '@tanstack/react-query';
import MarkDown from "../../../components/MarkDown";
import { getImageURL } from "../../../services/files";


const Experiences = ({ user }) => {

    const { data: testimonials, isLoading, isError } = useQuery({
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
                    testimonials && testimonials.map((testimonial, index) => (
                        <div key={index} className="border border-gray-800 w-full rounded-2xl p-5">
                            <div className="flex flex-col w-full justify-center items-center">
                                <h1 className='lg:text-4xl md:text-3xl max-w-xl text-2xl px-6 text-sky-500 text-center font-bold py-5'>{testimonial.title}</h1>
                                {testimonial.imgUrl && <img className="h-[28rem] my-5" src={getImageURL(testimonial.imgUrl, 720)} alt="hero" />}
                            </div>

                            <MarkDown content={testimonial.message} />

                            <div className="flex flex-col pt-5">
                                <p className='text-white font-medium'>{testimonial.name} ({testimonial.batch} {testimonial.branch})</p>
                                <p className='text-gray-300 text-sm'>{testimonial.currentPost} @{testimonial.currentCompany}</p>
                                <p className="text-sm">{testimonial.currentCity}</p>
                            </div>

                            <div className="pt-5">
                                {
                                    testimonial.tags.map((tag, index) => (
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