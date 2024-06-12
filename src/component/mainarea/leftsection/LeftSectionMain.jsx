import { Box, Pagination, Select } from "@mantine/core";
import React, { useEffect, useState } from "react";
import "../../../styles/NavPreviewJobs.css";
import LeftSectionJobs from "./LeftSectionJobs";
import JobData from "../../../JobData";

export default function LeftSectionMain() {
  const [ismobileview, setismobileview] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setismobileview(window.innerWidth < 768);

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  function chunk(array, size) {
    if (!array.length) {
      return [];
    }
    const head = array.slice(0, size);
    const tail = array.slice(size);
    return [head, ...chunk(tail, size)];
  }
  const data = chunk(JobData, 5);
  const [activePage, setPage] = useState(1);

  return (
    <>
      <Box className=" lg:w-1/3">
        <Box className="flex justify-evenly md:justify-center md:gap-3 lg:justify-start lg:ml-10">
          <Box className="text-xl mt-1 font-bold md:text-2xl">Sort By:</Box>
          <Select className="w-48 " data={["Latest", "Popular"]}></Select>
        </Box>
        {data[activePage - 1].map((e, key) => {
          return (
            <LeftSectionJobs
              key={key}
              logo={e.logo}
              title={e.title}
              company={e.company}
              subtitle={e.subtitle}
              deadline={e.deadline}
            />
          );
        })}
        <Box>
          {ismobileview ? (
            <Pagination
              className="mt-6 ml-16 md:ml-64 lg:ml-16 xl:ml-36 "
              total={data.length}
              value={activePage}
              onChange={setPage}
              size="md"
              color="rgba(19, 64, 143, 1)"
            />
          ) : (
            <Pagination
              className="mt-6 ml-16 md:ml-64 lg:ml-12 xl:ml-24 "
              total={data.length}
              value={activePage}
              onChange={setPage}
              size="lg"
              color="rgba(19, 64, 143, 1)"
            />
          )}
        </Box>
      </Box>
    </>
  );
}
