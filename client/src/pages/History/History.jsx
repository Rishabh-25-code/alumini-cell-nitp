import React from "react";
import Heading from "../../components/Headings/Heading";
import { IoIosArrowForward } from "react-icons/io";
import Meta from "../../components/Meta/Meta";

const History = () => {
    return (
        <>
            <Meta name="History" />
            <div>
                <Heading heading="History of NITP"></Heading>
            </div>

            <div className="flex sm:flex-row flex-col sm:w-full justify-center  gap-10 p-6">
                <div className="h-48 sm:w-72 bg-gray-900 flex-col justify-center items-center rounded-2xl p-6">
                    <div className="flex text-3xl text-sky-500">
                        <h2>History</h2>
                    </div>
                    <div className=" w-24 mb-5 mt-1 h-1 bg-pink-500 flex justify-center items-center"></div>
                    <div>
                        <div className="flex items-center hover:text-blue-600 hover:cursor-pointer"><IoIosArrowForward />Motto, Mission, Vision</div>
                        <div className="flex items-center hover:text-blue-600 hover:cursor-pointer"> <IoIosArrowForward />History</div>
                    </div>
                </div>
                <div className=" sm:w-8/12 flex-col">
                    <div className="rounded-3xl bg-gray-900 p-6 mb-10">
                        <div className="flex text-3xl text-sky-500">
                            <h2>History of NITP</h2>
                        </div>
                        <div className=" w-52 mb-5 mt-1 h-1 bg-pink-500 flex justify-center items-center"></div>

                        <p>
                            NIT Patna marked its humble beginning in 1886 with the establishment of pleaders survey training school which was subsequently promoted of Bihar College of Engineering Patna in 1924.

                            This made this institute the 6th Oldest Engineering Institute of India.

                            The graduate level curriculum was later elevated to the post graduate level in 1978.

                            The institute is situated on the south bank of holy river Ganges behind Gandhi Ghat, one of the most important and reverential place of Patna. The Gandhi Ghat is associated with the immersion of ashes of father of the Nation Mahatma Gandhi in the river Ganges.

                            The campus has a picturesque river view with historic building presenting a spectacle of architectural delight and natural beauty.

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
                </div>
            </div>






        </>
    );
};

export default History;
