import { Link } from 'react-router-dom'

const QuickLinks = () => {
    const links = [
        {
            name: "UG Alumni Database",
            icon: "./images/quicklink/blockchain.png",
            link: "/alumni-database?role=ug"
        },
        {
            name: "PG Alumni Database",
            icon: "./images/quicklink/electrical.png",
            link: "/alumni-database?role=pg"
        },
        {
            name: "PhD Alumni Database",
            icon: "./images/quicklink/web.png",
            link: "/alumni-database?role=phd"
        },
        {
            name: "Alumni Meetings",
            icon: "./images/quicklink/social.png",
            link: "/alumni-meet"
        },
        {
            name: "Blogs from Alumni",
            icon: "./images/quicklink/content.png",
            link: "/blogs"
        },
        {
            name: "Alumni Experience",
            icon: "./images/quicklink/marketing.png",
            link: "/experiences"
        },
        {
            name: "Internship via Alumni",
            icon: "./images/quicklink/design.png",
            link: "/internships"
        },
        {
            name: "Job Openings Via Alumni",
            icon: "./images/quicklink/event.png",
            link: "/jobs"
        }
    ]



    return (
        <div className='pb-24 pt-20'>
            <h1 data-aos="fade-up" className="mb-2.5 lg:ml-10 md:ml-10 p-5 text-center text-sky-400 lg:text-5xl md:text-4xl text-4xl font-bold leading-tight">
                <span className="text-white">Quick</span> Links
            </h1>
            <div className='flex items-center lg:flex-row md:flex-row flex-col justify-center lg:gap-x-16 md:gap-x-8 mt-6'>
                <div className='flex flex-col items-center justify-center gap-5 mt-5 lg:w-fit md:w-fit w-full'>
                    {links.slice(0, 4).map((QuickLinks, idx) =>
                        <Link className='lg:w-96 md:w-80 sm:w-[90%] w-full md:p-0 px-6' data-aos="zoom-in" style={{ textDecoration: "none" }} key={idx} to={QuickLinks.link}>
                            <div className='flex items-center bg-[#0a0a0a] border-gray-800 hover:border-gray-700 border p-2.5 rounded-2xl gap-4'>
                                <div className='bg-gray-900 p-1.5 rounded'>
                                    <img src={QuickLinks.icon} alt="blockchain" className='h-8 w-8' />
                                </div>
                                <div>
                                    <p className='lg:text-xl md:text-xl text-lg text-gray-200 font-semibold pr-10'>{QuickLinks.name}</p>
                                </div>
                            </div>
                        </Link>)}
                </div>

                <div className='flex flex-col items-center justify-center gap-5 mt-5 lg:w-fit md:w-fit w-full'>
                    {links.slice(4, 8).map((QuickLinks, idx) =>
                        <Link className='lg:w-96 md:w-80 sm:w-[90%] w-full md:p-0 px-6' data-aos="zoom-in" style={{ textDecoration: "none" }} key={idx} to={QuickLinks.link}>
                            <div className='flex items-center bg-[#0a0a0a] border-gray-800 hover:border-gray-700 border p-2.5 rounded-2xl gap-4'>
                                <div className='bg-gray-900 p-1.5 rounded'>
                                    <img src={QuickLinks.icon} alt="blockchain" className='h-8 w-8' />
                                </div>
                                <div>
                                    <p className='lg:text-xl md:text-xl text-lg text-gray-200 font-semibold pr-10'>{QuickLinks.name}</p>
                                </div>
                            </div>
                        </Link>)}
                </div>
            </div>
        </div>
    )
}

export default QuickLinks