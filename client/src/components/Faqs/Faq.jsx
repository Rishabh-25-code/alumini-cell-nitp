import React, { useState } from 'react'
import Heading1 from '../Headings/Heading1';

const Faq = () => {
    const faqs = [
        {
            question: "How to create an alumni account?",
            answer: "For creating an alumni account, you first need to sign up, verify your email and then login. After logging in, you will be redirected to your dashboard where you can create your alumni account.",
            id: "0"
        },
        {
            question: "Who can create an alumni account?",
            answer: "Alumni accounts can be created by students who have graduated from the college or staff/faculty members. The admin will verify each alumni account before making it public. Any account found to be fake or belonging to current students will be rejected. If you encounter any issues during the account creation process, whom should you contact for assistance?",
            id: "1"
        },
        {
            question: "What are the benefits of creating an alumni account?",
            answer: "By creating an alumni account, you gain the ability to connect with your batchmates and other alumni. Additionally, you can view the profiles of fellow alumni, connect with them, write blogs and articles, post jobs and internships, and share your experiences with the community. Are there specific features or tools within the alumni account that are particularly noteworthy for users?",
            id: "2"
        },
        {
            question: "What does the alumni portal offer?",
            answer: "The alumni portal provides a platform for alumni to connect, search alumni database, share experiences, post jobs and internships for current students, and contribute blogs and articles to the community. How has the alumni portal evolved over time, and are there any upcoming enhancements or features in the pipeline?",
            id: "3"
        },
        {
            question: "How often are events organized for alumni to connect?",
            answer: "Events for alumni to connect are organized regularly throughout the year. These events serve as excellent opportunities for networking, sharing experiences, and fostering a strong sense of community among our graduates.",
            id: "4"
        },
        {
            question: "Can alumni contribute to the development of the alumni portal?",
            answer: "Yes, alumni are encouraged to contribute to the development of the alumni portal. Whether through feedback, suggestions, or collaboration, your input is valuable in enhancing the overall experience for the alumni community. How can alumni actively participate in providing feedback or contributing to the portal's development?",
            id: "5"
        },
    ];

    const [activeId, setActiveId] = useState("0"); // Set the first faq as active by default

    const handleQuestionClick = (id) => {
        if (activeId === id) {
            setActiveId("");
            return;
        }
        setActiveId(id);
    }

    return (
        <div className='pt-20 lg:px-24 md:px-16 px-6'>
            <Heading1 details={"We have compiled some commonly asked questions and their answers to provide you with the information you need. If you have any additional inquiries, feel free to reach out to us."} text1={"Frequently Asked"} text2={" Questions"} />

            <div className='flex flex-col items-center justify-center gap-4 my-16'>
                {
                    faqs.map((faq) => (
                        <FaqCard
                            key={faq.id}
                            data={faq}
                            active={faq.id === activeId}
                            onQuestionClick={handleQuestionClick}
                        />
                    ))
                }
            </div>
        </div>
    )
}

const FaqCard = ({ data, active, onQuestionClick }) => {
    const handleToggleAnswer = () => {
        onQuestionClick(data.id);
    }

    return (
        <div data-aos="fade-up" className='flex lg:w-[70%] md:w-[80%] w-[95%] transition-all delay-[15ms] ease-in-out  bg-[#0a0a0a] border-gray-900 hover:border-gray-800 border lg:p-5 md:p-5 p-3 rounded-2xl gap-0 flex-col'>
            <div onClick={handleToggleAnswer} className='flex justify-between items-center cursor-pointer'>
                <h2 className='font-semibold lg:text-lg md:text-lg text-base pr-5'>
                    {data.question}
                </h2>
                <button name='expandfaq' aria-label="Expand FAQ" className={`transition-all delay-75 ease-in-out ${active && '-rotate-180'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 hover:text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>
            <div className={`overflow-hidden transition-all delay-[15ms] ease-in-out ${active ? 'h-fit mt-4 my-2' : 'h-0'}`}>
                <p className='text-gray-400 md:text-base text-sm w-[95%]'>
                    {
                        data.answer
                    }
                </p>
            </div>
        </div>
    )
}

export default Faq;