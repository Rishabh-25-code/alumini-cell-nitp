import Heading from "../../components/Headings/Heading";
import Meta from "../../components/Meta/Meta";
import { getPaginatedBugs } from "../../services/documents";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams, Link } from "react-router-dom";
import Loader from "../../components/Loader";
import { useState } from "react";


const Bugs = () => {
  const [searchParams, setSearchParams] = useSearchParams({ type: 'reviewing', page: 1 });
  const type = searchParams.get('type') || 'reviewing';
  const page = parseInt(searchParams.get("page")) || 1;
  const [itemsPerPage, setItemsPerPage] = useState(24);

  const { data: bugs, isLoading, isError, refetch, error, } = useQuery({
    queryKey: ["bugs", page, type],
    queryFn: () => getPaginatedBugs("bugs", itemsPerPage, itemsPerPage * (page - 1), type),
  });

  const changeParams = async (key, value) => {
    setSearchParams((prev) => {
      prev.set(key, value);
      return prev;
    }, { replace: true });
    window.scrollTo(0, 0);
    refetch();
  }

  const changeType = (newType) => {
    changeParams('type', newType);
    changeParams('page', 1);
  }

  return (
    <div className="pt-24">
      <Meta name="Bugs Report" />
      <Heading heading="Reported Bugs"></Heading>

      <div className='px-10 flex mt-6 gap-4'>
        <button onClick={() => {
          changeType('reviewing')
        }} className={`border-[#e9e1e1] border font-semibold  px-5 py-2 text-base rounded-xl hover:bg-[#e9e1e1] hover:text-gray-900 ${type === "reviewing" ? 'bg-[#e9e1e1] text-gray-900' : 'text-[#e9e1e1]'}`}>
          Reviewing
        </button>
        <button onClick={() => changeType('resolved')} className={`border-[#e9e1e1] border font-semibold  px-5 py-2 text-base rounded-xl hover:bg-[#e9e1e1] hover:text-gray-900 ${type === "resolved" ? 'bg-[#e9e1e1] text-gray-900' : 'text-[#e9e1e1]'}`}>
          Resolved
        </button>
        <button onClick={() => changeType('rejected')} className={`border-[#e9e1e1] border font-semibold  px-5 py-2 text-base rounded-xl hover:bg-[#e9e1e1] hover:text-gray-900 ${type === "rejected" ? 'bg-[#e9e1e1] text-gray-900' : 'text-[#e9e1e1]'}`}>
          Rejected
        </button>
      </div>

      <div className="flex flex-col gap-16 pt-10 items-center justify-center">
        {isLoading ? (
          <div className="py-16">
            <Loader />
          </div>
        ) : isError ? (
          <div className="text-center text-red-500 py-16">{error.message}</div>
        ) : bugs.length === 0 ? (
          <div className="text-center py-16 font-medium text-sky-500">
            No bugs found!
          </div>
        ) : (
          <div className="lg:w-[90%] md:w-[95%] gap-6 w-full m-auto px-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mb-32 mt-10 place-items-center">
            {bugs.map((bug, idx) => <BugCard data={bug} key={idx} />)}
          </div>
        )}

        {bugs && bugs.length !== 0 && (
                <>
                    <div data-aos="fade-up" className="text-center px-3 pt-16">
                        Showing <span className="text-sky-500">{bugs.length}</span> results of page <span className="text-sky-500">{page}</span>.
                    </div>

                    <div data-aos="fade-up" className="flex items-center justify-center gap-10 px-6">
                        <button
                            disabled={page <= 1}
                            onClick={() => changeParams('page', page - 1)}
                            className="px-8 py-2.5 rounded-xl bg-white disabled:bg-gray-400 text-gray-900 text-lg font-semibold"
                        >
                            Prev
                        </button>
                        <button
                            disabled={itemsPerPage > bugs.length}
                            onClick={() => changeParams('page', page + 1)}
                            className="px-8 py-2.5 rounded-xl bg-white disabled:bg-gray-400 text-gray-900 text-lg font-semibold"
                        >
                            Next
                        </button>
                    </div>
                </>
            )}
      </div>
    </div>
  );
};



const BugCard = ({ data }) => {
  return (
    <Link
      data-aos="fade-up"
      to={`/bug/${data.$id}`}
      className="w-full max-w-sm min-w-[18rem] p-4 border-2 hover:border-gray-800 border-gray-900 rounded-2xl"
    >
      <div>
        <h3 className="text-xl font-semibold pl-2 text-white">{data.title}</h3>
        <p className="text-gray-400 text-sm pl-2">{data.description}</p>

        <div className="bg-gray-900 rounded-lg p-3 flex justify-between mt-4">
          <div>
            <p className="text-gray-400 text-sm">Date</p>
            <p className="text-medium text-sm text-white">
              {new Intl.DateTimeFormat("en-IN").format(
                new Date(data.$createdAt)
              )}
            </p>
          </div>

          <div>
            <p className="text-gray-400 text-sm">Status</p>
            <p className={`text-medium text-sm ${data.status === "reviewing" ? "text-yellow-500" : data.status === "resolved" ? "text-green-500" : "text-red-500"}`}>
              {data.status}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Bugs;
