import React from 'react'
import Heading from '../../components/Headings/Heading'
import { IoSearch } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";

const JobOffers = () => {
    return (
        <>
        <div><div>
            <Heading heading="Job Openings via Alumni"></Heading>
        </div></div>

        <div className='flex flex-col  justify-center items-center gap-2 m-2 xl:flex-row xl:gap-72'>
              <div className='flex flex-col sm:flex-row'>
                    <div className='flex justify-center sm:flex'>
                        <div className='flex justify-center items-center p-2 border text-2xl'><i><IoSearch/></i></div>
                        <div className=' '>
                             <input
                                   type='text'
                                   placeholder='Location'
                                   value={""}
                             />
                        </div>
                    </div>
                    <div className='flex justify-center'>
                         <input
                               type='text'
                               placeholder='Keywords'
                               value={""}
                         />
                    </div>
              </div>
              <div className='flex justify-center '>
                   <div className='flex justify-center items-center text-red-600 bg-white border border-black p-2 text-2xl'><i><FaPlus/></i></div>
                   <div className='bg-white text-black border border-black flex items-center justify-center p-2 h-12 w-44 hover:cursor-pointer hover:text-xl hover:bg-gray-400'><button>Post Job</button></div>
              </div>
        </div>

        <div className='flex flex-col  justify-center items-center gap-10 mt-10 md:flex-row'>
             <div className='m-2 sm:w-8/12 bg-gray-900 flex items-center p-4 rounded-2xl'>
                   <div className='flex gap-10'>
                        <div className='overflow-hidden w-42 sm:h-20 sm:w-20'><img src='data:image/jpeg;base64,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' alt=''/></div>
                        <div>
                             <div className='flex items-center gap-2  '>
                                  <div className='text-3xl text-sky-500'>Senior UI Designer</div>
                                  <div className='text-red-600 bg-pink-200  rounded-2xl w-16 flex justify-center -mb-3 text-xs'>FEATURED</div>
                             </div>
                             <div className='text-gray-400'>WDG</div>
                             <div className='mt-2'>wdg description jhudihfd giuyw9u iu7wmluiy
                                  dg description jhudihfd giuyw9u iu7wmluiy
                                  dg description jhudihfd giuyw9u iu7wmluiy
                                  dg description jhudihfd giuyw9u iu7wmluiy
                             </div>
                        </div>
                   </div>
             </div>

             <div className='email bg-gray-900 p-4 rounded-2xl m-2'>
                   <div><h1 className='text-sky-500 text-lg'>Email Alerts</h1></div>
                   <div >
                        <input
                              type='text'
                              placeholder='All Creative job'
                              value={""}

                              className='hover:bg-gray-400 hover:cursor-pointer'
                        />
                   </div>
                   <div>
                        <input
                              type='text'
                              placeholder='Email Address'
                              value={""}

                              className='hover:bg-gray-400 hover:cursor-pointer'
                        />
                   </div>
                   <div className='mt-4 bg-green-600 w-fit p-2 rounded-md'><button>Subscribe</button></div>
             </div>
        </div>
        </>
    )
}
export default JobOffers;
