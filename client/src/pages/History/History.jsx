import React from "react";
import Heading from "../../components/Headings/Heading";
// import { IoIosArrowForward } from "react-icons/io";
import Meta from "../../components/Meta/Meta";
import Timeline2 from "../../components/Timeline/Timeline2";

const History = () => {
    return (
        <>
        <Meta name="History" />
            <div>
                <Heading heading="History of NITP"></Heading>
            </div>

            <div className="flex sm:flex-row flex-col sm:w-full justify-center  gap-10 p-6">
                {/* <div className="h-48 sm:w-72 bg-gray-900 flex-col justify-center items-center rounded-2xl p-6">
                    <div className="flex text-3xl text-sky-500">
                        <h2>History</h2>
                    </div>
                    <div className=" w-24 mb-5 mt-1 h-1 bg-pink-500 flex justify-center items-center"></div>
                    <div>
                        <div className="flex items-center hover:text-blue-600 hover:cursor-pointer"><IoIosArrowForward />Motto, Mission, Vision</div>
                        <div className="flex items-center hover:text-blue-600 hover:cursor-pointer"> <IoIosArrowForward />History</div>
                    </div>
                </div> */}
                <div className=" sm:w-8/12 flex-col">
                    <div className="rounded-3xl bg-gray-900 p-6 mb-10">
                         <div className="flex text-3xl text-sky-500">
                             <h2>History of NITP</h2>
                         </div>
                         <div className=" w-52 mb-5 mt-1 h-1 bg-pink-500 flex justify-center items-center"></div>
                      
                        <p>

                        National Institute of Technology Patna (NIT Patna), 
                        formerly Bihar School of Engineering and Bihar College 
                        of Engineering, is a public engineering institution located 
                        in Patna in the Indian state of Bihar. It was renamed as
                        NIT Patna, by the Government of India on 28 January 2004. 
                        NIT Patna marked its humble beginning in 1886 with the 
                        establishment of pleaders survey training school which was 
                        subsequently promoted to Bihar College of Engineering Patna 
                        in 1924. This made this institute the 6th Oldest Engineering 
                        Institute of India. It is an autonomous institute functioning 
                        directly under Ministry of Education, Government of India.
                        NIT Patna origin can be traced to 1886 with the establishment
                        of a survey training school and subsequent renaming it to Bihar 
                        college of Engineering in 1900. A graduate level curriculum was
                        introduced in 1924. It was renamed Bihar College of Engineering 
                        in 1932. In 2004 the government of India upgraded the college 
                        to National Institute of Technology (NIT) status, as the state 
                        of Bihar had lost its only Regional Engineering College (REC), 
                        located at Jamshedpur, when Jharkhand was carved out of Bihar 
                        in 2000. By 2002, the Indian government decided to upgrade all 
                        RECs to NITs, with the aim of having at least one NIT per state. 
                        Bihar College of Engineering was the first institute to be directly
                        upgraded to NIT status. In 2007, it was granted Institute of 
                        National Importance status in accordance with the National 
                        Institutes of Technology Act, 2007. 
                        </p>
                    </div>

                    <div className="rounded-3xl bg-gray-900 p-6 mb-10">
                         <div className="flex text-3xl text-sky-500">
                             <h2>Campus</h2>
                         </div>
                         <div className=" w-28 mb-5 mt-1 h-1 bg-pink-500 flex justify-center items-center"></div>

                        <p>
                           NIT Patna functions from a 40 acres (16 ha) campus 
                           along Ashok Rajpath, geographically which lies on 
                           the southern bank of the river Ganges exactly opposite
                           the point of its confluence with river Gandak. The 
                           campus lies alongside Gandhi Ghat where students usually 
                           enjoy scenic views of river Ganges. Land for a new campus, 
                           a 125 acres (51 ha) plot, has been assigned at Sikandarpur 
                           village in Bihta, around 40 km from Patna.[2] Earlier it 
                           was assigned at Dumri village in Bihta. Once NIT-Patna 
                           shifts to its new campus in Bihta, it will run some 
                           management courses on the present campus at Ashok Rajpath.
                        </p>
                    </div>
                    <Timeline2/>
                </div>
            </div>
        </>
    );
};

export default History;
