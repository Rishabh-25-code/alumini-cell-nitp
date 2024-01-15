import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import MalePlaceholder from "../../assets/man-placeholder.jpg";
import Meta from "../../components/Meta/Meta";
import { branches } from "../../utils/branches";
import { getAlumniData } from "../../services/documents";
import { useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form"
import { Input } from "../../components/FormComponents";


const AlumniDatabase = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({ trim: true });
    const [searchParams, setSearchParams] = useSearchParams({
        type: null,
        page: 1,
        batch: "",
    });
    const role = searchParams.get("type") || null;
    const batchEnd = searchParams.get("batch") || null;
    const [branch, setBranch] = useState(null);
    const page = parseInt(searchParams.get("page")) || 1;
    const [itemsPerPage] = useState(24);

    const { isPending, isError, data: alumni, refetch } = useQuery({
        queryKey: ["members", role || "", branch || "", batchEnd || "", page],
        queryFn: () => getAlumniData(itemsPerPage, (page - 1) * itemsPerPage, role, batchEnd, branch),
        staleTime: Infinity
    });

    const changeParams = (key, value) => {
        setSearchParams(prev => {
            prev.set(key, value);
            return prev;
        }, { replace: true });
        window.scrollTo(0, 0);
    }

    const onSubmit = (data) => {
        console.log(data);
        if (data.batch) {
            changeParams("batch", data.batch)
        } else if (data.batch === "") {
            changeParams("batch", "")
        }
    }

    return (
        <div className="min-h-screen">
            <Meta name="Alumni Database" />
            <div className="flex relative bg-[url(https://firebasestorage.googleapis.com/v0/b/kaisen2023.appspot.com/o/static-images%2F007d2522-8220-4d3d-b506-8fef870eb1df.jpg?alt=media&token=46a7d8e5-aa90-4461-bd2e-15df0204e7d5)] bg-no-repeat  w-full flex-col gap-3 items-center bg-cover justify-center py-20 text-center text-white h-[55vh]">
                <div className="absolute w-full inset-0 text-left pt-28  bg-gradient-to-t  from-[rgba(0,0,0,1)] via-[rgba(0,0,0,0.5)] to-transparent">
                    <div className="lg:pl-24 md:pl-16 pl-8">
                        <p className="lg:text-5xl md:text-4xl text-3xl font-bold pb-1">
                            Alumni Database
                        </p>
                        <h5 className="lg:text-2xl md:text-xl text-lg font-medium pb-2">
                            <span className="text-sky-500">Searching</span> for NITP Alumnus?
                        </h5>
                        <h5 className="lg:text-2xl md:text-xl text-lg font-bold pb-2">
                            Type: <span className="text-rose-500">{role}</span>
                        </h5>
                    </div>

                    <div className="lg:max-w-3xl md:max-w-2xl w-full px-6 m-auto py-10">
                        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex md:gap-5 gap-2 items-end justify-center">
                            {/* <Input
                                label="Name"
                                type="search"
                                placeholder="John Doe"
                                title="name"
                                reactHookForm={register('name', {
                                    minLength: {
                                        value: 1,
                                        message: 'Name must be at least 4 characters',
                                    }
                                })}
                                className='bg-gray-950 rounded-xl px-3 py-2 mt-1 w-full text-gray-300'
                                
                            /> */}
                            <div className="lg:w-[17rem] md:w-[14rem] w-[12rem]">
                                <Input
                                    label="Batch"
                                    type="number"
                                    placeholder="2002"
                                    title="batch"
                                    reactHookForm={register('batch', {
                                        minLength: {
                                            value: 4,
                                            message: 'Batch must be at least 4 characters',
                                        },
                                        maxLength: {
                                            value: 4,
                                            message: 'Batch must not exceed 4 characters',
                                        },
                                        onChange: (e) => {
                                            if (e.target.value > new Date().getFullYear() + 4) {
                                                e.target.value = new Date().getFullYear() + 4;
                                            }

                                            if (e.target.value.length === 4 && e.target.value < 1800) {
                                                e.target.value = 1800;
                                            }

                                            if (e.target.value.length === 0) {
                                                changeParams("batch", "");
                                            }
                                        }
                                    })}
                                    className='bg-gray-950 rounded-xl px-3 py-2 mt-1 w-full text-gray-300'
                                />
                            </div>
                            <button type="submit" className="bg-sky-600 md:h-12 h-10 lg:py-3 py-2 lg:px-5 px-4  md:text-base text-sm md:rounded-2xl rounded-xl">
                                Search
                            </button>
                        </form>
                        <div className="text-center pt-2">
                            {errors.name && <p className="text-rose-500">{errors.name.message}</p>}
                            {errors.batch && <p className="text-rose-500">{errors.batch.message}</p>}
                        </div>

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
                                    }} className={`border-[#e9e1e1] border font-semibold text-[#e9e1e1] px-5 py-2 text-base rounded-xl hover:bg-[#e9e1e1] hover:text-gray-900 ${branch === dept.value && 'bg-[#e9e1e1] text-gray-900'}`}>
                                        {dept.value}
                                    </button>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            {isPending ? <div className="pt-32 px-8 text-center text-base font-medium text-white">Loading...</div> :

                isError ? <div className="pt-23 px-8 text-center text-base font-medium text-white">
                    An error has occurred! Please try again later.
                </div> :

                    alumni.length === 0 ?
                        <div className="pt-32 px-8 text-center text-base font-medium text-white">
                            No items.
                        </div>
                        : <>
                            <div className="mt-24 lg:px-10 md:p-8 p-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                                {alumni.map((person, idx) => {
                                    return (
                                        <div
                                            data-aos="fade-up"
                                            key={idx}
                                            className="rounded-xl border hover:bg-[#101010] hover:border-gray-700 hover:border-l-sky-400  border-gray-900 bg-[#000000] border-l-sky-500 border-l-4 shadow-lg w-full"
                                        >
                                            <div className="flex flex-row gap-5 hover:scale-95 transition p-4 py-6">
                                                <div className="lg:w-20 md:w-16 w-14 lg:h-20 md:h-16 h-14">
                                                    <img
                                                        id={person.$id}
                                                        className="rounded-full lg:w-20 md:w-16 w-14 lg:h-20 md:h-16 h-14"
                                                        src={MalePlaceholder}
                                                        alt={person.name}
                                                    />
                                                </div>
                                                <div className="text-sm font-medium flex-1">
                                                    <p className="text-xl font-bold text-sky-500">{person.title}. {person.fname} {person.lname}</p>
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
                                    Showing <span className="text-sky-500">{alumni.length}</span> results of page <span className="text-sky-500">{page}</span>.
                                </div>

                                <div data-aos="fade-up" className="flex items-center justify-center pt-5 gap-10 px-6">
                                    <button disabled={page <= 1} onClick={() => {
                                        changeParams('page', page - 1);
                                    }} className="px-8 py-2.5 rounded-xl bg-white disabled:bg-gray-400 text-gray-900 text-lg font-semibold">Prev</button>
                                    <button disabled={itemsPerPage > alumni.length} onClick={() => {
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
