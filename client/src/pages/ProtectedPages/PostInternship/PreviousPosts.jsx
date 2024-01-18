import { useQuery } from '@tanstack/react-query';
import { getUserPostedJobInternships, deleteDocument } from '../../../services/documents';
import { Link } from 'react-router-dom';
import Loader from '../../../components/Loader';
import { getDownloadURL, getImageURL, deleteFile } from '../../../services/files';
import useAuth from '../../../hooks/useAuth';
import { toast } from "react-toastify";
import { FaTrash } from 'react-icons/fa';


const PreviousPosts = () => {
    const { user } = useAuth();
    const { data, isLoading, isError, refetch } = useQuery({
        queryKey: ['previousInternPosts'],
        queryFn: () => getUserPostedJobInternships('intern-opportunity', user.$id),
    })

    const deleteInternship = async (id) => {
        try {
            const internship = data.find((internship) => internship.$id === id);
            if (internship.internCompanyLogo) {
                await Promise.all([deleteFile(internship.internCompanyLogo), deleteDocument('intern-opportunity', id)])
            } else {
                await deleteDocument('intern-opportunity', id);
            }

            await refetch();
            toast.success('Internship deleted successfully');
        } catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <div className='py-5 w-full'>
            {isLoading && <div className='w-full h-[10rem] flex items-center justify-center'><Loader /></div>}
            {isError && <div className='py-10'>Someting went wrong!</div>}
            {data && data.map((post) => (
                <div key={post.$id} className='relative border border-gray-800 rounded-2xl p-5 mb-5'>
                    <button onClick={() => {
                        const ans = confirm('Are you sure you want to delete this internship?');
                        if (ans) {
                            deleteInternship(post.$id);
                        }
                    }} className="absolute right-6 bottom-6">
                        <FaTrash className="text-red-500 md:text-2xl text-xl cursor-pointer" />
                    </button>
                    <div>
                        {
                            post.status === 'reviewing' ? (
                                <div className="flex justify-center items-center">
                                    <div className="bg-yellow-600 text-white text-sm font-bold py-1.5 px-3 rounded-full">Reviewing</div>
                                </div>
                            ) : post.status === 'approved' ? (
                                <div className="flex justify-center items-center">
                                    <div className="bg-green-500 text-white text-sm font-bold py-1.5 px-3 rounded-full">Approved</div>
                                </div>
                            ) : (
                                <div className="flex justify-center items-center">
                                    <div className="bg-red-500 text-white text-sm font-bold py-1.5 px-3 rounded-full">Rejected</div>
                                </div>
                            )
                        }
                    </div>
                    <div>
                        {
                            post.status === 'reviewing' && (
                                <div className="flex justify-center items-center">
                                    <p className="text-yellow-600 text-sm font-bold py-1.5 px-3 rounded-full">Your experience is under review. It will be published soon.</p>
                                </div>
                            )
                        }

                        {
                            post.status === 'approved' && (
                                <div className="flex justify-center items-center">
                                    <p className="text-green-500 text-sm font-bold py-1.5 px-3 rounded-full">Your experience is published.</p>
                                </div>
                            )
                        }

                        {
                            post.status === 'rejected' && (
                                <div className="flex justify-center items-center">
                                    <p className="text-red-500 text-sm font-bold py-1.5 px-3 rounded-full">
                                        {post.statusDesc}
                                    </p>
                                </div>
                            )
                        }
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex gap-5 flex-col items-center'>
                            <div className='flex w-full gap-2 items-center'>
                                {post.internCompanyLogo && <div className='md:w-16 w-12 md:h-16 h-12 flex items-center justify-center'>
                                    <img src={post.internCompanyLogo ? getImageURL(post.internCompanyLogo, 200) : "logo-placeholder.jpg"} alt='Company Logo' />
                                </div>}
                                <div className='flex flex-col'>
                                    <p className='font-semibold text-rose-500 lg:text-xl text-lg'>{post.internCompany}</p>
                                    <p className='text-sm text-gray-400'>{post.internLocation}</p>
                                </div>
                            </div>
                            <div className='flex flex-col w-full'>
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
                            post.internLinks.map((link, idx) => (
                                <a key={idx} href={link} target='_blank' rel='noreferrer'><button className='text-sm text-left text-sky-500'>{link}</button></a>
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
                        <p className='text-sm text-gray-400 pb-1'>Posted By: </p>
                        <div className='flex gap-2 items-center'>
                            <div className='w-10 h-10 rounded-full overflow-hidden flex items-center justify-center'>
                                <img src={`https://cloud.appwrite.io/v1/avatars/initials?name=${post.name.split(" ").join("+")}&width=80&height=80`} alt='User Profile' />
                            </div>
                            <div className='flex flex-col'>
                                <p className='font-medium'>{post.name} ({post.yourBatchyourBatch} {post.yourDepartment})</p>
                                <p className='text-sm text-gray-400 -mt-1'>{post.yourCurrentRole} at {post.yourCurrentCompany}</p>
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