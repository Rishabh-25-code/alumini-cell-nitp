import React from "react";
import "./Team.scss";
import Heading from "../../components/Headings/Heading";
import TeamCard from "./TeamCard";
import TeamCard2 from "./TeamCard2";

const Team = () => {
  const team = [
    {
      img1: "https://raw.githubusercontent.com/Rajnishk4310/HealthXoxo/main/images/PKJ_Desk%20Photo.jpg",
      name1: "Prof. P. K. Jain",
      detail1: "Director of NIT Patna ",
      detail11: "pkjain@nitp.ac.in",
    },
    {
      img1: "https://raw.githubusercontent.com/Rajnishk4310/HealthXoxo/main/images/PKJ_Desk%20Photo.jpg",
      name1: "Prof. P. K. Jain",
      detail1: "Director of NIT Patna ",
      detail11: "pkjain@nitp.ac.in",
    },
    {
      img1: "https://raw.githubusercontent.com/Rajnishk4310/HealthXoxo/main/images/PKJ_Desk%20Photo.jpg",
      name1: "Prof. P. K. Jain",
      detail1: "Director of NIT Patna",
      detail11: "pkjain@nitp.ac.in",
    },
    {
      img1: "https://raw.githubusercontent.com/Rajnishk4310/HealthXoxo/main/images/PKJ_Desk%20Photo.jpg",
      name1: "Prof. P. K. Jain",
      detail1: "Director of NIT Patna",
      detail11: "pkjain@nitp.ac.in",
    },
    {
      img1: "https://raw.githubusercontent.com/Rajnishk4310/HealthXoxo/main/images/PKJ_Desk%20Photo.jpg",
      name1: "Prof. P. K. Jain",
      detail1: "Director of NIT Patna",
      detail11: "pkjain@nitp.ac.in",
    },
    {
      img1: "https://raw.githubusercontent.com/Rajnishk4310/HealthXoxo/main/images/PKJ_Desk%20Photo.jpg",
      name1: "Prof. P. K. Jain",
      detail1: "Director of NIT Patna",
      detail11: "pkjain@nitp.ac.in",
    },
  ];

  const team2 = [
    {
      img2: "https://raw.githubusercontent.com/Rajnishk4310/HealthXoxo/main/images/michael-gouch.png",
      name2: "Rishabh Prakash",
      detail2: "Team Lead ",
    },
    {
      img2: "https://raw.githubusercontent.com/Rajnishk4310/HealthXoxo/main/images/michael-gouch.png",
      name2: "Rajnish Kumar",
      detail2: "Team Member ",
    },
    {
      img2: "https://raw.githubusercontent.com/Rajnishk4310/HealthXoxo/main/images/michael-gouch.png",
      name2: "Rithvik Kumar",
      detail2: "Team Member",
    },
    {
      img2: "https://raw.githubusercontent.com/Rajnishk4310/HealthXoxo/main/images/michael-gouch.png",
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
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Alumni Web Team
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              We're a team of designers and developers at NIT Patna. We're
              passionate about connecting alumni with our institution via the
              NITP Alumni platform, and building a community for lifelong
              learning and growth.
            </p>
          </div>

          <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {team2.map((team2, index) => (
              <TeamCard2
                key={index}
                img2={team2.img2}
                name2={team2.name2}
                detail2={team2.detail2}
                id={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
