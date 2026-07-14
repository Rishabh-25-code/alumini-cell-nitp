import React, { useEffect, useRef, useState } from "react";
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
  const [copied, setCopied] = useState("");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        close();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [close]);

  const copyToClipboard = async (text, label) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(`${label} copied to clipboard`);

      setTimeout(() => {
        setCopied("");
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="fixed inset-0 z-[25000] bg-slate-950/30 backdrop-blur-sm flex items-center justify-center p-4">
      <div
        ref={popupRef}
        className="surface-card lg:w-[32rem] md:w-[28rem] w-full max-w-lg max-h-[80vh] rounded-2xl flex flex-col shadow-xl relative"
      >
        {copied && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white text-sm px-4 py-2 rounded-lg shadow-lg">
            {copied}
          </div>
        )}

        {/* Header */}
        <div className="relative p-6 border-b border-slate-200 shrink-0">
          <button
            className="absolute top-6 right-6"
            onClick={close}
            aria-label="Close"
          >
            <FiX
              size={24}
              className="hover:scale-105 transition hover:text-sky-700"
            />
          </button>

          <div className="flex gap-4">
            <div className="lg:w-24 md:w-20 w-16 lg:h-24 md:h-20 h-16 rounded-2xl overflow-hidden shrink-0">
              <img
                id={person.$id}
                className="w-full h-full object-cover"
                src={person.image ? getImageURL(person.image) : MalePlaceholder}
                alt={person.name}
              />
            </div>

            <div className="flex-1 pr-8">
              <p className="text-xl font-bold text-sky-800">
                {person.title} {person.name}
              </p>

              <p className="font-medium text-base text-slate-700">
                {person.branch} ({person.degree})
              </p>

              <div className="flex flex-wrap gap-3 mt-3">
                {person.linkedin && (
                  <Link
                    to={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin
                      size={20}
                      className="hover:scale-105 transition hover:text-sky-700"
                    />
                  </Link>
                )}

                {person.facebook && (
                  <Link
                    to={person.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook
                      size={20}
                      className="hover:scale-105 transition hover:text-sky-700"
                    />
                  </Link>
                )}

                {person.github && (
                  <Link
                    to={person.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub
                      size={20}
                      className="hover:scale-105 transition hover:text-sky-700"
                    />
                  </Link>
                )}

                {person.instagram && (
                  <Link
                    to={person.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram
                      size={20}
                      className="hover:scale-105 transition hover:text-sky-700"
                    />
                  </Link>
                )}

                {person.twitter && (
                  <Link
                    to={person.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter
                      size={20}
                      className="hover:scale-105 transition hover:text-sky-700"
                    />
                  </Link>
                )}

                {person.website && (
                  <Link
                    to={person.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGlobe
                      size={20}
                      className="hover:scale-105 transition hover:text-sky-700"
                    />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <p className="font-medium text-sm text-slate-600 leading-6 mb-4">
            {person.bio || person.work_info}
          </p>

          <div className="space-y-3 text-sm">
            {person.batchEnd && (
              <p>
                <span className="font-medium text-slate-500">Batch:</span>{" "}
                {person.batchStart
                  ? `${person.batchStart}-${person.batchEnd}`
                  : person.batchEnd}
              </p>
            )}

            {person.company && (
              <p>
                <span className="font-medium text-slate-500">Company:</span>{" "}
                {person.company}
              </p>
            )}

            {person.designation && (
              <p>
                <span className="font-medium text-slate-500">
                  Designation:
                </span>{" "}
                {person.designation}
              </p>
            )}

            {person.showPhone && person.phone && (
              <p>
                <span className="font-medium text-slate-500">Phone:</span>{" "}
                <button
                  type="button"
                  onClick={() =>
                    copyToClipboard(person.phone, "Phone number")
                  }
                  className="text-sky-700 hover:underline cursor-pointer text-left"
                >
                  {person.phone}
                </button>
              </p>
            )}

            {person.showEmail && person.email && (
              <p>
                <span className="font-medium text-slate-500">Email:</span>{" "}
                <button
                  type="button"
                  onClick={() => copyToClipboard(person.email, "Email")}
                  className="text-sky-700 hover:underline break-all cursor-pointer text-left"
                >
                  {person.email}
                </button>
              </p>
            )}

            {person.interests && (
              <p>
                <span className="font-medium text-slate-500">
                  Interests:
                </span>{" "}
                {person.interests}
              </p>
            )}

            {person.hobbies?.length > 0 && (
              <p>
                <span className="font-medium text-slate-500">Hobbies:</span>{" "}
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
