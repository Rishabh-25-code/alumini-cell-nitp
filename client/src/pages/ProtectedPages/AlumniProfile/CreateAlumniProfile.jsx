import React, { useState, useCallback } from 'react';
import { toast } from 'react-toastify';
import { branches } from '../../../utils/branches';
import placeholder from "../../../assets/man-placeholder.jpg"
import { MultiSelect } from '../PostJob/CreateJob';
import { useForm } from 'react-hook-form';
import { compressedImageUpload } from '../../../services/files';
import { getImageURL } from '../../../services/files';
import { createDocument, getAlumniProfile, getAlumniProfileWithUserName } from '../../../services/documents';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import Loader, { Loading } from '../../../components/Loader';
import { Input, Select, ProfileImage, TextArea } from '../../../components/FormComponents';
import { FaEdit } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { FaLinkedin, FaFacebook, FaInstagram, FaGithub, FaGlobe, FaTwitter } from 'react-icons/fa';


const CreateAlumniProfile = () => {
    const navigate = useNavigate();
    const { register, reset, handleSubmit, formState: { errors } } = useForm({ trim: true });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('Creating profile...');
    const { user } = useAuth();
    const [formData, setFormData] = useState({
        achievements: [],
        interests: '',
        hobbies: [],
    });
    const [profileImage, setProfileImage] = useState(null);
    const [resetItems, setResetItems] = useState(false);
    const handleResetItems = () => {
        setResetItems(!resetItems);
    }

    const { data: alumni, isLoading, isError, refetch } = useQuery({
        queryKey: ['alumni', user.email],
        queryFn: () => getAlumniProfile('alumni', user.email),
        enabled: !!user.email,
        retry: 2,
    })

    const onSubmit = useCallback(async (data) => {
        data = { ...data, achievements: formData.achievements, hobbies: formData.hobbies, image: null, uid: user.$id, email: user.email };
        setLoading(true);
        try {
            const doesProfileExist = await getAlumniProfileWithUserName('alumni', data.username);
            if (doesProfileExist) return toast.error(`The username (${data.username}) is already taken`);
            setMessage('Uploading Image...');
            if (profileImage) {
                let res = await compressedImageUpload(profileImage);
                if (res) {
                    data = { ...data, image: res.$id };
                }
            }

            setMessage('Creating profile...');
            await createDocument('alumni', data);
            toast.success("Profile created successfully!");
            resetForm();
            refetch();
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }, [formData, profileImage, refetch, reset]);

    const resetForm = () => {
        reset();
        setFormData((prev) => ({
            ...prev,
            achievements: []
        }));
    };

    return (
        <div className='bg-[#0e0f14] relative p-5 my-5 rounded-2xl'>
            {
                loading && <Loading message={message} />
            }
            {isLoading ? <div className='w-full h-[10rem] flex items-center justify-center'><Loader /></div> :
                isError ? <div className='w-full h-[10rem] flex items-center justify-center'>Something went wrong!</div> :
                    !alumni ?
                        <form className='flex gap-3 flex-col' onSubmit={handleSubmit(onSubmit)}>
                            <h2 className='text-2xl font-semibold'>
                                <span className='text-sky-500'>Alumni Info </span>
                            </h2>

                            <div className="flex md:flex-row flex-col gap-5 py-3">
                                <ProfileImage placeholder={placeholder} profileImage={profileImage} setProfileImage={setProfileImage} />
                            </div>

                            <div className="flex md:flex-row flex-col gap-5 py-3">
                                <Input
                                    label={<>
                                        Username <span className="text-red-500">*</span>
                                    </>}
                                    type='text'
                                    require={true}
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
                                    })}
                                    className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                                    errors={errors.username}
                                />

                                <Select
                                    label={<>
                                        What describes you best? <span className="text-red-500">*</span>
                                    </>}
                                    id='role'
                                    require={true}
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
                                            value: 'faculty-staff',
                                        },
                                        {
                                            name: 'Both (Student and Faculty/Staff)',
                                            value: 'faculty-staff',
                                        }
                                    ]}
                                    reactHookForm={register('role', {
                                        required: 'Role is required',
                                    })}
                                    className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                                    errors={errors.role}
                                    placeholder="Select Role"
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
                                    reactHookForm={register('degree')}
                                    className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                                    errors={errors.degree}
                                    placeholder="Select Degree"
                                />
                            </div>

                            <div className="flex md:flex-row flex-col gap-5">
                                <Select
                                    label={<>
                                        Title <span className="text-red-500">*</span>
                                    </>}
                                    require={true}
                                    placeholder="Select Title"
                                    title='title'
                                    reactHookForm={register('title', {
                                        required: 'Title is required'
                                    })}
                                    options={[
                                        { name: 'Mr', value: 'Mr' },
                                        { name: 'Miss.', value: 'Miss' },
                                        { name: 'Mrs', value: 'Mrs' },
                                        { name: 'Dr', value: 'Dr.' },
                                        { name: 'Prof', value: 'Prof' },
                                        { name: "Md", value: "Md." },
                                    ]}
                                    className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                                    errors={errors.title}
                                />

                                <Input
                                    label={<>
                                        Name <span className="text-red-500">*</span>
                                    </>}
                                    type='text'
                                    require={true}
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
                                    })}
                                    className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                                    errors={errors.name}
                                />

                                <Select
                                    label={<>
                                        Gender <span className="text-red-500">*</span>
                                    </>}
                                    id='Gender'
                                    require={true}
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
                                    })}
                                    className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                                    errors={errors.gender}
                                    placeholder="Select gender"
                                />
                            </div>

                            <div className="flex md:flex-row flex-col gap-5">
                                <Input
                                    label={<>
                                        Batch/Tenure start <span className="text-red-500">*</span>
                                    </>}
                                    type='number'
                                    require={true}
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
                                        onChange: (e) => {
                                            if (e.target.value > new Date().getFullYear() + 1) {
                                                e.target.value = new Date().getFullYear() + 1;
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
                                            if (e.target.value > new Date().getFullYear() + 1) {
                                                e.target.value = new Date().getFullYear() + 1;
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
                                    label={<>
                                        Department <span className="text-red-500">*</span>
                                    </>}
                                    id='branch'
                                    require={true}
                                    options={branches}
                                    reactHookForm={register('branch', {
                                        required: 'Branch is required',
                                    })}
                                    className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                                    errors={errors.branch}
                                    placeholder="Select Branch"
                                />
                            </div>

                            <TextArea rows={3} id="bio" label="Bio" placeholder="About Yourself" title="bio" reactHookForm={register('bio', {
                                maxLength: {
                                    value: 1000,
                                    message: 'Bio must not exceed 1000 characters',
                                }
                            })} className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300' errors={errors.bio} />

                            <div className="flex md:flex-row flex-col gap-5">
                                <div className="flex-1">
                                    <Input
                                        label='Email'
                                        type='email'
                                        require={true}
                                        placeholder='Email'
                                        title='email'
                                        disabled={true}
                                        value={user.email}
                                        reactHookForm={register('email')}
                                        className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                                        errors={errors.email}
                                    />
                                    <p className="pt-2 text-sm text-gray-300">
                                        Do you want to show your email on your public profile?
                                        <input
                                            type="checkbox"
                                            defaultChecked={true}
                                            id="showEmail"
                                            {...register('showEmail')}
                                            className="ml-2"
                                        />
                                    </p>
                                </div>
                                <div className="flex-1">
                                    <Input
                                        label={<>
                                            Mobile No. <span className="text-red-500">*</span>
                                        </>}
                                        type='text'
                                        require={true}
                                        placeholder='Phone'
                                        title='phone'
                                        reactHookForm={register('phone', {
                                            required: 'Phone is required',
                                            pattern: {
                                                value: /^(?!(\d)\1{9})[6,7,8,9]\d{9}$/,
                                                message: 'Please enter a valid phone no.',
                                            },
                                        })}
                                        className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                                        errors={errors.phone}
                                    />
                                    <p className="pt-2 text-sm text-gray-300">
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
                                        }
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
                                        }
                                    }
                                    )}
                                    className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                                    errors={errors.designation}
                                />

                                <Input
                                    label='Location'
                                    type='text'
                                    require={true}
                                    placeholder='Las Vegas'
                                    title='location'
                                    reactHookForm={register('location', {
                                        required: "Location is required",
                                        maxLength: {
                                            value: 100,
                                            message: 'Location must not exceed 250 characters',
                                        }
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
                                        message: 'Interests must not exceed 100 characters',
                                    }
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
                                        setAllItems={(value) => {
                                            setFormData((prev) => ({ ...prev, hobbies: value }))
                                        }}
                                        placeholder="Add Hobbies"
                                        resetItems={resetItems}
                                    />
                                </div>
                            </div>

                            <div className='text-white self-end w-fit flex gap-3 pt-6 pb-4'>
                                <button onClick={(e) => {
                                    e.preventDefault();
                                    resetForm();
                                    toast.info("Form reset!");
                                    handleResetItems();
                                }} className="px-8 py-3 transition-all rounded-xl bg-rose-500 hover:bg-rose-600 active:scale-105 active:bg-red-600">
                                    Reset
                                </button>
                                <button disabled={loading} type="submit" className="px-8 py-3 transition-all rounded-xl bg-sky-500 hover:bg-sky-600 active:scale-105 active:bg-blue-600">
                                    Submit
                                </button>
                            </div>
                        </form>
                        :
                        <div className='p-2 relative'>
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
                                    ) : alumni.status === 'approved' || alumni.status === null ? (
                                        <div className="flex justify-center items-center">
                                            <div className="bg-green-500 text-white text-sm font-bold py-1.5 px-3 rounded-full">Profile Approved</div>
                                        </div>
                                    ) : (
                                        <div className="flex justify-center items-center">
                                            <div className="bg-red-500 text-white text-sm font-bold py-1.5 px-3 rounded-full">Profile Rejected</div>
                                        </div>
                                    )
                                }
                            </div>
                            <div className='flex items-start justify-between pt-4'>
                                <div className="w-32 h-32 flex items-center justify-center rounded-full overflow-hidden border-4 border-gray-700">
                                    <img src={alumni.image ? getImageURL(alumni.image) : placeholder} alt="placeholder" />
                                </div>
                                <button onClick={() => navigate("/edit-alumni-profile")} className='text-green-500 hover:border-green-600 hover:bg-green-600 hover:text-white transition md:px-8 px-6 py-1.5 border border-green-500 rounded-full text-lg'>
                                    <FaEdit className='inline-block mr-1' /> Edit
                                </button>
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
                        </div>
            }
        </div>
    )
}

export default CreateAlumniProfile;
