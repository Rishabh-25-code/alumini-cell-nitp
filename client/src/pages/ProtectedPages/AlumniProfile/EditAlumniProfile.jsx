import React, { useState, useCallback } from 'react';
import { toast } from 'react-toastify';
import { branches } from '../../../utils/branches';
import placeholder from "../../../assets/man-placeholder.jpg"
import { MultiSelect } from '../PostJob/CreateJob';
import { useForm } from 'react-hook-form';
import { compressedImageUpload, deleteFile } from '../../../services/files';
import { updateDocument, getAlumniProfile } from '../../../services/documents';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import Loader, { Loading } from '../../../components/Loader';
import { Input, Select, ProfileImage, TextArea } from '../../../components/FormComponents';
import Meta from '../../../components/Meta/Meta';
import { PageHeading } from "../../../components/Headings/Heading"
import { useNavigate } from "react-router-dom"


const EditAlumniProfile = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({ trim: true });
    const [loading, setLoading] = useState(false);
    const { user } = useAuth();
    const [message, setMessage] = useState("");
    const { data: alumni, isLoading, isError, refetch } = useQuery({
        queryKey: ['alumni', user.email],
        queryFn: () => getAlumniProfile('alumni', user.email),
    })

    const [profileImage, setProfileImage] = useState(null);

    const [formData, setFormData] = useState({
        achievements: alumni?.achievements || [],
        hobbies: alumni?.hobbies || [],
    });

    const [resetItems, setResetItems] = useState(false);
    const handleResetItems = () => {
        setResetItems(!resetItems);
    }

    const onSubmit = useCallback(async (data) => {
        data = { ...data, achievements: formData.achievements, hobbies: formData.hobbies, image: alumni.image, uid: alumni.uid, email: alumni.email };
        setLoading(true);
        try {
            setMessage("Uploading Image...");
            // if (data.image && profileImage === null) {
            //     await deleteFile(data.image);
            //     data = { ...data, image: null }
            // }
            if (profileImage) {
                if (data.image) await deleteFile(data.image);
                let res = await compressedImageUpload(profileImage);
                if (res) {
                    data = { ...data, image: res.$id };
                }
            }

            setMessage("Updating Profile...");
            await updateDocument('alumni', alumni.$id, data);
            toast.success("Profile updated successfully!");
            refetch();
            navigate(`/alumni-profile`);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }, [formData, profileImage, refetch]);

    const resetForm = () => {
        setFormData((prev) => ({
            ...prev,
            achievements: [],
            hobbies: [],
        }));
    };

    return (
        <div className='lg:px-9 px-4 relative'>
            {
                loading && <Loading message={message} />
            }
            <Meta title="Edit Profile | Alumni NITP" />
            <PageHeading heading='Edit' heading1='Alumni Profile' />
            <div className='bg-gray-900 relative p-5 my-5 rounded-2xl'>
                {isLoading ? <div className='w-full h-[10rem] flex items-center justify-center'><Loader /></div> :
                    isError ? <div className='w-full h-[10rem] flex items-center justify-center'>Something went wrong!</div> :
                        alumni &&
                        <form className='flex gap-3 flex-col' onSubmit={handleSubmit(onSubmit)}>
                            <h2 className='text-2xl font-semibold'>
                                <span className='text-sky-500'>Alumni Info </span>
                            </h2>

                            <div className="flex md:flex-row flex-col gap-5 py-3">
                                <ProfileImage prevImage={alumni.image} placeholder={placeholder} profileImage={profileImage} setProfileImage={setProfileImage} />
                            </div>

                            <div className="flex md:flex-row flex-col gap-5 py-3">
                                <Input
                                    label='Username'
                                    type='text'
                                    placeholder='DoeJohn@73'
                                    title='username'
                                    reactHookForm={register('username', {
                                        required: 'Username is required',
                                        pattern: {
                                            value: /^[A-Za-z0-9_.]+$/,
                                            message: 'Please enter a valid username',
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Username must be at least 6 characters',
                                        },
                                        maxLength: {
                                            value: 30,
                                            message: 'Username must not exceed 16 characters',
                                        },
                                        value: alumni.username,
                                    })}
                                    className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                                    errors={errors.username}
                                />
                                <Select
                                    label='Highest Degree at NITP'
                                    id='degree'
                                    options={[
                                        { name: 'B.Tech.', value: 'B.Tech.' },
                                        { name: 'M.Tech.', value: 'M.Tech.' },
                                        { name: "B.Arch.", value: 'B.Arch.' },
                                        { name: 'MURP', value: 'MURP' },
                                        { name: 'I.MSc', value: 'I.MSc' },
                                        { name: 'Ph.D.', value: 'Ph.D.' }
                                    ]}
                                    reactHookForm={register('degree', {
                                        required: 'Degree is required',
                                        value: alumni.degree,
                                    })}
                                    className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                                    errors={errors.degree}
                                    placeholder="Select Degree"
                                />
                            </div>

                            <div className="flex md:flex-row flex-col gap-5">
                                <Select
                                    label="Title"
                                    placeholder="Select Title"
                                    title='title'
                                    reactHookForm={register('title', {
                                        required: 'Title is required',
                                        value: alumni.title
                                    })}
                                    options={[
                                        { name: 'Mr', value: 'Mr' },
                                        { name: 'Miss', value: 'Miss' },
                                        { name: 'Ms', value: 'Ms' },
                                        { name: 'Mrs', value: 'Mrs' },
                                        { name: 'Dr', value: 'Dr' },
                                        { name: 'Prof', value: 'Prof' },
                                        { name: "Md", value: "Md" },
                                    ]}
                                    className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                                    errors={errors.title}
                                />

                                <Input
                                    label='Name'
                                    type='text'
                                    placeholder='John Doe'
                                    title='name'
                                    reactHookForm={register('name', {
                                        pattern: {
                                            value: /^(?!\s)([a-z ,.'-]+)$/i,
                                            message: 'Please enter a valid name',
                                        },
                                        required: 'Name is required',
                                        minLength: {
                                            value: 3,
                                            message: 'Name must be at least 3 characters',
                                        },
                                        maxLength: {
                                            value: 500,
                                            message: 'Name must not exceed 500 characters',
                                        },
                                        value: alumni.name
                                    })}
                                    className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                                    errors={errors.name}
                                />
                                <Select
                                    label='Gender'
                                    id='Gender'
                                    options={[
                                        {
                                            name: 'Male',
                                            value: 'Male',
                                        },
                                        {
                                            name: 'Female',
                                            value: 'Female',
                                        },
                                        {
                                            name: 'Others',
                                            value: 'Others',
                                        }
                                    ]}
                                    reactHookForm={register('gender', {
                                        required: 'Gender is required',
                                        value: alumni.gender
                                    })}
                                    className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                                    errors={errors.gender}
                                    placeholder="Select gender"
                                />
                            </div>

                            <div className="flex md:flex-row flex-col gap-5">

                                <Select
                                    label='Which describes you best at NITP?'
                                    id='role'
                                    options={[
                                        {
                                            name: 'UG Student',
                                            value: 'ug',
                                        },
                                        {
                                            name: 'PG Student',
                                            value: 'pg',
                                        },
                                        {
                                            name: 'PhD Student',
                                            value: 'phd',
                                        },
                                        {
                                            name: 'Faculty/Staff',
                                            value: 'Faculty/Staff',
                                        }
                                    ]}
                                    reactHookForm={register('role', {
                                        required: 'Role is required',
                                        value: alumni.role
                                    })}
                                    className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                                    errors={errors.role}
                                    placeholder="Select Role"
                                />

                                <Input
                                    label='Batch/Tenure Start'
                                    type='number'
                                    min={1800}
                                    max={new Date().getFullYear()}
                                    placeholder='2016'
                                    title='batchStart'
                                    reactHookForm={register('batchStart', {
                                        required: 'Batch is required',
                                        pattern: {
                                            value: /^\d{4}$/i,
                                            message: 'Please enter a valid batch',
                                        },
                                        minLength: {
                                            value: 4,
                                            message: 'Batch must be at least 4 characters',
                                        },
                                        maxLength: {
                                            value: 4,
                                            message: 'Batch must not exceed 4 characters',
                                        },
                                        value: alumni.batchStart,
                                        onChange: (e) => {
                                            if (e.target.value > new Date().getFullYear() + 4) {
                                                e.target.value = new Date().getFullYear() + 4;
                                            }

                                            if (e.target.value.length === 4 && e.target.value < 1800) {
                                                e.target.value = 1800;
                                            }
                                        }
                                    })}
                                    className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                                    errors={errors.batchStart}
                                />

                                <Input
                                    label='Batch/Tenure End'
                                    type='number'
                                    min={1800}
                                    max={new Date().getFullYear() + 4}
                                    placeholder='2020'
                                    title='batchEnd'
                                    reactHookForm={register('batchEnd', {
                                        required: 'Batch/Tenure is required',
                                        value: alumni.batchEnd,
                                        pattern: {
                                            value: /^\d{4}$/i,
                                            message: 'Please enter a valid batch',
                                        },
                                        minLength: {
                                            value: 4,
                                            message: 'Batch must be at least 4 characters',
                                        },
                                        maxLength: {
                                            value: 4,
                                            message: 'Batch must not exceed 4 characters',
                                        },
                                        onChange: (e) => {
                                            if (e.target.value > new Date().getFullYear() + 4) {
                                                e.target.value = new Date().getFullYear() + 4;
                                            }

                                            if (e.target.value.length === 4 && e.target.value < 1800) {
                                                e.target.value = 1800;
                                            }
                                        }
                                    })}
                                    className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                                    errors={errors.batch}
                                />

                                <Select
                                    label='Branch'
                                    id='branch'
                                    options={branches}
                                    reactHookForm={register('branch', {
                                        required: 'Branch is required',
                                        value: alumni.branch
                                    })}
                                    className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                                    errors={errors.branch}
                                    placeholder="Select Branch"
                                />
                            </div>

                            <TextArea rows={3} id="bio" label="Bio" placeholder="Hello stranger! 👋, I am a self taught front end developer based in India with a passion for building digital services/stuff. I have a knack for all things building products, from planning and designing all the way to solving real-life problems with code." title="bio" reactHookForm={register('bio', {
                                maxLength: {
                                    value: 1000,
                                    message: 'Bio must not exceed 1000 characters',
                                },
                                value: alumni.bio
                            })} className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300' errors={errors.bio} />

                            <div className="flex md:flex-row flex-col gap-5">
                                <div className="flex-1">
                                    <Input
                                        label='Email'
                                        type='email'
                                        placeholder='Email'
                                        title='email'
                                        disabled={true}
                                        value={user.email}
                                        reactHookForm={register('email', {
                                            required: 'Email is required',
                                            value: alumni.email,
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: 'Please enter a valid email address',
                                            },
                                            maxLength: {
                                                value: 255,
                                                message: 'Email must not exceed 255 characters',
                                            }
                                        })}
                                        className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                                        errors={errors.email}
                                    />
                                    <p className="pt-2 text-sm text-sky-500">
                                        Do you want to show your email on your public profile?
                                        <input
                                            type="checkbox"
                                            defaultChecked={true}
                                            id="showEmail"
                                            {...register('showEmail', {
                                                value: alumni.showEmail
                                            })}
                                            className="ml-2"
                                        />
                                    </p>
                                </div>


                                <div className="flex-1">
                                    <Input
                                        label='Mobile No.'
                                        type='text'
                                        placeholder='Phone'
                                        title='phone'
                                        reactHookForm={register('phone', {
                                            required: 'Phone is required',
                                            value: alumni.phone,
                                            pattern: {
                                                value: /^(?!(\d)\1{9})[6,7,8,9]\d{9}$/,
                                                message: 'Please enter a valid phone no.',
                                            },
                                        })}
                                        className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                                        errors={errors.phone}
                                    />
                                    <p className="pt-2 text-sm text-sky-500">
                                        Do you want to show your phone no. on your public profile?
                                        <input
                                            type="checkbox"
                                            defaultChecked={true}
                                            id="showPhone"
                                            {...register('showPhone')}
                                            className="ml-2"
                                        />
                                    </p>
                                </div>
                                <div className="flex-1">
                                    <Select
                                        label='Category'
                                        id='Category'
                                        options={[
                                            {
                                                name: 'General',
                                                value: 'GEN',
                                            },
                                            {
                                                name: 'OBC',
                                                value: 'OBC',
                                            },
                                            {
                                                name: 'OBC(NCL)',
                                                value: 'OBC(NCL)',
                                            },
                                            {
                                                name: 'SC',
                                                value: 'SC',
                                            },
                                            {
                                                name: 'ST',
                                                value: 'ST',
                                            },
                                            {
                                                name: 'EWS',
                                                value: 'EWS',
                                            }
                                        ]}
                                        reactHookForm={register('category', {
                                            required: 'Category is required',
                                            value: alumni.category
                                        })}
                                        className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                                        errors={errors.category}
                                        placeholder="Select category"
                                    />

                                </div>
                            </div>

                            <div className="flex md:flex-row flex-col gap-5">
                                <Input
                                    label='Company'
                                    type='text'
                                    placeholder='SpaceX'
                                    title='company'
                                    reactHookForm={register('company', {
                                        pattern: {
                                            value: /^(?!\s)([a-z ,.'-]+)$/i,
                                            message: 'Please enter a valid company name',
                                        },
                                        maxLength: {
                                            value: 56,
                                            message: 'Company name must not exceed 56 characters',
                                        },
                                        value: alumni.company
                                    })}
                                    className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                                    errors={errors.company}
                                />

                                <Input
                                    label='Designation/Role'
                                    type='text'
                                    placeholder='Sr. Engineer'
                                    title='designation'
                                    reactHookForm={register('designation', {
                                        maxLength: {
                                            value: 100,
                                            message: 'Designation must not exceed 56 characters',
                                        },
                                        value: alumni.designation
                                    }
                                    )}
                                    className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                                    errors={errors.designation}
                                />

                                <Input
                                    label='Location'
                                    type='text'
                                    placeholder='Las Vegas'
                                    title='location'
                                    reactHookForm={register('location', {
                                        maxLength: {
                                            value: 100,
                                            message: 'Location must not exceed 250 characters',
                                        },
                                        value: alumni.location
                                    })}
                                    className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                                    errors={errors.location}
                                />
                            </div>

                            <Input
                                label='Interests'
                                type='text'
                                placeholder={`AI/ML, nanotechnology`}
                                title='interests'
                                reactHookForm={register('interests', {
                                    maxLength: {
                                        value: 250,
                                        message: 'Interests must not exceed 250 characters',
                                    },
                                    value: alumni.interests
                                })}
                                className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                                errors={errors.interests}
                            />

                            <div className="flex md:flex-row flex-col gap-5">
                                <Input
                                    label='LinkedIn'
                                    type='url'
                                    placeholder='https://www.linkedin.com/in/username'
                                    title='linkedin'
                                    reactHookForm={register('linkedin', {
                                        pattern: {
                                            value: /^(http[s]?:\/\/(www\.)?|ftp:\/\/(www\.)?|www\.){1}([0-9A-Za-z-\.@:%_\+~#=]+)+((\.[a-zA-Z]{2,3})+)(\/(.)*)?(\?(.)*)?/g,
                                            message: 'Please enter a valid URL',
                                        },
                                        value: alumni.linkedin
                                    })}
                                    className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                                    errors={errors.linkedin}
                                />

                                <Input
                                    label='Facebook'
                                    type='url'
                                    placeholder='https://www.facebook.com/username'
                                    title='facebook'
                                    reactHookForm={register('facebook', {
                                        pattern: {
                                            value: /^(http[s]?:\/\/(www\.)?|ftp:\/\/(www\.)?|www\.){1}([0-9A-Za-z-\.@:%_\+~#=]+)+((\.[a-zA-Z]{2,3})+)(\/(.)*)?(\?(.)*)?/g,
                                            message: 'Please enter a valid URL',
                                        },
                                        value: alumni.facebook
                                    })}
                                    className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                                    errors={errors.facebook}
                                />

                                <Input
                                    label='Instagram'
                                    type='url'
                                    placeholder='https://www.instagram.com/username'
                                    title='instagram'
                                    reactHookForm={register('instagram', {
                                        pattern: {
                                            value: /^(http[s]?:\/\/(www\.)?|ftp:\/\/(www\.)?|www\.){1}([0-9A-Za-z-\.@:%_\+~#=]+)+((\.[a-zA-Z]{2,3})+)(\/(.)*)?(\?(.)*)?/g,
                                            message: 'Please enter a valid URL',
                                        },
                                        value: alumni.instagram
                                    })}
                                    className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                                    errors={errors.instagram}
                                />
                            </div>

                            <div className="flex md:flex-row flex-col gap-5">
                                <Input
                                    label='Twitter'
                                    type='url'
                                    placeholder='https://www.twitter.com/username'
                                    title='twitter'
                                    reactHookForm={register('twitter', {
                                        pattern: {
                                            value: /^(http[s]?:\/\/(www\.)?|ftp:\/\/(www\.)?|www\.){1}([0-9A-Za-z-\.@:%_\+~#=]+)+((\.[a-zA-Z]{2,3})+)(\/(.)*)?(\?(.)*)?/g,
                                            message: 'Please enter a valid URL',
                                        },
                                        value: alumni.twitter
                                    })}
                                    className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                                    errors={errors.twitter}
                                />

                                <Input
                                    label='Github'
                                    type='url'
                                    placeholder='https://www.github.com/username'
                                    title='github'
                                    reactHookForm={register('github', {
                                        pattern: {
                                            value: /^(http[s]?:\/\/(www\.)?|ftp:\/\/(www\.)?|www\.){1}([0-9A-Za-z-\.@:%_\+~#=]+)+((\.[a-zA-Z]{2,3})+)(\/(.)*)?(\?(.)*)?/g,
                                            message: 'Please enter a valid URL',
                                        },
                                        value: alumni.github
                                    })}
                                    className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                                    errors={errors.github}
                                />

                                <Input
                                    label='Website'
                                    type='url'
                                    placeholder='https://www.yourwebsite.com'
                                    title='website'
                                    reactHookForm={register('website', {
                                        pattern: {
                                            value: /^(http[s]?:\/\/(www\.)?|ftp:\/\/(www\.)?|www\.){1}([0-9A-Za-z-\.@:%_\+~#=]+)+((\.[a-zA-Z]{2,3})+)(\/(.)*)?(\?(.)*)?/g,
                                            message: 'Please enter a valid URL',
                                        },
                                        value: alumni.website
                                    })}
                                    className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                                    errors={errors.website}
                                />
                            </div>

                            <div className="flex md:flex-row flex-col gap-5">
                                <div className="flex-1">
                                    <label htmlFor="achievements" className='text-gray-300'>Achievements</label>
                                    <MultiSelect
                                        fullWd={true}
                                        id="achievements"
                                        allItems={formData.achievements}
                                        value={alumni.achievements}
                                        setAllItems={(value) => {
                                            setFormData((prev) => ({ ...prev, achievements: value }))
                                        }}
                                        placeholder="Add Achievements"
                                        resetItems={resetItems}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="hobbies" className='text-gray-300'>Hobbies</label>
                                    <MultiSelect
                                        fullWd={true}
                                        id="hobbies"
                                        allItems={formData.hobbies}
                                        value={alumni.hobbies}
                                        setAllItems={(value) => {
                                            setFormData((prev) => ({ ...prev, hobbies: value }))
                                        }}
                                        placeholder="Add Hobbies"
                                        resetItems={resetItems}
                                    />
                                </div>
                            </div>

                            <div className='text-white self-end w-fit flex gap-3 pt-6 pb-4'>
                                <button disabled={loading} onClick={(e)=>{
                                    e.preventDefault();
                                    navigate(`/alumni-profile`);
                                }} className="px-8 py-3 transition-all rounded-xl bg-rose-500 hover:bg-rose-600 active:scale-105 active:bg-rose-600">
                                    Cancel
                                </button>
                                <button onClick={(e) => {
                                    e.preventDefault();
                                    resetForm();
                                    toast.info("Form reset!");
                                    handleResetItems();
                                }} className="px-8 py-3 transition-all rounded-xl bg-green-500 hover:bg-green-600 active:scale-105 active:bg-green-600">
                                    Reset
                                </button>
                                <button disabled={loading} type="submit" className="px-8 py-3 transition-all rounded-xl bg-sky-500 hover:bg-sky-600 active:scale-105 active:bg-blue-600">
                                    Save
                                </button>
                            </div>
                        </form>
                }
            </div>
        </div>
    )
}

export default EditAlumniProfile
