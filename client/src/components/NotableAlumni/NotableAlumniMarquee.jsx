import { useState, useEffect } from 'react'
import { RxArrowRight } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import { getDocuments } from '../../services/documents';
import MarqueeModule from "react-fast-marquee";
import { useQuery } from '@tanstack/react-query';
import AlumniCard from "../../pages/NotableAlumni/AlumniCard";

const Marquee = MarqueeModule.default?.default || MarqueeModule.default || MarqueeModule;

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
        <div className="pt-16 pb-16 overflow-hidden">
            <div className='flex items-center justify-center text-center gap-3 flex-col'>
                <p data-aos="fade-up" className='lg:text-5xl text-4xl font-semibold pb-10 text-slate-950'>Our Notable <span className='text-sky-700'>Alumni</span></p>

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
                                    <div key={i} className="lg:w-[30rem] w-[26rem] max-w-[88vw] px-4">
                                        <AlumniCard key={i} alum={alum} />
                                    </div>
                                ))
                                }
                            </Marquee>
                    }
                </div>

                <Link to="/notableAlumni" className="modern-button flex gap-1 mt-5 px-8">
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
