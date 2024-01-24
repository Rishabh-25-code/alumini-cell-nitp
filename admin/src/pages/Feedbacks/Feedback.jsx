import { useQuery } from "@tanstack/react-query";
import { getDocument, updateDocument } from "../../services/documents";
import { useParams } from "react-router-dom";
import { BsDot } from "react-icons/bs";
import Meta from "../../components/Meta/Meta";
import Loader from "../../components/Loader";
import { Input, Select } from "../../components/FormComponents";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useState } from "react";
import Heading from "../../components/Headings/Heading";

const Feedback = () => {
  const { feedbackId } = useParams();
  const [loading, setLoading] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ trim: true });

  const {
    data: feedback,
    isPending,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["feedback", feedbackId],
    queryFn: () => getDocument("feedback", feedbackId),
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const feedbackData = {
        ...feedback,
        status: data.status,
        statusDesc: data.statusDesc
      }

      delete feedbackData.$createdAt;
      delete feedbackData.$updatedAt;
      delete feedbackData.$id;
      delete feedbackData.$collectionId;
      delete feedbackData.$databaseId;
      delete feedbackData.$permissions;
      delete feedbackData.$email;

      await updateDocument('feedback', feedbackId, feedbackData);
      await refetch();
      toast.success(`feedback ${data.status} successful!`);
      reset();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="pt-24 min-h-screen">
      <Meta name={feedback ? feedback.title : "Feedbacks - NIT Patna"} />
      <Heading heading="Review Feedbacks"></Heading>

      {isPending ? (
        <div className="w-full h-[10rem] flex items-center justify-center">
          <Loader />
        </div>
      ) : isError ? (
        <div className="text-center text-red-500">Something went wrong!</div>
      ) : (
        feedback && (
          <div className="m-auto flex flex-col items-center justify-center">
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold lg:max-w-3xl md:max-w-2xl px-6 text-center m-auto text-sky-500 my-10 mt-6">
              {feedback.title}
            </h1>

            <div className="flex items-center pt-5">
              <p className='text-gray-400'>Reported on</p>
              <BsDot size={20} className='text-gray-300' />
              <p className="text-gray-400">
                {new Intl.DateTimeFormat("en-AU").format(
                  new Date(feedback.$createdAt)
                )}
              </p>
            </div>

            <div className="flex items-center pt-2">
              <p className='text-gray-400'>Status</p>
              <BsDot size={20} className='text-gray-300' />
              <p className={`font-medium ${feedback.status === "reviewing" ? "text-yellow-500" : feedback.status === "resolved" ? "text-green-500" : "text-red-500"}`}>
                {feedback.status}
              </p>
            </div>

            <div className="flex items-center pt-2">
              <p className='text-gray-400'>Reported by</p>
              <BsDot size={20} className='text-gray-300' />
              <p className="text-gray-400">
                {feedback.email}
              </p>
            </div>

            <div className="lg:w-[70%] md:w-[80%] w-[85%] text-lg mt-10 text-center">
              {feedback.description}
            </div>

            <div className='bg-gray-800 p-5 pb-8 rounded-xl mt-11'>
              <h2 className='text-center mb-5 text-2xl font-semibold text-rose-500'>Review Feedback</h2>
              <form onSubmit={handleSubmit(onSubmit)} className='flex md:flex-row flex-col gap-5'>
                <div className='flex-1'>
                  <Input
                    label='Review Message'
                    id='statusDesc'
                    placeholder="Enter Review Message"
                    type='text'
                    reactHookForm={register('statusDesc', {
                      maxLength: { value: 511, message: 'Max length is 511 characters' },
                      value: feedback.statusDesc
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
                    value: feedback.status
                  })}
                  options={[
                    { name: 'reviewing', value: 'reviewing' },
                    { name: 'resolved', value: 'resolved' },
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

export default Feedback;
