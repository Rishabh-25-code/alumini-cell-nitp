import { Navigation, Pagination, Parallax, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./AlumniTestimonial.scss";

const Testimonials = () => {

    const testimonials = [
        {
            id: 0,
            name: "Harshit Singh",
            image: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Dr._Manas_receiving_Padma_Shri_award_%28cropped%29.jpg",
            batch: "2014-2018 ME",
            designation: "Operations Officer (Pipeline Division) @HPCL",
            message: "Grateful for guidance from faculty, techno-cultural fests boosted confidence and managerial skills. Alumni mentorship is inspiring. Proud to have learned life lessons from this prestigious institution."
        },
        {
            id: 1,
            name: "Raghav Gaur",
            image: "https://avatars.githubusercontent.com/u/77230416?v=4",
            batch: "2018-22",
            designation: "Dy. Manager in the Robotics and Automation Dept. at Tata Metaliks Ltd.",
            message: "Grateful for NIT's impactful course structure, dedicated professors, and hands-on projects like the EV project with ISIE and IEEE initiatives. Exposure to social responsibility through NSS Sankalp enriched my perspective. Thanks, NIT Patna, for shaping me into a competent individual."
        },
        {
            id: 2,
            name: "Prakash Kumar",
            image: "/images/Alumni1.jpg",
            batch: "1995 ME",
            designation: "Head of IT, Carl Zeiss group India, Bangalore",
            message: "We hand many fond memories of the college but still the best thing was the profs , I wonder if any other institute had that quality to teach mechanical engineering those days.Just to name a few of our Gurus Dr PK sinha, Dr KN singh , Dr ID prasad , Dr SK Sinha Dr SK Mitra 🙏🙏"
        },
        {
            id: 3,
            name: "Gyanendra Verma",
            image: "https://avatars.githubusercontent.com/u/77230416?v=4",
            batch: "2015-19 ME",
            designation: "",
            message: "It is an awesome feeling to be an alum of NIT Patna. NITP gave me various opportunities to shape myself. I found ISIE and captained the team for first-ever EV competition. Special mention-Sankalp. Huge respect for whole college staff."
        },
        {
            id: 4,
            name: "Abhilash Rudra",
            image: "https://media.licdn.com/dms/image/C4D03AQES81oiokFAgA/profile-displayphoto-shrink_200_200/0/1620661841061?e=1709769600&v=beta&t=BCknRn2iStYAH71wGkRiO2Gd13T5D4ReNO_pQSLf708",
            batch: "2012-2016 CSE",
            designation: "Ex-Assistant Vice President at Quant Research dept., JPMorgan Chase(Mumbai), Equity Market, Credit Quant, Aspiring Monk",
            message: "One day, this college will be in top 10 engineering institute of the country because of talent and hard work of students and professors. I am eternally grateful to Prabhat sir and Kumar Abhishek sir for my enlightening education of 4 crucial years at NIT PATNA where I learnt character, discipline and skills. May GOD bless you all."
        },
    ]

    return (
        <div className=' bg-gray-900 py-16'>
            <h1
                data-aos="fade-up"
                className="font-semibold lg:text-5xl md:text-4xl text-3xl text-center  items-center  "
            >
                Testimonials from our <span className="text-sky-500">Alumni</span>
            </h1>

            <div className="mt-20 lg:px-16 md:px-10 px-5 relative">
                <Swiper
                    modules={[Navigation, Pagination, Parallax, A11y]}

                    // parallax={true}
                    pagination={{
                        clickable: true,
                        // dynamicBullets: true,
                    }}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                        clickable: true,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                        1280: {
                            slidesPerView: 3,
                            spaceBetween: 70,
                        },
                    }}
                >


                    <div className="flex items-center">
                        {testimonials.map((data) => (
                            <SwiperSlide key={data.id}>
                                <div className="mb-10">
                                    <TestimonialCard
                                        key={data.id}
                                        data={data}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>

                <div className="swiper-button-prev bg-black hover:bg-black bg-opacity-50 hover:bg-opacity-40 text-white p-6 rounded-full"></div>
                <div className="swiper-button-next bg-black hover:bg-black bg-opacity-50 hover:bg-opacity-40 text-white p-6 rounded-full"></div>
            </div>
        </div>
    )
}

const TestimonialCard = ({ data }) => {
    return (
        <div data-aos="fade-up" className='flex' >
            <div className='border-[1px] border-gray-500 border-b-cyan-500 hover:border-b-cyan-600 border-b-8 rounded-2xl w-full p-3 pt-5 pb-7 hover:scale-[101%] z-0 hover:z-10 transition-all delay-[30ms] ease-in-out m-1 bg-[#000000] bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] py-10'>
                <div className='rounded'>
                    <p className='px-2'>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-sky-400 mb-6" height="38" width="38" xmlns="http://www.w3.org/2000/svg"><path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z">
                        </path>
                        </svg>
                    </p>
                    <p className='text-justify m-2'>{data.message}</p>
                </div>
                <div className='flex items-center lg:gap-5 md:gap-3 gap-2 mt-6 px-2'>
                    <div>
                        <h2 className='text-base font-medium'><span className='text-sky-500 font-semibold text-lg'>{data.name}</span> ({data.batch})</h2>
                        <p className='text-gray-500 text-sm font-medium leading-5 mt-1'>
                            {data.designation}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Testimonials