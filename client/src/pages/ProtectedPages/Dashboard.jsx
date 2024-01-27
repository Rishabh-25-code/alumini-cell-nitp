import { PageHeading } from '../../components/Headings/Heading'
import Meta from '../../components/Meta/Meta'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { regSw, subscribe, unSubscribe } from '../../helper';
import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-toastify';

const Dashboard = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
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
      name: 'Read Experiences',
      desc: 'Experiences',
      link: '/experiences',
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
      name: 'Share Experience',
      desc: 'Experiences',
      link: '/share-experience?tab=new-posts',
    },
    {
      name: 'Report Bugs',
      desc: 'Report problems',
      link: '/report-bug',
    }
  ]
  const { user } = useAuth();

  const checkSubscription = async () => {
    if ('serviceWorker' in navigator) {
      try {
        const subscription = await navigator.serviceWorker.ready.then((registration) => registration.pushManager.getSubscription());
        setIsSubscribed(subscription !== null);
      } catch (error) {
        setIsSubscribed(false);
      }
    } else {
      setIsSubscribed(false);
    }
  }

  useEffect(() => {
    checkSubscription();
  }, [])

  async function registerAndSubscribe() {
    setLoading(true);
    try {
      const serviceWorkerReg = await regSw();
      await subscribe(serviceWorkerReg, user.$id);
      toast.success('Subscribed to notifications');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function unSubscribeAndUnRegister() {
    setLoading(true);
    try {
      const serviceWorkerReg = await regSw();
      await unSubscribe(serviceWorkerReg);
      toast.success('Unsubscribed from notifications');
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }


  return (
    <div className='lg:px-9 px-4'>
      <Meta title="Dashboard | Alumni NITP" />
      <PageHeading heading='Alumni' heading1="Dashboard" />

      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-5">
        <div className="text-lg font-medium">Welcome to Alumni NITP</div>
        <div className="flex gap-3">
          <button disabled={loading} onClick={async () => {
            if (isSubscribed) {
              const res = window.confirm('Are you sure you want to unsubscribe?');
              if (res) {
                await unSubscribeAndUnRegister();
                setIsSubscribed(false);
              }
            } else {
              await registerAndSubscribe();
              setIsSubscribed(true);
            }
          }} className="bg-sky-500 hover:bg-sky-600 disabled:bg-gray-600 active:bg-gray-500 text-white px-3 py-1.5 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
            {isSubscribed ? 'Unsubscribe' : 'Subscribe'} to Notifications
          </button>
        </div>
      </div>


      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 mt-5 md:gap-5 gap-3">
        {dashboardItems.map((item, index) => (
          <Link to={item.link} key={index} className="bg-[#0d0d12] border border-gray-900 rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out">
            <div className="flex md:flex-row flex-col group p-6 md:items-center items-start gap-y-3 hover:scale-[98%] transition-all justify-between">
              <div>
                <div className="text-lg group-hover:text-sky-500 font-medium">{item.name}</div>
                <div className="text-gray-400 text-sm">{item.desc}</div>
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