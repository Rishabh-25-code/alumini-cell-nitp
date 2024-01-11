import { useQuery } from '@tanstack/react-query';
import { getDocuments } from '../../../services/documents';
import { Link } from 'react-router-dom';
import Loader from '../../../components/Loader';
import { getDownloadURL, getImageURL } from '../../../services/files';


const PreviousPosts = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['previousInternPosts'],
        queryFn: () => getDocuments('intern-opportunity'),
    })

    return (
        <div className='py-5 w-full'>
            {isLoading && <div className='w-full h-[10rem] flex items-center justify-center'><Loader /></div>}
            {isError && <div className='py-10'>Someting went wrong!</div>}
            {data && data.map((post) => (
                <div key={post.$id} className='border border-gray-800 rounded-2xl p-5 mb-5'>
                    <div className='flex justify-between'>
                        <div className='flex gap-5 md:flex-row flex-col items-center'>
                            <div className='flex gap-2 items-center'>
                                <div className='md:w-16 w-12 md:h-16 h-12'>
                                    <img src={post.internCompanyLogo ? getImageURL(post.internCompanyLogo, 200) : "logo-placeholder.jpg"} alt='Company Logo' />
                                </div>
                                <div className='flex flex-col'>
                                    <p className='font-medium text-lg'>{post.internCompany}</p>
                                    <p className='text-sm text-gray-400'>{post.internLocation}</p>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <p className=' font-medium'>{post.internTitle}</p>
                                <p className='text-sm text-gray-400'>{post.internType}</p>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-sm text-gray-400'>Posted: <span className="text-white">{new Intl.DateTimeFormat('en-IN', { year: 'numeric', month: '2-digit', day: '2-digit', weekday: 'short' }).format(new Date(post.$createdAt))}</span></p>
                            <p className='text-sm text-gray-400'>Expires: <span className="text-white">{new Intl.DateTimeFormat('en-IN', { year: 'numeric', month: '2-digit', day: '2-digit', weekday: 'short' }).format(new Date(post.internDeadline))}</span></p>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <p className=''>{post.internDescription}</p>
                    </div>
                    <div>
                        <p className=' text-gray-400'>Skills Required: <span className='text-sky-500'>{post.internSkills.join(", ")}</span></p>
                    </div>
                    <div>
                        <p className=' text-gray-400'>Experience Required: <span className="text-white">
                            {parseInt(post.internExperience) === 0 ? "Fresher" : post.internExperience + " years"}</span></p>
                    </div>
                    {post.internSalary && <div>
                        <p className=' text-gray-400'>Expected Salary: <span className="text-white">{new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(post.internSalary)} K</span></p>
                    </div>}
                    {post.internDetailsLink && <div className='flex gap-2'>
                        <p className=' text-gray-400'>Intern Info Doc:</p>
                        <a href={getDownloadURL(post.internDetailsLink)} target='_blank' rel='noreferrer'><button className='text-sm text-sky-500'>download</button></a>
                    </div>}
                    {post.internLinks.length > 0 && <div>
                        <p className=' text-gray-400'>Intern Link(s):</p>
                        {
                            post.internLinks.map((link) => (
                                <a href={link} target='_blank' rel='noreferrer'><button className='text-sm text-sky-500'>{link}</button></a>
                            ))
                        }
                    </div>}
                    {
                        post.referralAvailable && (
                            <div>
                                <p className=' text-gray-400'>For refferals:</p>
                                <p className='text-sky-500'>{post.referrerEmail}</p>
                            </div>
                        )
                    }
                    <div className='pt-2'>
                        <p className='text-sm text-gray-400'>Posted By: </p>
                        <div className='flex gap-2 items-center'>
                            <div className='w-10 h-10 rounded-full overflow-hidden flex items-center justify-center'>
                                <img src={`https://cloud.appwrite.io/v1/avatars/initials?name=${post.name.split(" ").join("+")}&width=80&height=80`} alt='User Profile' />
                            </div>
                            <div className='flex flex-col'>
                                <p className='font-medium'>{post.name} ({post.yourBatchyourBatch} {post.yourDepartment})</p>
                                <p className='text-sm text-gray-400'>{post.yourCurrentRole} at {post.yourCurrentCompany}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {
                data && data.length === 0 && (
                    <div className='py-10 flex items-center flex-col justify-center'>
                        <div className='text-center text-gray-400'>No posts yet</div>
                        <Link to='/post-an-internship?tab=post-internship'><button className='text-sky-500'>Post an Internship</button></Link>
                    </div>
                )
            }
        </div>
    )
}

export default PreviousPosts;