import { useQuery } from '@tanstack/react-query';
import { getDocument, updateDocument } from '../../services/documents';
import { useParams, Link } from 'react-router-dom'
import Meta from '../../components/Meta/Meta';
import Loader from '../../components/Loader';
import { getImageURL } from '../../services/files';
import { Input, Select } from '../../components/FormComponents';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { branches } from '../../utils/branches';
import Heading from '../../components/Headings/Heading';
import { FaLinkedin, FaFacebook, FaInstagram, FaGithub, FaGlobe, FaTwitter } from 'react-icons/fa';
import sendNotification from '../../utils/sendNotification';

const Alumni = () => {

    const { alumniId } = useParams();
    const [loading, setLoading] = useState(false);
    const { register, reset, handleSubmit, formState: { errors } } = useForm({ trim: true });

    const { data: alumni, isLoading, isError, refetch } = useQuery({
        queryKey: ['alumni', alumniId],
        queryFn: () => getDocument('alumni', alumniId)
    });

    const onSubmit = async (data) => {
        try {
            setLoading(true);
            const alumniData = {
                ...alumni,
                status: data.status,
                reviewMsg: data.reviewMsg
            }

            delete alumniData.$createdAt;
            delete alumniData.$updatedAt;
            delete alumniData.$id;
            delete alumniData.$collectionId;
            delete alumniData.$databaseId;
            delete alumniData.$permissions;

            // console.log(alumniData);

            await updateDocument('alumni', alumniId, alumniData);
            await refetch();
            if (data.status === 'approved') {
                await sendNotification(alumni.uid, "Alumni Profile Approved", "Your alumni profile has been approved by the admin.");
            } else if (data.status === 'rejected') {
                await sendNotification(alumni.uid, "Alumni Profile Rejected", "Your alumni profile has been rejected by the admin.");
            }
            toast.success(`Alumni Profile ${data.status} successful!`);
            reset();
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }


    return (
        <div className='pt-24 lg:px-28 md:px-16 px-6'>
            <Meta title='Alumni Profile' />
            <Heading heading='Alumni Profile' />

            {isLoading ? <div className="py-28 flex items-center justify-center"><Loader /> </div> : isError ? <p className='text-red-500 py-28 text-center'>Error fetching alumni profile</p> : alumni &&
                <div className='p-2 pt-16 relative'>
                    <p className='text-rose-500 text-center pb-2'>
                        Everytime you update your profile, it will be reviewed by our team and then published.
                    </p>
                    <p className='text-sky-500 font-medium text-center'>
                        {alumni.reviewMsg}
                    </p>
                    <div>
                        {
                            alumni.status === 'reviewing' ? (
                                <div className="flex justify-center items-center">
                                    <div className="bg-yellow-600 text-white text-sm font-bold py-1.5 px-3 rounded-full">Profile Reviewing</div>
                                </div>
                            ) : alumni.status === 'approved' ? (
                                <div className="flex justify-center items-center">
                                    <div className="bg-green-500 text-white text-sm font-bold py-1.5 px-3 rounded-full">Profile Approved</div>
                                </div>
                            ) : alumni.status === 'rejected' ? (
                                <div className="flex justify-center items-center">
                                    <div className="bg-red-500 text-white text-sm font-bold py-1.5 px-3 rounded-full">Profile Rejected</div>
                                </div>
                            ) : <div className="flex justify-center items-center">
                                <div className="bg-blue-500 text-white text-sm font-bold py-1.5 px-3 rounded-full">Uploaded Data</div>
                            </div>
                        }
                    </div>
                    <div className='flex items-start justify-between pt-4'>
                        <div className="w-32 h-32 flex items-center justify-center rounded-full overflow-hidden border-4 border-gray-700">
                            <img className="w-full h-full object-cover" src={alumni.image ? getImageURL(alumni.image) : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw-1B2f_Lrb6WkenAVQw206_ZKeFRfYSm1MqMh8ckJdg&s"} alt="placeholder" />
                        </div>
                        {/* <button onClick={() => navigate("/edit-alumni-profile")} className='text-green-500 hover:border-green-600 hover:bg-green-600 hover:text-white transition md:px-8 px-6 py-1.5 border border-green-500 rounded-full text-lg'>
                            <FaEdit className='inline-block mr-1' /> Edit
                        </button> */}
                    </div>
                    <div className='py-5 text-lg'>
                        <p className='font-medium text-sky-500'>
                            <span className='text-white'>{alumni.title} {alumni.name}</span>
                        </p>
                        <p className='text-sky-500 font-medium'>
                            {alumni.designation && <span>{alumni.designation && alumni.designation} {alumni.company && " at " + alumni.company}</span>
                            }
                        </p>

                        <p className='text-gray-300 text-sm font-medium'>
                            {alumni.location && alumni.location}
                        </p>

                        <div className='flex gap-3 items-center py-3'>
                            {
                                alumni.linkedin && <Link to={alumni.linkedin} target="_blank">
                                    <FaLinkedin size={20} className='hover:scale-95 transition hover:text-gray-400' />
                                </Link>
                            }

                            {
                                alumni.facebook && <Link to={alumni.facebook} target="_blank">
                                    <FaFacebook size={20} className='hover:scale-105 transition hover:text-gray-400' />
                                </Link>
                            }

                            {
                                alumni.github && <Link to={alumni.github} target="_blank">
                                    <FaGithub size={20} className='hover:scale-105 transition hover:text-gray-400' />
                                </Link>
                            }

                            {
                                alumni.instagram && <Link to={alumni.instagram} target="_blank">
                                    <FaInstagram size={20} className='hover:scale-105 transition hover:text-gray-400' />
                                </Link>
                            }

                            {
                                alumni.twitter && <Link to={alumni.twitter} target="_blank">
                                    <FaTwitter size={20} className='hover:scale-105 transition hover:text-gray-400' />
                                </Link>
                            }

                            {
                                alumni.website && <Link to={alumni.website} target="_blank">
                                    <FaGlobe size={20} className='hover:scale-105 transition hover:text-gray-400' />
                                </Link>
                            }
                        </div>

                        <p className='py-3'>
                            <span className='text-gray-300 font-normal text-base'>{alumni.bio}</span>
                        </p>
                        {alumni.gender && <p className='font-medium text-sky-500'>
                            Gender : <span className='text-white'>{alumni.gender}</span>
                        </p>}
                        {alumni.category && <p className='font-medium text-sky-500'>
                            Category : <span className='text-white'>{alumni.category}</span>
                        </p>}
                        {alumni.role && <p className='font-medium text-sky-500'>
                            Role : <span className='text-white'>{alumni.role.toUpperCase()}</span>
                        </p>}
                        <p className='font-medium text-sky-500'>
                            Batch : <span className='text-white'>{alumni.batchStart ? alumni.batchStart + "-" + alumni.batchEnd : alumni.batchEnd}</span>
                        </p>
                        <p className='font-medium text-sky-500'>
                            Branch : <span className='text-white'>{
                                branches.find((branch) => branch.value === alumni.branch)?.name
                            }</span>
                        </p>
                        <p className='font-medium text-sky-500'>
                            Email : <a target='_blank' href={`mailto:${alumni.email}`} className='text-white'>{alumni.email}</a> <span className="text-rose-500 text-sm">
                                {alumni.showEmail ? "(public)" : "(hidden)"}
                            </span>
                        </p>
                        <p className='font-medium text-sky-500'>
                            Phone : <span className='text-white'>{alumni.phone}</span> <span className="text-rose-500 text-sm">
                                {alumni.showPhone ? "(public)" : "(hidden)"}
                            </span>
                        </p>
                        {alumni.degree && <p className='font-medium text-sky-500'>
                            Degree: <span className='text-white'>{alumni.degree}</span>
                        </p>}
                        {alumni.interests && <p className='font-medium text-sky-500'>
                            Interests: <span className='text-white'>{alumni.interests}</span>
                        </p>}
                        {alumni.hobbies.length !== 0 && <p className='font-medium text-sky-500'>
                            Hobbies: <span className='text-white'>{alumni.hobbies.join(", ")}</span>
                        </p>}
                        {alumni.achievements.length !== 0 && <p className='font-medium text-sky-500 flex flex-col items-start gap-2'>
                            <span>Achievements:</span> <span className='text-white flex flex-col'>{
                                alumni.achievements.map((ach, idx) => (
                                    <span className='text-base text-yellow-500' key={idx}>- {ach}</span>
                                ))
                            }</span>
                        </p>}
                        <p className='text-sm font-medium pt-3'>
                            <span className='text-gray-400'>Last updated on </span>
                            <span className='text-green-500'>{new Date(alumni.$updatedAt).toDateString()}.</span>
                        </p>
                    </div>

                    <div className='bg-gray-800 p-5 pb-8 rounded-xl mt-10'>
                        <h2 className='text-center mb-5 text-2xl font-semibold text-rose-500'>Review Alumni Profiles</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className='flex md:flex-row flex-col gap-5'>
                            <div className='flex-1'>
                                <Input
                                    label='Review Message'
                                    id='reviewMsg'
                                    placeholder="Enter Review Message"
                                    type='text'
                                    reactHookForm={register('reviewMsg', {
                                        maxLength: { value: 511, message: 'Max length is 511 characters' },
                                        value: alumni.statusDesc
                                    })}
                                    error={errors.reviewMsg?.message}
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
                                    value: alumni.status
                                })}
                                options={[
                                    { name: 'reviewing', value: 'reviewing' },
                                    { name: 'approved', value: 'approved' },
                                    { name: 'rejected', value: 'rejected' },
                                ]}
                                className='bg-gray-900 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                            />
                            <button disabled={loading} onClick={handleSubmit(onSubmit)} className='bg-sky-500 hover:bg-sky-600 disabled:bg-gray-600 h-10 self-end px-5 py-2 mt-2 rounded-lg cursor-pointer text-white'>Submit</button>
                        </form>
                    </div>

                </div>}
        </div>
    )
}

export default Alumni;