import Heading from '../../components/Headings/Heading';
import { useQuery } from '@tanstack/react-query';
import { getDocuments, createDocument, deleteDocument } from '../../services/documents';
import { compressedImageUpload, deleteFile } from '../../services/files';
import { FaStar, FaTrash } from "react-icons/fa";
import { getImageURL } from '../../services/files';
import { useForm } from 'react-hook-form';
import { Input, TextArea, ProfileImage } from '../../components/FormComponents';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Loading } from '../../../../client/src/components/Loader';

const NotableAlumni = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const { register, reset, handleSubmit, formState: { errors } } = useForm({ trim: true });

  const { isLoading, data, isError, refetch } = useQuery({
    queryKey: ["notable-alumni"],
    queryFn: () => getDocuments("notable-alumni", 4, 4 * (page - 1)),
    staleTime: 1000 * 60 * 3,
  });

  const onSubmit = async (data) => {
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
      refetch();
      reset();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='pt-24 relative'>
      <Heading heading="Notable Alumni"></Heading>
      {
        loading && <Loading message={message} />
      }

      <form className='lg:max-w-4xl lg:p-0 w-full px-6 py-6 m-auto flex flex-col gap-3' onSubmit={handleSubmit(onSubmit)}>
        <ProfileImage
          required={true}
          profileImage={profileImage}
          setProfileImage={setProfileImage}
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
          errors={errors.name}
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
          errors={errors.name}
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
                <AlumniCard refetch={refetch} key={index} alum={alum} />
              ))}
            </div>
      }
    </div>
  )
}

export default NotableAlumni;


const AlumniCard = ({ alum, refetch }) => {

  const handleDelete = async () => {
    try {
      await Promise.all([deleteFile(alum.image), deleteDocument("notable-alumni", alum.$id)]);
      refetch();
      toast.success("Alumni deleted successfully!");
    } catch (error) {
      toast.error(error.message);
    }
  }


  return (
    <div data-aos="fade-in" className='rounded-3xl shadow-lg bg-[#000000] hover:bg-gray-950 border border-gray-900'>
      <div className='relative flex hover:scale-[98%] transition lg:flex-row md:flex-col flex-col lg:items-start items-center justify-start  lg:py-6 py-10 lg:gap-3 md:gap-3 gap-6 px-5 lg:max-w-full max-w-[24rem] m-auto'>
        <div className='relative lg:h-24 md:h-32 h-36 lg:w-24 md:w-32 w-36 rounded-full flex items-center justify-center lg:min-w-[6rem]'>
          <img loading='lazy' className=' lg:h-24 md:h-32 h-36 lg:w-24 md:w-32 w-36 rounded-full' src={getImageURL(alum.image)} alt="project" />
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
