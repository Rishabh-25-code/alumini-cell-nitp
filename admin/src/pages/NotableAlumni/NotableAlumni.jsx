import Heading from '../../components/Headings/Heading';
import { useQuery } from '@tanstack/react-query';
import { getDocuments, createDocument, deleteDocument, updateDocument } from '../../services/documents';
import { compressedImageUpload, deleteFile } from '../../services/files';
import { FaStar, FaTrash, FaEdit } from "react-icons/fa";
import { getImageURL } from '../../services/files';
import { useForm } from 'react-hook-form';
import { Input, TextArea, ProfileImage } from '../../components/FormComponents';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Loading } from '../../../../client/src/components/Loader';

const NotableAlumni = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [isUpdate, setIsUpdate] = useState(null);
  const { register, reset, handleSubmit, formState: { errors }, setValue } = useForm({ trim: true });

  const { isLoading, data, isError, refetch } = useQuery({
    queryKey: ["notable-alumni"],
    queryFn: () => getDocuments("notable-alumni"),
    staleTime: 1000 * 60 * 3,
  });


  const onSubmit = async (data) => {
    if (isUpdate) {
      try {
        setLoading(true);
        data = { ...data, image: isUpdate.image, $id: isUpdate.$id };
        if (profileImage && !profileImage.startsWith('https')) {
          await deleteFile(isUpdate.image);
          setMessage('Uploading Image....');
          let res = await compressedImageUpload(profileImage);
          data.image = res.$id;
        }

        setMessage('Updating Data....');
        await updateDocument("notable-alumni", data.$id, data);
        toast.success("Alumni updated successfully!");
        refetch();
        reset();
        setProfileImage(null);
        setIsUpdate(null);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
      return;
    }

    if (!profileImage) return toast.error("Please select a profile image!");

    try {
      setLoading(true);
      data = { ...data, image: null };
      setMessage('Uploading Image....');
      if (profileImage) {
        let res = await compressedImageUpload(profileImage);
        data.image = res.$id;
      }

      setMessage('Uploading Data....');
      await createDocument("notable-alumni", data);
      toast.success("Alumni added successfully!");
      setProfileImage(null);
      refetch();
      reset();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  const handleEdit = (alum) => {
    setValue('name', alum.name);
    setValue('designation', alum.designation);
    setValue('about', alum.about);
    setProfileImage(getImageURL(alum.image).href);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsUpdate(alum);
  }


  return (
    <div className='pt-24 relative'>
      <Heading heading="Notable Alumni"></Heading>
      {
        loading && <Loading message={message} />
      }

      <form className='lg:max-w-4xl lg:p-0 w-full px-6 py-6 m-auto flex flex-col gap-3' onSubmit={handleSubmit(onSubmit)}>
        <ProfileImage
          profileImage={profileImage}
          setProfileImage={setProfileImage}
          isedit={isUpdate}
          placeholder={'https://t4.ftcdn.net/jpg/03/32/59/65/360_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT.jpg'}
        />

        <Input
          id='name'
          label='Name'
          type='text'
          placeholder='Enter Name'
          title='name'
          reactHookForm={{
            ...register('name', {
              required: 'Name is required',
              maxLength: { value: 256, message: 'Name should be less than 256 characters' },
              minLength: { value: 3, message: 'Name should be more than 3 characters' }
            })
          }}
          className='border border-gray-800 bg-[#101010] rounded-lg p-2 w-full'
          errors={errors.name}
        />

        <Input
          id='designation'
          label='Designation'
          type='text'
          placeholder='Designation'
          title='designation'
          reactHookForm={{
            ...register('designation', {
              required: 'Designation is required',
              maxLength: { value: 256, message: 'Designation should be less than 256 characters' },
              minLength: { value: 3, message: 'Designation should be more than 3 characters' }
            })
          }}
          className='border border-gray-800 bg-[#101010] rounded-lg p-2 w-full'
          errors={errors.designation}
        />

        <TextArea
          id='about'
          label='About'
          placeholder='About'
          title='about'
          rows={6}
          reactHookForm={{
            ...register('about', {
              required: 'About is required',
              maxLength: { value: 1024, message: 'About should be less than 1024 characters' },
              minLength: { value: 3, message: 'About should be more than 3 characters' }
            })
          }}
          className='border border-gray-800 bg-[#101010] rounded-lg p-2 w-full'
          errors={errors.about}
        />

        <div className='text-white self-end w-fit flex gap-3 pt-6 pb-4'>
          <button onClick={(e) => {
            e.preventDefault();
            reset()
            setProfileImage(null);
            toast.info("Form reset!");
          }} className="px-8 py-3 transition-all rounded-xl bg-rose-500 hover:bg-rose-600 active:scale-105 active:bg-red-600">
            Reset
          </button>
          <button disabled={loading} type="submit" className="px-8 py-3 transition-all rounded-xl bg-sky-500 hover:bg-sky-600 active:scale-105 active:bg-blue-600">
            Save
          </button>
        </div>
      </form>


      <h1 className='lg:text-4xl md:text-3xl font-semibold text-center text-sky-500 pt-10'>Notable Alumni</h1>
      {isLoading ? <p>Loading...</p> :
        isError ? <p>Error</p> :
          data.length === 0 ? <p>No data</p> :
            <div className='grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:px-10 md:px-5 px-5 lg:py-10 py-5'>
              {data.map((alum, index) => (
                <AlumniCard refetch={refetch} key={index} alum={alum} handleEdit={handleEdit} />
              ))}
            </div>
      }
    </div>
  )
}

export default NotableAlumni;


const AlumniCard = ({ alum, refetch, handleEdit }) => {

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this alumni?")) return;
    try {
      await Promise.all([deleteFile(alum.image), deleteDocument("notable-alumni", alum.$id)]);
      refetch();
      toast.success("Alumni deleted successfully!");
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div className='rounded-3xl relative shadow-lg bg-[#1c1c1c] bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:20px_24px] hover:bg-[#101010] border border-gray-900'>
      <div className='absolute top-4 right-4 flex gap-2 z-50'>
        <button className='text-green-500 text-2xl p-1 cursor-pointer'>
          <FaEdit onClick={() => handleEdit(alum)} />
        </button>

        <button className='text-red-500 text-2xl p-1 cursor-pointer'>
          <FaTrash onClick={handleDelete} />
        </button>
      </div>
      <div className='relative flex hover:scale-[98%] transition flex-col lg:items-start items-center justify-start  lg:py-6 py-10 lg:gap-3 md:gap-3 gap-6 px-5 lg:max-w-full max-w-[22rem] m-auto'>
        <div className='relative lg:h-28 md:h-32 h-36 lg:w-28 md:w-32 w-36 rounded-full flex items-center justify-center lg:min-w-[6rem]'>
          <img loading='lazy' className=' lg:h-28 md:h-32 h-36 lg:w-28 md:w-32 w-36 rounded-full' src={getImageURL(alum.image)} alt="project" />
          <FaStar className='absolute bottom-0 lg:text-3xl text-5xl right-0 text-[#ffc547]' />
        </div>
        <div className='w-full flex flex-col lg:text-left text-center'>
          <h3 className='text-xl font-semibold text-sky-500'>{alum.name}</h3>
          <h3 className='mb-2'>({alum.designation})</h3>
          <p className='lg:text-base text-sm text-justify text-gray-400 md:block'>{alum.about}</p>
        </div>
      </div>
    </div>
  )
}
