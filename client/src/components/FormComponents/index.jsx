import { useEffect, useState } from "react"
import ReactMarkdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { stackoverflowDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeRaw from 'rehype-raw'
import rehypeStringify from 'rehype-stringify'
import { getImageURL } from "../../services/files"


export const Input = ({ id, require, label, type, placeholder, title, reactHookForm, className, errors, ...rest }) => {
    return (
        <div className='flex-1'>
            <label htmlFor={id} className='text-gray-300'>{label}</label> {require  && <span className='text-rose-500 text-xl'>*</span> }
            <input
                {...rest}
                id={id}
                {...reactHookForm}
                type={type}
                name={title}
                placeholder={placeholder}
                className={className} />
            {errors && <p className="text-rose-500">{errors.message}</p>}
        </div>
    )
}

export const Select = ({ label, require, id, options, placeholder, reactHookForm, className, errors }) => {
    return (
        <div className="flex-1">
            <label htmlFor={id} className='text-gray-300'>{label}</label>{require && <span className='text-rose-500 text-xl'>*</span>}
            <select
                id={id}
                name={id}
                className={className}
                placeholder={placeholder}
                {...reactHookForm}>
                <option value="">{placeholder}</option>
                {
                    options.map((option, idx) => (
                        <option key={idx} value={option.value}>{option.name}</option>
                    ))
                }
            </select>
            {errors && <p className="text-rose-500">{errors.message}</p>}
        </div>
    )
}

export const TextArea = ({ id, require, label, placeholder, title, reactHookForm, className, errors, ...rest }) => {
    return (
        <div className='flex-1'>
            <label htmlFor={title} className='text-gray-300'>{label}</label> {require && <span className='text-rose-500 text-xl'>*</span>}
            <textarea
                {...rest}
                id={title}
                name={title}
                {...reactHookForm}
                placeholder={placeholder}
                className={className} />
            {errors && <p className="text-rose-500">{errors.message}</p>}
        </div>
    )
}

export const ProfileImage = ({ require, profileImage, setProfileImage, placeholder, prevImage = null }) => {
    const [overSize, setOverSize] = useState(false);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file.size > 1024 * 1024 * 2) {
            setOverSize(true);
            setProfileImage(null);
        } else {
            setOverSize(false);
            setProfileImage(file);
        }
    }

    return (
        <div className="flex-1 flex flex-col items-center justify-center gap-1">
            <div className="h-28 w-28 rounded-full overflow-hidden flex items-center justify-center">
                <img className="w-28 h-auto" src={profileImage ? URL.createObjectURL(profileImage) : prevImage ? getImageURL(prevImage) : placeholder} alt="placeholder" />
            </div>
            <label htmlFor="profileImage" className='text-gray-300'>Profile Image (max 2MB)</label> {require && <span className='text-rose-500 text-xl'>*</span>}
            <button className="relative bg-sky-500 hover:bg-sky-600 px-5 py-1 mt-2 rounded-full cursor-pointer text-white">Select
                <input onChange={handleImageChange} type="file" accept="image/jpeg, image/jpg, image/png, image/img" placeholder="Import" className="absolute top-0 left-0 opacity-0 w-full h-full cursor-pointer" />
            </button>
            {overSize && <p className="text-rose-500">Image size must be less than 2MB</p>}
        </div>)
}


export const MarkDownEditor = ({ id, require = true, label, placeholder, title, reactHookForm, errors, reset }) => {
    const [active, setActive] = useState("write");
    const [editorState, setEditorState] = useState("");

    useEffect(() => {
        setEditorState("");
        setActive("write");
    }, [reset])

    return (
        <div>
            <label htmlFor={title} className='text-gray-300'>{label}</label>{require && <span className='text-rose-500 text-xl'>*</span>}
            <div className="w-full border-2 border-gray-800 bg-gray-950 my-3 rounded-2xl">
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
                        <textarea
                            {...reactHookForm}
                            id={id}
                            onChange={(e) => {
                                setEditorState(e.target.value);
                            }}
                            className='w-full border border-gray-800 rounded-lg lg:min-h-[24rem] md:min-h-[24rem] min-h-[35rem] outline-none p-2 bg-gray-950'
                            name={title}
                            placeholder={placeholder}
                        ></textarea>
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
            {errors && <p className="text-rose-500">{errors.message}</p>}
        </div>
    )
}


export const UploadImage = ({ image,require, setImage, placeholder, label }) => {
    const [overSize, setOverSize] = useState(false);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file.size > 1024 * 1024 * 2) {
            setOverSize(true);
        } else {
            setOverSize(false);
            setImage(file);
        }
    }

    return (
        <div className="flex-1 flex flex-col items-center justify-center gap-1">
            <div className="h-28 overflow-hidden flex items-center justify-center">
                <img className="h-28 w-auto" src={image ? URL.createObjectURL(image) : placeholder} alt="placeholder" />
            </div>
            <label htmlFor="profileImage" className='text-gray-300'>{label} (max 2MB)</label> {require && <span className='text-rose-500 text-xl'>*</span>}
            <button className="relative bg-sky-500 hover:bg-sky-600 px-5 py-1 mt-2 rounded-full cursor-pointer text-white">Select
                <input onChange={handleImageChange} type="file" accept="image/jpeg, image/jpg, image/png, image/img" placeholder="Import" className="absolute top-0 left-0 opacity-0 w-full h-full cursor-pointer" />
            </button>
            {overSize && <p className="text-rose-500">Image size must be less than 2MB</p>}
        </div>)
}