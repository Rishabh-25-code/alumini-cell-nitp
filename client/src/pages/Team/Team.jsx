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
      img2: "https://lh3.googleusercontent.com/d/1PlUDHg3gZ_-0vw7KGIUh6kEi9DLEQDm7=w320?authuser=0",
      name2: "Amitesh Kumar",
      detail2: "Mentor ",
    },
    {
      img2: "https://avatars.githubusercontent.com/u/72189098?v=4",
      name2: "Rishabh Prakash",
      detail2: "Team Lead ",
    },
    {
      img2: "https://avatars.githubusercontent.com/u/77230416?v=4",
      name2: "Sudhanshu Ranjan",
      detail2: "Team Member",
    },
    {
      img2: "https://raw.githubusercontent.com/Rajnishk4310/Portfolio/main/assets/img/profile-img1.jpg",
      name2: "Rajnish Kumar",
      detail2: "Team Member ",
    },
    {
      img2: "https://media.licdn.com/dms/image/D4D03AQHALp37YC_Feg/profile-displayphoto-shrink_400_400/0/1680381072744?e=1688601600&v=beta&t=-VJcxA0EIl1OPglX3u7MU-XDMwKtLyzju_lMglZBdnw",
      name2: "Rithvik Kumar",
      detail2: "Team Member",
    },
    {
      img2: "https://raw.githubusercontent.com/Rishabh-25-code/alumini-cell-nitp/main/client/public/images/v.jpeg",
      name2: "Vaishnavi Chaudhary",
      detail2: "Team Member",
    },
    {
      img2: "https://raw.githubusercontent.com/Rishabh-25-code/alumini-cell-nitp/main/client/public/images/s.jpeg",
      name2: "Sakshi Shukla",
      detail2: "Team Member",
    },
    {
      img2: "https://media.licdn.com/dms/image/D4D35AQF2ozPzPWXh7Q/profile-framedphoto-shrink_400_400/0/1667546362533?e=1683903600&v=beta&t=iSny5PwLEVJtiMkZVhyjrOvweSNYsXU4uAGiYriPXvU",
      name2: "Firdaus Jawed",
      detail2: "Team Member",
    },
    {
      img2: "",
      name2: "Suraj Kumar",
      detail2: "Team Member",
    },
    {
      img2: "",
      name2: "Lipi Aditi",
      detail2: "Team Member",
    },
  ];

  return (
    <div>
      <Heading heading="Team"></Heading>

      <section className="bg-black">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
              Meet Our Team
            </h2>
          </div>

          <div className="grid gap-10 mb-6 place-items-center lg:mb-16 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
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

      <section className=" bg-gray-900">
        <div className="py-16 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
              Alumni Web Team
            </h2>
            <p className="font-light sm:text-xl text-gray-400">
              We're a team of designers and developers at NIT Patna. We're
              passionate about connecting alumni with our institution via the
              NITP Alumni platform, and building a community for lifelong
              learning and growth.
            </p>
          </div>

          <div className="grid gap-12 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
