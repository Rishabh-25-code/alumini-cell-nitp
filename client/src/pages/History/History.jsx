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
                        <div className="mx-auto max-w-screen-xl text-center lg:py-16 py-10 px-6">
                            <div className="mx-auto max-w-screen-sm">
                                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
                                    Campus
                                </h2>
                                <p className="lg:text-lg text-gray-300 text-justify">
                                    NIT Patna functions from a 40 acres (16 ha) campus
                                    along Ashok Rajpath, geographically which lies on
                                    the southern bank of the river Ganges exactly opposite
                                    the point of its confluence with river Gandak. The
                                    campus lies alongside Gandhi Ghat where students usually
                                    enjoy scenic views of river Ganges.
                                    <br />
                                </p>

                                <p className="lg:text-lg mt-5 text-gray-300 text-justify">
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
                </div>
            </div>
        </>
    );
};

export default History;
