import React from 'react'
import Heading from '../../components/Headings/Heading'
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

               </div>
               <meta />
          </>
     )
}

export default JobOffers;
