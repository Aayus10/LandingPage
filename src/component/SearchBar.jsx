import { Box, Button, Select, TextInput } from "@mantine/core";
import React from "react";
import "./styles/Search.css";

export default function SearchBar() {
  return (
    <>
      <Box className="flex-col mx-2 p-1 gap-y-96 mt-4">
        <Box className="text-lg justify-center lg:justify-start flex text-blue-950 font-semibold md:text-xl xl:text-2xl">
          <Box className="text-black font-semibold ">Home/ </Box> Search Results
        </Box>
        <Box className="text-lg flex justify-center lg:justify-start gap-1 font-medium text-blue-800 md:text-xl xl:text-2xl">
          <Box className="text-blue-950 text-lg md:text-xl xl:text-2xl">
            52 Results for{" "}
          </Box>{" "}
          Frontend Developer
        </Box>
        <Box>
          <Box className="xs:flex-col space-y-2 lg:flex gap-8">
            <Box className="flex justify-between mx-[5%] md:mx-0 lg:w-5/12 lg:mt-2 xl:justify-start xl:gap-4">
              <TextInput
                className="search w-8/12 lg:w-8/12 "
                placeholder="Enter job title or skills"
              ></TextInput>
              <Button className="w-4/12 mt-1" color="#395389">
                Search
              </Button>
            </Box>
            <Box className="xs:flex-col xs:justify-center space-y-2 md:flex md:gap-2 md:space-y-0 md:flex-wrap lg:flex-nowrap lg:space-y-0 lg:items-start">
              <Select
                className="select-filters w-[50%] mx-[20%] md:mx-0 md:w-1/4 lg:w-1/5  "
                placeholder="Experience"
                data={["Fresher", "Junior", "Senior"]}
                style={{ placeholderColor: "black" }}
              ></Select>
              <Select
                className="select-filters w-[50%] mx-[20%] md:mx-0 md:w-1/4 lg:w-1/5"
                placeholder="Category"
                data={["Frontend", "Backend", "QA", "Full Stack"]}
              ></Select>
              <Select
                className="select-filters w-[50%] mx-[20%] md:mx-0 md:w-1/4 lg:w-1/5"
                placeholder="Job Type"
                data={["Part-Time", "Full-Time"]}
              ></Select>
              <Select
                className="select-filters w-[50%] mx-[20%] md:mx-0 md:w-1/4 lg:w-1/5"
                placeholder="Location"
                data={["On-site", "Remote", "Hybrid"]}
              ></Select>
              <Select
                className="select-filters w-[50%] mx-[20%] md:mx-0 md:w-1/4 lg:w-1/5"
                placeholder="More Filters"
              ></Select>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
