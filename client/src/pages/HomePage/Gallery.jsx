import { useQuery } from '@tanstack/react-query';
import { getDocuments } from '../../services/documents';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader';

const Gallery = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['gallery-home'],
        queryFn: () => getDocuments('gallery', 9, 0),
        staleTime: Infinity,
    })

    if (isLoading) return null;
    if (isError) return null;


    return (
        <div className="lg:p-10 md:p-7 p-4 w-full" >
            <div className="p-2" data-aos="fade-right" >
                <h1 className="mb-2.5 mt-10 lg:text-left md:text-left text-center text-sky-400 lg:text-5xl md:text-4xl text-4xl font-bold leading-tight">
                    Our <span className="text-white">Gallery</span>
                </h1>
            </div>

            {
                isLoading ? <div className="flex justify-center items-center h-96"><Loader /></div> :
                    isError ? <div className="flex justify-center items-center h-96"><h1>Something went wrong...</h1></div> :
                        data.length === 0 ? <div className="flex justify-center items-center h-96"><h1>No Data Found...</h1></div> :
                            <div className="mx-3 mt-4 bg-black lg:p-16">
                                <div className="grid md:grid-cols-5 grid-cols-4 lg:gap-10 md:gap-6 gap-3">
                                    {data.map((image, id) => (
                                        <div data-aos="fade-up" className="overflow-hidden aspect-square rounded-2xl flex items-center justify-center" key={id}>
                                            <img loading="lazy" className="border-black h-full w-auto hover:scale-125 duration-200" src={image.url} alt="gallery-photo" />
                                        </div>
                                    ))}

                                    <Link data-aos="fade-up" to="/gallery" className="p-2 max-w-full h-auto align-center border-2 border-dashed rounded-2xl border-sky-500 flex items-center justify-center bg-sky-950">
                                        <button
                                            type="button"
                                            className="md:text-lg text-sm font-medium text-sky-400 hover:scale-105"
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