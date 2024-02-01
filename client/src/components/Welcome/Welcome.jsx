import { Link } from "react-router-dom"

const Welcome = () => {
    return (
        <div className='flex flex-col items-center justify-center m-auto lg:px-16 md:px-12 px-6 pt-16 max-w-[68rem] '>
            <h3 className=' bg-gray-900 text-center m-auto w-fit lg:px-8 md:px-8 px-5 py-3 text-xl flex flex-col divide-y-2 divide-slate-800 font-semibold rounded-2xl border-sky-700 border'>
                <span className='text-sky-400 pb-2'>Welcome to NIT Patna Alumni Website!</span>
                <span className='text-white text-lg pt-2'>रा. प्रो. स. पटना के पूर्ववर्ती छात्र छात्राओं की वेबसाइट पर आपका स्वागत है।</span>
            </h3>

            <div className='flex justify-center text-justify items-center flex-col gap-5 px-4 lg:text-lg md:text-lg pt-10'>
            <h6 className="text-xl text-sky-400"> This Website is still in the lab we are updating it as we are getting inflow of information.</h6>
                <p>
                    The National Institute of Technology (NIT) Patna takes pride in its accomplished alumni who have made significant contributions in various fields. The institute recognizes the invaluable role played by its alumni in its progress, development, and future direction.
                </p>

                <p>
                   The National Institute of Technology (NIT) Patna Alumni Association is a non-profit organization founded by NIT Patna to connect, engage and support the institute's alumni community. The association was established in 2014 and is registered under the Societies Registration Act, 1860. 
                </p>

                <p>
                    We are pleased to share that our institute is commemorating the historic occasion of its centenary year in 2024. We eagerly anticipate meaningful and inclusive engagement with our alumni that will benefit our institution, its current students, and the broader community. We invite you to join the NIT Patna Alumni Association. Please feel free to reach out to us.
                </p>
            </div>

            <Link data-aos="fade-up" to="/about" className="w-fit m-auto">
                <button className='bg-sky-600 hover:bg-sky-700 hover:scale-105 transition-all px-8 m-auto my-5 mt-8 py-2.5 text-white rounded-2xl'>
                    Learn More
                </button>
            </Link>
        </div>
    )
}

export default Welcome