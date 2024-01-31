import React, { useState, useEffect } from "react";
import { uploadFile } from "../../../services/files";
import { createDocument } from "../../../services/documents";
import { Loading } from "../../../components/Loader";
import { toast } from "react-toastify";
import { MdDeleteForever } from "react-icons/md";
import useAuth from "../../../hooks/useAuth";
import { compressedImageUpload } from '../../../services/files';
import { branches } from '../../../utils/branches';
import { useForm } from 'react-hook-form';
import { Input, Select, UploadImage, TextArea } from '../../../components/FormComponents';

const CreateJob = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm({ trim: true });
    const { user } = useAuth();
    const [message, setMessage] = useState("");
    const [resetItems, setResetItems] = useState(false);

    const handleResetItems = () => {
        setResetItems(!resetItems);
    }

    const [jobDetails, setJobDetails] = useState({
        jobSkills: [],
        jobLinks: [],
        referralAvailable: false,
        jobCompanyLogo: null,
        jobDetailsLink: null,
        referrerEmail: ""
    });
    const [loading, setLoading] = useState(false);

    const [jobCompanyLogo, setJobCompanyLogo] = useState(null);
    const [jobDetailsFile, setJobDetailsFile] = useState(null);

    const onSubmit = async (data) => {
        setLoading(true);

        try {
            // Upload the job company logo
            setMessage("Uploading files...");
            data = { ...data, ...jobDetails, name: user.name, email: user.email, userID: user.$id, jobSalary: parseInt(data.jobSalary) }

            if (jobCompanyLogo) {
                let res = await compressedImageUpload(jobCompanyLogo);
                data = {
                    ...data,
                    jobCompanyLogo: res.$id,
                };
            }

            // Upload the job details file
            if (jobDetailsFile) {
                let res = await uploadFile(jobDetailsFile);
                data = {
                    ...data,
                    jobDetailsLink: res.$id,
                };
            }

            setMessage("Creating document...");

            // Create the document
            await createDocument("job-opportunity", data);
            // console.log(data);

            // Reset the form
            resetForm();

            // Show a toast
            toast.success("Job sent for approval!");
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    const resetForm = () => {
        setJobDetails({
            jobSkills: [],
            jobLinks: [],
            referralAvailable: false,
            jobCompanyLogo: null,
            jobDetailsLink: null,
            referrerEmail: ""
        });
        reset();

        setJobCompanyLogo(null);
        setJobDetailsFile(null);
    }

    return (
        <div className='bg-gray-900 relative lg:p-5 p-4 my-5 rounded-lg'>
            {
                loading && <Loading message={message} />
            }
            <form className='flex gap-3 flex-col' onSubmit={handleSubmit(onSubmit)}>
                <h2 className='text-2xl font-semibold'>
                    <span className='text-sky-500'>Job Info</span>
                </h2>
                <Input
                    label='Job Title'
                    type='text'
                    placeholder='Software Engineer'
                    title='jobTitle'
                    require={true}
                    reactHookForm={register('jobTitle', {
                        required: 'Job Title is required',
                        minLength: {
                            value: 5,
                            message: 'Job title must be at least 5 characters',
                        },
                        maxLength: {
                            value: 256,
                            message: 'Job title must not exceed 256 characters',
                        },
                    })}
                    className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                    errors={errors.jobTitle}
                />

                <TextArea
                    label='Job Description'
                    placeholder='Job Description'
                    title='jobDescription'
                    require={true}
                    reactHookForm={register('jobDescription', {
                        required: 'Job Description is required',
                        minLength: {
                            value: 10,
                            message: 'Job Description must be at least 10 characters',
                        },
                        maxLength: {
                            value: 10000,
                            message: 'Job Description must not exceed 10000 characters',
                        },
                    })}
                    rows={6}
                    className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                    errors={errors.jobDescription}
                />

                <div className='flex md:flex-row flex-col gap-3'>
                    <Input
                        label='Job Experience Req.(in min years)'
                        type='number'
                        require={true}
                        placeholder='1 Year'
                        title='jobExperience'
                        reactHookForm={register('jobExperience', {
                            required: 'Job Experience is required',
                            min: {
                                value: 0,
                                message: 'Job Experience must be at least 0 years',
                            },
                            max: {
                                value: 45,
                                message: 'Job Experience must not exceed 45 years',
                            },
                        })}
                        className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                        errors={errors.jobExperience}
                    />

                    <Input
                        label='Job Location'
                        type='text'
                        placeholder='Bangalore, India'
                        title='jobLocation'
                        reactHookForm={register('jobLocation', {
                            minLength: {
                                value: 3,
                                message: 'Job Location must be at least 3 characters',
                            },
                            maxLength: {
                                value: 256,
                                message: 'Job Location must not exceed 256 characters',
                            },
                        })}
                        className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                        errors={errors.jobLocation}
                    />

                    <Input
                        label='Job Salary (CTC in LPA)'
                        type='number'
                        placeholder='12'
                        title='jobSalary'
                        reactHookForm={register('jobSalary', {
                            min: {
                                value: 0,
                                message: 'Job Salary must be at least 0 LPA',
                            },
                            max: {
                                value: 100,
                                message: 'Job Salary must not exceed 100 LPA',
                            },
                        })}
                        className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                        errors={errors.jobSalary}
                    />
                </div>

                <div className='flex md:flex-row flex-col gap-3'>
                    <Select
                        label='Job Type'
                        title='jobType'
                        require={true}
                        options={[
                            { value: 'FullTime', name: 'Full Time' },
                            { value: 'PartTime', name: 'Part Time' },
                            { value: 'Remote', name: 'Remote' },
                        ]}
                        placeholder={'Select Job Type'}
                        reactHookForm={register('jobType', {
                            required: 'Job Type is required',
                        })}
                        className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                        errors={errors.jobType}
                    />

                    <div className='flex-1'>
                        <label htmlFor="jobDeadline" className='text-gray-300'>Job Application Deadline</label>
                        <input value={jobDetails.jobDeadline}
                            type="date"
                            id="jobDeadline"
                            placeholder="Job Deadline" className='w-full bg-gray-950 text-gray-300 px-4 py-2 rounded-lg'
                            {...register('jobDeadline')}
                        />
                        {errors.jobDeadline && <p>{errors.jobDeadline.message}</p>}
                    </div>

                    <Input
                        label='Job Company'
                        type='text'
                        placeholder='Microsoft'
                        title='jobCompany'
                        require={true}
                        reactHookForm={register('jobCompany', {
                            required: 'Job Company is required',
                            minLength: {
                                value: 3,
                                message: 'Job Company must be at least 3 characters',
                            },
                            maxLength: {
                                value: 118,
                                message: 'Job Company must not exceed 118 characters',
                            },
                        })}
                        className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                        errors={errors.jobCompany}
                    />
                </div>

                <div className="flex">
                    <div className="flex-1">
                        <label htmlFor="jobSkills" className='text-gray-300'>Job Skills</label>
                        <MultiSelect allItems={jobDetails.jobSkills} setAllItems={
                            (items) => {
                                setJobDetails((prevDetails) => ({
                                    ...prevDetails,
                                    jobSkills: items,
                                }))
                            }
                        }
                            resetItems={resetItems}
                        />
                    </div>

                    <div className="flex-1">
                        <label htmlFor="jobLinks" className='text-gray-300'>Job Links</label>
                        <MultiSelect type="url" allItems={jobDetails.jobLinks} setAllItems={
                            (items) => {
                                setJobDetails((prevDetails) => ({
                                    ...prevDetails,
                                    jobLinks: items,
                                }))
                            }
                        }
                            resetItems={resetItems}
                        />
                    </div>
                </div>

                <TextArea
                    label='Job Company Description'
                    placeholder='Job Company Description'
                    title='jobCompanyDescription'
                    reactHookForm={register('jobCompanyDescription', {
                        minLength: {
                            value: 10,
                            message: 'Job Company Description must be at least 10 characters',
                        },
                        maxLength: {
                            value: 4980,
                            message: 'Job Company Description must not exceed 4980 characters',
                        },
                    })}
                    rows={6}
                    className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                    errors={errors.jobCompanyDescription}
                />

                <div className="flex md:flex-row flex-col gap-5 py-3">
                    <UploadImage
                        label='Job Company Logo'
                        placeholder='logo-placeholder.jpg'
                        setImage={setJobCompanyLogo}
                        image={jobCompanyLogo}
                    />

                    <div className="flex-1">
                        <label htmlFor="jobDetails" className='text-gray-300'>Job Details (doc,pdf,image etc. max 5MB)</label>
                        <div className="pt-5">
                            <input onChange={(e) => {
                                setJobDetailsFile(e.target.files[0]);
                            }} type="file" id="jobDetails" placeholder="Job Details" className='mt-2 text-sm text-grey-500 file:mr-5 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:cursor-pointer hover:file:bg-amber-50 hover:file:text-amber-700' />
                        </div>
                    </div>
                </div>

                <Input
                    label="jobCompanyEmail"
                    type="email"
                    placeholder="Job Company Email"
                    title="jobCompanyEmail"
                    reactHookForm={register('jobCompanyEmail', {
                        pattern: {
                            value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i,
                            message: 'Job Company Email must be a valid email address',
                        },
                        maxLength: {
                            value: 256,
                            message: 'Job Company Email must not exceed 256 characters',
                        },
                    })}
                    className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                    errors={errors.jobCompanyEmail}
                />

                {/* Referral Availability */}
                <div className='flex gap-5'>
                    <label htmlFor="referralAvailable" className='text-gray-300'>Referrals Available</label>

                    <div>
                        <input
                            type="checkbox"
                            id="referralAvailable"
                            checked={jobDetails.referralAvailable}
                            onChange={(e) => {
                                if (!e.target.checked) {
                                    setJobDetails((prevDetails) => ({
                                        ...prevDetails,
                                        referrerEmail: '',
                                        referralAvailable: e.target.checked
                                    }))
                                } else {
                                    setJobDetails((prevDetails) => ({
                                        ...prevDetails,
                                        referralAvailable: e.target.checked,
                                    }))
                                }
                            }}
                        />
                        <label htmlFor="referralAvailable" className='text-gray-300 pl-2'>Yes</label>
                    </div>
                </div>

                {/* Referrer Email */}
                {jobDetails.referralAvailable && (
                    <div>
                        <label htmlFor="referrerEmail" className='text-gray-300'>Referrer Email/LinkedIn/Twitter</label>
                        <input
                            type="text"
                            id="referrerEmail"
                            value={jobDetails.referrerEmail}
                            onChange={(e) => {
                                setJobDetails((prevDetails) => ({
                                    ...prevDetails,
                                    referrerEmail: e.target.value
                                }))
                            }}
                            placeholder="Referrer Email/LinkedIn/Twitter"
                            className='w-full bg-gray-950 text-gray-300 px-4 py-2 rounded-lg'
                        />
                    </div>
                )}

                <h2 className='text-2xl font-semibold'>
                    <span className='text-sky-500'>Your Info</span>
                </h2>

                <Input
                    label="Your Current Role"
                    type="text"
                    placeholder="Your Current Role"
                    title="yourCurrentRole"
                    require={true}
                    reactHookForm={register('yourCurrentRole', {
                        required: 'Your Current Role is required',
                        minLength: {
                            value: 3,
                            message: 'Your Current Role must be at least 3 characters',
                        },
                        maxLength: {
                            value: 256,
                            message: 'Your Current Role must not exceed 256 characters',
                        },
                    })}
                    className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                    errors={errors.yourCurrentRole}
                />

                <div className='flex md:flex-row flex-col gap-3'>
                    <Input
                        label="Your Current Company"
                        type="text"
                        placeholder="Your Current Company"
                        title="yourCurrentCompany"
                        require={true}
                        reactHookForm={register('yourCurrentCompany', {
                            required: 'Your Current Company is required',
                            minLength: {
                                value: 3,
                                message: 'Your Current Company must be at least 3 characters',
                            },
                            maxLength: {
                                value: 256,
                                message: 'Your Current Company must not exceed 256 characters',
                            },
                        })}
                        className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                        errors={errors.yourCurrentCompany}
                    />

                    <Input
                        label="Your Batch"
                        type="number"
                        placeholder="2002"
                        title="yourBatch"
                        id="yourBatch"
                        reactHookForm={register('yourBatch', {
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
                        errors={errors.yourBatch}
                    />

                    <Select
                        label='Your Department'
                        id='branch'
                        require={true}
                        options={branches}
                        reactHookForm={register('yourDepartment', {
                            required: 'Department is required',
                        })}
                        className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                        errors={errors.yourDepartment}
                        placeholder="Select Dept."
                    />
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
        </div>
    );
};

export default CreateJob;


const MultiSelect = ({ allItems, setAllItems, type = "text", placeholder = "Add an item", fullWd = false, resetItems, value = [] }) => {
    const [items, setItems] = useState(value);
    const [current, setCurrent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (current !== '') {
            let item = current;
            item = item.replace("#", "").trim();
            setItems([item, ...items]);
            setAllItems([item, ...allItems]);
        };
        setCurrent('');
    }

    useEffect(() => {
        setItems(value);
    }, [resetItems]);

    return (
        <div className='flex flex-col gap-2 pt-2 w-full'>
            <div className={`flex gap-3 ${fullWd ? "w-full" : "w-fit"}`}>
                <input value={current} onChange={(e) => setCurrent(e.target.value)} className="w-full bg-gray-950 text-gray-300 px-4 py-1.5 rounded-lg" type={type} placeholder={placeholder} />
                <button onClick={handleSubmit} className="bg-sky-500 px-5 rounded-xl">
                    Add
                </button>
            </div>
            {items.length > 0 && <div className="flex flex-col">
                <p>
                    added items:
                </p>
                <ul>
                    {items.map((item, idx) => (
                        <div key={idx} className="flex text-lg gap-5">
                            <li className="text-sky-500">{item}</li>
                            <button onClick={(e) => {
                                e.preventDefault();
                                setItems((prevItems) => prevItems.filter((prevItem) => prevItem !== item));
                                let newItems = allItems.filter((prevItem) => prevItem !== item);
                                setAllItems(newItems);
                            }}>
                                <MdDeleteForever className="text-red-500" />
                            </button>
                        </div>
                    ))}
                </ul>
            </div>}

        </div>
    );
}

export { MultiSelect };