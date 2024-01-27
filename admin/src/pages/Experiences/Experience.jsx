import { useQuery } from '@tanstack/react-query';
import { getDocument, updateDocument } from '../../services/documents';
import { useParams } from 'react-router-dom'
import { BsDot } from 'react-icons/bs'
import Meta from '../../components/Meta/Meta';
import Loader from '../../components/Loader';
import { getImageURL } from '../../services/files';
import MarkDown from '../../components/MarkDown';
import { Input, Select } from '../../components/FormComponents';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useState } from 'react';
import Heading from '../../components/Headings/Heading';
import sendNotification from '../../utils/sendNotification';

const Experience = () => {
    const { experienceId } = useParams();
    const [loading, setLoading] = useState(false);
    const { register, reset, handleSubmit, formState: { errors } } = useForm({ trim: true });

    const { data: experience, isPending, isError, refetch } = useQuery({
        queryKey: ['experience', experienceId],
        queryFn: () => getDocument('experiences', experienceId),
    });

    const onSubmit = async (data) => {
        try {
            setLoading(true);
            const experienceData = {
                ...experience,
                status: data.status,
                statusDesc: data.statusDesc
            }

            delete experienceData.$createdAt;
            delete experienceData.$updatedAt;
            delete experienceData.$id;
            delete experienceData.$collectionId;
            delete experienceData.$databaseId;
            delete experienceData.$permissions;

            await updateDocument('experiences', experienceId, experienceData);
            await refetch();
            if (data.status === 'published') {
                await sendNotification(experience.id, 'Experience Published', `Your experience "${experience.title}" has been published!`);
            }else if(data.status === 'rejected'){
                await sendNotification(experience.id, 'Experience Rejected', `Your experience "${experience.title}" has been rejected!`);
            }
            toast.success(`Experience ${data.status} successful!`);
            reset();
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }


    return (
        <div className='pt-24 min-h-screen'>
            <Meta name={experience ? experience.title : "Experience - NIT Patna"} />
            <Heading heading={"Review Experiences"} />

            {isPending ? <div className='w-full h-[10rem] flex items-center justify-center'><Loader /></div> :
                isError ? <div className='text-center py-48 text-red-500'>Something went wrong!</div> :
                    experience &&
                    <div className='m-auto mt-10 flex flex-col items-center justify-center'>
                        <h1 className='lg:text-4xl md:text-3xl text-2xl font-bold lg:max-w-3xl md:max-w-2xl px-6 text-center m-auto text-sky-500 my-10 mt-6'>{experience.title}</h1>

                        <div className='flex items-center  lg:h-96 md:h-72 h-64 overflow-hidden lg:w-[70%] md:w-[80%] w-[85%] rounded-lg border border-gray-900'>
                            <img className='w-full' src={getImageURL(experience.imgUrl)} alt={experience.title} />
                        </div>

                        <div className='flex items-center pt-5'>
                            <p className='text-gray-400'>{experience.name}</p>
                            <BsDot size={20} className='text-gray-300' />
                            <p className='text-gray-400'>{new Intl.DateTimeFormat('en-AU').format(new Date(experience.$createdAt))}</p>
                            <BsDot size={20} className='text-gray-300' />
                            <p className='text-gray-400'>3 min read</p>
                        </div>

                        <div className='text-lg font-medium'>
                            Status : <span className={`${experience.status === 'published' ? 'text-green-500' : experience.status === 'rejected' ? 'text-rose-500' : 'text-yellow-500'}`}>{experience.status}</span>
                        </div>

                        <div className='flex flex-wrap justify-end text-center pt-2'>
                            {
                                experience.tags.map((tag, id) => (
                                    <span key={id} className='text-sm mr-1 text-blue-400'>#{tag}</span>
                                ))
                            }
                        </div>

                        <div className='lg:w-[70%] md:w-[80%] w-[85%] text-lg mt-10'>
                            <MarkDown content={experience.message}></MarkDown>

                            <div className='bg-gray-800 p-5 pb-8 rounded-xl mt-10'>
                                <h2 className='text-center mb-5 text-2xl font-semibold text-rose-500'>Review Experience</h2>
                                <form onSubmit={handleSubmit(onSubmit)} className='flex md:flex-row flex-col gap-5'>
                                    <div className='flex-1'>
                                        <Input
                                            label='Review Message'
                                            id='statusDesc'
                                            placeholder="Enter Review Message"
                                            type='text'
                                            reactHookForm={register('statusDesc', {
                                                maxLength: { value: 511, message: 'Max length is 511 characters' },
                                                value: experience.statusDesc
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
                                            value: experience.status
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
                    </div>
            }
        </div >
    )
}

export default Experience;