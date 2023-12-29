import React from "react";
import Heading from "../../components/Headings/Heading";
import pic from "/images/bihtacampusnews.png";
import Timeline from "../../components/Timeline/Timeline";




const timelineData = [
    {
        image: "/images/bihtacampus/NITPsiteplan.jpeg",
        alt: 'Image Alt 1',
        title: 'Site Plan',
        description: 'Description to be updated...',
    },
    {
        image: '/images/bihtacampus/Maingate.jpeg',
        alt: 'Image Alt 2',
        title: 'Main Gate',
        description: 'Description to be updated...',
    },
    {
        image: '/images/bihtacampus/academic1.jpeg',
        alt: 'Image Alt 3',
        title: 'Academic Block-1',
        description: 'Description to be updated....',
    },
    {
        image: '/images/bihtacampus/Admin1.jpeg',
        alt: 'Image Alt 4',
        title: 'Admin Block-2',
        description: 'Description to be updated....',
    },
    {
        image: '/images/bihtacampus/Admin2.jpeg',
        alt: 'Image Alt 5',
        title: 'Admin Block-2',
        description: 'Description to be updated....',
    },
    {
        image: '/images/bihtacampus/Boyshostel1.jpeg',
        alt: 'Image Alt 6',
        title: 'Boys Hostel-1',
        description: 'Description to be updated....',
    },
    {
        image: '/images/bihtacampus/Boyshostel2.jpeg',
        alt: 'Image Alt 7',
        title: 'Boys Hostel-2',
        description: 'Description to be updated....',
    },
    {
        image: '/images/bihtacampus/CEPcenter.jpeg',
        alt: 'Image Alt 8',
        title: 'CEP Center',
        description: 'Description to be updated....',
    },
    {
        image: '/images/bihtacampus/Directorresidence.jpeg',
        alt: 'Image Alt 9',
        title: "Director's residence",
        description: 'Description to be updated....',
    },
    {
        image: '/images/bihtacampus/Facultyquarters.jpeg',
        alt: 'Image Alt 10',
        title: 'Faculty Quarters-1',
        description: 'Description to be updated....',
    },
    {
        image: '/images/bihtacampus/Facultyquarters2.jpeg',
        alt: 'Image Alt 11',
        title: 'Faculty Quarters-2',
        description: 'Description to be updated....',
    },
    {
        image: '/images/bihtacampus/girlshostel.jpeg',
        alt: 'Image Alt 12',
        title: 'Girls Hostel',
        description: 'Description to be updated....',
    },
    {
        image: '/images/bihtacampus/LectureHallblock.jpeg',
        alt: 'Image Alt 13',
        title: 'Lecture Hall Block',
        description: 'Description to be updated....',
    },
    {
        image: '/images/bihtacampus/LibraryandDatacenter.jpeg',
        alt: 'Image Alt 14',
        title: 'Library and Data Center',
        description: 'Description to be updated....',
    },
    {
        image: '/images/bihtacampus/Staffquarters.jpeg',
        alt: 'Image Alt 15',
        title: 'Staff Quarters',
        description: 'Description to be updated....',
    },
    {
        image: '/images/bihtacampus/Transithostel.jpeg',
        alt: 'Image Alt 16',
        title: 'Transit Hostel',
        description: 'Description to be updated....',
    },


];

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
                        <p>The Institute has planned to create an additional campus in the 125 Acres of land allotted by Government of Bihar at Bihta, Patna. It is proposed that the new campus at Bihta will be developed to accommodate 6415 students. The NIT, Patna - Bihta campus has to develop in three phases. In Phase - I, 2415 students are proposed to be accommodated. In Phase-II another 2000 students will be accommodated and in the Phase-III, developments will be made to enhance capacity for another 2000 students.
                            NIT Patna proposed to construct buildings in this phase-I along with site development and infrastructure support for the buildings.</p>
                    </div>
                    <div className="basis-[40%] sm:px-5  py-2 px-2 overflow-hidden rounded-xl lg:mt-0 md:mt-0 mt-5">
                        <img src={pic} className="rounded-xl w-full h-full shadow-xl hue-rotate-30 " alt="" />
                    </div>
                </div>

                <div className="lg:max-w-[80%] md:w-[85%] w-[94%] bg-gray-900 rounded-3xl p-5 py-10 mx-auto flex flex-col justify-center md:py-[80] sm:flex-row">
                    <div className="flex flex-col">
                        <h1 className="text-3xl font-bold text-center mb-8">Architectural Plans of Bihta Campus</h1>
                        <Timeline data={timelineData} />
                    </div>
                </div>

            </div>



        </>
    );
};

export default BihtaCampus;
