import { useQuery } from '@tanstack/react-query';
import { getDocument, updateDocument } from '../../services/documents';
import { useParams } from 'react-router-dom'
import { BsDot } from 'react-icons/bs'
import Meta from '../../components/Meta/Meta';
import Loader from '../../components/Loader';
import { getImageURL } from '../../services/files';
import MarkDown from '../../components/MarkDown';
import { Input, Select } from '../../components/FormComponents';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useState } from 'react';
import Heading from '../../components/Headings/Heading';

const Testimonial = () => {
  const { testimonialId } = useParams();
  const [loading, setLoading] = useState(false);
  const { register, reset, handleSubmit, formState: { errors } } = useForm({ trim: true });
  const { data: Testimonial, isPending, isError, refetch, error } = useQuery({
    queryKey: ['testimonials', testimonialId],
    queryFn: () => getDocument('testimonials', testimonialId)
  });


  const onSubmit = async (data) => {

    try {
      setLoading(true);
      const TestimonialData = {
        
        ...Testimonial,
        status: data.status,
        statusDesc: data.statusDesc
      }

      delete TestimonialData.$createdAt;
      delete TestimonialData.$updatedAt;
      delete TestimonialData.$id;
      delete TestimonialData.$collectionId;
      delete TestimonialData.$databaseId;
      delete TestimonialData.$permissions;

      await updateDocument('testimonials', testimonialId, TestimonialData);
      await refetch();
      toast.success(`testimonial ${TestimonialData.status} successful!`);
      reset();
    }
    catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='pt-24 min-h-screen'>
      <Meta name={Testimonial ? Testimonial.name : "Blog - NIT Patna"} />
      <Heading heading={"Review Testimonials"} />
      {

        isPending ? <div className='w-full h-[10rem] flex items-center justify-center'><Loader /></div> :
          isError ? <div className='text-center py-48 text-red-500'>Something went wrong! 
          {error.message}
          </div> :
            Testimonial && <div className='m-auto pt-10 flex flex-col items-center justify-center'>
              <h1 className='lg:text-4xl md:text-3xl text-2xl font-bold lg:max-w-3xl md:max-w-2xl px-6 text-center m-auto text-sky-500 my-10 mt-6'>{Testimonial.name}</h1>

              <div className='flex items-center pt-5'>
                <p className='text-gray-400'>{Testimonial.name}</p>
                <BsDot size={20} className='text-gray-300' />
                <p className='text-gray-400'>{new Intl.DateTimeFormat('en-AU').format(new Date(Testimonial.$createdAt))}</p>
                <BsDot size={20} className='text-gray-300' />
                <p className='text-gray-400'>2 min read</p>
              </div>
              <div className='text-lg font-medium'>
                Status : <span className={`${Testimonial.status === 'published' ? 'text-green-500' : Testimonial.status === 'rejected' ? 'text-rose-500' : 'text-yellow-500'}`}>{Testimonial.status}</span>
              </div>
    
              <div className='lg:w-[70%] md:w-[80%] w-[85%] text-lg mt-10'>
                <MarkDown content={Testimonial.message}></MarkDown>
              </div>
              <div className='bg-gray-800 p-5 pb-8 rounded-xl'>
                <h2 className='text-center mb-5 text-2xl font-semibold text-rose-500'>Review Testimonial</h2>
                <form onSubmit={handleSubmit(onSubmit)} className='flex md:flex-row flex-col gap-5'>
                  <div className='flex-1'>
                    <Input
                      label='Review Message'
                      id='statusDesc'
                      placeholder="Enter Review Message"
                      type='text'
                      reactHookForm={register('statusDesc', {
                        maxLength: { value: 511, message: 'Max length is 511 characters' },
                        value: Testimonial.statusDesc
                      })}
                      error={errors.statusDesc?.message}
                      className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300 bg-gray-900'
                    />
                  </div>
                  <Select
                    label='Mark as'
                    id='status'
                    placeholder="Select Status"
                    error={errors.status?.message}
                    reactHookForm={register('status', {
                      required: { value: true, message: 'Status is required' },
                      value: Testimonial.status
                    })}
                    options={[
                      { name: 'reviewing', value: 'reviewing' },
                      { name: 'published', value: 'published' },
                      { name: 'rejected', value: 'rejected' },
                    ]}
                    className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300 bg-gray-900'
                  />
                  <button disabled={loading} onClick={handleSubmit(onSubmit)} className='bg-sky-500 hover:bg-sky-600 disabled:bg-gray-600 h-10 self-end px-5 py-2 mt-2 rounded-lg cursor-pointer text-white'>Submit</button>
                </form>
              </div>
            </div>
      }
    </div>
  )
}

export default Testimonial