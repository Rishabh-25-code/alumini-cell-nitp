import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import MalePlaceholder from "../../assets/man-placeholder.jpg";
import Meta from "../../components/Meta/Meta";
import { branches } from "../../utils/branches";
import { getAlumniData } from "../../services/documents";
import { useSearchParams } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { getImageURL } from "../../services/files";
import AlumniCard from "./AlumniCard";


const AlumniDatabase = () => {
    const [searchParams, setSearchParams] = useSearchParams({
        role: "all",
        page: 1,
        type: "name",
        search: "",
    });
    const role = searchParams.get("role") || "all";
    const page = parseInt(searchParams.get('page')) || 1;
    const search = searchParams.get('search') || "";
    const type = searchParams.get('type') || "jobTitle";
    const [itemsPerPage] = useState(21);
    const [branch, setBranch] = useState(null);
    const [currentPopup, setCurrentPopup] = useState(null); // [id, type]
    const [searchText, setSearchText] = useState(search);
    const [searchType, setSearchType] = useState(type);

    const { isLoading, isError, data: alumni } = useQuery({
        queryKey: ["members", role, page, search, branch, type],
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

        return () => clearTimeout(debounceTimer);
    }, [searchText]);

    const totalPages = alumni ? Math.ceil(alumni.total / itemsPerPage) : 0;

    const getPageNumbers = () => {
        const delta = 1; // pages shown on each side of current page
        const range = [];
        const rangeWithDots = [];
        let l;
    
        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || (i >= page - delta && i <= page + delta)) {
                range.push(i);
            }
        }
    
        for (const i of range) {
            if (l) {
                if (i - l === 2) {
                    rangeWithDots.push(l + 1);
                } else if (i - l > 2) {
                    rangeWithDots.push('...');
                }
            }
            rangeWithDots.push(i);
            l = i;
        }
    
        return rangeWithDots;
    };

    return (
        <div className="min-h-screen relative">
            <Meta name="Alumni Database" />
            <div className="relative">
                <div className="relative flex min-h-[22rem] w-full flex-col justify-center overflow-hidden bg-gradient-to-br from-sky-950 via-sky-800 to-slate-900 px-6 pt-24 text-white md:px-16 lg:px-24">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />
                    <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
                    <div className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-rose-300/10 blur-3xl" />
                    <div className="relative z-10 max-w-3xl">
                        <p className="lg:text-6xl md:text-5xl text-4xl font-bold pb-2">
                            Alumni Database
                        </p>
                        <h5 className="lg:text-2xl md:text-xl text-lg font-medium pb-3 text-slate-100">
                            Search alumni by name, batch, company, designation, or department.
                        </h5>
                        <h5 className="w-fit rounded-full border border-white/25 bg-white/10 px-4 py-2 text-base font-semibold backdrop-blur">
                            Degree: <span className="text-rose-200">{role.toUpperCase()}</span>
                        </h5>
                    </div>
                </div>

                <div className="page-shell relative z-10 -mt-8">
                    <div className='surface-card w-full md:px-6 px-4 relative flex flex-col md:gap-4 gap-3 items-center rounded-3xl py-6'>
                        <div className='flex-1 relative w-full'>
                            <input value={searchText} onChange={(e) => setSearchText(e.target.value)} type="search" placeholder="Search by name, company, batch or designation." className="w-full pl-11 px-5 md:py-3.5 py-3 rounded-2xl bg-white text-slate-900 font-normal" />
                            <FiSearch className="absolute md:top-4 top-3.5 text-xl left-3.5 text-slate-400" />
                        </div>

                        <div className="flex flex-col items-center gap-3 md:flex-row">
                            <p>
                                <span className="text-lg font-medium text-sky-800">Search by:</span>
                            </p>
                            <select value={searchType} onChange={(e) => {
                                setSearchType(e.target.value);
                                changeParams('type', e.target.value);
                            }} className='bg-white lg:px-4 md:px-4 px-2 md:py-2.5 py-2 font-normal md:w-[12rem] w-[9rem] text-slate-700 border border-slate-200 rounded-xl'>
                                <option value="name">Name</option>
                                <option value="batchEnd">Batch</option>
                                <option value="company">Company</option>
                                <option value="designation">Designation</option>
                            </select>
                        </div>
                        <div className="flex flex-col items-center gap-3 md:flex-row">
                            <p>
                                <span className="text-lg font-medium text-sky-800">Degree:</span>
                            </p>
                            <select value={searchType} onChange={(e) => {
                                setSearchType(e.target.value);
                                changeParams('role', e.target.value);
                            }} className='bg-white lg:px-4 md:px-4 px-2 md:py-2.5 py-2 font-normal md:w-[12rem] w-[9rem] text-slate-700 border border-slate-200 rounded-xl'>
                                <option value="all">All</option>
                                <option value="ug">UG</option>
                                <option value="pg">PG</option>
                                <option value="phd">Ph.D</option>
                                <option value="faculty-staff">Faculty/Staff</option>
                            </select>
                        </div>
                    </div>

                        <div className="flex flex-wrap items-center gap-3 justify-center pt-2">
                            <button onClick={() => {
                                setBranch(null);
                                changeParams("page", 1);
                            }} className={`border border-slate-200 font-semibold px-5 py-2 text-base rounded-full transition hover:border-sky-300 hover:bg-sky-50 hover:text-sky-900 ${branch === null ? 'bg-sky-700 !text-white border-sky-700' : 'text-slate-700 bg-white'}`}>
                                All
                            </button>
                            {
                                branches.map((dept, idx) => (
                                    <button key={idx} onClick={() => {
                                        setBranch(dept.value);
                                        changeParams("page", 1);
                                    }} className={`border border-slate-200 font-semibold md:px-5 px-4 py-2 text-base rounded-full transition hover:border-sky-300 hover:bg-sky-50 hover:text-sky-900 ${branch === dept.value ? 'bg-sky-700 !text-white border-sky-700' : 'text-slate-700 bg-white'}`}>
                                        {dept.value}
                                    </button>
                                ))
                            }
                        </div>
                    </div>
                </div>

            {isLoading ? <div className="pt-32 px-8 text-center text-base font-medium text-slate-700">Loading...</div> :
                isError ? <div className="pt-24 px-8 text-center text-base font-medium text-slate-700">
                    An error has occurred! Please try again later.
                </div> :

                    alumni && alumni.documents.length === 0 ?
                        <div className="pt-32 px-8 text-center text-base font-medium text-slate-700">
                            No items.
                        </div>
                        :
                        <>
                            {currentPopup !== null && <AlumniCard person={alumni.documents[currentPopup]} close={() => setCurrentPopup(null)} />}
                            <div className="mt-16 lg:px-10 md:p-8 p-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                                {alumni.documents.map((person, idx) => {
                                    return (
                                        <div
                                            onClick={() => setCurrentPopup(idx)}
                                            data-aos="fade-up"
                                            key={idx}
                                            className="surface-card rounded-2xl border-l-sky-600 border-l-4 cursor-pointer w-full transition hover:-translate-y-1"
                                        >
                                            <div className="flex flex-col gap-5 hover:scale-95 transition p-4 py-6">
                                                <div className="bg-cover flex items-center justify-center lg:h-32 md:h-24 h-20 lg:w-32 md:w-24 w-20 rounded-3xl overflow-hidden">
                                                    <img
                                                        id={person.$id}
                                                        className="w-full object-cover lg:h-32 md:h-24 h-20"
                                                        src={person.image ? getImageURL(person.image) : MalePlaceholder}
                                                        alt={person.name}
                                                    />
                                                </div>

                                                <div className="text-sm font-medium flex-1">
                                                    <p className="text-xl font-bold text-sky-800">{person.title} {person.name}</p>
                                                    <p className="font-medium text-base text-slate-700">
                                                        {person.branch} ({person.degree})
                                                    </p>
                                                    {person.batchEnd && (
                                                        <p>
                                                            <span className="text-slate-500">Batch:</span>{" "}
                                                            {person.batchStart ? person.batchStart + "-" + person.batchEnd : person.batchEnd}
                                                        </p>
                                                    )}
                                                    {person.company && (
                                                        <p>
                                                            <span className="text-slate-500">Company:</span>{" "}
                                                            {person.company}
                                                        </p>
                                                    )}
                                                    {person.designation && (
                                                        <p>
                                                            <span className="text-slate-500">Designation:</span>{" "}
                                                            {person.designation}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <>
                                <div data-aos="fade-up" className="text-center px-3 pt-16">
                                    <p>Showing <span className="text-sky-500">{itemsPerPage * (page - 1) + 1}-{Math.min(
                                        itemsPerPage * page,
                                        alumni.total
                                    )}</span> results of <span className="text-sky-500">{alumni.total}</span></p>
                                </div>

                                <div data-aos="fade-up" className="flex items-center justify-center pt-8 gap-1.5 px-6 flex-wrap">
                                    <button
                                        disabled={page <= 1}
                                        onClick={() => changeParams('page', 1)}
                                        className="h-10 w-10 flex items-center justify-center rounded-xl bg-white text-slate-600 font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-sky-50 hover:text-sky-800 transition"
                                        aria-label="First page"
                                    >
                                        «
                                    </button>
                                    <button
                                        disabled={page <= 1}
                                        onClick={() => changeParams('page', page - 1)}
                                        className="h-10 w-10 flex items-center justify-center rounded-xl bg-white text-slate-600 font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-sky-50 hover:text-sky-800 transition"
                                        aria-label="Previous page"
                                    >
                                        ‹
                                    </button>
                                
                                    {getPageNumbers().map((p, idx) =>
                                        p === '...' ? (
                                            <span key={`dots-${idx}`} className="h-10 w-10 flex items-center justify-center text-slate-400 select-none">
                                                ⋯
                                            </span>
                                        ) : (
                                            <button
                                                key={p}
                                                onClick={() => changeParams('page', p)}
                                                className={`h-10 w-10 flex items-center justify-center rounded-xl font-semibold transition ${
                                                    p === page
                                                        ? 'bg-sky-700 text-white shadow-md shadow-sky-700/30'
                                                        : 'bg-white text-slate-600 hover:bg-sky-50 hover:text-sky-800'
                                                }`}
                                            >
                                                {p}
                                            </button>
                                        )
                                    )}
                                
                                    <button
                                        disabled={page >= totalPages}
                                        onClick={() => changeParams('page', page + 1)}
                                        className="h-10 w-10 flex items-center justify-center rounded-xl bg-white text-slate-600 font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-sky-50 hover:text-sky-800 transition"
                                        aria-label="Next page"
                                    >
                                        ›
                                    </button>
                                    <button
                                        disabled={page >= totalPages}
                                        onClick={() => changeParams('page', totalPages)}
                                        className="h-10 w-10 flex items-center justify-center rounded-xl bg-white text-slate-600 font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-sky-50 hover:text-sky-800 transition"
                                        aria-label="Last page"
                                    >
                                        »
                                    </button>
                                </div>
                            </>
                        </>
            }
        </div>
    );
};

export default AlumniDatabase;
