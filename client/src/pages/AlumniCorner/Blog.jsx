import React from 'react'
import { useParams } from 'react-router-dom'
import { BsDot } from 'react-icons/bs'

const Blog = () => {

  const { blogId } = useParams();

  const blogs = [
    {
      id: 2,
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
      description: "On December 9, 2018, I had an opportunity to organize a seminar on Internship at my own college, National Institute Of Technology Patna(NITP). Recently I got selected on Internshala Student Partner program, where they mailed me to organized a Seminar On Internship. At first, my reaction is, What a heck seminar! without any previous experiences....but after some time, I remember one famous quote Tomorrow's work do today, today's work now. If the moment is lost, the work be done how? and I said to my self “OKAY” Let Do This. So I just filled a form for organizing a seminar at Internshala and waited for there response after a week I got a mail with some kit, where they mention how to perform, Topics & things that should be mention on speech etc.",
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
      id: 0,
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
    }
  ]


  return (
    <div className='pt-36'>
      {
        <div className='m-auto flex flex-col items-center justify-center'>
          <h1 className='lg:text-4xl md:text-3xl text-2xl font-bold lg:max-w-3xl md:max-w-2xl px-6 text-center m-auto text-sky-500 my-10 mt-6'>{blogs[blogId].name}</h1>

          <div className='flex items-center h-56 overflow-hidden lg:w-[70%] md:w-[80%] w-[85%] rounded-lg border border-gray-900'>
            <img className='w-full' src={blogs[blogId].image} alt={blogs[blogId].title} />
          </div>

          <div className='flex items-center p-5'>
            <p className='text-gray-400'>{blogs[blogId].author}</p>
            <BsDot size={20} className='text-gray-300' />
            <p className='text-gray-400'>{new Intl.DateTimeFormat('en-AU').format(new Date(blogs[blogId].date))}</p>
            <BsDot size={20} className='text-gray-300' />
            <p className='text-gray-400'>3 min read</p>
          </div>

          <div className='lg:w-[70%] md:w-[80%] w-[85%] text-lg mt-10'>
            <p className='text-gray-200'>{blogs[blogId].description}</p>

            <p className='text-gray-400 text-base mt-4 mb-32'>Read the full blog <a className='text-blue-500' href={blogs[blogId].link} target="_blank" rel="noopener noreferrer">here</a>.</p>
          </div>
        </div>
      }
    </div >
  )
}

export default Blog;