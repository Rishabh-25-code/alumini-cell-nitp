import React, { useState, useCallback, useEffect } from 'react';
import { toast } from 'react-toastify';
import { branches } from '../../../utils/branches';
import placeholder from "../../../assets/man-placeholder.jpg"
import { MultiSelect } from '../PostJob/CreateJob';
import { useForm } from 'react-hook-form';
import { compressedImageUpload } from '../../../services/files';
import { getImageURL } from '../../../services/files';
import { createDocument, getAlumniProfile } from '../../../services/documents';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../../components/Loader';
import { Input, Select, ProfileImage, TextArea } from '../../../components/FormComponents';


const CreateAlumniProfile = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm({ trim: true });
    const [loading, setLoading] = useState(false);
    const { user } = useAuth();
    const [formData, setFormData] = useState({
        achievements: [],
        interests: '',
        hobbies: [],
    });

    const [resetItems, setResetItems] = useState(false);
    const handleResetItems = () => {
        setResetItems(!resetItems);
    }

    const { data: alumni, isPending, refetch } = useQuery({
        queryKey: ['alumni', user.email],
        queryFn: () => getAlumniProfile('alumni', user.email),
        enabled: !!user.email,
        retry: 1,
    })

    const onSubmit = useCallback(async (data) => {
        data = { ...data, achievements: formData.achievements, hobbies: formData.hobbies, image: null, uid: user.$id, email: user.email };
        setLoading(true);
        try {
            if (profileImage) {
                let res = await compressedImageUpload(profileImage);
                if (res) {
                    data = { ...data, image: res.$id };
                }
            }

            await createDocument('alumni', data);
            toast.success("Profile created successfully!");
            resetForm();
            refetch();
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }, [formData]);

    const [profileImage, setProfileImage] = useState(null);

    const resetForm = () => {
        reset();
        setFormData((prev) => ({
            ...prev,
            achievements: []
        }));
    };

    return (
        <div className='bg-gray-900 relative p-5 my-5 rounded-2xl'>

            {isPending ? <div className='w-full h-[10rem] flex items-center justify-center'><Loader /></div> :
                alumni.length === 0 ?
                    <form className='flex gap-3 flex-col' onSubmit={handleSubmit(onSubmit)}>
                        <h2 className='text-2xl font-semibold'>
                            <span className='text-sky-500'>Alumni Info </span>
                        </h2>

                        <div className="flex md:flex-row flex-col gap-5 py-3">
                            <ProfileImage placeholder={placeholder} profileImage={profileImage} setProfileImage={setProfileImage} />
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
                                reactHookForm={register('degree', { required: 'Degree is required' })}
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
                                label='First Name'
                                type='text'
                                placeholder='First Name'
                                title='fname'
                                reactHookForm={register('fname', {
                                    pattern: {
                                        value: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
                                        message: 'Please enter a valid name',
                                    },
                                    required: 'First name is required',
                                    minLength: {
                                        value: 3,
                                        message: 'First Name must be at least 3 characters',
                                    },
                                    maxLength: {
                                        value: 56,
                                        message: 'First Name must not exceed 56 characters',
                                    },
                                })}
                                className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                                errors={errors.fname}
                            />

                            <Input
                                label='Last Name'
                                type='text'
                                placeholder='Last Name'
                                title='lname'
                                reactHookForm={register('lname', {
                                    maxLength: {
                                        value: 56,
                                        message: 'Name must not exceed 56 characters',
                                    },
                                })}
                                className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                                errors={errors.lname}
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
                            }
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
                                    label='Mobile No.'
                                    type='text'
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
                                        value: /^[a-zA-Z0-9+_.-]+$/i,
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
                                placeholder='Las Vegas'
                                title='location'
                                reactHookForm={register('location', {
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
                    <div className='p-2'>
                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-700">
                            <img src={alumni[0].image ? getImageURL(alumni[0].image) : placeholder} alt="placeholder" />
                        </div>
                        <div className='py-5 text-lg'>
                            <p className='font-medium text-sky-500'>
                                <span className='text-white'>{alumni[0].title}. {alumni[0].fname + " " + alumni[0].lname}</span>
                            </p>
                            <p className='text-sky-500 font-medium'>
                                {alumni[0].designation.trim() && <span>{alumni[0].designation && alumni[0].designation} {alumni[0].company && " at " + alumni[0].company}{alumni[0].location && ", " + alumni[0].location}</span>
                                }
                            </p>
                            <p className='py-3'>
                                <span className='text-gray-300 font-normal text-base'>{alumni[0].bio}</span>
                            </p>
                            <p className='font-medium text-sky-500'>
                                Role : <span className='text-white'>{alumni[0].role.toUpperCase()}</span>
                            </p>
                            <p className='font-medium text-sky-500'>
                                Batch : <span className='text-white'>{alumni[0].batchEnd ? alumni[0].batchStart + "-" + alumni[0].batchEnd : alumni[0].batchStart}</span>
                            </p>
                            <p className='font-medium text-sky-500'>
                                Branch : <span className='text-white'>{
                                    branches.find((branch) => branch.value === alumni[0].branch)?.name
                                }</span>
                            </p>
                            <p className='font-medium text-sky-500'>
                                Email : <span className='text-white'>{alumni[0].email}</span> <span className="text-rose-500 text-sm">
                                    {alumni[0].showEmail && "(hidden)"}
                                </span>
                            </p>
                            <p className='font-medium text-sky-500'>
                                Phone : <span className='text-white'>{alumni[0].phone}</span> <span className="text-rose-500 text-sm">
                                    {alumni[0].showPhone && "(hidden)"}
                                </span>
                            </p>
                            <p className='font-medium text-sky-500'>
                                Degree: <span className='text-white'>{alumni[0].degree}</span>
                            </p>
                            <p className='font-medium text-sky-500'>
                                Interests: <span className='text-white'>{alumni[0].interests}</span>
                            </p>
                            <p className='font-medium text-sky-500'>
                                Hobbies: <span className='text-white'>{alumni[0].hobbies.join(", ")}</span>
                            </p>
                            <p className='font-medium text-sky-500 flex items-start gap-2'>
                                <span>Achievements:</span> <p className='text-white'>{
                                    alumni[0].achievements.map((ach, idx) => (
                                        <p className='text-base text-yellow-500' key={idx}>- {ach}</p>
                                    ))
                                }</p>
                            </p>
                        </div>
                    </div>
            }
        </div>
    )
}

export default CreateAlumniProfile;