import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
const Footer = () => {
  const date = new Date;
  const year = date.getFullYear();
  return (
    // <div className="bg-sky-100 dark:bg-[#5e0404] text-sm w-[100%] mt-[10rem]">
    <div className="bg-gray-800 dark:bg-000 text-sm mt-[10rem] w-[100%]">

      <div className="mb-10 w-[90%] grid gap-2 md:gap-4 lg:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-[auto] items-start justify-items-center">

        <div className='mt-10 w-[100%] md:w-[100%] lg:w-[100%] order-1 md:order-1 lg:order-1'>

          <Link href="/">
            <img src="logo.jfif" alt="logo" className='h-16 w-16 rounded-full' />
          </Link>

          <p className='max-w-[17rem] py-3 text-base text-gray-200'>Alumni Page of National Institute of Technology Patna.</p>
          <div className='flex gap-3 py-2 '>
            <a href="https://facebook.com" className='transition ease-in delay-50 text-blue-500 hover:text-blue-600 hover:scale-[110%]'>
              <FaFacebook size={30} />
            </a>
            <a href="https://web.whatsapp.com" className='transition ease-in delay-50 text-green-400 hover:text-green-500 hover:scale-[110%]'>
              <IoLogoWhatsapp size={30} />
            </a>
            <a href="https://instagram.com" className='transition ease-in delay-50 text-pink-500 hover:text-pink-600 hover:scale-[110%]'>
              <FaInstagram size={30} />
            </a>

          </div>
        </div>

        <div className='mt-10 w-[100%] md:w-[100%] lg:w-[100%] order-2 md:order-2 lg:order-2'>
          <div className='flex items-center justify-start'><h1 className='font-extrabold text-2xl text-blue-700 mr-3'>|</h1><h1 className='text-lg font-semibold text-sky-500'>Useful Links</h1></div>
          <ul className='mt-4 flex flex-col gap-3 text-base'>
            <li className=' hover:text-blue-600'><Link to="https://www.nitp.ac.in/" target="_blank">NIT Patna</Link></li>
            <li className='hover:text-blue-600'><Link to="/history">History</Link></li>
            <li className='hover:text-blue-600'><Link to="/jobs">Jobs</Link></li>
            <li className='hover:text-blue-600'><Link to="/internships">Internships</Link></li>
            <li className=' hover:text-blue-600'><Link to="/team">Web Team</Link></li>
          </ul>
        </div>

        <div className='mt-10 w-[100%] md:w-[100%] lg:w-[100%] order-2 md:order-2 lg:order-2'>
          <div className='flex items-center justify-start'><h1 className='font-extrabold text-2xl text-blue-700 mr-3'>|</h1><h1 className='text-lg font-semibold text-sky-500'>Must Check</h1></div>
          <ul className='mt-4 flex flex-col gap-3 text-base'>
            <li className='hover:text-blue-600'><Link to="/events">Event Gallery</Link></li>
            <li className='hover:text-blue-600'><Link to="/notableAlumni">Notable Alumni</Link></li>
            <li className=' hover:text-blue-600'><Link to="/events">Upcoming Events</Link></li>
            <li className=' hover:text-blue-600'><Link to="/success-stories">Success Stories</Link></li>
            <li className=' hover:text-blue-600'><Link to="/contribute">Contribute</Link></li>
          </ul>
        </div>

        <div className='mt-10 w-[100%] md:w-[100%] lg:w-[100%] order-3 md:order-3 lg:order-3 text-base'>
          <div className='flex items-center justify-start'><h1 className='font-extrabold text-2xl text-blue-700 mr-3'>|</h1><h1 className='text-lg font-semibold text-sky-500'>Contact Us</h1></div>
          <p className='max-w-[16rem] pt-4 text'>NIT Patna, Ashok Rajpath, Patna, Bihar-800005, India</p>
          <p className='pt-2'>Ph : <a href="tel:06122371715" className='text-blue-700 ml-2 font-semibold'>+91-0612 237 1715 / 237 2715</a></p>
          <p className='pt-2'>Mail : <a href="mailto:alumni@nitp.ac.in" className='text-blue-700 ml-2 font-semibold'>alumni@nitp.ac.in</a></p>
        </div>

      </div>

      <div className="w-[90%] m-[auto] bg-gray-800 h-[2px]"></div>
      <div className="m-[auto] pb-8 pt-5 text-gray-800 dark:text-gray-400 dark:font-light flex flex-col md:flex-row lg:flex-row justify-between items-center w-[90%] text-base">
        <p>
          © {year} NITP, All Rights Reserved.
        </p>
        <p>
          Designed & Developed by <a className="text-base font-medium text-blue-500" href="#">Electrical Enginneers</a>.

        </p>
      </div>
    </div>
  )
}

export default Footer