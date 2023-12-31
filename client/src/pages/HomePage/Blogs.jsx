import React from 'react'
import BlogCard from '../AlumniCorner/BlogCard'
import { RxArrowRight } from 'react-icons/rx'
import { Link } from 'react-router-dom'


const Blogs = () => {

    const blogs = [
        {
            id: 0,

            name: "An Open Letter To Pre-final Year Students",
            description: "I am a final year student when I am writing this blog and its 25th of march 2021. I have passed 3rd year around 8 months back and hence the memories of the pleasures as well as adversities faced by student during their pre final year are still alive.",
            image: "https://miro.medium.com/v2/resize:fit:402/format:webp/0*HiD-gV3g-qO7Vjds",
            link: "https://medium.com/nerd-for-tech/an-open-letter-to-pre-final-year-students-2ad36d5831e4",
            clubName: "Alumni Portal",
            tag: ["FinalYear", "DSA", "Placements"],
            author: "Vaishnavi Jha",
            likes: 42,
            date: "2021-03-25T00:00:00.000Z",
            comments: [
                {
                    id: 1,
                    text: "",
                },
            ]

            
        },
        
        {
            id: 1,
            name: "My First Seminar Based On Internship Representing Internshala and LinkedIn At NIT Patna",
            description: "On December 9, 2018, I had an opportunity to organize a seminar on Internship at my own college, National Institute Of Technology Patna(NITP).",
            image: "https://media.licdn.com/dms/image/C5112AQFEOaP_1Noqow/article-cover_image-shrink_600_2000/0/1540223228569?e=1709164800&v=beta&t=6P8k2AVGEOlOsHyCDNymDTWGEsL6Ti1Omts4HMa0-_I",
            link: "https://www.linkedin.com/pulse/my-first-seminar-based-internship-representing-internshala-jha/",
            clubName: "Alumni Portal",
            tag: ["Internshala", "NITPatna",],
            author: "Jyotish Jha",
            likes: 25,
            date: "2018-10-22T00:00:00.000Z",
            comments: [
                {
                    id: 1,
                    text: "",
                },
            ]

        },
        
        {
            id: 1,

            name: "EXPERT's TALK - How to Start Career in VLSI without Masters",
            description: "On high Demand of VLSI Aspirants, Experts and Companies. We at VLSI FOR ALL organise World's Biggest VLSI Mega Recruitment Fair to Connect VLSI aspirants to top VLSI companies. We have collaborated with 200+ top VLSI Companies in more than 120+ Countries to meet demand of VLSI Skilled Engineers in Top VLSI Companies.",
            image: "https://images.unsplash.com/photo-1562408590-e32931084e23?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "https://www.youtube.com/watch?v=-pGpIObWRX8",
            clubName: "Alumni Portal",
            tag: ["VLSIforAll", "vlsijobs",],
            author: "Agam Gupta",
            likes: 19,
            date: "2023-04-28T00:00:00.000Z",
            comments: [
                {
                    id: 1,
                    text: "",
                },
            ]

        },
    ]

    return (
        <div className='pb-10 mb-20'>
            <h1 className="mb-2.5 mt-10 lg:ml-10 md:ml-10 p-5 lg:text-left md:text-left text-center text-sky-400 lg:text-5xl md:text-4xl text-4xl font-bold leading-tight">
                Blogs by our Alumni
            </h1>

            <div className='flex flex-wrap m-auto px-5 items-center justify-evenly mb-10'>
                {blogs.slice(0, 3).map((project, id) => (
                    <BlogCard data={project} key={id} />
                ))}
            </div>

            <Link to="/blogs" className='bg-sky-400 absolute lg:right-20 md:right-16 right-12 hover:bg-sky-500 text-white font-semi-bold py-2 px-4 rounded-full flex items-center'>
                <button className="mr-2">
                    View All
                </button>
                <RxArrowRight size={24} />
            </Link>
        </div>
    )
}

export default Blogs