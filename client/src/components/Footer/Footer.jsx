import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import BackToTopButton from '../Scroll/BackToTopButton';
const Footer = () => {
  const date = new Date;
  const year = date.getFullYear();
  return (
    <div data-aos="fade-in" className="bg-[#0b0b0b] text-sm w-[100%] mt-[10rem]">
      <div className="mb-10 w-[90%] grid gap-2 md:gap-4 lg:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-[auto] items-start justify-items-center">
        <div className='mt-10 w-[100%] md:w-[100%] lg:w-[100%] order-1 md:order-1 lg:order-1'>
          <Link href="/">
            <img src="logo.jfif" alt="logo" className='h-16 w-16 rounded-full' />
          </Link>

          <p className='max-w-[17rem] py-3 text-base text-gray-200'>One-stop portal for alumni of the National Institute of Technology, Patna, Bihar.</p>
          <div className='flex gap-3 py-2 '>
            <a href="https://facebook.com" style={{ color: 'blue' }} className='transition ease-in delay-50 text-blue-500 hover:text-blue-600 hover:scale-[110%]'>
              <FaFacebook size={30} />
            </a>
            <a href="https://web.whatsapp.com" style={{ color: '#00c000' }} className='transition ease-in delay-50 text-green-400 hover:text-green-500 hover:scale-[110%]'>
              <IoLogoWhatsapp size={30} />
            </a>
            <a href="https://instagram.com" style={{ color: "rgb(255, 105, 180)" }} className='transition ease-in delay-50 text-pink-500 hover:text-pink-600 hover:scale-[110%]'>
              <FaInstagram size={30} />
            </a>

          </div>
        </div>

        <div className='mt-10 w-[100%] md:w-[100%] lg:w-[100%] order-2 md:order-2 lg:order-2'>
          <div className='flex items-center justify-start'><h1 className='font-extrabold text-2xl text-blue-700 mr-3'>|</h1><h1 className='text-lg font-semibold text-sky-500'>Useful Links</h1></div>
          <ul className='mt-4 flex flex-col gap-3 text-base'>
            <li className=' hover:text-blue-600'><Link style={{color:"#aaa"}} to="https://www.nitp.ac.in/" target="_blank">NIT Patna</Link></li>
            <li className='hover:text-blue-600'><Link style={{color:"#aaa"}} to="/history">History</Link></li>
            <li className='hover:text-blue-600'><Link style={{color:"#aaa"}} to="/jobs">Jobs</Link></li>
            <li className='hover:text-blue-600'><Link style={{color:"#aaa"}} to="/internships">Internships</Link></li>
            <li className=' hover:text-blue-600'><Link style={{color:"#aaa"}} to="/team">Web Team</Link></li>
            <li className=' hover:text-blue-600'><Link style={{color:"#aaa"}} to="https://alumini-nitp-admin.vercel.app/">Admin</Link></li>

          </ul>
        </div>

        <div className='mt-10 w-[100%] md:w-[100%] lg:w-[100%] order-2 md:order-2 lg:order-2'>
          <div className='flex items-center justify-start'><h1 className='font-extrabold text-2xl text-blue-700 mr-3'>|</h1><h1 className='text-lg font-semibold text-sky-500'>Must Check</h1></div>
          <ul className='mt-4 flex flex-col gap-3 text-base'>
            <li className='hover:text-blue-600'><Link style={{color:"#aaa"}} to="/events">Event Gallery</Link></li>
            <li className='hover:text-blue-600'><Link style={{color:"#aaa"}} to="/notableAlumni">Notable Alumni</Link></li>
            <li className=' hover:text-blue-600'><Link style={{color:"#aaa"}} to="/events">Upcoming Events</Link></li>
            <li className=' hover:text-blue-600'><Link style={{color:"#aaa"}} to="/success-stories">Success Stories</Link></li>
            <li className=' hover:text-blue-600'><Link style={{color:"#aaa"}} to="/experiences">Experiences</Link></li>
          </ul>
        </div>

        <div className='mt-10 w-[100%] md:w-[100%] lg:w-[100%] order-3 md:order-3 lg:order-3 text-base'>
          <div className='flex items-center justify-start'><h1 className='font-extrabold text-2xl text-blue-700 mr-3'>|</h1><h1 className='text-lg font-semibold text-sky-500'>Contact Us</h1></div>
          <p className='max-w-[16rem] pt-4 text'>NIT Patna, Ashok Rajpath, Patna, Bihar-800005, India</p>
          <p className='pt-2'>Ph : <a href="tel:06122371715" style={{color:"#009bd6"}} className='text-blue-700 ml-2 font-semibold'>+91-0612 237 1715 / 237 2715</a></p>
          <p className='pt-2'>Mail : <a href="mailto:alumni@nitp.ac.in" style={{color:"#009bd6"}} className='text-blue-700 ml-2 font-semibold'>alumni@nitp.ac.in</a></p>
        </div>

      </div>

      <div className="w-[90%] m-[auto] bg-gray-800 h-[1px]"></div>
      <div className="m-[auto] py-7 text-gray-500 font-medium text-sm gap-4 flex flex-col md:flex-row lg:flex-row justify-between items-center w-[90%]">
        <p>
          © {year} NITP, All Rights Reserved.
        </p>
        <p className='flex items-center gap-1'>
          <span className='md:block hidden'>Designed & Developed</span> <span className='md:hidden block'>Designed</span>
          <span>by <Link style={{color:"#009bd6"}} className="font-medium" to="/team">Electrical Engineers of NIT Patna</Link>.</span>
        </p>
      </div>

      <BackToTopButton/>
    </div>
  )
}

export default Footer