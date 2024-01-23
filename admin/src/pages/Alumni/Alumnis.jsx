import Heading from "../../components/Headings/Heading";
import Meta from "../../components/Meta/Meta";
import { getImageURL } from "../../services/files";
import { getAlumniData } from "../../services/documents";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { branches } from "../../utils/branches";
import { FiSearch } from "react-icons/fi";

const Alumnis = () => {
    const [searchParams, setSearchParams] = useSearchParams({
        role: 'all',
        page: 1,
        type: "name",
        search: "",
        status: "all"
    });
    const role = searchParams.get("role") || "all";
    const page = parseInt(searchParams.get('page')) || 1;
    const search = searchParams.get('search') || "";
    const status = searchParams.get('status') || "all"
    const type = searchParams.get('type') || "jobTitle";
    const [itemsPerPage] = useState(21);
    const [branch, setBranch] = useState(null);

    const [searchText, setSearchText] = useState(search);
    const [searchType, setSearchType] = useState(type);

    const { isLoading, isError, data: alumni, refetch, error } = useQuery({
        queryKey: ["members", role, page, search, branch, status],
        queryFn: () => getAlumniData(itemsPerPage, (page - 1) * itemsPerPage, role, search, type, branch, status),
        staleTime: Infinity
    });

    const changeParams = (key, value) => {
        setSearchParams(prev => {
            prev.set(key, value);
            if (key === "search" || key === "type") prev.set("page", 1);
            return prev;
        }, { replace: true });
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        const debounceTimer = setTimeout(() => {
            changeParams('search', searchText);
        }, 500);

        // Cleanup the timer on component unmount
        return () => clearTimeout(debounceTimer);
    }, [searchText]);


    return (
        <div className="pt-24">
            <Meta name="Alumni Profiles" />
            <Heading heading="Alumni Profiles"></Heading>

            <div className='md:px-10 px-5 flex mt-6 gap-2.5'>
                <button onClick={() => {
                    changeParams('status', 'all');
                }} className={`border-white border font-semibold  px-5 py-2 text-base rounded-xl hover:bg-white hover:text-gray-900 ${status === "all" ? 'bg-white text-gray-900' : 'text-white'}`}>
                    All
                </button>
                <button onClick={() => {
                    changeParams('status', 'reviewing');
                }} className={`border-yellow-500 border font-semibold  px-4 py-1.5 text-base rounded-xl hover:bg-yellow-500 hover:text-gray-900 ${status === "reviewing" ? 'bg-yellow-500 text-gray-900' : 'text-yellow-500'}`}>
                    Reviewing
                </button>
                <button onClick={() => {
                    changeParams('status', 'approved');
                }} className={`border-green-500 border font-semibold  px-4 py-1.5 text-base rounded-xl hover:bg-green-500 hover:text-gray-900 ${status === "approved" ? 'bg-green-500 text-gray-900' : 'text-green-500'}`}>
                    Approved
                </button>
                <button onClick={() => {
                    changeParams('status', 'rejected');
                }} className={`border-rose-500 border font-semibold  px-4 py-1.5 text-base rounded-xl hover:bg-rose-500 hover:text-gray-900 ${status === "rejected" ? 'bg-rose-500 text-gray-900' : 'text-rose-500'}`}>
                    Rejected
                </button>
                <button onClick={() => {
                    changeParams('status', 'uploaded');
                }} className={`border-blue-500 border font-semibold  px-4 py-1.5 text-base rounded-xl hover:bg-blue-500 hover:text-gray-900 ${status === "approved" ? 'bg-blue-500 text-gray-900' : 'text-blue-500'}`}>
                    Uploaded
                </button>
            </div>

            <div className='lg:w-[80%] w-full md:px-6 px-3 mt-16  m-auto relative flex md:gap-3 gap-2 items-center'>
                <div className='flex-1 relative w-full'>
                    <input value={searchText} onChange={(e) => setSearchText(e.target.value)} type="search" placeholder="Search by title, company, skills.." className="w-full pl-10 px-5 md:py-2.5 py-2 rounded-xl bg-[#101010] text-gray-200 font-normal" />
                    <FiSearch className="absolute md:top-3 top-3 text-xl left-3.5 text-gray-400" />
                </div>

                <select value={role} onChange={(e) => {
                    changeParams('role', e.target.value);
                }} className='bg-[#101010] rounded-xl lg:px-4 md:px-4 px-2 md:py-2.5 py-2 font-normal text-gray-300'>
                    <option value="">Select Type</option>
                    <option value="all">All Roles</option>
                    <option value="ug">UG</option>
                    <option value="pg">PG</option>
                    <option value="phd">Ph.D</option>
                    <option value="faculty-staff">Faculty/Staff</option>
                </select>

                <select value={searchType} onChange={(e) => {
                    setSearchType(e.target.value);
                    changeParams('type', e.target.value);
                }} className='bg-[#101010] rounded-xl lg:px-4 md:px-4 px-2 md:py-2.5 py-2 font-normal text-gray-300'>
                    <option value="">Search By</option>
                    <option value="name">Name</option>
                    <option value="batchEnd">Batch</option>
                    <option value="company">Company</option>
                    <option value="designation">Designation</option>
                </select>
            </div>

            <div className="lg:max-w-3xl md:max-w-2xl w-full md:px-6 px-4 m-auto pt-5">
                <div className="flex flex-wrap items-center gap-3 justify-center pt-6">
                    <button onClick={() => {
                        setBranch(null);
                        changeParams("page", 1);
                    }} className={`border-[#e9e1e1] border font-semibold text-[#e9e1e1] px-5 py-2 text-base rounded-xl hover:bg-[#e9e1e1] hover:text-gray-900 ${branch === null && 'bg-[#e9e1e1] text-gray-900'}`}>
                        All
                    </button>
                    {
                        branches.map((dept, idx) => (
                            <button key={idx} onClick={() => {
                                setBranch(dept.value);
                                changeParams("page", 1);
                            }} className={`border-[#e9e1e1] border font-semibold text-[#e9e1e1] md:px-5 px-4 py-2 text-base rounded-xl hover:bg-[#e9e1e1] hover:text-gray-900 ${branch === dept.value && 'bg-[#e9e1e1] text-gray-900'}`}>
                                {dept.value}
                            </button>
                        ))
                    }
                </div>
            </div>

            {isLoading ? <div className="pt-32 px-8 text-center text-base font-medium text-white">Loading...</div> :
                isError ? <div className="pt-32 px-8 text-center text-base font-medium text-white flex flex-col gap-4">
                    <p>{error.message}</p>
                    <button onClick={refetch} className="text-sky-500 font-medium">
                        Retry
                    </button>
                </div> :
                    alumni?.documents.length === 0 ?
                        <div className="pt-32 px-8 text-center text-base font-medium text-white">
                            No items.
                        </div>
                        : <>
                            <div className="mt-16 lg:px-10 md:p-8 p-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                                {alumni.documents.map((person, idx) => {
                                    return (
                                        <Link 
                                            to={`/alumni/${person.$id}`}
                                            data-aos="fade-up"
                                            key={idx}
                                            className="rounded-xl border hover:bg-[#101010] hover:border-gray-700 hover:border-l-sky-400  border-gray-900 bg-[#000000] border-l-sky-500 border-l-4 shadow-lg w-full"
                                        >
                                            <div className="flex flex-row gap-5 hover:scale-95 transition p-4 py-6">
                                                <div className="lg:w-20 md:w-16 w-14 lg:h-20 md:h-16 h-14">
                                                    <img
                                                        id={person.$id}
                                                        className="rounded-full lg:w-20 md:w-16 w-14 lg:h-20 md:h-16 h-14"
                                                        src={person.image ? getImageURL(person.image) : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw-1B2f_Lrb6WkenAVQw206_ZKeFRfYSm1MqMh8ckJdg&s'}
                                                        alt={person.name}
                                                    />
                                                </div>
                                                <div className="text-sm font-medium flex-1">
                                                    <p className="text-xl font-bold text-sky-500">{person.title} {person.name}</p>
                                                    <p className="font-medium text-base text-gray-300">
                                                        {person.branch} ({person.degree})
                                                    </p>
                                                    {person.batchEnd && (
                                                        <p>
                                                            <span className="text-gray-400">Batch:</span>{" "}
                                                            {person.batchStart ? person.batchStart + "-" + person.batchEnd : person.batchEnd}
                                                        </p>
                                                    )}
                                                    {person.company && (
                                                        <p>
                                                            <span className="text-gray-400">Company:</span>{" "}
                                                            {person.company}
                                                        </p>
                                                    )}
                                                    {person.designation && (
                                                        <p>
                                                            <span className="text-gray-400">Designation:</span>{" "}
                                                            {person.designation}
                                                        </p>
                                                    )}
                                                    <p className="text-gray-400">Status: <span className={`text-medium text-sm ${person.status === "reviewing" ? "text-yellow-500" : person.status === "approved" ? "text-green-500" : person.status === null? "text-blue-500": "text-red-500"}`}>{person.status === null ?
                                                        "uploaded" : person.status
                                                    }</span></p>
                                                </div>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>

                            {alumni && <>
                                <div data-aos="fade-up" className="text-center px-3 pt-16">
                                    <p>Showing <span className="text-sky-500">{itemsPerPage * (page - 1) + 1}-{Math.min(
                                        itemsPerPage * page,
                                        alumni.total
                                    )}</span> results of <span className="text-sky-500">{alumni.total}</span></p>
                                </div>

                                <div data-aos="fade-up" className="flex items-center justify-center pt-5 gap-10 px-6">
                                    <button disabled={page <= 1} onClick={() => {
                                        changeParams('page', page - 1);
                                    }} className="px-8 py-2.5 rounded-xl bg-white disabled:bg-gray-400 text-gray-900 text-lg font-semibold">Prev</button>
                                    <button disabled={itemsPerPage > alumni.documents.length} onClick={() => {
                                        changeParams('page', page + 1);
                                    }} className="px-8 py-2.5 rounded-xl bg-white disabled:bg-gray-400 text-gray-900 text-lg font-semibold">Next</button>
                                </div>
                            </>
                            }
                        </>
            }
        </div>
    )
}

export default Alumnis