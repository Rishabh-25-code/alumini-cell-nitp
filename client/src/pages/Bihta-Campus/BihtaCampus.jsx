import React from "react";
import Heading from "../../components/Headings/Heading";
import pic from "/images/bihtacampusnews.png";

const BihtaCampus = () => {
    return (
        <>
            <div>
                <Heading heading="Bihta Campus - NITP"></Heading>
            </div>

            <div className="flex items-center flex-col justify-center gap-10">
                <div className="lg:max-w-[80%] md:w-[85%] w-[94%] bg-gray-900 rounded-3xl p-5 py-10 mx-auto flex flex-col md:py-[80] sm:flex-row">
                    <div className="basis-[60%] px-2  duration-1000 ">
                        <h1 className="text-4xl  font-semibold text-sky-500">Bihta Campus will be operational soon </h1>
                        <div className="max-w-[30%] mb-5 mt-1 h-1 bg-pink-500 " />
                        <p>Patna NIT session of the year 2024 will be conducted in the new campus in Bihta. The Bihta campus of NIT, Patna will be completed in 21 months. Its process has been completed. In the coming time, in June-July, the Prime Minister can set up a new campus. For this they have been invited. Pro PK Jain, Director, NIT, Patna has informed about this to the PMO and the Ministry of Education. This information has been organized by Prof PK Jain, Director of NIT, Patna on Wednesday. He said that after informing the Central Government, NIT Patna is fully prepared for the construction of campus. The new campus will be ready by 2024 March. The session of July, 2024 will be conducted from the new campus. Ahuwabia Contracts India Limited (ACIL) has been selected as the builder for this mega construction work. He informed that the construction of this complex will be done on technical basis in Engineering Procurement Commissioning (EPC) mode.</p>
                    </div>
                    <div className="basis-[40%] sm:px-5  py-2 px-2 overflow-hidden rounded-xl lg:mt-0 md:mt-0 mt-5">
                        <img src={pic} className="rounded-xl w-full h-full shadow-xl hue-rotate-30 " alt="" />
                    </div>
                </div>

            </div>

        </>
    );
};

export default BihtaCampus;
