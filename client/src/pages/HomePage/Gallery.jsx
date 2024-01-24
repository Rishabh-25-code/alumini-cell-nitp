import { useQuery } from '@tanstack/react-query';
import { getDocuments } from '../../services/documents';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader';
import Heading1 from '../../components/Headings/Heading1';

const Gallery = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['gallery-home'],
        queryFn: () => getDocuments('gallery', 9, 0),
        staleTime: Infinity,
    })

    if (isLoading) return null;
    if (isError) return null;


    return (
        <div className='pt-20 lg:px-24 md:px-16 px-6' >
            <Heading1 details={"Glimpses of our events, meets and activities."} text1={"Our"} text2={" Gallery"} />
            {
                isLoading ? <div className="flex justify-center mt-10 items-center h-96"><Loader /></div> :
                    isError ? <div className="flex justify-center items-center mt-10 h-96"><h1>Something went wrong...</h1></div> :
                        data.length === 0 ? <div className="flex justify-center mt-10 items-center h-96"><h1>No Data Found...</h1></div> :
                            <div className="mx-3 mt-10 lg:p-16">
                                <div className="grid md:grid-cols-5 grid-cols-4 lg:gap-10 md:gap-6 gap-3">
                                    {data.map((image, id) => (
                                        <div data-aos="fade-up" className="overflow-hidden aspect-square rounded-2xl flex items-center justify-center" key={id}>
                                            <img loading="lazy" className="border-black h-full w-auto hover:scale-125 duration-200" src={image.url} alt="gallery-photo" />
                                        </div>
                                    ))}

                                    <Link data-aos="fade-up" to="/gallery" className="p-2 max-w-full h-auto align-center border-2 border-dashed rounded-2xl border-sky-500 flex items-center justify-center bg-[#1c43768a]">
                                        <button
                                            type="button"
                                            className="md:text-lg text-sm font-medium text-sky-400 hover:scale-105 transition"
                                        >
                                            See All
                                        </button>
                                    </Link>

                                </div>
                            </div>
            }
        </div >
    )
}

export default Gallery