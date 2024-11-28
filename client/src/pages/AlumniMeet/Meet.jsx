import React from 'react'
import Heading from '../../components/Headings/Heading'
import { FaShare } from "react-icons/fa";
import { MdDateRange, MdLocationPin } from "react-icons/md";
import Meta from '../../components/Meta/Meta';
const meets = [
  {
      img: "/images/Meet 2024/poster.jpg",
      name: "Alumni Meet 2024",
      date: "29, December 2024",
      description: [
          "Alumni Meet 2024 - A Celebration of Memories and Bonds",

          "We are excited to announce Alumni Meet 2024, a special occasion dedicated to celebrating the cherished memories, lifelong friendships, and the unbreakable bond shared with our Alma Mater, NIT Patna.",

          "🗓 Date: 29th December 2024",
"📍 Venue: NIT Patna, Ashok Rajpath (Old Campus)",
"Join us for this heartwarming event to reconnect with your batchmates, relive the golden days, and witness how far our institution has evolved.",

          "As the New Year approaches, take a moment to celebrate with us and kickstart your festivities in the most meaningful way. Whether you already have plans or are yet to make them, this is one gathering you simply cannot miss!",
          "Let's come together to share stories, smiles, and create new memories as we celebrate the past and step into the future, united by our shared legacy.",

"We can't wait to welcome you back to campus!",
      ],
  },
 
]
const Meet = () => {
  return (
    <div>
      <Meta name="Alumni Meet" />
      <Heading heading="Alumni Meet"></Heading>
      <div className='flex justify-center'>
      <div className="flex flex-col gap-10 pt-12 pb-32">
                {
                    meets.map((meet, index) => (
                        <div key={index} className='bg-gray-900 lg:w-[50rem] md:w-[90%] w-[95%] m-auto shadow rounded-2xl p-6'>
                            <div className='border-b border-b-gray-700 text-2xl px-2 py-2 pt-0 text-sky-500 font-bold'>
                                {meet.name}
                            </div>

                            <div className='pt-5'>
                                <img height={720} loading="lazy" className='w-full' src={meet.img} alt="alumni meet" />

                                <div className='flex flex-col text-justify gap-5 pt-5'>
                                    {
                                        meet.description.map((desc, index) => (
                                            <p key={index}>
                                                {desc}
                                            </p>
                                        ))
                                    }
                                </div>

                                <button
                                    type="button"
                                    className="text-lg font-medium text-sky-400 hover:scale-105 mt-5"
                                    onClick={() => {
                                        const shareItem = {
                                            title: meet.name,
                                            text: meet.description[0],
                                            url: "https://alumni.nitp.ac.in/prev-alumni-meets",
                                        }

                                        if (navigator.share) {
                                            navigator.share(shareItem)
                                                .then(() => console.log('Successful share'))
                                                .catch((error) => console.log('Error sharing', error));
                                        } else {
                                            console.log("Your browser does not support Web Share API");
                                        }
                                    }}

                                >
                                    Share <FaShare className='inline-block ml-2' />
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
      </div>
      

      {/* <div className='bg-gray-900 lg:w-[50rem] md:w-[90%] w-[95%] m-auto shadow mt-10 my-32 rounded-2xl p-6'>
        <div className='border-b border-b-gray-700 text-2xl px-2 py-2 pt-0 text-sky-500 font-bold'>
          3<sup>rd</sup> ALUMNI MEET 2023
        </div>

        <div className='px-2 py-5 flex lg:flex-row md:flex-row flex-col gap-y-5 justify-between w-full border-b border-b-gray-700'>
          <div className='flex gap-4 lg:w-1/2 md:w-1/2'>
            <div>
              <MdDateRange className='text-3xl' />
            </div>
            <div className='text-gray-400'>
              <p>Sunday, 24th December 2023,</p>
              <p>3 pm (IST)</p>
            </div>
          </div>
          <div className='flex gap-4 lg:w-1/2 md:w-1/2'>
            <div>
              <MdLocationPin className='text-3xl' />
            </div>
            <div className='text-gray-400'>
              <p>Open Air Theatre, Beside SAC Ground,</p>
              <p>National Institute of Technology,</p>
              <p>Ashok Rajpath, Patna, Bihar 800005</p>
              <a target='_blank' style={{ fontSize: "0.8rem", color: "skyblue", textDecoration: "underline" }} href="https://www.google.com/maps/place/Open+Air+Theatre,+NIT+Patna/@25.6199779,85.1730388,19.85z/data=!4m14!1m7!3m6!1s0x39ed58dce6732867:0x4059f39a1ac82f06!2sNational+Institute+of+Technology,+Patna!8m2!3d25.6207961!4d85.1719948!16zL20vMDl2OGJq!3m5!1s0x39ed59ae272093ad:0x33740b6660663e08!8m2!3d25.619604!4d85.1730464!16s%2Fg%2F11fr__6v9s?entry=ttu">view on map</a>
            </div>
          </div>
        </div>

        <div className='py-5'>
          <img className='w-full' src="alumni-meet.jfif" alt="alumni meet" />

          <div className='flex flex-col text-justify gap-5 pt-10'>
            <p>
              Embark on a transformative journey at the National Institute of Technology, Patna, where the echoes of ancient wisdom and the spirit of innovation converge. Nestled in the culturally rich landscape of Bihar, our institution is a canvas painted with the strokes of Madhubani artistry and the brilliance of Aryabhatta's mathematical legacy. At the heart of our narrative lies the profound influence of Buddha's teachings, inspiring a community committed to enlightenment and progress.
            </p>

            <p>
              Our alumni, the torchbearers of this legacy, illuminate the path to success. From pioneering research to leadership roles in global enterprises, they embody the ethos of NIT Patna. In this year's Alumni Rewind, join us in celebrating the success stories of our illustrious graduates, as they reflect the transformative power of education and the enduring values instilled at our institution.
            </p>

            <p>
              Just as Buddha's teachings transcended time, our alumni's journey exemplifies the timeless impact of NIT Patna. As we weave together the threads of tradition, innovation, and enlightenment, our graduates stand as living embodiments of the institution's ethos.
            </p>

            <p>
              And we have tried to integrate that eminent part of communication helping us to form a bridge between the past and present in this year's Alumni Rewind. Connecting our Alumni with their past, with their roots and making the heritage and culture the eminent part of their personality.
            </p>

            <p>
              Regards <br />
              Team Alumni Cell <br />
              NIT Patna
            </p>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Meet