import Card from "./Card";
import React, { useState, useEffect } from "react";

const url = "https://alumini-cell-nitp-two.vercel.app/members";

const PGDatabase = () => {
  const [data, setData] = useState({
    data: [],
    dataPerPage: 25,
    hasNextPage: false,
    hasPreviousPage: false,
    nextPage: null,
    page: 1,
    previousPage: null,
  });

  const fetchInfo = async (page) => {
    try {
      const res = await fetch(`${url}?degree=${"M.Tech"}`);
      const apiData = await res.json();

      //   Filter data based on the "degree" property
      const filteredData = apiData.data.filter((member) =>
        ["M.Tech"].includes(member.degree)
      );

      console.log(filteredData);
      setData((prevData) => ({
        ...prevData,
        data: filteredData,
        hasNextPage: apiData.hasNextPage,
        hasPreviousPage: apiData.hasPreviousPage,
        nextPage: apiData.nextPage,
        page: apiData.page,
        previousPage: apiData.previousPage,
      }));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchInfo(data.page);
  }, [data.page]);

  const handleNextPage = () => {
    if (data.hasNextPage) {
      setData((prevData) => ({
        ...prevData,
        page: prevData.nextPage,
      }));
    }
  };

  const handlePreviousPage = () => {
    if (data.hasPreviousPage) {
      setData((prevData) => ({
        ...prevData,
        page: prevData.previousPage,
      }));
    }
  };

  return (
    <>
      <div className="pt-16">
        <h1
          data-aos="fade-right"
          className="font-extrabold text-transparent lg:text-8xl md:text-7xl text-6xl bg-clip-text bg-gradient-to-r from-blue-400  to-sky-600 m-10 large-heading "
        >
          PG-Database
        </h1>
        <div>
          <div className="my-20 mx-5 flex flex-wrap gap-10 items-center justify-center">
            <button
              onClick={handlePreviousPage}
              disabled={!data.hasPreviousPage}
              className=""
            >
              Previous Page
            </button>
            <button
              onClick={handleNextPage}
              disabled={!data.hasNextPage}
              className=""
            >
              Next Page
            </button>
          </div>
          <div
            className="my-20 mx-5 flex flex-wrap gap-10 items-center justify-center"
            id="Team_main"
          >
            {data.data && data.data.length > 0 ? (
              data.data.map((member) => (
                <Card key={member.id} member={member} />
              ))
            ) : (
              <p>No members found.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PGDatabase;
