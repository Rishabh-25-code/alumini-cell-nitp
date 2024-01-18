import { PageHeading } from "../../../components/Headings/Heading";
import { useState } from 'react';
import useAuth from "../../../hooks/useAuth";
import Loader, { Loading } from "../../../components/Loader/index";
import { toast } from "react-toastify";
import { createDocument, getUserTestimonials } from "../../../services/documents";
import { useQuery } from '@tanstack/react-query';
import Meta from "../../../components/Meta/Meta";
import { branches } from "../../../utils/branches";


const GiveTestimonial = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    id: user.$id,
    message: '',
    currentPost: '',
    currentCompany: '',
    currentLocation: '',
    currentCity: '',
    batch: '',
    branch: 'EE',
  });

  const { data: testimonials, isLoading, isError, refetch } = useQuery({
    queryKey: ['testimonials', user.$id],
    queryFn: () => getUserTestimonials('testimonials', user.$id),
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (message.length < 50) {
      toast.error("Message must be atleast 50 characters long!");
      return;
    }

    setLoading(true);

    try {
      const res = await createDocument('testimonials', formData);
      console.log(res);
      toast.success("Testimonial created successfully!");
      resetForm();
      refetch();
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
      currentLocation: '',
      currentCity: '',
      batch: '',
      branch: 'EE',
    })
  }


  return (
    <div className='lg:px-9 px-4'>
      <Meta title="Give Testimonial | Alumni NITP" />
      <PageHeading heading='Give' heading1='Testimonial' />

      {
        loading && <Loading message={"Creating Document..."} />
      }

      {isLoading ? <div className='w-full h-[10rem] flex items-center justify-center'><Loader /></div> :
        isError ? <div className='py-10'>Someting went wrong!</div> :

          testimonials && testimonials.length !== 0 ?
            <div>
              <p className="pb-5 text-rose-500">
                You have already given your testimonial.
              </p>

              <div className="border border-gray-800 w-full rounded-xl p-5">
                <div className='rounded'>
                  <p className='px-2'>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-sky-400 mb-6" height="38" width="38" xmlns="http://www.w3.org/2000/svg"><path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z">
                    </path>
                    </svg>
                  </p>
                  <p className='text-justify'>{testimonials[0].message}</p>
                </div>

                <div className="flex flex-col pt-5">
                  <p className='text-white font-medium'>{testimonials[0].name} ({testimonials[0].batch} {testimonials[0].branch})</p>
                  <p className='text-gray-300 text-sm'>{testimonials[0].currentPost} @{testimonials[0].currentCompany}</p>
                  <p className="text-sm">{testimonials[0].currentCity}</p>
                </div>

                <p>
                  Status : <span className="text-green-500">{testimonials[0].status}</span>
                </p>
              </div>
            </div>
            :
            <div className='bg-gray-900 relative lg:p-5 p-4 my-5 rounded-lg'>
              <form className='flex gap-3 flex-col' onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="message" className='text-gray-300'>Message</label><span className='text-rose-500 text-xl'>*</span>
                  <textarea required={true} value={formData.message} onChange={handleInputChange} rows={5} type="text" id="message" placeholder="Write your message here..." className='w-full bg-gray-950 text-gray-300 px-4 py-2 rounded-lg' />
                </div>

                <div>
                  <label htmlFor="currentPost" className='text-gray-300'>Your Current Post/Role</label> <span className='text-rose-500 text-xl'>*</span>
                  <input required={true} value={formData.currentPost} onChange={handleInputChange} type="text" id="currentPost" placeholder="Your Current Post" className='w-full bg-gray-950 text-gray-300 px-4 py-2 rounded-lg' />
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
                  <div className="flex-1">
                    <label htmlFor="currentLocation" className='text-gray-300'>Your Address</label> <span className='text-rose-500 text-xl'>*</span>
                    <input required={true} value={formData.currentLocation} onChange={handleInputChange} type="text" id="currentLocation" placeholder="Ashok Rajpath, Patna, Bihar 800006" className='w-full bg-gray-950 text-gray-300 px-4 py-2 rounded-lg' />
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
            </div>}
    </div>
  )
}

export default GiveTestimonial;