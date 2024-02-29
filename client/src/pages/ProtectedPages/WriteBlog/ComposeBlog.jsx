import { useState, useCallback } from 'react';
import { Loading } from "../../../components/Loader/index";
import { toast } from "react-toastify";
import { createDocument } from "../../../services/documents";
import { MultiSelect } from '../PostJob/CreateJob';
import { branches } from '../../../utils/branches';
import { useForm } from 'react-hook-form';
import { Input, Select, MarkDownEditor, UploadImage } from '../../../components/FormComponents';
import { compressedImageUpload } from '../../../services/files';


const ComposeBlog = ({ user }) => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm({ trim: true });
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: user.name,
        email: user.email,
        id: user.$id,
        imgUrl: null,
        tags: []
    });
    const [file, setFile] = useState(null);
    const [resetItems, setResetItems] = useState(false);

    const handleResetItems = () => {
        setResetItems(!resetItems);
    }

    const onSubmit = useCallback(async (data) => {
        data = { ...data, ...formData };
        setLoading(true);

        try {
            if (file) {
                const res = await compressedImageUpload(file);
                data = {
                    ...data,
                    imgUrl: res.$id
                }
            }

            const res = await createDocument('blogs', data);
            toast.success("Blog sent for review to admin!");
            resetForm();
        } catch (err) {
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    }, [formData, file])

    const resetForm = () => {
        setFormData({
            ...formData,
            imgUrl: null,
            tags: [],
        })
        reset();
        setFile(null);
        handleResetItems();
    }

    return (
        <div className='bg-[#0a0b1d] relative lg:p-5 p-4 my-5 rounded-lg'>
            {
                loading && <Loading message={"Creating Document..."} />
            }
            <form className='flex gap-3 flex-col' onSubmit={handleSubmit(onSubmit)}>
                <Input
                    label='Title'
                    type='text'
                    placeholder='Title'
                    title='title'
                    require={true}
                    reactHookForm={register('title', {
                        required: 'Title is required',
                        minLength: {
                            value: 5,
                            message: 'Title must be at least 5 characters',
                        },
                        maxLength: {
                            value: 256,
                            message: 'Title must not exceed 256 characters',
                        },
                    })}
                    className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                    errors={errors.title}
                />

                <MarkDownEditor
                    label='Message'
                    placeholder='Message'
                    title='message'
                    reactHookForm={register('message', {
                        required: 'Message is required.',
                        minLength: {
                            value: 50,
                            message: 'Message must be at least 50 characters.',
                        },
                        maxLength: {
                            value: 5000,
                            message: 'Message must not exceed 5000 characters.',
                        },
                    })}
                    className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                    errors={errors.message}
                    reset={resetItems}
                />

                <div className='flex md:flex-row flex-col gap-3'>
                    <div className='flex-1'>
                        <label htmlFor="tags" className='text-gray-300'>Tags (without #)</label>
                        <MultiSelect placeholder="#success" allItems={formData.tags} setAllItems={
                            (items) => {
                                setFormData((prevDetails) => ({
                                    ...prevDetails,
                                    tags: items,
                                }))
                            }
                        }
                            resetItems={resetItems}
                        />
                    </div>

                    <UploadImage
                        image={file}
                        setImage={setFile}
                        placeholder="logo-placeholder.jpg"
                        label="Blog Header Image"
                    />
                </div>

                <div className='flex md:flex-row flex-col gap-3'>
                    <Input
                        label="Current Company Name"
                        type="text"
                        placeholder="ISRO"
                        title="currentCompany"
                        require={true}
                        reactHookForm={register('currentCompany', {
                            required: 'Current Company is required',
                            minLength: {
                                value: 2,
                                message: 'Current Company must be at least 2 characters',
                            },
                            maxLength: {
                                value: 256,
                                message: 'Current Company must not exceed 256 characters',
                            },
                        })}
                        className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                        errors={errors.currentCompany}
                    />

                    <Input
                        label="Your Batch"
                        type="number"
                        placeholder="2002"
                        title="batch"
                        reactHookForm={register('batch', {
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

                <div className='flex md:flex-row flex-col gap-3'>
                    <Input
                        label="Your Designation/Role"
                        type="text"
                        placeholder="Your Designation/Role"
                        title="currentPost"
                        require={true}
                        reactHookForm={register('currentPost', {
                            required: 'Current Post is required',
                            minLength: {
                                value: 2,
                                message: 'Current Post must be at least 2 characters',
                            },
                            maxLength: {
                                value: 256,
                                message: 'Current Post must not exceed 256 characters',
                            },
                        })}
                        className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                        errors={errors.currentPost}
                    />

                    <Input
                        label="Your Current City"
                        type="text"
                        placeholder="Patna"
                        require={true}
                        title="currentCity"
                        reactHookForm={register('currentCity', {
                            required: 'Current City is required',
                            minLength: {
                                value: 2,
                                message: 'Current City must be at least 2 characters',
                            },
                            maxLength: {
                                value: 256,
                                message: 'Current City must not exceed 256 characters',
                            },
                        })}
                        className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
                        errors={errors.currentCity}
                    />
                </div>

                <div className='text-white self-end w-fit flex gap-3 pt-6 pb-4'>
                    <button onClick={(e) => {
                        e.preventDefault();
                        resetForm();
                        toast.info("Form reset!");
                    }} className="px-8 py-3 transition-all rounded-xl bg-rose-500 hover:bg-rose-600 active:scale-105 active:bg-red-600">
                        Reset
                    </button>
                    <button disabled={loading} type="submit" className="px-8 py-3 transition-all rounded-xl bg-sky-500 hover:bg-sky-600 active:scale-105 active:bg-blue-600">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ComposeBlog;