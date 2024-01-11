import { useQuery } from '@tanstack/react-query';
import { getDocument } from '../../services/documents';
import { useParams } from 'react-router-dom'
import { BsDot } from 'react-icons/bs'
import Meta from '../../components/Meta/Meta';
import Loader from '../../components/Loader';
import { getImageURL } from '../../services/files';
import MarkDown from '../../components/MarkDown';

const Experience = () => {
    const { experienceId } = useParams();

    const { data: experience, isPending, isError } = useQuery({
        queryKey: ['experience', experienceId],
        queryFn: () => getDocument('experiences', experienceId),
    });


    return (
        <div className='pt-36 min-h-screen'>
            <Meta name={experience ? experience.title : "Experience - NIT Patna"} />

            {isPending && <div className='w-full h-[10rem] flex items-center justify-center'><Loader /></div>}
            {isError && <div className='text-center text-red-500'>Something went wrong!</div>}
            {experience &&
                <div className='m-auto flex flex-col items-center justify-center'>
                    <h1 className='lg:text-4xl md:text-3xl text-2xl font-bold lg:max-w-3xl md:max-w-2xl px-6 text-center m-auto text-sky-500 my-10 mt-6'>{experience.title}</h1>

                    <div className='flex items-center h-56 overflow-hidden lg:w-[70%] md:w-[80%] w-[85%] rounded-lg border border-gray-900'>
                        <img className='w-full' src={getImageURL(experience.imgUrl)} alt={experience.title} />
                    </div>

                    <div className='flex items-center pt-5'>
                        <p className='text-gray-400'>{experience.name}</p>
                        <BsDot size={20} className='text-gray-300' />
                        <p className='text-gray-400'>{new Intl.DateTimeFormat('en-AU').format(new Date(experience.$createdAt))}</p>
                        <BsDot size={20} className='text-gray-300' />
                        <p className='text-gray-400'>3 min read</p>
                    </div>

                    <div className='flex flex-wrap justify-end text-center pt-2'>
                        {
                            experience.tags.map((tag, id) => (
                                <span key={id} className='text-sm mr-1 text-blue-400'>#{tag}</span>
                            ))
                        }
                    </div>

                    <div className='lg:w-[70%] md:w-[80%] w-[85%] text-lg mt-10'>
                        <MarkDown content={experience.message}></MarkDown>

                        <p className='text-gray-400 text-base mt-4 mb-32'>Read the full experience <a className='text-blue-500' href={experience.link} target="_blank" rel="noopener noreferrer">here</a>.</p>
                    </div>
                </div>
            }
        </div >
    )
}

export default Experience;