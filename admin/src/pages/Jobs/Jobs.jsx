import Heading from '../../components/Headings/Heading'
import Meta from '../../components/Meta/Meta';
import Loader from '../../components/Loader';
import { useQuery } from "@tanstack/react-query";
import { Link, useSearchParams } from 'react-router-dom';
import { getPaginatedUnpublishedDocs } from '../../services/documents';
import { getImageURL } from '../../services/files';
import { useState } from 'react';

const JobOffers = () => {
    const [searchParams, setSearchParams] = useSearchParams({ page: 1, type: 'reviewing' });
    const type = searchParams.get('type') || 'reviewing';
    const page = parseInt(searchParams.get('page')) || 1;
    const [itemsPerPage, setItemsPerPage] = useState(24);

    const { data: jobs, isLoading, isError, refetch } = useQuery({
        queryKey: ['job-posts', page, type],
        queryFn: () => getPaginatedUnpublishedDocs('job-opportunity', itemsPerPage, itemsPerPage * (page - 1), type),
    })

    const changeParams = async (key, value) => {
        setSearchParams((prev) => {
            prev.set(key, value);
            return prev;
        }, { replace: true });
        window.scrollTo(0, 0);
        refetch();
    }

    const changeType = (newType) => {
        changeParams('type', newType);
        changeParams('page', 1);
    }

    return (
        <div className='pt-24'>
            <Meta name="Job Openings" />
            <Heading heading="Job Openings" heading1="via our Alumni"></Heading>

            <div className='px-10 flex mt-6 gap-4'>
                <button onClick={() => {
                    changeType('reviewing')
                }} className={`border-[#e9e1e1] border font-semibold  px-5 py-2 text-base rounded-xl hover:bg-[#e9e1e1] hover:text-gray-900 ${type === "reviewing" ? 'bg-[#e9e1e1] text-gray-900' : 'text-[#e9e1e1]'}`}>
                    Reviewing
                </button>
                <button onClick={() => changeType('published')} className={`border-[#e9e1e1] border font-semibold  px-5 py-2 text-base rounded-xl hover:bg-[#e9e1e1] hover:text-gray-900 ${type === "published" ? 'bg-[#e9e1e1] text-gray-900' : 'text-[#e9e1e1]'}`}>
                    Published
                </button>
                <button onClick={() => changeType('rejected')} className={`border-[#e9e1e1] border font-semibold  px-5 py-2 text-base rounded-xl hover:bg-[#e9e1e1] hover:text-gray-900 ${type === "rejected" ? 'bg-[#e9e1e1] text-gray-900' : 'text-[#e9e1e1]'}`}>
                    Rejected
                </button>
            </div>

            {isLoading ? <div className='w-full h-[10rem] flex items-center justify-center'><Loader /></div> :
                isError ? <div className='text-center text-red-500'>Something went wrong!</div> :
                    jobs && jobs.length === 0 ? <div className='text-center py-16 text-sky-500'>No Jobs Found!</div> :
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:w-[85%] md:w-[95%] w-full px-5 gap-6 m-auto my-24'>
                            {jobs.map((job) => (
                                <JobOffersCard2 data={job} key={job.$id} />
                            ))}
                        </div>
            }

            {jobs && jobs.length !== 0 && (
                <>
                    <div data-aos="fade-up" className="text-center px-3 pt-16">
                        Showing <span className="text-sky-500">{jobs.length}</span> results of page <span className="text-sky-500">{page}</span>.
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
                            disabled={itemsPerPage > jobs.length}
                            onClick={() => changeParams('page', page + 1)}
                            className="px-8 py-2.5 rounded-xl bg-white disabled:bg-gray-400 text-gray-900 text-lg font-semibold"
                        >
                            Next
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}

export default JobOffers;

const JobOffersCard2 = ({ data }) => {
     return (<>
          <div data-aos="fade-up" className='border border-gray-800 hover:border-gray-700 hover:bg-[#0b0b0f] hover:scale-[101%] transition-all rounded-2xl p-5'>
               <Link to={`/job/${data.$id}`}>
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
                                   <p className='text-sm text-green-400'>{data.jobType}</p>
                              </div>
                         </div>
                    </div>
                    {data.jobSkills.length !== 0 && <div>
                         <p className=' text-gray-400'>Skills Required: <span className='text-sky-500'>{data.jobSkills.join(", ")}</span></p>
                    </div>}
                    <div>
                         <p className=' text-gray-400'>Experience Required: <span className="text-white">
                              {parseInt(data.jobExperience) === 0 ? "Fresher" : data.jobExperience + " years"}</span></p>
                    </div>
                    {data.jobSalary != 0 && data.jobSalary && <div>
                         <p className=' text-gray-400'>Expected Salary: <span className="text-white">{data.jobSalary} LPA</span></p>
                    </div>}

                    <p className='text-sm pt-2 text-gray-400'>Posted: <span className="text-white">{new Intl.DateTimeFormat('en-IN', { year: 'numeric', month: '2-digit', day: '2-digit', weekday: 'short' }).format(new Date(data.$createdAt))}</span></p>
                    {data.jobDeadline && <p className='text-sm text-gray-400'>Deadline: <span className="text-white">{new Intl.DateTimeFormat('en-IN', { year: 'numeric', month: '2-digit', day: '2-digit', weekday: 'short' }).format(new Date(data.jobDeadline))}</span></p>}

                    <div className='pt-2'>
                         <p className='text-sm text-gray-400 pb-1'>Posted By: </p>
                         <div className='flex gap-2 items-center'>
                              <div className='w-10 h-10 rounded-full overflow-hidden flex items-center justify-center'>
                                   <img src={`https://cloud.appwrite.io/v1/avatars/initials?name=${data.name.split(" ").join("+")}&width=80&height=80`} alt='User Profile' />
                              </div>
                              <div className='flex flex-col'>
                                   <p className='font-medium'>{data.name} ({data.yourBatch} {data.yourDepartment})</p>
                                   <p className='text-sm text-gray-400 -mt-1'>{data.yourCurrentRole} at {data.yourCurrentCompany}</p>
                              </div>
                         </div>
                    </div>
               </Link>
          </div>
     </>
     )
}