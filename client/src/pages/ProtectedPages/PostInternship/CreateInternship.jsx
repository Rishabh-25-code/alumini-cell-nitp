import React, { useState,useEffect } from "react";
import { uploadFile } from "../../../services/files";
import { createDocument } from "../../../services/documents";
import { Loading } from "../../../components/Loader";
import { toast } from "react-toastify";
import { MdDeleteForever } from "react-icons/md";
import useAuth from "../../../hooks/useAuth";
import { branches } from '../../../utils/branches'
import CreateAlumniProfile from "../AlumniProfile/CreateAlumniProfile";
const CreateIntern = () => {
    const { user } = useAuth();
    const [message, setMessage] = useState("");
    const [resetItems, setResetItems] = useState(false);

    const handleResetItems=()=>{
        setResetItems(!resetItems);
    }
    const [internDetails, setInternDetails] = useState({
        internTitle: "",
        internLocation: "",
        internDescription: "",
        internSkills: [],
        internExperience: "",
        internSalary: "",
        internType: "FullTime",
        internDeadline: "",
        internCompany: "",
        internLinks: [],
        internCompanyDescription: "",
        internCompanyLogo: null,
        internDetailsLink: null,
        internCompanyEmail: "",
        yourCurrentRole: "",
        yourCurrentCompany: "",
        yourBatch: "",
        yourDepartment: "EE",
        referralAvailable: false,
        referrerEmail: "",
        ppoAvailable: false,
        name: user.name,
        email: user.email,
        userID: user.$id,
    });
    const [loading, setLoading] = useState(false);

    const [internCompanyLogo, setInternCompanyLogo] = useState(null);
    const [internDetailsFile, setInternDetailsFile] = useState(null);

    const handleInputChange = (e) => {
        const { id, value, type, checked } = e.target;

        setInternDetails((prevDetails) => ({
            ...prevDetails,
            [id]: type === "checkbox" ? checked : value,
        }));
    };

    const handleReferralChange = (e) => {
        const { id, checked } = e.target;

        setInternDetails((prevDetails) => ({
            ...prevDetails,
            [id]: checked,
        }));

        if (!checked) {
            setInternDetails((prevDetails) => ({
                ...prevDetails,
                referrerEmail: "",
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Upload the intern company logo
            setMessage("Uploading files...");
            let data = { ...internDetails }
            if (internCompanyLogo) {
                let res = await uploadFile(internCompanyLogo);
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
            ...internDetails,
            internTitle: "",
            internLocation: "",
            internDescription: "",
            internSkills: "",
            internExperience: "",
            internSalary: "",
            internType: "FullTime",
            internDeadline: "",
            internCompany: "",
            internLinks: "",
            internCompanyDescription: "",
            internCompanyLogo: null,
            internDetailsLink: null,
            internCompanyEmail: "",
            yourCurrentRole: "",
            yourCurrentCompany: "",
            yourBatch: "",
            yourDepartment: "",
            referralAvailable: false,
            referrerEmail: "",
            ppoAvailable: false,
        });

        setInternCompanyLogo(null);
        setInternDetailsFile(null);
    }

    return (
        <div className='bg-gray-900 relative lg:p-5 p-4 my-5 rounded-lg'>
            {
                loading && <Loading message={message} />
            }
            <form className='flex gap-3 flex-col' onSubmit={handleSubmit}>
                <h2 className='text-2xl font-semibold'>
                    <span className='text-sky-500'>Intern Info</span>
                </h2>
                <div>
                    <label htmlFor="internTitle" className='text-gray-300'>Intern Title</label> <span className='text-rose-500 text-xl'>*</span>
                    <input required={true} value={internDetails.internTitle} onChange={handleInputChange} type="text" id="internTitle" placeholder="Software Engineer Intern" className='w-full bg-gray-950 text-gray-300 px-4 py-2 rounded-lg' />
                </div>

                <div>
                    <label htmlFor="internDescription" className='text-gray-300'>Intern Description</label>
                    <textarea value={internDetails.internDescription} onChange={handleInputChange} rows={8} type="text" id="internDescription" placeholder="Intern Description" className='w-full bg-gray-950 text-gray-300 px-4 py-2 rounded-lg' />
                </div>

                <div>
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

                <div className='flex md:flex-row flex-col gap-3'>
                    <div className='flex-1'>
                        <label htmlFor="internExperience" className='text-gray-300'>Intern Experience Req.(in min months)</label> <span className='text-rose-500 text-xl'>*</span>
                        <input required={true} value={internDetails.internExperience} onChange={handleInputChange} min={0} type="number" id="internExperience" placeholder="6 months" className='w-full bg-gray-950 text-gray-300 px-4 py-2 rounded-lg' />
                    </div>

                    <div className='flex-1'>
                        <label htmlFor="internLocation" className='text-gray-300'>Intern Location</label>
                        <input value={internDetails.internLocation} onChange={handleInputChange} type="text" id="internLocation" placeholder="Bangalore, India" className='w-full bg-gray-950 text-gray-300 px-4 py-2 rounded-lg' />
                    </div>

                    <div className='flex-1'>
                        <label htmlFor="internSalary" className='text-gray-300'>Intern Stipend(in Thousand)</label>
                        <input value={internDetails.internSalary} onChange={handleInputChange} type="number" id="internSalary" placeholder="50,000" className='w-full bg-gray-950 text-gray-300 px-4 py-2 rounded-lg' />
                    </div>
                </div>

                <div className='flex md:flex-row flex-col gap-3'>
                    <div className='flex-1'>
                        <label htmlFor="internType" className='text-gray-300'>Intern Type</label> <span className='text-rose-500 text-xl'>*</span>
                        <select required={true} value={internDetails.internType} onChange={handleInputChange} name="internType" id="internType" placeholder="FullTime/PartTime/Remote" className='w-full bg-gray-950 text-gray-300 px-4 py-2 rounded-lg'>
                            <option value="InOffice">InOffice</option>
                            <option value="OnCampus">OnCampus</option>
                            <option value="Hybrid">Hybrid</option>
                            <option value="Remote">Remote</option>
                        </select>
                    </div>

                    <div className='flex-1'>
                        <label htmlFor="internDeadline" className='text-gray-300'>Intern Application Deadline</label>
                        <input value={internDetails.internDeadline} onChange={handleInputChange} type="date" id="internDeadline" placeholder="Intern Deadline" className='w-full bg-gray-950 text-gray-300 px-4 py-2 rounded-lg' />
                    </div>

                    <div className='flex-1'>
                        <label htmlFor="internCompany" className='text-gray-300'>Intern Company</label> <span className='text-rose-500 text-xl'>*</span>
                        <input required={true} value={internDetails.internCompany} onChange={handleInputChange} type="text" id="internCompany" placeholder="Microsoft" className='w-full bg-gray-950 text-gray-300 px-4 py-2 rounded-lg' />
                    </div>
                </div>

                <div>
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

                <div>
                    <label htmlFor="internCompanyDescription" className='text-gray-300'>Intern Company Description</label>
                    <textarea value={internDetails.internCompanyDescription} onChange={handleInputChange} rows={4} id="internCompanyDescription" placeholder="Intern Company Description" className='w-full bg-gray-950 text-gray-300 px-4 py-2 rounded-lg' />
                </div>

                <div className="flex md:flex-row flex-col gap-5 py-3">
                    <div className="flex-1">
                        <label htmlFor="internCompanyLogo" className='text-gray-300'>Intern Company Logo (max 5MB)</label>
                        <div className="p-3">
                            <img src={internCompanyLogo ? URL.createObjectURL(internCompanyLogo) : "logo-placeholder.jpg"} className='h-[5rem]' alt="placeholder" />
                        </div>
                        <input type="file" accept="image/*" onChange={(e) => {
                            setInternCompanyLogo(e.target.files[0]);
                        }} id="internCompanyLogo" placeholder="Intern Company Logo" className='mt-2 text-sm text-grey-500 file:mr-5 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:cursor-pointer hover:file:bg-amber-50 hover:file:text-amber-700' />
                    </div>

                    <div className="flex-1">
                        <label htmlFor="internDetails" className='text-gray-300'>Intern Details (doc,pdf,image etc. max 5MB)</label>
                        <div className="pt-5">
                            <input onChange={(e) => {
                                setInternDetailsFile(e.target.files[0]);
                            }} type="file" id="internDetails" placeholder="Intern Details" className='mt-2 text-sm text-grey-500 file:mr-5 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:cursor-pointer hover:file:bg-amber-50 hover:file:text-amber-700' />
                        </div>
                    </div>
                </div>

                <div>
                    <label htmlFor="internCompanyEmail" className='text-gray-300'>Intern Company/HR Email</label>
                    <input value={internDetails.internCompanyEmail} onChange={handleInputChange} type="email" id="internCompanyEmail" placeholder="Intern Company Email" className='w-full bg-gray-950 text-gray-300 px-4 py-2 rounded-lg' />
                </div>

                <div className='flex gap-5'>
                    <label htmlFor="ppoAvailable" className='text-gray-300'>PPO Available</label>

                    <div>
                        <input
                            type="checkbox"
                            id="ppoAvailable"
                            checked={internDetails.ppoAvailable}
                            onChange={handleReferralChange}
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
                            onChange={handleReferralChange}
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
                    <input required={true} value={internDetails.yourCurrentRole} onChange={handleInputChange} type="text" id="yourCurrentRole" placeholder="Your Current Role" className='w-full bg-gray-950 text-gray-300 px-4 py-2 rounded-lg' />
                </div>

                <div className='flex md:flex-row flex-col gap-3'>
                    <div className='flex-1'>
                        <label htmlFor="yourCurrentCompany" className='text-gray-300'>Your Current Company</label> <span className='text-rose-500 text-xl'>*</span>
                        <input required={true} value={internDetails.yourCurrentCompany} onChange={handleInputChange} type="text" id="yourCurrentCompany" placeholder="Your Current Company" className='w-full bg-gray-950 text-gray-300 px-4 py-2 rounded-lg' />
                    </div>

                    <div className='flex-1'>
                        <label htmlFor="yourBatch" className='text-gray-300'>Your Batch</label><span className='text-rose-500 text-xl'>*</span>
                        <input required={true} value={internDetails.yourBatch} onChange={handleInputChange} type="text" id="yourBatch" placeholder="Your Batch" className='w-full bg-gray-950 text-gray-300 px-4 py-2 rounded-lg' />
                    </div>

                    <div className='flex-1'>
                        <label htmlFor="yourDepartment" className='text-gray-300'>Your Department</label><span className='text-rose-500 text-xl'>*</span>
                        <select required={true} value={internDetails.yourDepartment} onChange={handleInputChange} type="text" id="yourDepartment" placeholder="Your Department" className='w-full bg-gray-950 text-gray-300 px-4 py-2 rounded-lg' >
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


const MultiSelect = ({ allItems, setAllItems, type = "text", placeholder = "Add an item",resetItems }) => {
    const [items, setItems] = useState([]);
    const [current, setCurrent] = useState('');

    useEffect(() => {
        setItems([]);
    }, [resetItems]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (current !== '') {
            setItems([current, ...items]);
            setAllItems([current, ...allItems]);
        };
        setCurrent('');
    }

    return (
        <div className='flex flex-col gap-2 pt-2'>
            <div className="flex w-fit gap-3">
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
                            <button onClick={() => {
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