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

                <div className=" sm:w-8/12 flex-col">

                    <Timeline2 />

                    <section className=" bg-gray-900 rounded-xl">
                        <div className="py-16 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                            <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
                                    Campus
                                </h2>
                                <p className="font-light sm:text-xl text-gray-400">
                                    NIT Patna functions from a 40 acres (16 ha) campus
                                    along Ashok Rajpath, geographically which lies on
                                    the southern bank of the river Ganges exactly opposite
                                    the point of its confluence with river Gandak. The
                                    campus lies alongside Gandhi Ghat where students usually
                                    enjoy scenic views of river Ganges.
                                    <br />
                                    Land for a new campus, a 125 acres (51 ha) plot, has been assigned at Sikandarpur
                                    village in Bihta, around 40 km from Patna.

                                    Earlier it was assigned at Dumri village in Bihta.
                                    Once NIT-Patna
                                    shifts to its new campus in Bihta, it will run some
                                    management courses on the present campus at Ashok Rajpath.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* <div className="rounded-3xl bg-gray-900 p-6 mb-10">
                        <div className="flex flex-col text-3xl text-sky-500 justify-center items-center">
                            <h2>Campus</h2>
                            <div className=" w-28 h-1 mb-3 mt-1 ml-1 bg-pink-500 flex justify-center items-center"></div>
                        </div>
                        <p>
                            NIT Patna functions from a 40 acres (16 ha) campus
                            along Ashok Rajpath, geographically which lies on
                            the southern bank of the river Ganges exactly opposite
                            the point of its confluence with river Gandak. The
                            campus lies alongside Gandhi Ghat where students usually
                            enjoy scenic views of river Ganges.
                            <br/> 
                             Land for a new campus, a 125 acres (51 ha) plot, has been assigned at Sikandarpur
                            village in Bihta, around 40 km from Patna.
                             
                            Earlier it was assigned at Dumri village in Bihta. 
                            Once NIT-Patna
                            shifts to its new campus in Bihta, it will run some
                            management courses on the present campus at Ashok Rajpath.
                        </p>
                    </div> */}

                </div>
            </div>
        </>
    );
};

export default History;
