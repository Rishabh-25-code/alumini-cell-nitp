import React from 'react'
import Heading from '../../components/Headings/Heading'
import Meta from '../../components/Meta/Meta';
import Loader from '../../components/Loader';
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from 'react-router-dom';
import { getPaginatedDocuments } from '../../services/documents';
import { getImageURL, getDownloadURL } from '../../services/files';

const JobOffers = () => {
     const [searchParams, setSearchParams] = useSearchParams({ offset: 0 });

     const { data: jobs, isPending, isError } = useQuery({
          queryKey: ['job-posts'],
          queryFn: () => getPaginatedDocuments('job-opportunity', 20, parseInt(searchParams.get('offset')) || 0),
     })

     return (
          <>
               <Meta name="Job Openings" />
               <Heading heading="Job Openings" heading1="via our Alumni"></Heading>

               <div className='flex flex-col lg:w-[70%] md:w-[80%] w-full px-5 gap-6 m-auto items-center justify-center my-24'>
                    {isPending && <div className='w-full h-[10rem] flex items-center justify-center'><Loader /></div>}
                    {isError && <div className='text-center text-red-500'>Something went wrong!</div>}

                    {jobs && jobs.map((job) => (
                         <JobOffersCard data={job} key={job.$id} />
                    ))}
               </div>
          </>
     )
}

export default JobOffers;


const JobOffersCard = ({ data }) => {
     return (
          <div className='border border-gray-800 rounded-2xl p-5 mb-5 w-full'>
               <div className='flex justify-between'>
                    <div className='flex gap-5 flex-col items-center'>
                         <div className='flex w-full gap-2 items-center'>
                              {data.jobCompanyLogo && <div className='md:w-16 w-12 md:h-16 h-12 flex items-center justify-center'>
                                   <img src={data.jobCompanyLogo ? getImageURL(data.jobCompanyLogo, 200) : "logo-placeholder.jpg"} alt='Company Logo' />
                              </div>}
                              <div className='flex flex-col'>
                                   <p className='font-semibold text-rose-500 lg:text-xl text-lg'>{data.jobCompany}</p>
                                   <p className='text-sm text-gray-400'>{data.jobLocation}</p>
                              </div>
                         </div>
                         <div className='flex flex-col w-full'>
                              <p className='font-medium'>{data.jobTitle}</p>
                              <p className='text-sm text-gray-400'>{data.jobType}</p>
                         </div>
                    </div>
                    <div className='flex flex-col'>
                         <p className='text-sm text-gray-400'>Posted: <span className="text-white">{new Intl.DateTimeFormat('en-IN', { year: 'numeric', month: '2-digit', day: '2-digit', weekday: 'short' }).format(new Date(data.$createdAt))}</span></p>
                         <p className='text-sm text-gray-400'>Expires: <span className="text-white">{new Intl.DateTimeFormat('en-IN', { year: 'numeric', month: '2-digit', day: '2-digit', weekday: 'short' }).format(new Date(data.jobDeadline))}</span></p>
                    </div>
               </div>
               <div className='mt-5'>
                    <p className=''>{data.jobDescription}</p>
               </div>
               <div>
                    <p className=' text-gray-400'>Skills Required: <span className='text-sky-500'>{data.jobSkills.join(", ")}</span></p>
               </div>
               <div>
                    <p className=' text-gray-400'>Experience Required: <span className="text-white">
                         {parseInt(data.jobExperience) === 0 ? "Fresher" : data.jobExperience + " years"}</span></p>
               </div>
               <div>
                    <p className=' text-gray-400'>Expected Salary: <span className="text-white">{data.jobSalary} LPA</span></p>
               </div>
               {data.jobDetailsLink && <div className='flex gap-2'>
                    <p className=' text-gray-400'>Job Info Doc:</p>
                    <a href={getDownloadURL(data.jobDetailsLink)} target='_blank' rel='noreferrer'><button className='text-sm text-sky-500'>download</button></a>
               </div>}
               {data.jobLinks.length > 0 && <div>
                    <p className=' text-gray-400'>Job Link(s):</p>
                    {
                         data.jobLinks.map((link) => (
                              <a href={link} target='_blank' rel='noreferrer'><button className='text-sm text-left text-sky-500'>{link}</button></a>
                         ))
                    }
               </div>}
               {
                    data.referralAvailable && (
                         <div>
                              <p className=' text-gray-400'>For refferals:</p>
                              <p className='text-sky-500'>{data.referrerEmail}</p>
                         </div>
                    )
               }
               <div className='pt-2'>
                    <p className='text-sm text-gray-400 pb-1'>Posted By: </p>
                    <div className='flex gap-2 items-center'>
                         <div className='w-10 h-10 rounded-full overflow-hidden flex items-center justify-center'>
                              <img src={`https://cloud.appwrite.io/v1/avatars/initials?name=${data.name.split(" ").join("+")}&width=80&height=80`} alt='User Profile' />
                         </div>
                         <div className='flex flex-col'>
                              <p className='font-medium'>{data.name} ({data.yourBatchyourBatch} {data.yourDepartment})</p>
                              <p className='text-sm text-gray-400 -mt-1'>{data.yourCurrentRole} at {data.yourCurrentCompany}</p>
                         </div>
                    </div>
               </div>
          </div>
     )
}