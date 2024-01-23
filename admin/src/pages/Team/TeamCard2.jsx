import { FaTwitter, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";


const TeamCard2 = ({ img2, name2, detail2 }) => {
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
          <a href="#">{name2}</a>
        </h3>
        <p>{detail2}</p>
        <ul className="flex justify-center mt-4 space-x-4">
          <li>
            <a
              href="www.linkedin.com"
              className="transition ease-in delay-50 text-blue-500 hover:text-blue-600 hover:scale-[110%]"
            >
              <FaLinkedin size={22} />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com"
              className="transition text-white ease-in delay-50 text-white-500 hover:text-white-600 hover:scale-[110%]"
            >
              <FaGithub size={22} />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com"
              className="transition ease-in delay-50 text-blue-500 hover:text-blue-600 hover:scale-[110%]"
            >
              <FaTwitter size={22} />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com"
              className="transition ease-in delay-75 text-pink-500 hover:text-pink-600 hover:scale-110"
            >
              <FaInstagram size={22} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TeamCard2;