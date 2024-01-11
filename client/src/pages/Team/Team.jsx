import React from "react";
import Heading from "../../components/Headings/Heading";
import TeamCard2 from "./TeamCard2";
import Meta from "../../components/Meta/Meta";


const Team = () => {
  const team2 = [
    {
      img2: "https://avatars.githubusercontent.com/u/72189098?v=4",
      name2: "Rishabh Prakash",
      detail2: "Team Lead",
    },
    {
      img2: "https://avatars.githubusercontent.com/u/77230416?v=4",
      name2: "Sudhanshu Ranjan",
      detail2: "Web Designer/Developer",
    },
    {
      img2: "https://cloud.appwrite.io/v1/storage/buckets/photos/files/6511acf5b7d542b7f9a8/view?project=tesla-official-web&mode=admin",
      name2: "Suraj Kumar",
      detail2: "Team Member",
    },
    {
      img2: "https://cloud.appwrite.io/v1/storage/buckets/photos/files/6511dd92b3788d8e6199/view?project=tesla-official-web&mode=admin",
      name2: "Lipi Aditi",
      detail2: "Team Member",
    },
  ];

  return (
    <div>
      <Meta name="Web Team" />
      <Heading heading="Web Team" heading1='Alumni Website'></Heading>

      <section>
        <div className="py-16 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <p className="text-base text-gray-400">
              We're a team of designers and developers at NIT Patna. We're
              passionate about connecting alumni with our institution via the
              NITP Alumni platform, and building a community for lifelong
              learning and growth.
            </p>
          </div>

          <div className="grid gap-12 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center">
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
