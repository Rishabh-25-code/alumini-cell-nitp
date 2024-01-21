import BlogCard from "../../components/Cards/BlogCard";
import Heading from "../../components/Headings/Heading";
import Meta from "../../components/Meta/Meta";
import {  getDocuments, getPaginatedUnpublishedDocs,deleteDocument} from "../../services/documents";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import Loader from "../../components/Loader";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getImageURL } from "../../services/files";

const Bugs = () => {
  const [searchParams, setSearchParams] = useSearchParams({ page: 1 });

  const page = parseInt(searchParams.get("page")) || 1;
  const [itemsPerPage, setItemsPerPage] = useState(24);

  const {data: bugs,isLoading,isError,refetch,error,} = useQuery({
    queryKey: ["bugs"],
    queryFn: () =>
    getDocuments("bugs", itemsPerPage, itemsPerPage * (page - 1)),
    
  });
  // console.log(bugs);

  return (
    <div className="pt-24">
      <Meta name="Bugs Report" />
      <Heading heading="Bugs Report" heading1="via our Alumni"></Heading>

      <div className="px-10 flex mt-6 gap-4">
        <div className="flex flex-wrap gap-6 m-auto px-5 items-center justify-center mb-32 mt-10">
          {isLoading ? (
            <Loader />
          ) : isError ? (
            <div className="text-center text-red-500">{error.message}</div>
          ) : bugs.length === 0 ? (
            <div className="text-center py-16 font-medium text-sky-500">
              No bugs found!
            </div>
          ) : (
            bugs.map((bug, idx) => <BugCard data={bug} key={idx} />)
          )}
        </div>
      </div>
    </div>
  );
};
const BugCard = ({ data, type }) => {
  console.log(data);
  return (
    <Link
      data-aos="fade-up"
      to={`/${type === "bugs" ? "bugs" : "bug"}/${data.$id}`}
    >
      <div className="w-[23rem] p-4 border-2 hover:border-gray-800  border-gray-900 rounded-2xl mt-5">
        <h3 className="text-xl font-semibold pl-2 text-white">{data.title}</h3>
        <div className="bg-gray-900 rounded-lg p-3 flex justify-between mt-4">
          <div>
            <p className="text-gray-400 text-sm">{data.description}</p>
          </div>
        </div>
        <div className="bg-gray-900 rounded-lg p-3 flex justify-between mt-4">
          <div>
            <p className="text-gray-400 text-sm">Date</p>
            <p className="text-medium text-sm text-white">
              {new Intl.DateTimeFormat("en-AU").format(
                new Date(data.$createdAt)
              )}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Bugs;
