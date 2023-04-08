import React from "react";
import "./Team.scss";
import Heading from "../../components/Headings/Heading";

const Team = () => {
<<<<<<< Updated upstream
  return (
    <div className="pt-16">
      <Heading heading="Team"></Heading>
      <div>
        <div className="bg-sky-300 py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Meet our team
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                The BCE-NITP Alumni Association earlier known as B.C.E. Old
                Boy's Association has been established to promote fellow feeling
                among the Alumni. Besides this the Alumni Association also
                envisages to undertake activities in furtherance of the cause
                affecting engineering fraternity and cooperation with other
                institution engaged in similar activities. The BCE-NITP Alumni
                Association also acquires the responsibility of highlighting the
                achievements of its members in engineering and social life.
              </p>
            </div>
            <ul
              role="list"
              className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
            >
              <li>
                <div className="flex items-center gap-x-6">
                  <img
                    className="h-16 w-16 rounded-full"
                    src="../../../public/images/faculty.png"
                    alt=""
                  />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      Prof. Dr. Asok De
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">
                      Patron
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-x-6">
                  <img
                    className="h-16 w-16 rounded-full"
                    src="../../../public/images/faculty.png"
                    alt=""
                  />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      Er. Ravi Shankar Sinha
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">
                      President
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-x-6">
                  <img
                    className="h-16 w-16 rounded-full"
                    src="../../../public/images/faculty.png"
                    alt=""
                  />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      Prof. Dr. Girish K. Choudhary
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">
                      Secretary
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-x-6">
                  <img
                    className="h-16 w-16 rounded-full"
                    src="../../../public/images/faculty.png"
                    alt=""
                  />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      Dr. Anil Kumar Sinha
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">
                      Vice-President
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-x-6">
                  <img
                    className="h-16 w-16 rounded-full"
                    src="../../../public/images/faculty.png"
                    alt=""
                  />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      Dr. Santosh Kumar
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">
                      Treasurer
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-x-6">
                  <img
                    className="h-16 w-16 rounded-full"
                    src="../../../public/images/faculty.png"
                    alt=""
                  />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      Dr. FulenaRajak
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">
                      Joint Secretary
                    </p>
                  </div>
                </div>
              </li>
            </ul>
=======
  const team = [
    {
      img1: "../../../public/images/PKJ_Desk Photo.jpg",
      name1: "Prof. P. K. Jain",
      detail1: "Director of NIT Patna ",
      detail11:
        "pkjain@nitp.ac.in",
    },
    {
      img1: "../../../public/images/PKJ_Desk Photo.jpg",
      name1: "Prof. P. K. Jain",
      detail1: "Director of NIT Patna ",
      detail11:
        "pkjain@nitp.ac.in",
    },
    {
      img1: "../../../public/images/PKJ_Desk Photo.jpg",
      name1: "Prof. P. K. Jain",
      detail1: "Director of NIT Patna",
      detail11:
        "pkjain@nitp.ac.in",
    },
    {
      img1: "../../../public/images/PKJ_Desk Photo.jpg",
      name1: "Prof. P. K. Jain",
      detail1: "Director of NIT Patna",
      detail11:
        "pkjain@nitp.ac.in",
    },
    {
      img1: "../../../public/images/PKJ_Desk Photo.jpg",
      name1: "Prof. P. K. Jain",
      detail1: "Director of NIT Patna",
      detail11:
        "pkjain@nitp.ac.in",
    },
    {
      img1: "../../../public/images/PKJ_Desk Photo.jpg",
      name1: "Prof. P. K. Jain",
      detail1: "Director of NIT Patna",
      detail11:
        "pkjain@nitp.ac.in",
    },
  ];


  const team2 = [
    {
      img2: "../../../public/images/michael-gouch.png",
      name2: "Rishabh Prakash",
      detail2: "Team Lead ",
    },
    {
      img2: "../../../public/images/michael-gouch.png",
      name2: "Rajnish Kumar",
      detail2: "Team Member ",
    },
    {
      img2: "../../../public/images/michael-gouch.png",
      name2: "Rithvik Kumar",
      detail2: "Team Member",
    },
    {
      img2: "../../../public/images/michael-gouch.png",
      name2: "Akash Kumar",
      detail2: "Team Member",
    },
  ];

  return (
    <div className="pt-16">
      <Heading heading="Team"></Heading>

      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Meet Our Team
            </h2>
          </div>

          <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-3">
            {team.map((team, index) => (
              <TeamCard
                key={index}
                img1={team.img1}
                name1={team.name1}
                detail1={team.detail1}
                detail11={team.detail11}
                id={index}
              />
            ))}
>>>>>>> Stashed changes
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
