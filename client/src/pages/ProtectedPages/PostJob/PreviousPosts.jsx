import { useQuery } from '@tanstack/react-query';
import { getUserPostedJobInternships } from '../../../services/documents';
import { Link } from 'react-router-dom';
import Loader from '../../../components/Loader';
import { getDownloadURL, getImageURL } from '../../../services/files';
import useAuth from '../../../hooks/useAuth';


const PreviousPosts = () => {
    const { user } = useAuth();
    const { data, isLoading, isError } = useQuery({
        queryKey: ['previousJobPosts'],
        queryFn: () => getUserPostedJobInternships('job-opportunity', user.$id),
    })

    return (
        <div className='py-5 w-full'>
            {isLoading && <div className='w-full h-[10rem] flex items-center justify-center'><Loader /></div>}
            {isError && <div className='py-10'>Someting went wrong!</div>}
            {data && data.map((post) => (
                <div key={post.$id} className='border border-gray-800 rounded-2xl p-5 mb-5 w-full'>
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
            ))}

            {
                data && data.length === 0 && (
                    <div className='py-10 flex items-center flex-col justify-center'>
                        <div className='text-center text-gray-400'>No posts yet</div>
                        <Link to='/post-a-job?tab=create-job'><button className='text-sky-500'>Post a Job</button></Link>
                    </div>
                )
            }
        </div>
    )
}

export default PreviousPosts;