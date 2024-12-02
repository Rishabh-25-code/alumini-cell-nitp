import { useState, useEffect } from 'react'
import { RxArrowRight } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import { getDocuments } from '../../services/documents';
import Marquee from "react-fast-marquee";
import { useQuery } from '@tanstack/react-query';
import AlumniCard from "../../pages/NotableAlumni/AlumniCard";

const NotableAlumniMarquee = () => {
    const [screenWidth, setScreenWidth] = useState(getScreenWidth());

    const { isLoading, data, isError } = useQuery({
        queryKey: ['notable-alumni'],
        queryFn: () => getDocuments('notable-alumni'),
        staleTime: Infinity,
        refetchOnWindowFocus: false,
    });


    useEffect(() => {
        window.addEventListener("resize", () => {
            setScreenWidth(getScreenWidth());
        });

        return () => {
            window.removeEventListener("resize", () => {
                setScreenWidth(getScreenWidth());
            });
        };
    }, [screenWidth]);

    function getScreenWidth() {
        const width = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;

        return width;
    }


    return (
        <div className="bg-gray-900 pt-16 pb-10 overflow-hidden">
            <div className='flex items-center justify-center text-center gap-3 flex-col'>
                <p data-aos="fade-up" className='lg:text-5xl text-4xl font-semibold pb-10'>Our Notable <span className='text-sky-500'>Alumni</span></p>

                <div className='my-5 w-full'>
                    {isLoading ? <p className='text-center w-full text-sky-500 my-16'>Loading...</p> :
                        isError ? <p className='text-center w-full text-sky-500 my-16'>
                            Error fetching data
                        </p>
                            :
                            <Marquee className='w-full' speed={70} autoFill={true} pauseOnHover={
                                screenWidth > 768 ? true : false
                            }>
                                {data && data.map((alum, i) => (
                                    <div key={i} className="lg:max-w-lg max-w-md px-5">
                                        <AlumniCard key={i} alum={alum} />
                                    </div>
                                ))
                                }
                            </Marquee>
                    }
                </div>

                <Link to="/notableAlumni" className="flex gap-1 py-3 mt-3 px-8 rounded-xl bg-sky-500 hover:bg-sky-600 hover:scale-105 transition focus:bg-gray-600 text-white font-medium">
                    <button >
                        Explore
                    </button>
                    <RxArrowRight size={24} />
                </Link>
            </div>
        </div>
    )
}

export default NotableAlumniMarquee