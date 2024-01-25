import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import MalePlaceholder from "../../assets/man-placeholder.jpg";
import Meta from "../../components/Meta/Meta";
import { branches } from "../../utils/branches";
import { getAlumniData } from "../../services/documents";
import { useSearchParams } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { getImageURL } from "../../services/files";


const AlumniDatabase = () => {
    const [searchParams, setSearchParams] = useSearchParams({
        role: null,
        page: 1,
        type: "name",
        search: "",
    });
    const role = searchParams.get("role") || null;
    const page = parseInt(searchParams.get('page')) || 1;
    const search = searchParams.get('search') || "";
    const type = searchParams.get('type') || "jobTitle";
    const [itemsPerPage] = useState(21);
    const [branch, setBranch] = useState(null);

    const [searchText, setSearchText] = useState(search);
    const [searchType, setSearchType] = useState(type);

    const { isLoading, isError, data: alumni } = useQuery({
        queryKey: ["members", role, page, search, branch],
        queryFn: () => getAlumniData(itemsPerPage, (page - 1) * itemsPerPage, role, search, type, branch),
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
        <div className="min-h-screen">
            <Meta name="Alumni Database" />
            <div className="flex relative bg-[url(https://firebasestorage.googleapis.com/v0/b/kaisen2023.appspot.com/o/static-images%2F007d2522-8220-4d3d-b506-8fef870eb1df.jpg?alt=media&token=46a7d8e5-aa90-4461-bd2e-15df0204e7d5)] bg-no-repeat  w-full flex-col gap-3 items-center bg-cover justify-center py-20 text-center text-white h-[55vh]">
                <div className="absolute w-full inset-0 text-left pt-28  bg-gradient-to-t  from-[rgba(0,0,0,1)] via-[rgba(0,0,0,0.5)] to-transparent">
                    <div className="lg:pl-24 md:pl-16 pl-6">
                        <p className="lg:text-5xl md:text-4xl text-3xl font-bold pb-1">
                            Alumni Database
                        </p>
                        <h5 className="lg:text-2xl md:text-xl text-lg font-medium pb-2">
                            <span className="text-sky-500">Searching</span> for NITP Alumnus?
                        </h5>
                        <h5 className="lg:text-2xl md:text-xl text-lg font-bold pb-2">
                            Type: <span className="text-rose-500">{role.toUpperCase()}</span>
                        </h5>
                    </div>

                    <div className='lg:w-[80%] w-full md:px-6 px-3 mt-5  m-auto relative flex md:gap-3 gap-2 items-center'>
                        <div className='flex-1 relative w-full'>
                            <input value={searchText} onChange={(e) => setSearchText(e.target.value)} type="search" placeholder="Search by title, company, skills.." className="w-full pl-10 px-5 md:py-2.5 py-2 rounded-xl bg-gray-950 text-gray-200 font-normal" />
                            <FiSearch className="absolute md:top-4 top-3 text-xl left-3.5 text-gray-400" />
                        </div>

                        <select value={searchType} onChange={(e) => {
                            setSearchType(e.target.value);
                            changeParams('type', e.target.value);
                        }} className='bg-gray-950 rounded-xl lg:px-4 md:px-4 px-2 md:py-2.5 py-2 font-normal text-gray-300'>
                            <option value="">Search By</option>
                            <option value="name">Name</option>
                            <option value="batchEnd">Batch</option>
                            <option value="company">Company</option>
                            <option value="designation">Designation</option>
                        </select>
                    </div>

                    <div className="lg:max-w-3xl md:max-w-2xl w-full md:px-6 px-4 m-auto py-10 pt-5">
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
                </div>
            </div>

            {isLoading ? <div className="pt-32 px-8 text-center text-base font-medium text-white">Loading...</div> :
                isError ? <div className="pt-24 px-8 text-center text-base font-medium text-white">
                    An error has occurred! Please try again later.
                </div> :

                    alumni?.documents.length === 0 ?
                        <div className="pt-32 px-8 text-center text-base font-medium text-white">
                            No items.
                        </div>
                        : <>
                            <div className="mt-24 lg:px-10 md:p-8 p-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                                {alumni.documents.map((person, idx) => {
                                    return (
                                        <div
                                            data-aos="fade-up"
                                            key={idx}
                                            className="rounded-xl border hover:bg-[#101010] hover:border-gray-700 hover:border-l-sky-400  border-gray-900 bg-[#000000] border-l-sky-500 border-l-4 shadow-lg w-full"
                                        >
                                            <div className="flex flex-row gap-5 hover:scale-95 transition p-4 py-6">
                                                <div className="lg:w-20 bg-cover flex items-center justify-center md:w-16 w-14 lg:h-20 md:h-16 h-14 rounded-full overflow-hidden">
                                                    <img
                                                        id={person.$id}
                                                        className="w-full object-cover lg:h-20 md:h-16 h-14"
                                                        src={person.image ? getImageURL(person.image) : MalePlaceholder}
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
                                                </div>
                                            </div>
                                        </div>
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
    );
};

export default AlumniDatabase;
