import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import MalePlaceholder from "../../assets/man-placeholder.jpg";
import FemalePlaceHolder from "../../assets/woman-placeholder.jfif";
import useSerchQuery from "../../hooks/useSearchQuery";
import Meta from "../../components/Meta/Meta";

const courseCode = {
    phd: "Ph.D.",
    ug: "B.Tech",
    pg: "M.Tech",
    "faculty-staff": "Faculty/Staff"
};

const departments = [
    {
        name: "All",
        code: null
    },
    {
        name: "EE",
        code: "Electrical Engineering"
    },
    {
        name: "ME",
        code: "Mechanical Engineering"
    },
    {
        name: "CE",
        code: "Civil Enginnering"
    },
    {
        name: "CSE",
        code: "Computer Science & Engineering"
    },
    {
        name: "ECE",
        code: "Electronics and Communications Engineering"
    },
    {
        name: "Arch.",
        code: "Architecture"
    }
]

const getAlumnidata = async (course, department, page) => {
    try {
        const url = new URL("https://alumini-cell-nitp-two.vercel.app/members");
        if (department === "Architecture" && course === "B.Tech") course = "B.Arch";
        if (department === "Architecture" && course === "M.Tech") course = "MURP";
        if(department === "Architecture" && course === "Ph.D.") course = "Ph.D.";
        if (course) url.searchParams.append("degree", course);
        if (department) url.searchParams.append("department", department);
        url.searchParams.append("page", page);
        const res = await axios.get(url.href);
        const data = await res.data;
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

const AlumniDatabase = () => {
    const query = useSerchQuery();
    const course = courseCode[query.get("type")] || null;
    const [department, setDepartment] = useState(null);
    const [page, setPage] = useState(1);

    const { isPending, error, data, refetch } = useQuery({
        queryKey: ["members", course || "", department || "", page],
        queryFn: () => getAlumnidata(course, department, page),
        refetchOnWindowFocus: false,
        staleTime: Infinity
    });

    useEffect(() => {
        // Refetch data when the location changes (URL with query parameters changes)
        refetch();
    }, [location.search, refetch]);



    if (error)
        return (
            <div className="pt-24 px-8">
                An error has occurred: {error.message}
            </div>
        );

    return (
        <div className="min-h-screen">
            <Meta name="Alumni Database" />
            <div className="flex relative bg-[url(https://firebasestorage.googleapis.com/v0/b/kaisen2023.appspot.com/o/static-images%2F007d2522-8220-4d3d-b506-8fef870eb1df.jpg?alt=media&token=46a7d8e5-aa90-4461-bd2e-15df0204e7d5)] bg-no-repeat  w-full flex-col gap-3 items-center bg-cover justify-center py-20 text-center text-white h-[55vh]">
                <div className="absolute w-full inset-0 text-left pt-32 lg:pl-24 md:pl-16 pl-8 bg-gradient-to-t  from-[rgba(0,0,0,1)] via-[rgba(0,0,0,0.5)] to-transparent">
                    <p className="lg:text-5xl md:text-4xl text-3xl font-bold pb-1">
                        Alumni Database
                    </p>
                    <h5 className="lg:text-2xl md:text-xl text-lg font-medium pb-2">
                        <span className="text-sky-500">Searching</span> for NITP Alums?
                    </h5>
                    <h5 className="lg:text-2xl md:text-xl text-lg font-bold pb-2">
                        Type: <span className="text-rose-500">{course}</span>
                    </h5>

                    <div className="flex flex-wrap items-center gap-3 justify-center pt-5">
                        {
                            departments.map((dept, idx) => (
                                <button key={idx} onClick={() => {
                                    setDepartment(dept.code);
                                    setPage(1);
                                }} className={`border-[#e9e1e1] border font-semibold text-[#e9e1e1] px-6 py-2 text-lg rounded-xl hover:bg-[#e9e1e1] hover:text-gray-900 ${department === dept.code && 'bg-[#e9e1e1] text-gray-900'}`}>
                                    {dept.name}
                                </button>
                            ))
                        }
                    </div>
                </div>
            </div>

            {isPending ? <div className="pt-24 px-8 text-center text-base font-medium text-white">Loading...</div> :

                error ? <div className="pt-24 px-8 text-center text-base font-medium text-white">
                    An error has occurred: {error.message}
                </div> :

                    data.data.length === 0 ?
                        <div className="pt-24 px-8 text-center text-base font-medium text-white">
                            No items.
                        </div>
                        : <>
                            <div className="mt-8 lg:px-10 md:p-8 p-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                                {data.data.map((member, idx) => {
                                    return (
                                        <div
                                            key={idx}
                                            className="p-4 rounded-xl border border-gray-800 bg-[#171717] border-l-sky-500 border-l-4 shadow-lg w-full pt-5"
                                        >
                                            <div className="flex flex-row gap-5">
                                                <div className="w-20 h-20">
                                                    <img
                                                        className="rounded-full w-20 h-20"
                                                        src={
                                                            member.gender === "Female"
                                                                ? FemalePlaceHolder
                                                                : MalePlaceholder
                                                        }
                                                        alt="Member"
                                                    />
                                                </div>
                                                <div className="text-sm font-medium">
                                                    <p className="text-xl font-bold text-sky-500">{member.name}</p>
                                                    <p className="font-medium text-base text-gray-300">
                                                        {member.department} ({member.degree})
                                                    </p>
                                                    <p>
                                                        <span className="text-gray-400">Session:</span>{" "}
                                                        {member.academic_session ? member.academic_session : "N.A."}
                                                    </p>
                                                    <p>
                                                        <span className="text-gray-400">Roll No:</span>{" "}
                                                        {member.roll_no}
                                                    </p>
                                                    <p>
                                                        <span className="text-gray-400">Current Employment:</span>{" "}
                                                        {member.currently_employed}
                                                    </p>
                                                    {member.designation && (
                                                        <p>
                                                            <span className="text-gray-400">Designation:</span>{" "}
                                                            {member.designation}
                                                        </p>
                                                    )}
                                                    {member.current_company && (
                                                        <p>
                                                            <span className="text-gray-400">Company:</span>{" "}
                                                            {member.current_company}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="text-center px-3 pt-16">
                                Showing <span className="text-sky-500">{data.dataPerPage}</span> results of page <span className="text-sky-500">{page}</span>.
                            </div>

                            <div className="flex items-center justify-center pt-5 gap-10 px-6">
                                <button onClick={() => {
                                    window.scrollTo(0, 0);
                                    setPage(prev => --prev);
                                }} disabled={!data.hasPreviousPage} className="px-8 py-2.5 rounded-xl bg-white disabled:bg-gray-400 text-gray-900 text-lg font-semibold">Prev</button>
                                <button onClick={() => {
                                    window.scrollTo(0, 0);
                                    setPage(prev => ++prev);
                                }} disabled={!data.hasNextPage} className="px-8 py-2.5 rounded-xl bg-white disabled:bg-gray-400 text-gray-900 text-lg font-semibold">Next</button>
                            </div>
                        </>
            }
        </div>
    );
};

export default AlumniDatabase;
