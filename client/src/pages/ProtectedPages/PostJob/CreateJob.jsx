import React, { useState } from "react";
import { uploadFile } from "../../../services/files";
import { createDocument } from "../../../services/documents";
import { Loading } from "../../../components/Loader";
import { toast } from "react-toastify";
import { MdDeleteForever } from "react-icons/md";
import useAuth from "../../../hooks/useAuth";

const branches = [
    {
        name: 'Electrical Engineering',
        value: 'EE'
    },
    {
        name: 'Computer Science & Engg.',
        value: 'CSE'
    },
    {
        name: 'Electronics & Communication Engg.',
        value: 'ECE'
    },
    {
        name: 'Mechanical Engineering',
        value: 'ME'
    },
    {
        name: 'Civil Engineering',
        value: 'CE'
    },
    {
        name: 'Architecture',
        value: 'Arch.'
    },
    {
        name: 'Mathematics',
        value: 'IMSc.'
    }
]

const CreateJob = () => {
    const { user } = useAuth();
    const [message, setMessage] = useState("");
    const [jobDetails, setJobDetails] = useState({
        jobTitle: "",
        jobLocation: "",
        jobDescription: "",
        jobSkills: [],
        jobExperience: "",
        jobSalary: "",
        jobType: "FullTime",
        jobDeadline: "",
        jobCompany: "",
        jobLinks: [],
        jobCompanyDescription: "",
        jobCompanyLogo: "",
        jobDetailsLink: "",
        jobCompanyEmail: "",
        yourCurrentRole: "",
        yourCurrentCompany: "",
        yourBatch: "",
        yourDepartment: "EE",
        referralAvailable: false,
        referrerEmail: "",
        name: user.name,
        email: user.email,
        userID: user.$id,
    });
    const [loading, setLoading] = useState(false);

    const [jobCompanyLogo, setJobCompanyLogo] = useState(null);
    const [jobDetailsFile, setJobDetailsFile] = useState(null);

    const handleInputChange = (e) => {
        const { id, value, type, checked } = e.target;

        setJobDetails((prevDetails) => ({
            ...prevDetails,
            [id]: type === "checkbox" ? checked : value,
        }));
    };

    const handleReferralChange = (e) => {
        const { id, checked } = e.target;

        setJobDetails((prevDetails) => ({
            ...prevDetails,
            [id]: checked,
        }));

        if (!checked) {
            setJobDetails((prevDetails) => ({
                ...prevDetails,
                referrerEmail: "",
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Upload the job company logo
            setMessage("Uploading files...");
            let data = { ...jobDetails }
            if (jobCompanyLogo) {
                let res = await uploadFile(jobCompanyLogo);
                console.log(res);
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
            let doc = await createDocument("job-opportunity", data);
            // console.log(jobDetails);

            // Reset the form
            resetForm();

            // Show a toast
            toast.success("Job posted successfully!");
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    const resetForm = () => {
        setJobDetails({
            jobTitle: "",
            jobLocation: "",
            jobDescription: "",
            jobSkills: "",
            jobExperience: "",
            jobSalary: "",
            jobType: "FullTime",
            jobDeadline: "",
            jobCompany: "",
            jobLinks: "",
            jobCompanyDescription: "",
            jobCompanyLogo: "",
            jobDetailsLink: "",
            jobCompanyEmail: "",
            yourCurrentRole: "",
            yourCurrentCompany: "",
            yourBatch: "",
            yourDepartment: "",
            referralAvailable: false,
            referrerEmail: "",
            name: user.name,
            email: user.email,
        });

        setJobCompanyLogo(null);
        setJobDetailsFile(null);
    }

    return (
        <div className='bg-gray-900 relative lg:p-5 p-4 my-5 rounded-lg'>
            {
                loading && <Loading message={message} />
            }
            <form className='flex gap-3 flex-col' onSubmit={handleSubmit}>
                <h2 className='text-2xl font-semibold'>
                    <span className='text-sky-500'>Job Info</span>
                </h2>
                <div>
                    <label htmlFor="jobTitle" className='text-gray-300'>Job Title</label> <span className='text-rose-500 text-xl'>*</span>
                    <input required={true} value={jobDetails.jobTitle} onChange={handleInputChange} type="text" id="jobTitle" placeholder="Software Engineer" className='w-full bg-gray-950 text-gray-300 px-4 py-2 rounded-lg' />
                </div>

                <div>
                    <label htmlFor="jobDescription" className='text-gray-300'>Job Description</label>
                    <textarea value={jobDetails.jobDescription} onChange={handleInputChange} rows={8} type="text" id="jobDescription" placeholder="Job Description" className='w-full bg-gray-950 text-gray-300 px-4 py-2 rounded-lg' />
                </div>

                <div>
                    <label htmlFor="jobSkills" className='text-gray-300'>Job Skills</label>
                    <MultiSelect allItems={jobDetails.jobSkills} setAllItems={
                        (items) => {
                            setJobDetails((prevDetails) => ({
                                ...prevDetails,
                                jobSkills: items,
                            }))
                        }
                    } />
                </div>

                <div className='flex md:flex-row flex-col gap-3'>
                    <div className='flex-1'>
                        <label htmlFor="jobExperience" className='text-gray-300'>Job Experience Req.(in min years)</label> <span className='text-rose-500 text-xl'>*</span>
                        <input required={true} value={jobDetails.jobExperience} onChange={handleInputChange} min={0} type="number" id="jobExperience" placeholder="1 Year" className='w-full bg-gray-950 text-gray-300 px-4 py-2 rounded-lg' />
                    </div>

                    <div className='flex-1'>
                        <label htmlFor="jobLocation" className='text-gray-300'>Job Location</label>
                        <input value={jobDetails.jobLocation} onChange={handleInputChange} type="text" id="jobLocation" placeholder="Bangalore, India" className='w-full bg-gray-950 text-gray-300 px-4 py-2 rounded-lg' />
                    </div>

                    <div className='flex-1'>
                        <label htmlFor="jobSalary" className='text-gray-300'>Job Salary (CTC in LPA)</label>
                        <input value={jobDetails.jobSalary} onChange={handleInputChange} type="number" id="jobSalary" placeholder="12" className='w-full bg-gray-950 text-gray-300 px-4 py-2 rounded-lg' />
                    </div>
                </div>

                <div className='flex md:flex-row flex-col gap-3'>
                    <div className='flex-1'>
                        <label htmlFor="jobType" className='text-gray-300'>Job Type</label> <span className='text-rose-500 text-xl'>*</span>
                        <select required={true} value={jobDetails.jobType} onChange={handleInputChange} name="jobType" id="jobType" placeholder="FullTime/PartTime/Remote" className='w-full bg-gray-950 text-gray-300 px-4 py-2 rounded-lg'>
                            <option value="FullTime">Full Time</option>
                            <option value="PartTime">Part Time</option>
                            <option value="Remote">Remote</option>
                        </select>
                    </div>

                    <div className='flex-1'>
                        <label htmlFor="jobDeadline" className='text-gray-300'>Job Application Deadline</label>
                        <input value={jobDetails.jobDeadline} onChange={handleInputChange} type="date" id="jobDeadline" placeholder="Job Deadline" className='w-full bg-gray-950 text-gray-300 px-4 py-2 rounded-lg' />
                    </div>

                    <div className='flex-1'>
                        <label htmlFor="jobCompany" className='text-gray-300'>Job Company</label> <span className='text-rose-500 text-xl'>*</span>
                        <input value={jobDetails.jobCompany} onChange={handleInputChange} type="text" id="jobCompany" placeholder="Microsoft" className='w-full bg-gray-950 text-gray-300 px-4 py-2 rounded-lg' />
                    </div>
                </div>

                <div>
                    <label htmlFor="jobLinks" className='text-gray-300'>Job Links</label>
                    <MultiSelect type="url" allItems={jobDetails.jobLinks} setAllItems={
                        (items) => {
                            setJobDetails((prevDetails) => ({
                                ...prevDetails,
                                jobLinks: items,
                            }))
                        }
                    } />
                </div>

                <div>
                    <label htmlFor="jobCompanyDescription" className='text-gray-300'>Job Company Description</label>
                    <textarea value={jobDetails.jobCompanyDescription} onChange={handleInputChange} rows={4} id="jobCompanyDescription" placeholder="Job Company Description" className='w-full bg-gray-950 text-gray-300 px-4 py-2 rounded-lg' />
                </div>

                <div className="flex md:flex-row flex-col gap-5 py-3">
                    <div className="flex-1">
                        <label htmlFor="jobCompanyLogo" className='text-gray-300'>Job Company Logo (max 5MB)</label>
                        <div className="p-3">
                            <img src={jobCompanyLogo ? URL.createObjectURL(jobCompanyLogo) : "logo-placeholder.jpg"} className='h-[5rem]' alt="placeholder" />
                        </div>
                        <input type="file" accept="image/*" onChange={(e) => {
                            setJobCompanyLogo(e.target.files[0]);
                        }} id="jobCompanyLogo" placeholder="Job Company Logo" className='mt-2 text-sm text-grey-500 file:mr-5 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:cursor-pointer hover:file:bg-amber-50 hover:file:text-amber-700' />
                    </div>

                    <div className="flex-1">
                        <label htmlFor="jobDetails" className='text-gray-300'>Job Details (doc,pdf,image etc. max 5MB)</label>
                        <div className="pt-5">
                            <input onChange={(e) => {
                                setJobDetailsFile(e.target.files[0]);
                            }} type="file" id="jobDetails" placeholder="Job Details" className='mt-2 text-sm text-grey-500 file:mr-5 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:cursor-pointer hover:file:bg-amber-50 hover:file:text-amber-700' />
                        </div>
                    </div>
                </div>

                <div>
                    <label htmlFor="jobCompanyEmail" className='text-gray-300'>Job Company Email</label>
                    <input value={jobDetails.jobCompanyEmail} onChange={handleInputChange} type="email" id="jobCompanyEmail" placeholder="Job Company Email" className='w-full bg-gray-950 text-gray-300 px-4 py-2 rounded-lg' />
                </div>

                {/* Referral Availability */}
                <div className='flex gap-5'>
                    <label htmlFor="referralAvailable" className='text-gray-300'>Referrals Available</label>

                    <div>
                        <input
                            type="checkbox"
                            id="referralAvailable"
                            checked={jobDetails.referralAvailable}
                            onChange={handleReferralChange}
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
                            onChange={handleInputChange}
                            placeholder="Referrer Email/LinkedIn/Twitter"
                            className='w-full bg-gray-950 text-gray-300 px-4 py-2 rounded-lg'
                        />
                    </div>
                )}

                <h2 className='text-2xl font-semibold'>
                    <span className='text-sky-500'>Your Info</span>
                </h2>

                <div>
                    <label htmlFor="yourCurrentRole" className='text-gray-300'>Your Current Role</label> <span className='text-rose-500 text-xl'>*</span>
                    <input required={true} value={jobDetails.yourCurrentRole} onChange={handleInputChange} type="text" id="yourCurrentRole" placeholder="Your Current Role" className='w-full bg-gray-950 text-gray-300 px-4 py-2 rounded-lg' />
                </div>

                <div className='flex md:flex-row flex-col gap-3'>
                    <div className='flex-1'>
                        <label htmlFor="yourCurrentCompany" className='text-gray-300'>Your Current Company</label> <span className='text-rose-500 text-xl'>*</span>
                        <input required={true} value={jobDetails.yourCurrentCompany} onChange={handleInputChange} type="text" id="yourCurrentCompany" placeholder="Your Current Company" className='w-full bg-gray-950 text-gray-300 px-4 py-2 rounded-lg' />
                    </div>

                    <div className='flex-1'>
                        <label htmlFor="yourBatch" className='text-gray-300'>Your Batch</label><span className='text-rose-500 text-xl'>*</span>
                        <input required={true} value={jobDetails.yourBatch} onChange={handleInputChange} type="text" id="yourBatch" placeholder="Your Batch" className='w-full bg-gray-950 text-gray-300 px-4 py-2 rounded-lg' />
                    </div>

                    <div className='flex-1'>
                        <label htmlFor="yourDepartment" className='text-gray-300'>Your Department</label><span className='text-rose-500 text-xl'>*</span>
                        <select required={true} value={jobDetails.yourDepartment} onChange={handleInputChange} type="text" id="yourDepartment" placeholder="Your Department" className='w-full bg-gray-950 text-gray-300 px-4 py-2 rounded-lg' >
                            {branches.map((branch) => (
                                <option key={branch.value} value={branch.value}>{branch.name}</option>
                            ))}
                        </select>
                    </div>
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
    );
};

export default CreateJob;


const MultiSelect = ({ allItems, setAllItems, type = "text", placeholder = "Add an item", fullWd = false }) => {
    const [items, setItems] = useState([]);
    const [current, setCurrent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (current !== '') {
            setItems([current, ...items]);
            setAllItems([current, ...allItems]);
        };
        setCurrent('');
    }

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