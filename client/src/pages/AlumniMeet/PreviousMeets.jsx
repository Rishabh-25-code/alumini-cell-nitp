import Heading from "../../components/Headings/Heading"
import { FaShare } from "react-icons/fa";
import Meta from "../../components/Meta/Meta";
import CustomCarousel from "../../components/Carousel/CustomCarousel";

const PreviousMeets = () => {

    const meets = [
        {
            img: "alumni-meet.jfif",
            name: "3rd Alumni Meet 2023",
            date: "24, December 2023",
            description: [
                "Gratitude to all the incredible alumni who graced us with their presence at Rewind '23, whether in person or through our online live streaming. Your participation has added immense joy to our celebration. We're thrilled by the enthusiasm and camaraderie displayed today.",
                "As we look forward to more alumni joining in with even greater enthusiasm, we invite you to share your thoughts through the attached feedback form. Your feedback fuels our motivation for upcoming sessions. Here's to many more memorable reunions in the future!"
            ],
        },
        {
            img: "alumni-meet-2023.jpg",
            name: "Alumni Meet 2022",
            date: "February 2023",
            description: [
                "Expressing heartfelt gratitude to the remarkable alumni, including our esteemed guest, Chief Minister Nitish Kumar, who graced us with their presence at Rewind '22. Whether in person or through our online live streaming, your participation has added immense joy to our celebration. The enthusiasm and camaraderie displayed today reflect the spirit of NIT Patna, and we're thrilled to witness the bond that unites us all.",
                "As we eagerly anticipate more alumni joining in with even greater enthusiasm, we extend an invitation to share your thoughts through the attached feedback form. Your insights and experiences are invaluable, serving as the driving force for the success of upcoming sessions. Here's to the continuation of this tradition and to many more memorable reunions in the future! Your presence has made Rewind '22 truly special."
            ],
        }
    ]

    const data = [
        {
            image: "/images/Meet5600/DSC_0645-min.jpg",
            caption: "Alumni Meet 2023"
        },
        {
            image: "/images/Meet5600/DSC_0665-min.jpg",
            caption: "Alumni Meet 2023"
        },
        {
            image: "/images/Meet5600/DSC_0672-min.jpg",
            caption: "Alumni Meet 2023"
        },
        {
            image: "/images/Meet5600/DSC_0685-min.jpg",
            caption: "Alumni Meet 2023"
        },
        {
            image: "/images/Meet5600/DSC_0690-min.jpg",
            caption: "Alumni Meet 2023"
        },
        {
            image: "/images/Meet5600/DSC_0704-min.jpg",
            caption: "Alumni Meet 2023"
        },
        {
            image: "/images/Meet5600/DSC_0701-min.jpg",
            caption: "Alumni Meet 2023"
        },
        {
            image: "/images/Meet5600/DSC_0708-min.jpg",
            caption: "Alumni Meet 2023"
        },
        {
            image: "/images/Meet5600/DSC_0711-min.jpg",
            caption: "Alumni Meet 2023"
        },
        {
            image: "/images/Meet5600/DSC_0713-min.jpg",
            caption: "Alumni Meet 2023"
        },
        {
            image: "/images/Meet5600/DSC_0719-min.jpg",
            caption: "Alumni Meet 2023"
        },
        {
            image: "/images/Meet5600/DSC_0722-min.jpg",
            caption: "Alumni Meet 2023"
        },
        {
            image: "/images/Meet5600/DSC_0724-min.jpg",
            caption: "Alumni Meet 2023"
        },

    ];

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }


    return (
        <div>
            <Meta name="Previous Alumni Meets" />
            <Heading heading="Previous Alumni" heading1="Meets of NIT Patna"></Heading>

            <CustomCarousel
                data={data}
                captionStyle={captionStyle}
                slideNumberStyle={slideNumberStyle}
            />
            <br />
            <br />

            <div className="flex flex-col gap-10 pt-12 pb-32">
                {
                    meets.map((meet, index) => (
                        <div key={index} className='bg-gray-900 lg:w-[50rem] md:w-[90%] w-[95%] m-auto shadow rounded-2xl p-6'>
                            <div className='border-b border-b-gray-700 text-2xl px-2 py-2 pt-0 text-sky-500 font-bold'>
                                {meet.name}
                            </div>

                            <div className='pt-5'>
                                <img loading="lazy" className='w-full' src={meet.img} alt="alumni meet" />

                                <div className='flex flex-col text-justify gap-5 pt-5'>
                                    {
                                        meet.description.map((desc, index) => (
                                            <p key={index}>
                                                {desc}
                                            </p>
                                        ))
                                    }
                                </div>

                                <button
                                    type="button"
                                    className="text-lg font-medium text-sky-400 hover:scale-105 mt-5"
                                    onClick={() => {
                                        const shareItem = {
                                            title: meet.name,
                                            text: meet.description[0],
                                            url: "https://alumni.nitp.ac.in/prev-alumni-meets",
                                        }

                                        if (navigator.share) {
                                            navigator.share(shareItem)
                                                .then(() => console.log('Successful share'))
                                                .catch((error) => console.log('Error sharing', error));
                                        } else {
                                            console.log("Your browser does not support Web Share API");
                                        }
                                    }}

                                >
                                    Share <FaShare className='inline-block ml-2' />
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default PreviousMeets