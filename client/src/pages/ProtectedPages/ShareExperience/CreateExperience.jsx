import { useState } from 'react';
import { Loading } from "../../../components/Loader/index";
import { toast } from "react-toastify";
import { createDocument } from "../../../services/documents";
import { uploadFile } from '../../../services/files';
import ReactMarkdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { stackoverflowDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeRaw from 'rehype-raw'
import rehypeStringify from 'rehype-stringify'
import "./unreset.scss"
import { MultiSelect } from '../PostJob/CreateJob';

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

const CreateExperience = ({ user }) => {
    const [active, setActive] = useState("write");
    const [loading, setLoading] = useState(false);
    const [editorState, setEditorState] = useState("");
    const [formData, setFormData] = useState({
        name: user.name,
        email: user.email,
        id: user.$id,
        title: '',
        message: '',
        currentPost: '',
        currentCompany: '',
        currentCity: '',
        batch: '',
        branch: 'EE',
        imgUrl: null,
        tags: []
    });
    const [file, setFile] = useState(null);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.title.trim().length < 10) {
            toast.error("Title must be atleast 10 characters long!");
            return;
        }

        if (formData.message.trim().length < 50) {
            toast.error("Message must be atleast 50 characters long!");
            return;
        }

        setLoading(true);

        let data = { ...formData };

        if (file) {
            const res = await uploadFile(file);
            data = {
                ...data,
                imgUrl: res.$id
            }
        }

        try {
            const res = await createDocument('experiences', data);
            console.log(res);
            toast.success("Testimonial created successfully!");
            resetForm();
        } catch (err) {
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    }

    const resetForm = () => {
        setFormData({
            ...formData,
            message: '',
            currentPost: '',
            currentCompany: '',
            currentCity: '',
            batch: '',
            branch: 'EE',
            imgUrl: null,
            tags: [],
            title: "",
        })
        setFile(null);
        setEditorState("");
    }

    return (
        <div className='bg-[#0a0b1d] relative lg:p-5 p-4 my-5 rounded-lg'>
            {
                loading && <Loading message={"Creating Document..."} />
            }
            <form className='flex gap-3 flex-col' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title" className='text-gray-300'>Title</label> <span className='text-rose-500 text-xl'>*</span>
                    <input required={true} value={formData.title} onChange={handleInputChange} type="text" id="title" placeholder="My Journey at NIT Patna" className='w-full bg-gray-950 text-gray-300 px-4 py-2 rounded-lg' />
                </div>

                <div>
                    <label htmlFor="message" className='text-gray-300'>Message</label><span className='text-rose-500 text-xl'>*</span>
                    <div className="w-full border-2 border-gray-800 my-3 rounded-2xl">
                        <div className='pl-4 pt-2.5'>
                            <button
                                type='none'
                                name="write"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setActive(e.target.name);
                                }}
                                className={`px-6 py-2 -mb-[1px] ${active === "write" && "border rounded-t-xl border-gray-800 bg-black  border-b-black"}`}>Edit</button>
                            <button
                                type='none'
                                name="preview"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setActive(e.target.name);
                                }}
                                className={`px-6 py-2 -mb-[1px] ${active === "preview" && "border rounded-t-xl border-gray-800 bg-black  border-b-black"}`}>Preview</button>
                        </div>
                        <div className='p-2.5 pb-0 border-t border-gray-800'>
                            {active === "write" ?

                                <textarea required className='w-full border border-gray-800 rounded-lg lg:min-h-[24rem] md:min-h-[24rem] min-h-[35rem] outline-none p-2 bg-gray-950' value={editorState} onChange={(e) => {
                                    setEditorState(e.target.value)
                                    setFormData({
                                        ...formData,
                                        message: e.target.value,
                                    })
                                }
                                } name='editor' placeholder='Write your blog here...' ></textarea>

                                : <div className='unreset px-2 min-h-[5rem] border border-gray-800 rounded-md'>
                                    <ReactMarkdown children={editorState} components={{
                                        code({ node, inline, className, children, ...props }) {
                                            const match = /language-(\w+)/.exec(className || '')
                                            return !inline && match ? (
                                                <SyntaxHighlighter
                                                    {...props}
                                                    children={String(children).replace(/\n$/, '')}
                                                    style={stackoverflowDark}
                                                    language={match[1]}
                                                    PreTag="div"
                                                />
                                            ) : (
                                                <code {...props} className={className}>
                                                    {children}
                                                </code>
                                            )
                                        }
                                    }} remarkPlugins={[remarkGfm, remarkRehype, rehypeStringify, rehypeRaw]} />
                                </div>
                            }
                        </div>
                        <div className='pl-2.5 text-sm text-sky-600 pb-2 font-medium'>MarkDown Supported</div>
                    </div>
                </div>

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
                        } />
                    </div>

                    <div className="flex-1">
                        <label htmlFor="file" className='text-gray-300'>Attach Image (max 5MB)</label>
                        <div className="p-3">
                            <img src={file ? URL.createObjectURL(file) : "logo-placeholder.jpg"} className='h-[5rem]' alt="placeholder" />
                        </div>
                        <input type="file" accept="image/*" onChange={(e) => {
                            setFile(e.target.files[0]);
                        }} id="jobCompanyLogo" placeholder="Job Company Logo" className='mt-2 text-sm text-grey-500 file:mr-5 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:cursor-pointer hover:file:bg-amber-50 hover:file:text-amber-700' />
                    </div>
                </div>



                <div className='flex md:flex-row flex-col gap-3'>
                    <div className='flex-1'>
                        <label htmlFor="currentCompany" className='text-gray-300'>Current Company</label> <span className='text-rose-500 text-xl'>*</span>
                        <input required={true} value={formData.currentCompany} onChange={handleInputChange} type="text" id="currentCompany" placeholder="Your Current Company" className='w-full bg-gray-950 text-gray-300 px-4 py-2 rounded-lg' />
                    </div>

                    <div className='flex-1'>
                        <label htmlFor="batch" className='text-gray-300'>Your Batch</label><span className='text-rose-500 text-xl'>*</span>
                        <input required={true} value={formData.batch} onChange={handleInputChange} type="text" id="batch" placeholder="2002" className='w-full bg-gray-950 text-gray-300 px-4 py-2 rounded-lg' />
                    </div>

                    <div className='flex-1'>
                        <label htmlFor="branch" className='text-gray-300'>Department</label><span className='text-rose-500 text-xl'>*</span>
                        <select required={true} value={formData.branch} onChange={handleInputChange} type="text" id="branch" placeholder="EE" className='w-full bg-gray-950 text-gray-300 px-4 py-2 rounded-lg'>
                            {
                                branches.map(branch => (
                                    <option key={branch.value} value={branch.value}>{branch.name}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>

                <div className='flex md:flex-row flex-col gap-3'>
                    <div className='flex-1'>
                        <label htmlFor="currentPost" className='text-gray-300'>Your Current Post/Role</label> <span className='text-rose-500 text-xl'>*</span>
                        <input required={true} value={formData.currentPost} onChange={handleInputChange} type="text" id="currentPost" placeholder="Your Current Post" className='w-full bg-gray-950 text-gray-300 px-4 py-2 rounded-lg' />
                    </div>
                    <div className="flex-1">
                        <label htmlFor="currentCity" className='text-gray-300'>Current City</label> <span className='text-rose-500 text-xl'>*</span>
                        <input required={true} value={formData.currentCity} onChange={handleInputChange} type="text" id="currentCity" placeholder="Patna" className='w-full bg-gray-950 text-gray-300 px-4 py-2 rounded-lg' />
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
    )
}

export default CreateExperience