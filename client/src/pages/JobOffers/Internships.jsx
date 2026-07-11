import React from "react";
import Heading from "../../components/Headings/Heading";
import { FaShare } from "react-icons/fa";
import Meta from "../../components/Meta/Meta";
import Loader from '../../components/Loader';
import { useQuery } from "@tanstack/react-query";
import { useSearchParams, Link } from 'react-router-dom';
import { getPaginatedPublishedDocs } from '../../services/documents';
import { getImageURL } from '../../services/files';
import { useState, useEffect } from 'react';
import { FiSearch } from "react-icons/fi";


const Interships = () => {
  const [searchParams, setSearchParams] = useSearchParams({ page: 1, type: "internTitle", search: "" });
  const page = parseInt(searchParams.get('page')) || 1;
  const search = searchParams.get('search') || "";
  const type = searchParams.get('type') || "internTitle";
  const [itemsPerPage] = useState(15);

  const [searchText, setSearchText] = useState(search);
  const [searchType, setSearchType] = useState(type);

  const { data: internships, isLoading, isError } = useQuery({
    queryKey: ['intern-posts', page, search],
    queryFn: () => getPaginatedPublishedDocs('intern-opportunity', itemsPerPage, itemsPerPage * (page - 1), "published", search, type),
  })

  const changeParams = (key, value) => {
    setSearchParams(prev => {
      prev.set(key, value);
      if (key === "search" || key === "type") prev.set("page", 1);
      return prev;
    }, { replace: true });
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      changeParams('search', searchText);
    }, 500);

    // Cleanup the timer on component unmount
    return () => clearTimeout(debounceTimer);
  }, [searchText]);

  return (
    <div>
      <Meta name="Internship Opportunities" />
      <Heading heading="Internship" heading1="opportunities via Alumni"></Heading>

      <div className='glass-panel lg:w-[80%] w-[94%] md:px-4 px-3 mt-8 m-auto relative flex md:gap-3 gap-2 items-center rounded-2xl py-3'>
        <div className='flex-1 relative w-full'>
          <input value={searchText} onChange={(e) => setSearchText(e.target.value)} type="search" placeholder="Search by title, company, skills.." className="w-full pl-10 px-5 md:py-2.5 py-2 rounded-xl bg-white text-slate-900 font-normal" />
          <FiSearch className="absolute md:top-4 top-3 text-xl left-3.5 text-slate-400" />
        </div>

        <select value={searchType} onChange={(e) => {
          setSearchType(e.target.value);
          changeParams('type', e.target.value);
        }} className='bg-white rounded-xl lg:px-4 md:px-4 px-2 md:py-2.5 py-2 font-normal text-slate-700'>
          <option value="">Search By</option>
          <option value="internCompany">Company</option>
          <option value="internSkills">Skills</option>
          <option value="internTitle">Intern Title</option>
        </select>
      </div>

      {isLoading ? <div className='w-full h-[10rem] flex items-center justify-center'><Loader /></div> :
        isError ? <div className='text-center text-red-500'>Something went wrong!</div> :
          internships && internships.length === 0 ? <div className='text-center py-16 text-sky-500'>No items found!</div> :
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:w-[85%] md:w-[95%] w-full px-5 gap-6 m-auto my-16'>
              {internships.map((intern) => (
                <JobOffersCard2 data={intern} key={intern.$id} />
              ))}
            </div>
      }

      {internships && internships.length !== 0 && (
        <>
          <div data-aos="fade-up" className="text-center px-3 pt-16">
            Showing <span className="text-sky-500">{internships.length}</span> results of page <span className="text-sky-500">{page}</span>.
          </div>

          <div data-aos="fade-up" className="flex items-center justify-center pt-5 gap-10 px-6">
            <button
              disabled={page <= 1}
              onClick={() => changeParams('page', page - 1)}
              className="px-8 py-2.5 rounded-xl bg-white disabled:bg-gray-400 text-gray-900 text-lg font-semibold"
            >
              Prev
            </button>
            <button
              disabled={itemsPerPage > internships.length}
              onClick={() => changeParams('page', page + 1)}
              className="px-8 py-2.5 rounded-xl bg-white disabled:bg-gray-400 text-gray-900 text-lg font-semibold"
            >
              Next
            </button>
          </div>
        </>
      )}

    </div>
  );
};

export default Interships;

const JobOffersCard2 = ({ data }) => {
  return (<>
    <div data-aos="fade-up" className='surface-card hover:-translate-y-1 transition-all rounded-2xl p-5'>
      <Link to={`/internship/${data.$id}`}>
        <div className='flex justify-between'>
          <div className='flex gap-5 flex-col items-center'>
            <div className='flex w-full gap-2 items-center'>
              {data.internCompanyLogo && <div className='md:w-16 w-12 md:h-16 h-12 flex items-center justify-center'>
                <img src={data.internCompanyLogo ? getImageURL(data.internCompanyLogo, 200) : "logo-placeholder.jpg"} alt='Company Logo' />
              </div>}
              <div className='flex flex-col'>
                <p className='font-semibold text-rose-700 lg:text-xl text-lg'>{data.internCompany}</p>
                <p className='text-sm text-slate-500'>{data.internLocation}</p>
              </div>
            </div>
            <div className='flex flex-col w-full'>
              <p className='font-medium'>{data.internTitle}</p>
              <p className='text-sm text-green-400'>{data.internType}</p>
            </div>
          </div>
        </div>
        {data.internSkills.length !== 0 && <div>
          <p className=' text-slate-500'>Skills Required: <span className='text-sky-700'>{data.internSkills.join(", ")}</span></p>
        </div>}
        <div>
          <p className=' text-slate-500'>Experience Required: <span className="text-slate-950">
            {parseInt(data.internExperience) === 0 ? "Fresher" : data.internExperience + " years"}</span></p>
        </div>
        {data.internSalary != 0 && data.internSalary && <div>
          <p className=' text-slate-500'>Expected Stipend: <span className="text-slate-950">{new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(data.internSalary)} K</span></p>
        </div>}
        <p className='text-sm pt-2 text-slate-500'>Posted: <span className="text-slate-950">{new Intl.DateTimeFormat('en-IN', { year: 'numeric', month: '2-digit', day: '2-digit', weekday: 'short' }).format(new Date(data.$createdAt))}</span></p>
        {data.internDeadline && <p className='text-sm text-slate-500'>Deadline: <span className="text-slate-950">{new Intl.DateTimeFormat('en-IN', { year: 'numeric', month: '2-digit', day: '2-digit', weekday: 'short' }).format(new Date(data.internDeadline))}</span></p>}
        <p>
          Status :  <span className={`${data.status === "reviewing" ? "text-yellow-500" : data.status === 'published' ? "text-green-500" : "text-red-500"}`}>{data.status}</span>
        </p>

        <div className='pt-2'>
          <p className='text-sm text-slate-500 pb-1'>Posted By: </p>
          <div className='flex gap-2 items-center'>
            <div className='w-10 h-10 rounded-full overflow-hidden flex items-center justify-center'>
              <img src={`https://fra.cloud.appwrite.io/v1/avatars/initials?name=${data.name.split(" ").join("+")}&width=80&height=80`} alt='User Profile' />
            </div>
            <div className='flex flex-col'>
              <p className='font-medium'>{data.name} ({data.yourBatch} {data.yourDepartment})</p>
              <p className='text-sm text-slate-500 -mt-1'>{data.yourCurrentRole} at {data.yourCurrentCompany}</p>
            </div>
          </div>
        </div>
      </Link>

      <button
        type="button"
        className="text-lg font-medium text-sky-700 hover:text-sky-900 mt-5 self-end"
        onClick={() => {
          const shareItem = {
            title: "Here is an internship opportunity by NITP Alumni.",
            text: data.internTitle,
            url: `https://alumini-nitp.vercel.app/internship/${data.$id}`,
          }
          if (navigator.share) {
            navigator.share(shareItem)
              .then(() => console.log('Successful share'))
              .catch((error) => console.log('Error sharing'));
          } else {
            console.log("Your browser does not support Web Share API");
          }
        }}
      >
        Share <FaShare className='inline-block ml-2' />
      </button>
    </div>
  </>
  )
}
