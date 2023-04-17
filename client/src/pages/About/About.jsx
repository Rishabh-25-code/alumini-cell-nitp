import React from "react";
import Heading from "../../components/Headings/Heading";
import pic7 from "../../../public/images/pic7.jpg";
import pic3 from "../../../public/images/pic3.jpg";

const About = () => {
  return (
    <>
    <div className="pt-16">
      <Heading heading="About Us"></Heading>
    </div>

<div className="max-w-[1320px] md:py-[80]  bg-blue-900 py-5 mx-auto   flex flex-col sm:flex-row">
  <div className="basis-[60%] px-2 hover:scale-95 duration-1000 ">
<h1 className="text-4xl animate-bounce  ">Background</h1>
<hr className="max-w-[25%] pb-5 mt-1" />
<p>The National Institute of Technology (NIT) Patna Alumni Association is a non-profit organization founded by the alumni of NIT Patna to connect, engage and support the institute's alumni community. The association was established in 2014 and is registered under the Societies Registration Act, 1860.

The primary objective of the NIT Patna Alumni Association is to foster a sense of belonging among the alumni and to promote interaction between them and the institute. The association also works towards providing a platform for the alumni to connect with each other and to share their experiences and knowledge with the current students.</p>
  </div>
  <div className="basis-[40%] px-2 py-2 overflow-hidden sm:px-5">
  <img src={pic3} className="rounded-xl w-full hover:scale-125 duration-1000  shadow-xl hue-rotate-30" alt="" />
  </div>
</div>


<div className="max-w-[1320px] bg-blue-900 py-5 mt-5 mx-auto flex flex-col md:py-[80]   sm:flex-row  ">
  <div className="basis-[60%] px-2 hover:scale-95 duration-1000 ">
<h1 className="text-4xl animate-bounce ">Key objectives of the central alumni association</h1>
<hr className="max-w-[30%] pb-5 mt-1" />
<p>The key objectives of the alumni association are to</p>
<li>Provide a vibrant forum that promotes interaction and networking among
alumni of the Institute</li>
<li>Help alumni achieve their professional and societal goals.</li>
<li>Help alumni in their hour of need.</li>

<li>Contribute to the Institute’s vision of being recognized among the world’s leading   institutions in  academics, research, outreach, and innovation.</li>
<li>Function on charitable basis, and to run the Association on ‘no profit no loss’ basis.</li>
<li>Promote best practices in different areas of science, technology, humanities and social sciences for the benefit of the society, especially disadvantaged sections.</li>
  </div>
  <div className="basis-[40%] sm:px-5  py-2 px-2 overflow-hidden ">
  <img src={pic7} className="rounded-xl w-full hover:scale-125 duration-1000 shadow-xl hue-rotate-30 " alt="" />
  </div>
</div>

</>
  );
};

export default About;
