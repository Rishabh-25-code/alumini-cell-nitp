import { PageHeading } from '../../components/Headings/Heading'
import Meta from '../../components/Meta/Meta'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Dashboard = () => {

  const dashboardItems = [
    {
      name: 'Profile',
      desc: 'Your profile',
      link: '/profile',
    },
    {
      name: 'Alumni Profile',
      desc: 'Your Alumni Profile',
      link: '/alumni-profile',
    },
    {
      name: 'Read Blogs',
      desc: 'Blogs',
      link: '/blogs',
    },
    {
      name: 'Read News',
      desc: 'Experiences',
      link: '/News',
    },
    {
      name: 'Explore Internships',
      desc: 'Internships',
      link: '/internships',
    },
    {
      name: 'Explore Jobs',
      desc: 'Jobs',
      link: '/jobs',
    },
    {
      name: 'Give Testimonial',
      desc: 'Give Testimonial',
      link: '/give-testimonial',
    },
    {
      name: 'Post Job Opening',
      desc: 'Jobs',
      link: '/post-a-job?tab=create-job',
    },
    {
      name: 'Post Intern Opening',
      desc: 'Internships',
      link: '/post-an-internship?tab=post-internship'
    },
    {
      name: 'Write a Blog',
      desc: 'Blogs',
      link: '/write-a-blog?tab=new-post',
    },
    {
      name: 'Share News',
      desc: 'Experiences',
      link: '/share-News?tab=new-posts',
    },
    {
      name: 'Report Bugs',
      desc: 'Report problems',
      link: '/report-bug',
    }
  ]

  return (
    <div className='lg:px-9 px-4'>
      <Meta title="Dashboard | Alumni NITP" />
      <PageHeading heading='Alumni' heading1="Dashboard" />

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 mt-5 md:gap-5 gap-3">
        {dashboardItems.map((item, index) => (
          <Link to={item.link} key={index} className="bg-[#0d0d12] border border-gray-900 rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out">
            <div className="flex md:flex-row flex-col group p-6 md:items-center items-start gap-y-3 hover:scale-[98%] transition-all justify-between">
              <div>
                <div className="text-lg group-hover:text-sky-500 font-medium">{item.name}</div>
                <div className="text-gray-400 text-sm">{item.desc==="Experiences"?"News":item.desc}</div>
              </div>
              <FaArrowRight className="md:text-2xl md:self-center self-end text-xl text-gray-400 group-hover:text-sky-500" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Dashboard