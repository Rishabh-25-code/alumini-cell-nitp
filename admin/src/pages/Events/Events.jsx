import './Events.scss'
import Heading from '../../components/Headings/Heading';
import { useQuery } from '@tanstack/react-query';
import { getDocuments, createDocument, deleteDocument } from '../../services/documents';
import { compressedImageUpload, deleteFile } from '../../services/files';
import { FaTrash } from "react-icons/fa";
import { getImageURL } from '../../services/files';
import { useForm } from 'react-hook-form';
import { Input, UploadImage } from '../../components/FormComponents';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Loading } from '../../../../client/src/components/Loader';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import format from 'date-fns/format';

const Events = () => {

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const { register, reset, handleSubmit, formState: { errors } } = useForm({ trim: true });
  const [selectedDate, setSelectedDate] = useState(null);

  const { isLoading, data, isError, refetch } = useQuery({
    queryKey: ["events"],
    queryFn: () => getDocuments("events", 4, 4 * (page - 1)),
    staleTime: 1000 * 60 * 3,
  });

  const onSubmit = async (data) => {
    if (!profileImage) return toast.error("Please select an event image!");

    try {
      setLoading(true);
      data = { ...data, image: null };
      setMessage('Uploading Image....');
      if (profileImage) {
        let res = await compressedImageUpload(profileImage);
        data.image = res.$id;
      }

      setMessage('Uploading Data....');

      console.log(data.date)

      await createDocument("events", data);
      toast.success("Event added successfully!");
      refetch();
      reset();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='pt-24'>
      <Heading heading="EVENTS"></Heading>
      <div>

        {
          loading && <Loading message={message} />
        }


        <form className='lg:max-w-4xl lg:p-0 w-full px-6 py-6 m-auto flex flex-col gap-3' onSubmit={handleSubmit(onSubmit)}>
          <UploadImage
            label={"Upload event banner"}
            required={true}
            image={profileImage}
            setImage={setProfileImage}
            placeholder={'https://t4.ftcdn.net/jpg/03/32/59/65/360_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT.jpg'}
          />

          <Input
            id='title'
            label='Title'
            type='text'
            placeholder='Enter title'
            title='title'
            reactHookForm={{
              ...register('title', {
                required: 'Title is required',
                maxLength: { value: 256, message: 'Title should be less than 256 characters' },
                minLength: { value: 3, message: 'Title should be more than 3 characters' }
              })
            }}
            className='border border-gray-800 bg-[#101010] rounded-lg p-2 w-full'
            errors={errors.title}
          />

          <Input
            id='organizer'
            label='Organizer'
            type='text'
            placeholder='Organizer'
            title='organizer'
            reactHookForm={{
              ...register('organizer', {
                maxLength: { value: 256, message: 'Organizer should be less than 256 characters' },
                minLength: { value: 3, message: 'Organizer should be more than 3 characters' }
              })
            }}
            className='border border-gray-800 bg-[#101010] rounded-lg p-2 w-full'
            errors={errors.organizer}
          />

          <Input
            id='venue'
            label='Venue'
            type='text'
            placeholder='venue'
            title='venue'
            reactHookForm={{
              ...register('venue', {
                maxLength: { value: 256, message: 'Venue should be less than 256 characters' },
                minLength: { value: 3, message: 'Venue should be more than 3 characters' }
              })
            }}
            className='border border-gray-800 bg-[#101010] rounded-lg p-2 w-full'
            errors={errors.venue}
          />
          <label htmlFor="date">Event Date:</label>
          <ReactDatePicker
            id='date'
            placeholderText='dd/mm/yyyy'
            onChange={(date) => {
              const formattedDate = date ? format(date, 'yyyy-MM-dd') : null;
              setSelectedDate(date);
              register('date', { value: formattedDate, shouldDirty: true });
            }}
            selected={selectedDate}
            dateFormat='dd/MM/yyyy'
            minDate={new Date(1800, 0, 1)}
            maxDate={new Date()}
            yearDropdownItemNumber={200}
            isClearable
            showYearDropdown
            showMonthDropdown
            scrollableMonthDropdown
            scrollableYearDropdown
            className=' custom-datepicker border border-gray-800 bg-[#101010] rounded-lg p-2 w-full'


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

        <h1 className='lg:text-4xl md:text-3xl font-semibold text-center text-sky-500 pt-10'>Events</h1>
        {isLoading ? <p className='text-center py-16'>Loading...</p> :
          isError ? <p className='text-center py-16'>Error</p> :
            data.length === 0 ? <p className='text-center py-16'>No data</p> :

              <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:px-10 md:px-5 px-5 lg:py-10 py-5'>
                {data.map((item, index) => (
                  <EventCard refetch={refetch} key={index} item={item} />
                ))}
              </div>

        }

      </div>
    </div>
  )
}

export default Events



const EventCard = ({ item, refetch }) => {

  const handleDelete = async () => {
    try {
      await Promise.all([deleteFile(item.image), deleteDocument("events", item.$id)]);
      refetch();
      toast.success("Event deleted successfully!");
    } catch (error) {
      toast.error(error.message);
    }
  }


  return (
    <>
      <div className='w-[25rem] h-fit flex flex-col justify-center p-2 mt-5 sm:p-4 border-2 hover:border-gray-800 bg-black  border-gray-900 rounded-2xl '>
        <div className='flex justify-center'>
          <div className='flex bg-green-100 w-[22rem] items-center justify-center overflow-hidden rounded-lg border border-gray-900'>
            <img className='w-[22rem] ' src={getImageURL(item.image)} />
          </div>
        </div>

        <div className='flex justify-center'>
          <div className='w-[22rem]'>
            <div><h1 className='text-2xl'>{item.title}</h1></div>
            <div>
              <h5 className='text-gray-400 text-sm'>Organized by</h5>
              <h3 className='text-xl'>{item.organizer}</h3>
            </div>
            <div className='flex flex-col gap-2'>
              <div>
                <h3 className='text-gray-400 text-sm'>Venue</h3>
                <h3 className='text-xl'>{item.venue}</h3>
              </div>
              <div className='bg-gray-800 p-2 rounded-lg'>
                <h2 className='text-gray-400 text-sm'>Date</h2>
                <h2>{new Date(item.date).toLocaleDateString()}</h2>
              </div>
            </div>
            <div className='flex justify-end mt-4'><i className='cursor-pointer text-red-600' onClick={handleDelete}><FaTrash /></i></div>
          </div>
        </div>


      </div>
    </>
  )
}