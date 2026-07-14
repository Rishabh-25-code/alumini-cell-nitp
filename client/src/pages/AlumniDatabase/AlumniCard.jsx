import React, { useEffect, useRef } from "react";
import MalePlaceholder from "../../assets/man-placeholder.jpg";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaGlobe,
  FaTwitter,
} from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { getImageURL } from "../../services/files";
import { Link } from "react-router-dom";

const AlumniCard = ({ person, close }) => {
  const popupRef = useRef(null);

  // Close popup if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        close(); // Call the close function
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [close]);

  return (
    <div className="fixed z-[25000] inset-0 bg-slate-950/30 backdrop-blur-sm w-full flex justify-center items-center p-6">
      <div
        ref={popupRef} // Attach ref to the popup container
        className="surface-card flex lg:w-[32rem] md:w-[28rem] w-full mx-0 flex-col max-h-[85vh] max-w-lg rounded-2xl relative overflow-hidden"
      >
        <button className="absolute top-6 right-6 z-10" onClick={close}>
          <FiX size={24} className="hover:scale-105 transition hover:text-sky-700" />
        </button>

        {/* Scrollable content area */}
        <div className="flex flex-col gap-3 p-6 py-6 overflow-y-auto">
          <div className="lg:w-24 bg-cover flex items-center justify-center md:w-20 w-16 lg:h-24 md:h-20 h-16 rounded-2xl overflow-hidden">
            <img
              id={person.$id}
              className="w-full object-cover lg:h-24 md:h-20 h-16"
              src={person.image ? getImageURL(person.image) : MalePlaceholder}
              alt={person.name}
            />
          </div>

          <div className="text-sm font-medium flex-1">
            <p className="text-xl font-bold text-sky-800">
              {person.title} {person.name}
            </p>
            <p className="font-medium text-base text-slate-700">
              {person.branch} ({person.degree})
            </p>

            <div className="flex gap-3 items-center">
              {person.linkedin && (
                <Link to={person.linkedin} target="_blank">
                  <FaLinkedin size={20} className="hover:scale-95 transition hover:text-gray-400" />
                </Link>
              )}
              {person.facebook && (
                <Link to={person.facebook} target="_blank">
                  <FaFacebook size={20} className="hover:scale-105 transition hover:text-gray-400" />
                </Link>
              )}
              {person.github && (
                <Link to={person.github} target="_blank">
                  <FaGithub size={20} className="hover:scale-105 transition hover:text-gray-400" />
                </Link>
              )}
              {person.instagram && (
                <Link to={person.instagram} target="_blank">
                  <FaInstagram size={20} className="hover:scale-105 transition hover:text-gray-400" />
                </Link>
              )}
              {person.twitter && (
                <Link to={person.twitter} target="_blank">
                  <FaTwitter size={20} className="hover:scale-105 transition hover:text-gray-400" />
                </Link>
              )}
              {person.website && (
                <Link to={person.website} target="_blank">
                  <FaGlobe size={20} className="hover:scale-105 transition hover:text-gray-400" />
                </Link>
              )}
            </div>

            <p className="font-medium text-sm text-slate-600 py-2 leading-6">
              {person.bio ? person.bio : person.work_info}
            </p>

            {person.batchEnd && (
              <p>
                <span className="text-slate-500">Batch:</span>{" "}
                {person.batchStart ? person.batchStart + "-" + person.batchEnd : person.batchEnd}
              </p>
            )}
            {person.company && (
              <p>
                <span className="text-slate-500">Company:</span> {person.company}
              </p>
            )}
            {person.designation && (
              <p>
                <span className="text-slate-500">Designation:</span>{" "}
                {person.designation}
              </p>
            )}
            {person.showPhone && (
              <p>
                <span className="text-slate-500">Phone:</span>{" "}
                
                  target="_blank"
                  className="text-sky-700"
                  href={`tel:${person.phone}`}
                >
                  {person.phone}
                </a>
              </p>
            )}
            {person.showEmail && (
              <p>
                <span className="text-slate-500">EmailId:</span>{" "}
                
                  target="_blank"
                  className="text-sky-700"
                  href={`mailto:${person.email}`}
                >
                  {person.email}
                </a>
              </p>
            )}
            {person.interests && (
              <p>
                <span className="text-slate-500">Interests:</span>{" "}
                {person.interests}
              </p>
            )}
            {person.hobbies.length !== 0 && (
              <p>
                <span className="text-slate-500">Hobbies:</span>{" "}
                {person.hobbies.join(", ")}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniCard;
