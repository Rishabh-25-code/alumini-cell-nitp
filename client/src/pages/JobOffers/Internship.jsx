import { useQuery } from '@tanstack/react-query';
import { FaShare } from "react-icons/fa";
import { getDocument } from '../../services/documents';
import { useParams } from 'react-router-dom'
import Meta from '../../components/Meta/Meta';
import Loader from '../../components/Loader';
import { getImageURL, getDownloadURL } from '../../services/files';
import Heading from '../../components/Headings/Heading';

const Internship = () => {
    const { internshipId } = useParams();

    const { data: intern, isPending, isError } = useQuery({
        queryKey: ['intern', internshipId],
        queryFn: () => getDocument('intern-opportunity', internshipId),
    });


    return (
        <div className='min-h-screen'>
            <Heading heading="Internship" heading1={
                intern && intern.internTitle
            }></Heading>
            <Meta name={intern ? intern.title : "Experience - NIT Patna"} />

            <div className='lg:max-w-[85%] md:w-[90%] w-full px-5 m-auto'>
                {isPending ? <div className='w-full h-[10rem] flex items-center justify-center'><Loader /></div> :
                    isError ? <div className='text-center text-red-500'>Something went wrong!</div> :
                        intern && <div className='border border-gray-800 rounded-2xl p-5 mb-5 w-full'>
                            <div className='flex justify-between'>
                                <div className='flex gap-5 flex-col items-center'>
                                    <div className='flex w-full gap-2 items-center'>
                                        {intern.internCompanyLogo && <div className='md:w-16 w-12 md:h-16 h-12 flex items-center justify-center'>
                                            <img src={intern.internCompanyLogo ? getImageURL(intern.internCompanyLogo, 200) : "logo-placeholder.jpg"} alt='Company Logo' />
                                        </div>}
                                        <div className='flex flex-col'>
                                            <p className='font-semibold text-rose-500 lg:text-xl text-lg'>{intern.internCompany}</p>
                                            <p className='text-sm text-gray-400'>{intern.internLocation}</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col w-full'>
                                        <p className='font-medium'>{intern.internTitle}</p>
                                        <p className='text-sm text-green-500'>{intern.internType}</p>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <p className='text-sm text-gray-400'>Posted: <span className="text-white">{new Intl.DateTimeFormat('en-IN', { year: 'numeric', month: '2-digit', day: '2-digit', weekday: 'short' }).format(new Date(intern.$createdAt))}</span></p>
                                    {intern.internDeadline && <p className='text-sm text-gray-400'>Expires: <span className="text-white">{new Intl.DateTimeFormat('en-IN', { year: 'numeric', month: '2-digit', day: '2-digit', weekday: 'short' }).format(new Date(intern.internDeadline))}</span></p>}
                                </div>
                            </div>
                            <div className='mt-5'>
                                <p className=''>{intern.internDescription}</p>
                            </div>
                            <div>
                                <p className=' text-gray-400'>Skills Required: <span className='text-sky-500'>{intern.internSkills.join(", ")}</span></p>
                            </div>
                            <div>
                                <p className=' text-gray-400'>Experience Required: <span className="text-white">
                                    {parseInt(intern.internExperience) === 0 ? "Fresher" : intern.internExperience + " years"}</span></p>
                            </div>
                            {intern.internSalary && <div>
                                <p className=' text-gray-400'>Expected Stipend: <span className="text-white">{new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(intern.internSalary)} K</span></p>
                            </div>}
                            {intern.internDetailsLink && <div className='flex gap-2'>
                                <p className=' text-gray-400'>Intern Info Doc:</p>
                                <a href={getDownloadURL(intern.internDetailsLink)} target='_blank' rel='noreferrer'><button className='text-sm text-sky-500'>download</button></a>
                            </div>}
                            {intern.internLinks.length > 0 && <div>
                                <p className=' text-gray-400'>Intern Link(s):</p>
                                {
                                    intern.internLinks.map((link, idx) => (
                                        <a key={idx} href={link} target='_blank' rel='noreferrer'><button className='text-sm text-left text-sky-500'>{link}</button></a>
                                    ))
                                }
                            </div>}
                            {
                                intern.referralAvailable && (
                                    <div>
                                        <p className=' text-gray-400'>For refferals:</p>
                                        <p className='text-sky-500'>{intern.referrerEmail}</p>
                                    </div>
                                )
                            }
                            <div className='flex justify-between md:flex-row flex-col'>
                                <div className='pt-2'>
                                    <p className='text-sm text-gray-400 pb-1'>Posted By: </p>
                                    <div className='flex gap-2 items-center'>
                                        <div className='w-10 h-10 rounded-full overflow-hidden flex items-center justify-center'>
                                            <img src={`https://cloud.appwrite.io/v1/avatars/initials?name=${intern.name.split(" ").join("+")}&width=80&height=80`} alt='User Profile' />
                                        </div>
                                        <div className='flex flex-col'>
                                            <p className='font-medium'>{intern.name} ({intern.yourBatch} {intern.yourDepartment})</p>
                                            <p className='text-sm text-gray-400 -mt-1'>{intern.yourCurrentRole} at {intern.yourCurrentCompany}</p>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    className="text-lg font-medium text-sky-400 hover:scale-105 mt-5 self-end"
                                    onClick={() => {
                                        const shareItem = {
                                            title: "Here is an internship opportunity by NITP Alumni.",
                                            text: intern.internTitle,
                                            url: `https://alumini-nitp.vercel.app/internship/${intern.$id}`,
                                        }
                                        if (navigator.share) {
                                            navigator.share(shareItem)
                                                .then(() => console.log('Successful share'))
                                                .catch((error) => console.log('Error sharing'));
                                        } else {
                                            console.log("Your browser does not support Web Share API");
                                        }
                                    }}
                                >
                                    Share <FaShare className='inline-block ml-2' />
                                </button>
                            </div>
                        </div>
                }
            </div>
        </div >
    )
}

export default Internship