import { useQuery } from '@tanstack/react-query';
import { getDocument, updateDocument } from '../../services/documents';
import { useParams, useNavigate } from 'react-router-dom'
import Meta from '../../components/Meta/Meta';
import Loader from '../../components/Loader';
import { getImageURL } from '../../services/files';
import { Input, Select } from '../../components/FormComponents';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useState } from 'react';

const Job = () => {
    const navigate = useNavigate();
    const { jobId } = useParams();
    const [loading, setLoading] = useState(false);
    const { register, reset, handleSubmit, formState: { errors } } = useForm({ trim: true });

    const { data: job, isPending, isError, refetch } = useQuery({
        queryKey: ['job', jobId],
        queryFn: () => getDocument('job-opportunity', jobId),
    });

    const onSubmit = async (data) => {
        try {
            setLoading(true);
            const jobData = {
                ...job,
                status: data.status,
                statusDesc: data.statusDesc
            }

            delete jobData.$createdAt;
            delete jobData.$updatedAt;
            delete jobData.$id;
            delete jobData.$collectionId;
            delete jobData.$databaseId;
            delete jobData.$permissions;

            await updateDocument('job-opportunity', jobId, jobData);
            await refetch();
            reset();
            toast.success(`job ${data.status} successful!`);
            navigate(`/jobs?type=${data.status}&page=1`);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }
    return (
        <div className='pt-36 min-h-screen'>
            <Meta name={job ? job.title : "Experience - NIT Patna"} />

            <div className='lg:max-w-[85%] md:w-[90%] w-full px-5 m-auto'>
                {isPending ? <div className='w-full h-[10rem] flex items-center justify-center'><Loader /></div> :
                    isError ? <div className='text-center text-red-500'>Something went wrong!</div> :
                        job && <div className='border border-gray-800 rounded-2xl p-5 mb-5 w-full'>
                            <p className='text-lg font-semibold'>
                                Status :  <span className={`${job.status === "reviewing" ? "text-yellow-500" : job.status === 'published' ? "text-green-500" : "text-red-500"}`}>{job.status}</span>
                            </p>
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
                                        <p className='text-sm text-gray-400'>{job.jobType}</p>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <p className='text-sm text-gray-400'>Posted: <span className="text-white">{new Intl.DateTimeFormat('en-IN', { year: 'numeric', month: '2-digit', day: '2-digit', weekday: 'short' }).format(new Date(job.$createdAt))}</span></p>
                                    <p className='text-sm text-gray-400'>Expires: <span className="text-white">{new Intl.DateTimeFormat('en-IN', { year: 'numeric', month: '2-digit', day: '2-digit', weekday: 'short' }).format(new Date(job.jobDeadline))}</span></p>
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


                            <div className='bg-gray-800 p-5 pb-8 rounded-xl mt-10'>
                                <h2 className='text-center mb-5 text-2xl font-semibold text-rose-500'>Review Experience</h2>
                                <form onSubmit={handleSubmit(onSubmit)} className='flex gap-5'>
                                    <div className='flex-1'>
                                        <Input
                                            label='Review Message'
                                            id='statusDesc'
                                            placeholder="Enter Review Message"
                                            type='text'
                                            reactHookForm={register('statusDesc', {
                                                maxLength: { value: 511, message: 'Max length is 511 characters' },
                                                value: job.statusDesc
                                            })}
                                            error={errors.statusDesc?.message}
                                            className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300 bg-gray-900'
                                        />
                                    </div>
                                    <Select
                                        label='Mark as'
                                        id='status'
                                        placeholder="Select Status"
                                        error={errors.status?.message}
                                        reactHookForm={register('status', {
                                            required: { value: true, message: 'Status is required' },
                                            value: job.status
                                        })}
                                        options={[
                                            { name: 'reviewing', value: 'reviewing' },
                                            { name: 'published', value: 'published' },
                                            { name: 'rejected', value: 'rejected' },
                                        ]}
                                        className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300 bg-gray-900'
                                    />
                                    <button disabled={loading} onClick={handleSubmit(onSubmit)} className='bg-sky-500 hover:bg-sky-600 disabled:bg-gray-600 h-10 self-end px-5 py-2 mt-2 rounded-lg cursor-pointer text-white'>Submit</button>
                                </form>
                            </div>
                        </div>
                }
            </div>
        </div >
    )
}

export default Job