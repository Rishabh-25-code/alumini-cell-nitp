export const Input = ({ id, label, type, placeholder, title, reactHookForm, className, errors, ...rest }) => {
    return (
        <div className='flex-1'>
            <label htmlFor={title} className='text-gray-300'>{label}</label>
            <input
                {...rest}
                id={id}
                {...reactHookForm}
                type={type}
                placeholder={placeholder}
                className={className} />
            {errors && <p className="text-rose-500">{errors.message}</p>}
        </div>
    )
}

export const Select = ({ label, id, options, placeholder, reactHookForm, className, errors }) => {
    return (
        <div>
            <label htmlFor={id} className='text-gray-300'>{label}</label>
            <select
                id={id}
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

export const TextArea = ({ id, label, placeholder, title, reactHookForm, className, errors,...rest }) => {
    return (
        <div className='flex-1'>
            <label htmlFor={title} className='text-gray-300'>{label}</label>
            <textarea
                {...rest}
                id={id}
                {...reactHookForm}
                placeholder={placeholder}
                className={className} />
            {errors && <p className="text-rose-500">{errors.message}</p>}
        </div>
    )
}

export const ProfileImage = ({ profileImage, setProfileImage, placeholder }) => {
    const [overSize, setOverSize] = useState(false);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file.size > 1024 * 1024 * 2) {
            setOverSize(true);
        } else {
            setOverSize(false);
            setProfileImage(file);
        }
    }


    return (
        <div className="flex-1 flex flex-col items-center justify-center gap-1">
            <div className="h-28 w-28 rounded-full overflow-hidden flex items-center justify-center">
                <img className="w-28 h-auto" src={profileImage ? URL.createObjectURL(profileImage) : placeholder} alt="placeholder" />
            </div>
            <label htmlFor="profileImage" className='text-gray-300'>Profile Image (max 2MB)</label>
            <button className="relative bg-sky-500 hover:bg-sky-600 px-5 py-1 mt-2 rounded-full cursor-pointer text-white">Select
                <input onChange={handleImageChange} type="file" accept="image/jpeg, image/jpg, image/png, image/img" placeholder="Import" className="absolute top-0 left-0 opacity-0 w-full h-full cursor-pointer" />
            </button>
            {overSize && <p className="text-rose-500">Image size must be less than 2MB</p>}
        </div>)
}