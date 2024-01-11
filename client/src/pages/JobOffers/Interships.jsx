import React from "react";
import Heading from "../../components/Headings/Heading";
import Meta from "../../components/Meta/Meta";
import Loader from '../../components/Loader';
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from 'react-router-dom';
import { getPaginatedDocuments } from '../../services/documents';
import { getImageURL, getDownloadURL } from '../../services/files';

const Interships = () => {
  const [searchParams, setSearchParams] = useSearchParams({ offset: 0 });

  const { data: internships, isPending, isError } = useQuery({
    queryKey: ['intern-posts'],
    queryFn: () => getPaginatedDocuments('intern-opportunity', 20, parseInt(searchParams.get('offset')) || 0),
  })

  return (
    <div>
      <Meta name="Internship Opportunities" />
      <Heading heading="Internship" heading1="opportunities via Alumni"></Heading>

      <div className='flex flex-col lg:w-[70%] md:w-[80%] w-full px-5 gap-6 m-auto items-center justify-center my-24'>
        {isPending && <div className='w-full h-[10rem] flex items-center justify-center'><Loader /></div>}
        {isError && <div className='text-center text-red-500'>Something went wrong!</div>}

        {internships && internships.map((intern) => (
          <InternOffersCard data={intern} key={intern.$id} />
        ))}
      </div>
    </div>
  );
};

export default Interships;

const InternOffersCard = ({ data }) => {
  return (
    <div key={data.$id} className='border border-gray-800 rounded-2xl p-5 mb-5'>
      <div className='flex justify-between'>
        <div className='flex gap-5 md:flex-row flex-col items-center'>
          <div className='flex gap-2 items-center'>
            <div className='md:w-16 w-12 md:h-16 h-12'>
              <img src={data.internCompanyLogo ? getImageURL(data.internCompanyLogo, 200) : "logo-placeholder.jpg"} alt='Company Logo' />
            </div>
            <div className='flex flex-col'>
              <p className='font-medium text-lg'>{data.internCompany}</p>
              <p className='text-sm text-gray-400'>{data.internLocation}</p>
            </div>
          </div>
          <div className='flex flex-col'>
            <p className=' font-medium'>{data.internTitle}</p>
            <p className='text-sm text-gray-400'>{data.internType}</p>
          </div>
        </div>
        <div className='flex flex-col'>
          <p className='text-sm text-gray-400'>Posted: <span className="text-white">{new Intl.DateTimeFormat('en-IN', { year: 'numeric', month: '2-digit', day: '2-digit', weekday: 'short' }).format(new Date(data.$createdAt))}</span></p>
          <p className='text-sm text-gray-400'>Expires: <span className="text-white">{new Intl.DateTimeFormat('en-IN', { year: 'numeric', month: '2-digit', day: '2-digit', weekday: 'short' }).format(new Date(data.internDeadline))}</span></p>
        </div>
      </div>
      <div className='mt-5'>
        <p className=''>{data.internDescription}</p>
      </div>
      <div>
        <p className=' text-gray-400'>Skills Required: <span className='text-sky-500'>{data.internSkills.join(", ")}</span></p>
      </div>
      <div>
        <p className=' text-gray-400'>Experience Required: <span className="text-white">
          {parseInt(data.internExperience) === 0 ? "Fresher" : data.internExperience + " years"}</span></p>
      </div>
      {data.internSalary && <div>
        <p className=' text-gray-400'>Expected Salary: <span className="text-white">{new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(data.internSalary)} K</span></p>
      </div>}
      {data.internDetailsLink && <div className='flex gap-2'>
        <p className=' text-gray-400'>Intern Info Doc:</p>
        <a href={getDownloadURL(data.internDetailsLink)} target='_blank' rel='noreferrer'><button className='text-sm text-sky-500'>download</button></a>
      </div>}
      {data.internLinks.length > 0 && <div>
        <p className=' text-gray-400'>Intern Link(s):</p>
        {
          data.internLinks.map((link) => (
            <a href={link} target='_blank' rel='noreferrer'><button className='text-sm text-sky-500'>{link}</button></a>
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
        <p className='text-sm text-gray-400'>Posted By: </p>
        <div className='flex gap-2 items-center'>
          <div className='w-10 h-10 rounded-full overflow-hidden flex items-center justify-center'>
            <img src={`https://cloud.appwrite.io/v1/avatars/initials?name=${data.name.split(" ").join("+")}&width=80&height=80`} alt='User Profile' />
          </div>
          <div className='flex flex-col'>
            <p className='font-medium'>{data.name} ({data.yourBatchyourBatch} {data.yourDepartment})</p>
            <p className='text-sm text-gray-400'>{data.yourCurrentRole} at {data.yourCurrentCompany}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
