import { useQuery } from '@tanstack/react-query';
import { getDocument, updateDocument } from '../../services/documents';
import { useParams, useNavigate } from 'react-router-dom'
import Meta from '../../components/Meta/Meta';
import Loader from '../../components/Loader';
import { getImageURL, getDownloadURL } from '../../services/files';
import { Input, Select } from '../../components/FormComponents';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useState } from 'react';
import Heading from '../../components/Headings/Heading';
import sendNotification from '../../utils/sendNotification';

const Internship = () => {
    const navigate = useNavigate();
    const { internshipId } = useParams();
    const [loading, setLoading] = useState(false);
    const { register, reset, handleSubmit, formState: { errors } } = useForm({ trim: true });

    const { data: intern, isPending, isError, refetch } = useQuery({
        queryKey: ['intern', internshipId],
        queryFn: () => getDocument('intern-opportunity', internshipId),
    });

    const onSubmit = async (data) => {
        try {
            setLoading(true);
            const internData = {
                ...intern,
                status: data.status,
                statusDesc: data.statusDesc
            }

            delete internData.$createdAt;
            delete internData.$updatedAt;
            delete internData.$id;
            delete internData.$collectionId;
            delete internData.$databaseId;
            delete internData.$permissions;

            await updateDocument('intern-opportunity', internshipId, internData);
            await refetch();
            reset();
            if (data.status === 'published') {
                await sendNotification(intern.userID, 'Internship Published', `Your internship "${intern.internTitle}" has been published!`);
            } else if (data.status === 'rejected') {
                await sendNotification(intern.userID, 'Internship Rejected', `Your internship "${intern.internTitle}" has been rejected!`);
            }
            toast.success(`internship ${data.status} successful!`);
            navigate(`/internships?type=${data.status}&page=1`);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    
    return (
        <div className='pt-24 min-h-screen'>
            <Meta name={intern ? intern.title : "Experience - NIT Patna"} />
            <Heading heading={"Review Interns"} />

            <div className='lg:max-w-[85%] md:w-[90%] w-full pt-16 px-5 m-auto'>
                {isPending ? <div className='w-full h-[10rem] flex items-center justify-center'><Loader /></div> :
                    isError ? <div className='text-center text-red-500'>Something went wrong!</div> :
                        intern && <div className='border border-gray-800 rounded-2xl p-5 mb-5 w-full'>
                            <p className='text-lg font-semibold'>
                                Status :  <span className={`${intern.status === "reviewing" ? "text-yellow-500" : intern.status === 'published' ? "text-green-500" : "text-red-500"}`}>{intern.status}</span>
                            </p>
                            <div className='flex justify-between'>
                                <div className='flex gap-5 flex-col items-center'>
                                    <div className='flex w-full gap-2 items-center'>
                                        {intern.internCompanyLogo && <div className='md:w-16 w-12 md:h-16 h-12 flex items-center justify-center'>
                                            <img src={intern.internCompanyLogo ? getImageURL(intern.internCompanyLogo, 200) : "logo-placeholder.jpg"} alt='Company Logo' />
                                        </div>}
                                        <div className='flex flex-col'>
                                            <p className='font-semibold text-rose-500 lg:text-xl text-lg'>{intern.internCompany}</p>
                                            <p className='text-sm text-gray-400'>{intern.internLocation}</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col w-full'>
                                        <p className='font-medium'>{intern.internTitle}</p>
                                        <p className='text-sm text-gray-400'>{intern.internType}</p>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <p className='text-sm text-gray-400'>Posted: <span className="text-white">{new Intl.DateTimeFormat('en-IN', { year: 'numeric', month: '2-digit', day: '2-digit', weekday: 'short' }).format(new Date(intern.$createdAt))}</span></p>
                                    <p className='text-sm text-gray-400'>Expires: <span className="text-white">{new Intl.DateTimeFormat('en-IN', { year: 'numeric', month: '2-digit', day: '2-digit', weekday: 'short' }).format(new Date(intern.internDeadline))}</span></p>
                                </div>
                            </div>
                            {intern.internCompanyDescription && <div className='mt-3'>
                                <p className=''><span className='font-medium text-gray-400'>About Company : </span>{intern.internCompanyDescription}</p>
                            </div>}
                            <div className='mt-2'>
                                <p className=''>{intern.internDescription}</p>
                            </div>
                            <div>
                                <p className=' text-gray-400'>Skills Required: <span className='text-sky-500'>{intern.internSkills.join(", ")}</span></p>
                            </div>
                            <div>
                                <p className=' text-gray-400'>Experience Required: <span className="text-white">
                                    {parseInt(intern.internExperience) === 0 ? "Fresher" : intern.internExperience + " years"}</span></p>
                            </div>
                            {intern.internSalary != 0 && intern.internSalary && <div>
                                <p className=' text-gray-400'>Expected Stipend: <span className="text-white">{new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(intern.internSalary)} K</span></p>
                            </div>}
                            {intern.internDetailsLink && <div className='flex gap-2'>
                                <p className=' text-gray-400'>Intern Info Doc:</p>
                                <a href={getDownloadURL(intern.internDetailsLink)} target='_blank' rel='noreferrer'><button className='text-sm text-sky-500'>download</button></a>
                            </div>}
                            {intern.internLinks.length > 0 && <div>
                                <p className=' text-gray-400'>Intern Link(s):</p>
                                {
                                    intern.internLinks.map((link, idx) => (
                                        <a key={idx} href={link} target='_blank' rel='noreferrer'><button className='text-sm text-left text-sky-500'>{link}</button></a>
                                    ))
                                }
                            </div>}
                            {
                                intern.internCompanyEmail && (
                                    <div>
                                        <p className=' text-gray-400'>For applying:</p>
                                        <a target='_blank' href={`mailto:${intern.internCompanyEmail}`} className='text-sky-500'>{intern.internCompanyEmail}</a>
                                    </div>
                                )
                            }
                            {
                                intern.referralAvailable && (
                                    <div>
                                        <p className=' text-gray-400'>For refferals:</p>
                                        <p className='text-sky-500'>{intern.referrerEmail}</p>
                                    </div>
                                )
                            }
                            <div className='pt-2'>
                                <p className='text-sm text-gray-400 pb-1'>Posted By: </p>
                                <div className='flex gap-2 items-center'>
                                    <div className='w-10 h-10 rounded-full overflow-hidden flex items-center justify-center'>
                                        <img src={`https://cloud.appwrite.io/v1/avatars/initials?name=${intern.name.split(" ").join("+")}&width=80&height=80`} alt='User Profile' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <p className='font-medium'>{intern.name} ({intern.yourBatch} {intern.yourDepartment})</p>
                                        <p className='text-sm text-gray-400 -mt-1'>{intern.yourCurrentRole} at {intern.yourCurrentCompany}</p>
                                    </div>
                                </div>
                            </div>


                            <div className='bg-gray-800 p-5 pb-8 rounded-xl mt-10'>
                                <h2 className='text-center mb-5 text-2xl font-semibold text-rose-500'>Review Internships</h2>
                                <form onSubmit={handleSubmit(onSubmit)} className='flex md:flex-row flex-col gap-5'>
                                    <div className='flex-1'>
                                        <Input
                                            label='Review Message'
                                            id='statusDesc'
                                            placeholder="Enter Review Message"
                                            type='text'
                                            reactHookForm={register('statusDesc', {
                                                maxLength: { value: 511, message: 'Max length is 511 characters' },
                                                value: intern.statusDesc
                                            })}
                                            error={errors.statusDesc?.message}
                                            className='bg-gray-900 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                                        />
                                    </div>
                                    <Select
                                        label='Mark as'
                                        id='status'
                                        placeholder="Select Status"
                                        error={errors.status?.message}
                                        reactHookForm={register('status', {
                                            required: { value: true, message: 'Status is required' },
                                            value: intern.status
                                        })}
                                        options={[
                                            { name: 'reviewing', value: 'reviewing' },
                                            { name: 'published', value: 'published' },
                                            { name: 'rejected', value: 'rejected' },
                                        ]}
                                        className='bg-gray-900 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
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

export default Internship