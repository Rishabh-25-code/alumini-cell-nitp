import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Loading } from '../../../components/Loader';
import useAuth from '../../../hooks/useAuth';
import { createDocument } from '../../../services/documents';
import { toast } from 'react-toastify';
import { Input, TextArea } from '../../../components/FormComponents';
import Meta from '../../../components/Meta/Meta';

const ReportBug = () => {
  const { user } = useAuth();
  const { register, reset, handleSubmit, formState: { errors } } = useForm({ trim: true });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    data = { ...data, uid: user.$id, email: user.email };
    setLoading(true);
    try {
      let res = await createDocument('bugs', data);
      toast.success("Bug reported!");
      reset();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='bg-gray-900 relative lg:p-5 m-5 rounded-2xl'>
      <Meta title="Report Bug | Alumni NITP" />
      {loading && <Loading message={"Reporting Bugs.."} />}
      <div>
        <h2 className="text-sky-500 lg:text-3xl text-2xl font-bold">
          Report a <span className="text-white">
            Bug
          </span>
        </h2>
        <form className='flex flex-col w-full' onSubmit={handleSubmit(onSubmit)}>
          <div className="flex md:flex-row flex-col gap-5 py-3">
            <Input
              label='Title'
              type='text'
              placeholder='Title'
              title='title'
              reactHookForm={register('title', {
                required: 'Title is required',
                minLength: {
                  value: 6,
                  message: 'Title must be at least 6 characters',
                },
                maxLength: {
                  value: 256,
                  message: 'Title must not exceed 256 characters',
                },
              })}
              className='bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300'
              errors={errors.title}
            />
          </div>

          <TextArea rows={8} id="description" label="Description" placeholder="Description" title="description" reactHookForm={register('description', {
            maxLength: {
              value: 4096,
              message: 'Description must not exceed 4096 characters',
            }
          })} className='bg-gray-950 rounded-lg px-3 pb-2 w-full text-gray-300' errors={errors.description} />

          <div className='text-white self-end w-fit flex gap-3 -pt-5 pb-2'>
            <button onClick={(e) => {
              e.preventDefault();
              reset();
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
    </div>
  )
}

export default ReportBug;