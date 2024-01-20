import React, { useState, useEffect } from "react";
import { uploadFile } from "../../../services/files";
import { createDocument } from "../../../services/documents";
import { Loading } from "../../../components/Loader";
import { toast } from "react-toastify";
import useAuth from "../../../hooks/useAuth";
import { branches } from '../../../utils/branches'
import { compressedImageUpload } from '../../../services/files';
import { MultiSelect } from "../PostJob/CreateJob";
import { useForm } from 'react-hook-form';
import { Input, Select, UploadImage, TextArea } from '../../../components/FormComponents';

const CreateIntern = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm({ trim: true });
    const { user } = useAuth();
    const [message, setMessage] = useState("");
    const [resetItems, setResetItems] = useState(false);

    const handleResetItems = () => {
        setResetItems(!resetItems);
    }

    const [internDetails, setInternDetails] = useState({
        internSkills: [],
        internLinks: [],
        referralAvailable: false,
        referrerEmail: "",
        internCompanyLogo: null,
        internDetailsLink: null,
        ppoAvailable: false,
    });
    const [loading, setLoading] = useState(false);

    const [internCompanyLogo, setInternCompanyLogo] = useState(null);
    const [internDetailsFile, setInternDetailsFile] = useState(null);

    const onSubmit = async (data) => {
        setLoading(true);

        try {
            // Upload the intern company logo
            setMessage("Uploading files...");
            data = { ...data, ...internDetails, name: user.name, email: user.email, userID: user.$id }

            if (internCompanyLogo) {
                let res = await compressedImageUpload(internCompanyLogo);
                data = {
                    ...data,
                    internCompanyLogo: res.$id,
                };
            }

            // Upload the intern details file
            if (internDetailsFile) {
                let res = await uploadFile(internDetailsFile);
                data = {
                    ...data,
                    internDetailsLink: res.$id,
                };
            }

            setMessage("Creating document...");

            // Create the document
            await createDocument("intern-opportunity", data);
            // console.log(internDetails);

            // Reset the form
            resetForm();

            // Show a toast
            toast.success("Internship posted successfully!");
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    const resetForm = () => {
        setInternDetails({
            internSkills: [],
            internLinks: [],
            referralAvailable: false,
            referrerEmail: "",
            internCompanyLogo: null,
            internDetailsLink: null,
            ppoAvailable: false,
        });
        reset();
        setInternCompanyLogo(null);
        setInternDetailsFile(null);
    }

    return (
        <div className='bg-gray-900 relative lg:p-5 p-4 my-5 rounded-lg'>
            {
                loading && <Loading message={message} />
            }
            <form className='flex gap-3 flex-col' onSubmit={handleSubmit(onSubmit)}>
                <h2 className='text-2xl font-semibold'>
                    <span className='text-sky-500'>Intern Info</span>
                </h2>
                <Input
                    id="internTitle"
                    type={'text'}
                    label="Intern Title"
                    placeholder="Software Engineer Intern"
                    title="internTitle"
                    reactHookForm={{
                        ...register("internTitle", {
                            required: 'Intern Title is required',
                            minLength: {
                                value: 5,
                                message: 'Intern title must be at least 5 characters',
                            },
                            maxLength: {
                                value: 256,
                                message: 'Intern title must not exceed 256 characters',
                            },
                        })
                    }}
                    className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                    errors={errors.internTitle}
                />

                <TextArea
                    id="internDescription"
                    label="Intern Description"
                    placeholder="Intern Description"
                    title="internDescription"
                    reactHookForm={{
                        ...register("internDescription", {
                            required: 'Intern Description is required',
                            minLength: {
                                value: 5,
                                message: 'Intern Description must be at least 5 characters',
                            },
                            maxLength: {
                                value: 4999,
                                message: 'Intern Description must not exceed 4999 characters',
                            },
                        })
                    }}
                    rows={6}
                    className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                    errors={errors.internDescription}
                />

                <div className='flex md:flex-row flex-col gap-3'>
                    <Input
                        id="internExperience"
                        label="Intern Experience Req.(in min months)"
                        placeholder="6 months"
                        title="internExperience"
                        type="number"
                        reactHookForm={{
                            ...register("internExperience", {
                                required: 'Intern Experience is required',
                                min: {
                                    value: 0,
                                    message: 'Intern Experience must be at least 0 months',
                                },
                                max: {
                                    value: 100,
                                    message: 'Intern Experience must not exceed 100 months',
                                },
                            })
                        }}
                        className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                        errors={errors.internExperience}
                    />

                    <Input
                        id="internLocation"
                        label="Intern Location"
                        placeholder="Bangalore, India"
                        title="internLocation"
                        type="text"
                        reactHookForm={{
                            ...register("internLocation", {
                                required: 'Intern Location is required',
                                minLength: {
                                    value: 5,
                                    message: 'Intern Location must be at least 5 characters',
                                },
                                maxLength: {
                                    value: 256,
                                    message: 'Intern Location must not exceed 256 characters',
                                },
                            })
                        }}
                        className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                        errors={errors.internLocation}
                    />

                    <Input
                        id="internSalary"
                        label="Intern Stipend(in Thousand)"
                        placeholder="50,000"
                        title="internSalary"
                        type="number"
                        reactHookForm={{
                            ...register("internSalary", {
                                required: 'Intern Stipend is required',
                                min: {
                                    value: 0,
                                    message: 'Intern Stipend must be at least 0',
                                },
                                max: {
                                    value: 1000000,
                                    message: 'Intern Stipend must not exceed 1000000',
                                },
                            })
                        }}
                        className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                        errors={errors.internSalary}
                    />
                </div>

                <div className='flex md:flex-row flex-col gap-3'>
                    <Select
                        label='Intern Type'
                        title='internType'
                        options={[
                            { name: 'FullTime', value: 'FullTime' },
                            { name: 'PartTime', value: 'PartTime' },
                            { name: 'Remote', value: 'Remote' },
                            { name: 'Hybrid', value: 'Hybrid' },
                        ]}
                        placeholder={'Select Intern Type'}
                        reactHookForm={register('internType', {
                            required: 'Intern Type is required',
                        })}
                        className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                        errors={errors.internType}
                    />

                    <div className='flex-1'>
                        <label htmlFor="internDeadline" className='text-gray-300'>Intern Application Deadline</label>
                        <input value={internDetails.internDeadline}
                            type="date"
                            id="internDeadline"
                            placeholder="Intern Deadline" className='w-full bg-gray-950 text-gray-300 px-4 py-2 rounded-lg'
                            {...register('internDeadline')}
                        />
                        {errors.internDeadline && <p>{errors.internDeadline.message}</p>}
                    </div>

                    <Select
                        label='Intern Duration'
                        title='internDuration'
                        options={[
                            {
                                name: "Unknown",
                                value: "-",
                            },
                            { name: '1 month', value: '1 month' },
                            { name: '2 months', value: '2 months' },
                            { name: '3 months', value: '3 months' },
                            { name: '4 months', value: '4 months' },
                            { name: '5 months', value: '5 months' },
                            { name: '6 months', value: '6 months' },
                            { name: '7 months', value: '7 months' },
                            { name: '8 months', value: '8 months' },
                            { name: '9 months', value: '9 months' },
                            { name: '10 months', value: '10 months' },
                            { name: '11 months', value: '11 months' },
                            { name: '12 months', value: '12 months' },
                            {
                                name: 'More than 12 months',
                                value: 'More than 12 months',
                            }
                        ]}
                        placeholder={'Select Duration'}
                        reactHookForm={register('internDuration', {
                            required: 'Intern Duration is required',
                        })}
                        className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                        errors={errors.internDuration}
                    />

                    <Input
                        label='Intern Company'
                        type='text'
                        placeholder='Microsoft'
                        title='internCompany'
                        reactHookForm={register('internCompany', {
                            required: 'Intern Company is required',
                            minLength: {
                                value: 3,
                                message: 'Intern Company must be at least 3 characters',
                            },
                            maxLength: {
                                value: 118,
                                message: 'Intern Company must not exceed 118 characters',
                            },
                        })}
                        className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                        errors={errors.internCompany}
                    />
                </div>

                <div className="flex">
                    <div className="flex-1">
                        <label htmlFor="internSkills" className='text-gray-300'>Intern Skills</label>
                        <MultiSelect allItems={internDetails.internSkills} setAllItems={
                            (items) => {
                                setInternDetails((prevDetails) => ({
                                    ...prevDetails,
                                    internSkills: items,
                                }))
                            }
                        }
                            resetItems={resetItems}
                        />
                    </div>

                    <div className="flex-1">
                        <label htmlFor="internLinks" className='text-gray-300'>Intern Links</label>
                        <MultiSelect type="url" allItems={internDetails.internLinks} setAllItems={
                            (items) => {
                                setInternDetails((prevDetails) => ({
                                    ...prevDetails,
                                    internLinks: items,
                                }))
                            }
                        }
                            resetItems={resetItems}
                        />
                    </div>
                </div>

                <TextArea
                    label='Intern Company Description'
                    placeholder='Intern Company Description'
                    title='internCompanyDescription'
                    reactHookForm={register('internCompanyDescription', {
                        minLength: {
                            value: 10,
                            message: 'Intern Company Description must be at least 10 characters',
                        },
                        maxLength: {
                            value: 4980,
                            message: 'Intern Company Description must not exceed 4980 characters',
                        },
                    })}
                    rows={6}
                    className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                    errors={errors.internCompanyDescription}
                />

                <div className="flex md:flex-row flex-col gap-5 py-3">
                    <UploadImage
                        label='Intern Company Logo'
                        placeholder='logo-placeholder.jpg'
                        setImage={setInternCompanyLogo}
                        image={internCompanyLogo}
                    />

                    <div className="flex-1">
                        <label htmlFor="internDetails" className='text-gray-300'>Intern Details (doc,pdf,image etc. max 5MB)</label>
                        <div className="pt-5">
                            <input onChange={(e) => {
                                setInternDetailsFile(e.target.files[0]);
                            }} type="file" id="internDetails" placeholder="Intern Details" className='mt-2 text-sm text-grey-500 file:mr-5 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:cursor-pointer hover:file:bg-amber-50 hover:file:text-amber-700' />
                        </div>
                    </div>
                </div>

                <Input
                    label="Intern Company Email"
                    type="email"
                    placeholder="Intern Company Email"
                    title="internCompanyEmail"
                    reactHookForm={register('internCompanyEmail', {
                        pattern: {
                            value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i,
                            message: 'Intern Company Email must be a valid email address',
                        },
                        maxLength: {
                            value: 256,
                            message: 'Intern Company Email must not exceed 256 characters',
                        },
                    })}
                    className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                    errors={errors.internCompanyEmail}
                />

                <div className='flex gap-5'>
                    <label htmlFor="ppoAvailable" className='text-gray-300'>PPO Available</label>

                    <div>
                        <input
                            type="checkbox"
                            id="ppoAvailable"
                            checked={internDetails.ppoAvailable}
                            onChange={(e) => {
                                setInternDetails((prevDetails) => ({
                                    ...prevDetails,
                                    ppoAvailable: e.target.checked,
                                }))
                            }}
                        />
                        <label htmlFor="ppoAvailable" className='text-gray-300 pl-2'>Yes</label>
                    </div>
                </div>

                {/* Referral Availability */}
                <div className='flex gap-5'>
                    <label htmlFor="referralAvailable" className='text-gray-300'>Referrals Available</label>

                    <div>
                        <input
                            type="checkbox"
                            id="referralAvailable"
                            checked={internDetails.referralAvailable}
                            onChange={(e) => {
                                if (!e.target.checked) {
                                    setInternDetails((prevDetails) => ({
                                        ...prevDetails,
                                        referrerEmail: '',
                                        referralAvailable: e.target.checked
                                    }))
                                } else {
                                    setInternDetails((prevDetails) => ({
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
                {internDetails.referralAvailable && (
                    <div>
                        <label htmlFor="referrerEmail" className='text-gray-300'>Referrer Email/LinkedIn/Twitter</label>
                        <input
                            type="text"
                            id="referrerEmail"
                            value={internDetails.referrerEmail}
                            onChange={(e) => {
                                setInternDetails((prevDetails) => ({
                                    ...prevDetails,
                                    referrerEmail: e.target.value,
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
                        title="batch"
                        reactHookForm={register('yourBatch', {
                            required: 'Batch is required',
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

export default CreateIntern;