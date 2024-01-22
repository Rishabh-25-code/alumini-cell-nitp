import { useQuery } from "@tanstack/react-query";
import { getDocument, updateDocument,deleteDocument } from "../../services/documents";
import { useParams } from "react-router-dom";
import { BsDot } from "react-icons/bs";
import Meta from "../../components/Meta/Meta";
import Loader from "../../components/Loader";
import MarkDown from "../../components/MarkDown";
import { Input, Select } from "../../components/FormComponents";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useState } from "react";

const Bug = () => {
    
  const { bugId } = useParams();
  const [loading, setLoading] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ trim: true });

  const {
    data: bugs,
    isPending,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["bugs", bugId],
    queryFn: () => getDocument("bugs", bugId),
  });
  
  const onSubmit = async (data) => {
    try {
        setLoading(true);
        const bugsData = {
            ...bugs,
            status: data.status,
            statusDesc: data.statusDesc
        }

        delete bugsData.$createdAt;
        delete bugsData.$updatedAt;
        delete bugsData.$id;
        delete bugsData.$collectionId;
        delete bugsData.$databaseId;
        delete bugsData.$permissions;
        delete bugsData.$email;

        await updateDocument('bugs', bugId, bugsData);
        await refetch();
        toast.success(`bugs ${data.status} successful!`);
        reset();
    } catch (error) {
        toast.error(error.message);
    } finally {
        setLoading(false);
    }
}

  return (
    <div className="pt-36 min-h-screen">
      <Meta name={bugs ? bugs.title : "Bugs - NIT Patna"} />

      {isPending ? (
        <div className="w-full h-[10rem] flex items-center justify-center">
          <Loader />
        </div>
      ) : isError ? (
        <div className="text-center text-red-500">Something went wrong!</div>
      ) : (
        bugs && (
          <div className="m-auto flex flex-col items-center justify-center">
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold lg:max-w-3xl md:max-w-2xl px-6 text-center m-auto text-sky-500 my-10 mt-6">
              {bugs.title}
            </h1>

            {/* <div className='flex items-center lg:h-96 md:h-72 h-64 overflow-hidden lg:w-[70%] md:w-[80%] w-[85%] rounded-lg border border-gray-900'>
                        <img className='w-full' src={getImageURL(bugs.imgUrl)} alt={bugs.title} />
                    </div> */}

            <div className="flex items-center pt-5">
              <p className='text-gray-400'>Bug was Reported on</p>
              <BsDot size={20} className='text-gray-300' />
              <p className="text-gray-400">
                {new Intl.DateTimeFormat("en-AU").format(
                  new Date(bugs.$createdAt)
                )}
              </p>
             
             
            </div>
            <div className="flex items-center pt-5">
              <p className='text-gray-400'>Bug was Reported by</p>
              <BsDot size={20} className='text-gray-300' />
              <p className="text-gray-400">
                {bugs.email}
              </p>{/* <BsDot size={20} className="text-gray-300" /> */}
             
            </div>

            {/* <div className='text-lg font-medium'>
                        Status : <span className={`${bugs.status === 'published' ? 'text-green-500' : bugs.status === 'rejected' ? 'text-rose-500' : 'text-yellow-500'}`}>{bugs.status}</span>
                    </div> */}

            {/* <div className='flex flex-wrap justify-end text-center pt-2'>
                        {
                            bugs.tags.map((tag, id) => (
                                <span key={id} className='text-sm mr-1 text-blue-400'>#{tag}</span>
                            ))
                        }
                    </div> */}

            <div className="lg:w-[70%] md:w-[80%] w-[85%] text-lg mt-10">
              <MarkDown content={bugs.description}></MarkDown>
            </div>
            
            <div className='bg-gray-800 p-5 pb-8 rounded-xl mt-11'>
                        <h2 className='text-center mb-5 text-2xl font-semibold text-rose-500'>Review bug</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className='flex gap-5'>
                            <div className='flex-1'>
                                <Input
                                    label='Review Message'
                                    id='statusDesc'
                                    placeholder="Enter Review Message"
                                    type='text'
                                    reactHookForm={register('statusDesc', {
                                        maxLength: { value: 511, message: 'Max length is 511 characters' },
                                        value: bugs.statusDesc
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
                                    value: bugs.status
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
        )
      )}
    </div>
  );
};

export default Bug;
