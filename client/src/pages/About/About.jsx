import React from "react";
import Heading from "../../components/Headings/Heading";
import pic7 from "/images/pic7.jpg";
import pic3 from "/images/pic3.jpg";
import Meta from "../../components/Meta/Meta";

const About = () => {
  return (
    <>
    <Meta name="About - NIT Patna" />
      <div>
        <Heading heading="About Us"></Heading>
      </div>

      <div className="flex items-center flex-col justify-center gap-10">
        <div className="lg:max-w-[80%] md:w-[85%] w-[94%] bg-gray-900 rounded-3xl p-5 py-10 mx-auto flex flex-col md:py-[80] sm:flex-row">
          <div className="basis-[60%] px-2  duration-1000 ">
            <h1 className="text-4xl  font-semibold text-sky-500">About Us</h1>
            <div className="max-w-[30%] mb-5 mt-1 h-1 bg-pink-500 " />
            <p>National Institute of Technology Patna has been declared as an Institute of National Importance and has been granted a fully Autonomous Status by MHRD, Government of India. The Institute has also been declared as a Centre of Excellence of impart high level education training , research and development in science, engineering technology and humanities. It is imparting high quality education & values at UG (B.Tech), PG (M.Tech) & Ph.D. programmes through its experienced faculty well versed in their respective field of engineering an technology with well equipped laboratories . At present the Institute has seven disciplines viz. Architecture, Civil Engineering, Compute Science & Engg., Electrical Engg., Electronics & Communication Engg., Information Technology and Mechanical Engg., and well established departments of physics, Mathematics and Humanities and Social Science.

National Institute of Technology Patna aims at setting out very high education standards and holds long record of academic excellence. The pedagogical aspects have been formulated to suit not only the needs of the contemporary industrial requirements but also to develop human potential to its fullest extent in a range of professions. Extra curricular activities are planed through games and sports, cultural programmes and NSS activities. Cultural activities provide a platform to know about the culture of various states and regions of the country and opportunity for national integration.

Ever since its rechristening, NIT Patna has been on the fast track of development and has undergone numerous facelifts because of which placement records have witnessed unprecedented growth and is touching new heights as the graph of placement is increasing remarkably.</p>
          </div>
          <div className="basis-[40%] sm:px-5  py-2 px-2 overflow-hidden rounded-xl lg:mt-0 md:mt-0 mt-5">
            <img src={pic3} className="rounded-xl w-full   shadow-xl hue-rotate-30 " alt="" />
          </div>
        </div>


        <div className="lg:max-w-[80%] md:w-[85%] w-[94%] bg-gray-900 rounded-3xl p-5 py-10 mx-auto flex flex-col md:py-[80]   sm:flex-row  ">
          <div className="basis-[40%] sm:px-5  py-2 px-2 overflow-hidden rounded-xl lg:mb-0 md:mb-0 mb-10">
            <img src={pic7} className="rounded-xl w-full   shadow-xl hue-rotate-30 " alt="" />
          </div>
          <div className="basis-[60%] px-2   ">
            <h1 className="text-4xl  font-semibold text-sky-500">Key objectives of the central alumni association</h1>
            <div className="max-w-[30%] mb-5 mt-1 h-1 bg-pink-500 " />
            <p>The key objectives of the alumni association are to</p>
            <li>Provide a vibrant forum that promotes interaction and networking among
              alumni of the Institute</li>
            <li>Help alumni achieve their professional and societal goals.</li>
            <li>Help alumni in their hour of need.</li>

            <li>Contribute to the Institute’s vision of being recognized among the world’s leading   institutions in  academics, research, outreach, and innovation.</li>
            <li>Function on charitable basis, and to run the Association on ‘no profit no loss’ basis.</li>
            <li>Promote best practices in different areas of science, technology, humanities and social sciences for the benefit of the society, especially disadvantaged sections.</li>
          </div>
        </div>

      </div>

    </>
  );
};

export default About;
