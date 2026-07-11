import { Link } from "react-router-dom"

const Welcome = () => {
    return (
        <div className='flex flex-col items-center justify-center m-auto lg:px-16 md:px-12 px-6 pt-16 max-w-[72rem]'>
            <h3 className='glass-panel text-center m-auto w-fit lg:px-8 md:px-8 px-5 py-4 text-xl flex flex-col divide-y divide-slate-200 font-semibold rounded-2xl'>
                <span className='text-sky-800 pb-2'>Welcome to NIT Patna Alumni Website!</span>
                <span className='text-slate-700 text-lg pt-2'>रा. प्रो. स. पटना के पूर्ववर्ती छात्र छात्राओं की वेबसाइट पर आपका स्वागत है।</span>
            </h3>

            <div className='surface-card flex justify-center text-justify items-center flex-col gap-5 px-6 md:px-10 py-10 lg:text-lg md:text-lg mt-10 rounded-3xl'>
            <h6 className="text-xl text-sky-800 font-semibold text-center">This website is still in the lab; we are updating it as we receive more information.</h6>
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

            <Link aria-label={"Know More about NIT Patna"} data-aos="fade-up" to="/about" className="w-fit m-auto">
                <button className='modern-button px-8 m-auto my-5 mt-8'>
                    Know more about NITP
                </button>
            </Link>
        </div>
    )
}

export default Welcome
