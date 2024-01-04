import React from 'react'
import Heading from '../../components/Headings/Heading'
import { IoSearch } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import Meta from '../../components/Meta/Meta';
import JobOffersCard from './JobOffersCard';
import jobData from './job'


const JobOffers = () => {
     return (
          <>
               <Meta name="Job Openings" />
               <div>
                    <Heading heading="Job Openings" heading1="via our Alumni"></Heading>
               </div>

               {/* <div className="text-center text-lg font-medium py-32">
                <span className="text-xl">To be updated... 🚀 Brace yourself! <br />Our website is in the lab, cooking up awesomeness.</span><br />
                <span className="text-sky-500">Stay tuned for the grand reveal! </span>
               </div> */}

               <div className='flex flex-col  justify-center items-center gap-2 m-2 xl:flex-row xl:gap-72'>
                    <div className='flex flex-col sm:flex-row'>
                         <div className='flex justify-center sm:flex'>
                              <div className='flex justify-center items-center p-2 border text-2xl'><i><IoSearch /></i></div>
                              <div className=' '>
                                   <input
                                        type='text'
                                        placeholder='Location'
                                        value={""}
                                   />
                              </div>
                         </div>
                         <div className='flex justify-center'>
                              <input
                                   type='text'
                                   placeholder='Keywords'
                                   value={""}
                              />
                         </div>
                    </div>
                    <div className='flex justify-center'>
                         <div className='flex justify-center items-center text-gray-800 bg-sky-500 border border-black p-2 text-2xl rounded-lg px-3'><i><FaPlus /></i></div>
                         <button disabled={true} className='bg-sky-500 text-black border border-black flex items-center justify-center p-2 h-12 w-44 hover:bg-sky-600 rounded-lg'>Post Job</button>
                    </div>
               </div>


               <div className='flex flex-col-reverse items-center lg:flex-row lg:items-start justify-center gap-10'>

                    <div>
                         {jobData.map((item) => (
                              <JobOffersCard
                                   key={item.id}
                                   companyLogo={item.companyLogo}
                                   jobTitle={item.jobTitle}
                                   company={item.company}
                                   sharedBy={item.sharedBy}
                                   designation={item.designation}
                              />
                              
                         ))}
                    </div>

                    <div className='email bg-gray-900 p-4 rounded-2xl m-2 h-fit mt-12 w-fit'>
                         <div><h1 className='text-sky-500 text-lg'>Email Alerts</h1></div>
                         <div >
                              <input
                                   type='text'
                                   placeholder='All Creative job'
                                   value={""}

                                   className='hover:bg-gray-400 hover:cursor-pointer'
                              />
                         </div>
                         <div>
                              <input
                                   type='text'
                                   placeholder='Email Address'
                                   value={""}

                                   className='hover:bg-gray-400 hover:cursor-pointer'
                              />
                         </div>
                         <div className='mt-4 bg-green-600 w-fit p-2 rounded-md'><button>Subscribe</button></div>
                    </div>

               </div>





               <meta />
          </>
     )
}

export default JobOffers;
