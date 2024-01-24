import { useQuery } from '@tanstack/react-query';
import { FaShare } from "react-icons/fa";

import { getDocument } from '../../services/documents';
import { useParams } from 'react-router-dom'
import Meta from '../../components/Meta/Meta';
import Loader from '../../components/Loader';
import { getImageURL } from '../../services/files';
import Heading from '../../components/Headings/Heading';

const Job = () => {
    const { jobId } = useParams();

    const { data: job, isPending, isError } = useQuery({
        queryKey: ['job', jobId],
        queryFn: () => getDocument('job-opportunity', jobId),
    });

    return (
        <div className='min-h-screen'>
            <Heading heading="Job Details" heading1={job && job.jobCompany && job.jobCompany}></Heading>
            <Meta name={job ? job.title : "Experience - NIT Patna"} />

            <div className='lg:max-w-[85%] md:w-[90%] w-full px-5 m-auto'>
                {isPending ? <div className='w-full h-[10rem] flex items-center justify-center'><Loader /></div> :
                    isError ? <div className='text-center text-red-500'>Something went wrong!</div> :
                        job && job.status !== "published" ? <div className='text-center py-24 text-red-500'>Job not found!</div> :
                            job && <div className='border border-gray-800 rounded-2xl p-5 mb-5 w-full'>
                                <div className='flex justify-between'>
                                    <div className='flex gap-5 flex-col items-center'>
                                        <div className='flex w-full gap-2 items-center'>
                                            {job.jobCompanyLogo && <div className='md:w-16 w-12 md:h-16 h-12 flex items-center justify-center'>
                                                <img src={job.jobCompanyLogo ? getImageURL(job.jobCompanyLogo, 200) : "logo-placeholder.jpg"} alt='Company Logo' />
                                            </div>}
                                            <div className='flex flex-col'>
                                                <p className='font-semibold text-rose-500 lg:text-xl text-lg'>{job.jobCompany}</p>
                                                <p className='text-sm text-gray-400'>{job.jobLocation}</p>
                                            </div>
                                        </div>
                                        <div className='flex flex-col w-full'>
                                            <p className='font-medium'>{job.jobTitle}</p>
                                            <p className='text-sm text-green-500'>{job.jobType}</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col'>
                                        <p className='text-sm text-gray-400'>Posted: <span className="text-white">{new Intl.DateTimeFormat('en-IN', { year: 'numeric', month: '2-digit', day: '2-digit', weekday: 'short' }).format(new Date(job.$createdAt))}</span></p>
                                        {job.jobDeadline && <p className='text-sm text-gray-400'>Expires: <span className="text-white">{new Intl.DateTimeFormat('en-IN', { year: 'numeric', month: '2-digit', day: '2-digit', weekday: 'short' }).format(new Date(job.jobDeadline))}</span></p>}
                                    </div>
                                </div>
                                <div className='mt-5'>
                                    <p className=''>{job.jobDescription}</p>
                                </div>
                                <div>
                                    <p className=' text-gray-400'>Skills Required: <span className='text-sky-500'>{job.jobSkills.join(", ")}</span></p>
                                </div>
                                <div>
                                    <p className=' text-gray-400'>Experience Required: <span className="text-white">
                                        {parseInt(job.jobExperience) === 0 ? "Fresher" : job.jobExperience + " years"}</span></p>
                                </div>
                                <div>
                                    <p className=' text-gray-400'>Expected Salary: <span className="text-white">{job.jobSalary} LPA</span></p>
                                </div>
                                {job.jobDetailsLink && <div className='flex gap-2'>
                                    <p className=' text-gray-400'>Job Info Doc:</p>
                                    <a href={getDownloadURL(job.jobDetailsLink)} target='_blank' rel='noreferrer'><button className='text-sm text-sky-500'>download</button></a>
                                </div>}
                                {job.jobLinks.length > 0 && <div>
                                    <p className=' text-gray-400'>Job Link(s):</p>
                                    {
                                        job.jobLinks.map((link, idx) => (
                                            <a key={idx} href={link} target='_blank' rel='noreferrer'><button className='text-sm text-left text-sky-500'>{link}</button></a>
                                        ))
                                    }
                                </div>}
                                {
                                    job.referralAvailable && (
                                        <div>
                                            <p className=' text-gray-400'>For refferals:</p>
                                            <p className='text-sky-500'>{job.referrerEmail}</p>
                                        </div>
                                    )
                                }
                                <div className='flex justify-between md:flex-row flex-col'>
                                    <div className='pt-2'>
                                        <p className='text-sm text-gray-400 pb-1'>Posted By: </p>
                                        <div className='flex gap-2 items-center'>
                                            <div className='w-10 h-10 rounded-full overflow-hidden flex items-center justify-center'>
                                                <img src={`https://cloud.appwrite.io/v1/avatars/initials?name=${job.name.split(" ").join("+")}&width=80&height=80`} alt='User Profile' />
                                            </div>
                                            <div className='flex flex-col'>
                                                <p className='font-medium'>{job.name} ({job.yourBatch} {job.yourDepartment})</p>
                                                <p className='text-sm text-gray-400 -mt-1'>{job.yourCurrentRole} at {job.yourCurrentCompany}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        type="button"
                                        className="text-lg font-medium text-sky-400 hover:scale-105 mt-5 self-end"
                                        onClick={() => {
                                            const shareItem = {
                                                title: "Here is a job by NITP Alumni.",
                                                text: job.jobTitle,
                                                url: `http://alumni-nitp.vercel.app/..rest/job/${job.$id}`,
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
                            </div>
                }

            </div>
        </div >
    )
}

export default Job