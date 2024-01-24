import { FaTwitter, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";


const TeamCard2 = ({ img2, name2, detail2, academics, socials }) => {
  return (
    <>
      <div
        data-aos="fade-up"
        className="text-center text-gray-400"
      >
        <img
          className="mx-auto mb-4 w-36 h-36 rounded-full hover:scale-105 transition-all delay-75 ease-in"
          src={img2}
          alt="Bonnie Avatar"
        />
        <h3 className="mb-1 text-2xl font-bold tracking-tight text-white">
          <div>{name2}</div>
        </h3>
        <p className="text-sky-500 font-medium text-sm">{academics}</p>
        <p>{detail2}</p>
        <ul className="flex justify-center mt-4 space-x-4">
          {socials[0].link && <li>
            <a
              href={socials[0].link}
              target="_blank"
              rel="noopener noreferrer"
              className="transition text-white ease-in delay-50  hover:text-gray-400 hover:scale-[110%]"              
            >
              <FaGithub size={22} />
            </a>
          </li>}
          {socials[1].link && <li>
            <a
              href={socials[1].link}
              target="_blank"
              rel="noopener noreferrer"
              className="transition ease-in delay-50 text-blue-500 hover:text-blue-600 hover:scale-[110%]"
            >
              <FaLinkedin size={22} />
            </a>
          </li>}
          {socials[2].link && <li>
            <a
              href={socials[2].link}
              target="_blank"
              rel="noopener noreferrer"
              className="transition ease-in delay-50 text-blue-500 hover:text-blue-600 hover:scale-[110%]"
            >
              <FaTwitter size={22} />
            </a>
          </li>}
          {socials[3].link && <li>
            <a
              href={socials[3].link}
              target="_blank"
              rel="noopener noreferrer"
              className="transition ease-in delay-75 text-pink-500 hover:text-pink-600 hover:scale-110"
            >
              <FaInstagram size={22} />
            </a>
          </li>}
        </ul>
      </div>
    </>
  );
};

export default TeamCard2;
