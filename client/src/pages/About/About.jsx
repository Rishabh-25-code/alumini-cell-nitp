import React from "react";
import Heading from "../../components/Headings/Heading";
import pic9 from "/images/pic9.jpg";
import pic3 from "/images/pic3.jpg";
import Meta from "../../components/Meta/Meta";

const About = () => {
  return (
    <>
      <Meta name="About - NIT Patna" />
      <div>
        <Heading heading="About Us" />
      </div>

      <div className="flex items-center flex-col justify-center gap-10">
        <div className="lg:max-w-[80%] md:text-lg text-base md:w-[85%] w-[94%] bg-gray-900 rounded-3xl p-5 gap-y-8 lg:py-10 md:py-8 py-6 mx-auto flex flex-col-reverse lg:flex-row items-center">
          <div className="w-full">
            <p className="text-gray-300">
              <strong>National Institute of Technology Patna</strong> has been declared as an Institute of National Importance and has been granted a fully Autonomous Status by MHRD, Government of India. The Institute has also been declared as a Centre of Excellence of impart high level education training , research and development in science, engineering technology and humanities.
            </p>

            <p className="text-gray-300 pt-5">
              It is imparting high quality education & values at UG (B.Tech), PG (M.Tech) & Ph.D. programmes through its experienced faculty well versed in their respective field of engineering an technology with well equipped laboratories.
            </p>
          </div>
          <div className="w-full lg:w-[40%] lg:px-5 py-2 px-2 overflow-hidden rounded-xl">
            <img
              src={pic9}
              className="rounded-xl w-full shadow-lg"
              alt="About Image"
            />
          </div>
        </div>

        <div className="lg:max-w-[80%] md:w-[85%] md:text-lg text-base w-[94%] bg-gray-900 rounded-3xl p-5 lg:py-10 md:py-8 py-6 mx-auto flex flex-col items-center">
          <p className="text-gray-300">
            At present the Institute has seven disciplines viz. Architecture, Civil Engineering, Compute Science & Engg., Electrical Engg., Electronics & Communication Engg., Information Technology and Mechanical Engg., and well established departments of physics, Mathematics and Humanities and Social Science.
          </p>
          <p className="text-gray-300 pt-5">
            National Institute of Technology Patna aims at setting out very high education standards and holds long record of academic excellence. The pedagogical aspects have been formulated to suit not only the needs of the contemporary industrial requirements but also to develop human potential to its fullest extent in a range of professions. Extra curricular activities are planed through games and sports, cultural programmes and NSS activities. Cultural activities provide a platform to know about the culture of various states and regions of the country and opportunity for national integration.
          </p>

          <p className="text-gray-300 pt-5">
            Ever since its rechristening, NIT Patna has been on the fast track of development and has undergone numerous facelifts because of which placement records have witnessed unprecedented growth and is touching new heights as the graph of placement is increasing remarkably.
          </p>
        </div>

        <div className="lg:max-w-[80%] md:w-[85%] w-[94%] bg-gray-900 rounded-3xl p-5 lg:py-10 md:py-8 py-6 gap-y-8 mx-auto flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-[40%] lg:px-5 py-2 px-2 overflow-hidden rounded-xl md:mt-0">
            <img
              src={pic3}
              className="rounded-xl w-full shadow-lg"
              alt="Key Objectives Image"
            />
          </div>
          <div className="w-full lg:w-[60%] px-2">
            <h1 className="md:text-3xl text-2xl font-semibold text-sky-500">
              Key objectives of the central alumni association
            </h1>
            <div className="w-20 mb-5 mt-1 md:h-1 h-0.5 bg-pink-500" />
            <ul className="text-gray-300 list-disc pl-5">
              <li>
                Provide a vibrant forum that promotes interaction and networking among
                alumni of the Institute
              </li>
              <li>Help alumni achieve their professional and societal goals.</li>
              <li>Help alumni in their hour of need.</li>
              <li>
                Contribute to the Institute's vision of being recognized among the world's leading institutions in academics, research, outreach, and innovation.
              </li>
              <li>Function on a charitable basis and run the Association on a 'no profit, no loss' basis.</li>
              <li>
                Promote best practices in different areas of science, technology, humanities, and social sciences for the benefit of the society, especially disadvantaged sections.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
