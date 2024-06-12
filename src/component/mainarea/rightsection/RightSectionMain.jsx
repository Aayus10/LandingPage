import { Box, Button, Image } from "@mantine/core";
import React from "react";
import "../../../styles/NavPreviewJobs.css";
import icon from "../../../assets/wolkswagen.jpg";
import {
  FaDollarSign,
  FaGenderless,
  FaHeart,
  FaLevelUpAlt,
  FaSuitcase,
  FaTasks,
} from "react-icons/fa";
import { FaHouse, FaPeopleGroup } from "react-icons/fa6";
import RightSectionDesc from "./RightSectionDesc";

export default function RightSectionMain() {
  return (
    <>
      <Box className="mt-4  lg:w-2/3 lg:mt-0 lg:ml-2 ">
        <Box className="md:flex xs:flex-col md:justify-between">
          <Box className="md:w-7/12 flex justify-evenly mx-1 md:mt-3  md:justify-start">
            <Box>
              <Image
                className="h-[90px] md:h-[120px]  lg:h-[120px] "
                src={icon}
              ></Image>
            </Box>
            <Box className="flex-col ml-2 md:ml-4">
              <Box className="text-lg font-bold text-blue-950 md:text-2xl xl:text-3xl">
                Sr. Frontend Engineer
              </Box>
              <Box className="text-md font-semibold text-blue-700 md:text-xl xl:text-2xl">
                Volkswagen Pvt. Ltd.
              </Box>
              <Box className="mt-2 flex lg:mt-5">
                <FaHouse className="mt-1 md:h-6" />
                <Box className="ml-2 text-md md:text-xl xl:text-2xl ">
                  Kathmandu
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="md:w-4/12 flex justify-evenly mx-1 mt-2  md:justify-evenly ">
            <Box className="md:mt-6 ">
              <Button color="darkblue">Apply Now</Button>
            </Box>
            <Box>
              <FaHeart className="favs-icon" />
            </Box>
          </Box>
        </Box>
        <Box className=" mx-1 mt-4 text-red-800 font-bold font-md text-center md:text-left md:text-xl xl:text-2xl">
          Apply Before : 2023-12-14 (8 Days Left)
        </Box>
        <Box>
          <Box className="text-xl font-bold md:text-2xl xl:text-3xl text-center lg:text-left mt-6">
            Job Details
          </Box>
          <Box className="md:flex xs:flex-col mx-1 md:justify-between">
            <Box className="md:w-1/3">
              <Box>
                <Box className="flex  justify-center md:justify-normal">
                  <FaPeopleGroup className="h-8 w-8 xl:h-12 xl:w-12 text-black bg-gray-200 rounded-3xl p-1 mt-[2%] md:rounded-full md:p-2" />
                  <Box className="mt-2 ml-2 font-semibold text-lg text-center xl:text-2xl xl:mt-3">
                    No. of Vacancy : 5
                  </Box>
                </Box>
                <Box className="flex  justify-center md:justify-normal">
                  <FaDollarSign className="h-8 w-8 xl:h-12 xl:w-12 text-black bg-gray-200 rounded-3xl p-1 mt-[2%] md:rounded-full md:p-2" />
                  <Box className="mt-2 ml-2 font-semibold text-lg text-center xl:text-2xl xl:mt-3">
                    Salary : Negotiable
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="md:w-1/3">
              <Box className="flex-col">
                <Box className="flex  justify-center md:justify-normal">
                  <FaGenderless className="h-8 w-8 xl:h-12 xl:w-12 text-black bg-gray-200 rounded-3xl p-1 mt-[2%] md:rounded-full md:p-2" />
                  <Box className="mt-2 ml-2 font-semibold text-lg text-center xl:text-2xl xl:mt-3">
                    Gender : Both
                  </Box>
                </Box>
                <Box className="flex  justify-center md:justify-normal">
                  <FaSuitcase className="h-8 w-8 xl:h-12 xl:w-12 text-black bg-gray-200 rounded-3xl p-1 mt-[2%] md:rounded-full md:p-2" />
                  <Box className="mt-2 ml-2 font-semibold text-lg text-center xl:text-2xl xl:mt-3">
                    Job Type : Part Time
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="md:w-1/3">
              <Box>
                <Box className="flex  justify-center md:justify-normal items-start">
                  <FaLevelUpAlt className="h-8 w-8 xl:h-12 xl:w-12 text-black bg-gray-200 rounded-3xl p-1 mt-[2%] md:rounded-full md:p-2" />
                  <Box className="mt-2 ml-2 font-semibold text-lg text-center xl:text-2xl xl:mt-3">
                    Career Level : Senior
                  </Box>
                </Box>
                <Box className="flex  justify-center md:justify-normal">
                  <FaTasks className="h-8 w-8 xl:h-12 xl:w-12 text-black bg-gray-200 rounded-3xl p-2 mt-[2%] md:rounded-full md:p-2" />
                  <Box className="mt-2 ml-2 font-semibold text-lg text-center xl:text-2xl xl:mt-3">
                    Experience : 5 years
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <RightSectionDesc />
      </Box>
    </>
  );
}
