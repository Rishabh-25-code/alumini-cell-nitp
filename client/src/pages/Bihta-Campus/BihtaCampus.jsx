import React from "react";
import Heading from "../../components/Headings/Heading";
import pic from "/images/bihtacampusnews.png";

const BihtaCampus = () => {
    return (
        <>
            <div>
                <Heading heading="Bihta Campus - NITP"></Heading>

                <div className='bg-gray-900 lg:w-[56rem] md:w-[90%] w-[95%] m-auto shadow mt-10 my-32 rounded-2xl p-6'>
                    <div className='lg:text-3xl text-2xl py-2 pt-0 text-sky-500 font-bold'>
                        <h1>Bihta Campus - NITP</h1>
                    </div>

                    <div className='py-5'>
                        <img className='w-full' src={pic} alt="alumni meet" />

                        <div className='flex flex-col text-justify gap-5 pt-10'>
                            <p>
                                The Institute has planned to create an additional campus in the 125 Acres of land allotted by Government of Bihar at Bihta, Patna. It is proposed that the new campus at Bihta will be developed to accommodate 6415 students. The NIT, Patna - Bihta campus has to develop in three phases. In Phase - I, 2415 students are proposed to be accommodated. In Phase-II another 2000 students will be accommodated and in the Phase-III, developments will be made to enhance capacity for another 2000 students. NIT Patna proposed to construct buildings in this phase-I along with site development and infrastructure support for the buildings.
                            </p>

                            <p>
                                Patna NIT session of the year 2024 will be conducted in the new campus in Bihta. The Bihta campus of NIT, Patna will be completed in 21 months. Its process has been completed. In the coming time, in June-July, the Prime Minister can set up a new campus. For this they have been invited. Pro PK Jain, Director, NIT, Patna has informed about this to the PMO and the Ministry of Education. This information has been organized by Prof PK Jain, Director of NIT, Patna on Wednesday. He said that after informing the Central Government, NIT Patna is fully prepared for the construction of campus. The new campus will be ready by 2024 March. The session of July, 2024 will be conducted from the new campus. Ahuwabia Contracts India Limited (ACIL) has been selected as the builder for this mega construction work. He informed that the construction of this complex will be done on technical basis in Engineering Procurement Commissioning (EPC) mode.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default BihtaCampus;
