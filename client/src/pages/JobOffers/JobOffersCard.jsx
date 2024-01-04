import React from 'react'
import { Link } from 'react-router-dom'
import { FaFileDownload } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";
const JobOffersCard = ({ companyLogo, jobTitle, company, sharedBy, designation }) => {

     const openPdf = () => {
          window.open('./job-details/Vacancies in NHPC.pdf', '_blank');
     };

     return (
          <>


               <div className='flex flex-col  justify-center items-center gap-10 mt-10 md:flex-row'>
                    <div className='m-2 bg-gray-900 flex items-center p-4 rounded-2xl'>
                         <div className='flex gap-10'>
                              <div className='overflow-hidden w-42 sm:h-32 sm:w-32'><img src={companyLogo} alt='' /></div>
                              <div>
                                   <div className='flex items-center gap-2  '>
                                        <div className='text-3xl text-sky-500'>{jobTitle}</div>
                                        <div className='text-red-600 bg-pink-200  rounded-2xl w-16 flex justify-center -mb-3 text-xs'>FEATURED</div>
                                   </div>
                                   <div className='text-gray-400'>{company}</div>
                                   <div className='mt-2'>
                                        <h1 className='border-b border-gray-500'>Shared By:</h1>
                                        <h2 className=''>{sharedBy}</h2>
                                        <h2>{designation}</h2>
                                   </div>
                                   <div className='mt-5 flex justify-end'>
                                        <div className='flex  items-center gap-2 p-2 rounded-2xl border border-gray-400'>
                                             <h4 className='italic font-sans '>Job Details</h4>
                                             {/* {pdfViewer && <Pdf file="./job-details/Vacancies in NHPC.pdf" />} */}
                                             <i className='text-green-500 text-3xl cursor-pointer hover:text-green-700' onClick={openPdf}><MdRemoveRedEye /></i>

                                             <a href='./job-details/Vacancies in NHPC.pdf' download>
                                                  <i className='text-red-500 text-3xl cursor-pointer hover:text-red-700'><FaFileDownload /></i>
                                             </a>
                                        </div>

                                   </div>
                              </div>
                         </div>
                    </div>


               </div>
          </>
     )
}

export default JobOffersCard