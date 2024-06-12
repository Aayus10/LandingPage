import { Box, Image } from "@mantine/core";
import React, { useState } from "react";

import { FaClock, FaHeart } from "react-icons/fa";
import "../../../styles/NavPreviewJobs.css";

export default function LeftSectionJobs(props) {
  const [isSelected, setIsSelected] = useState(false); // Initially unselected
  const handleClick = () => {
    setIsSelected(!isSelected);
    if (!isSelected) {
      alert("Added to Favourites");
    } else if (isSelected) {
      alert("Removed From Favourites");
    }
  };
  return (
    <>
      <Box className="flex mt-4 justify-evenly   lg:justify-start  lg:gap-0">
        <Box className="w-10.5/12 md:w-10.5/12 flex justify-start  gap-1 md:gap-5 ">
          <Box className="w-3.5/10.5 ml-1 w-3.5/10.5 lg:w-4/12 ">
            <Image
              src={props.logo}
              className="h-[70px] w-full  md:h-[90px] mt-2 lg:h-[85px] xl:h-[120px]"
            />
          </Box>
          <Box className="w-7/10.5  w-7/10.5 lg:w-7.5/12 xl:mt-2">
            <Box className="flex-col ml-2">
              <Box className="text-blue-950 text-lg font-bold md:text-2xl lg:text-xl xl:text-2xl">
                {props.title}
              </Box>
              <Box className="text-md text-blue-800 md:text-xl lg:text-sm font-semibold xl:text-xl">
                {props.company}
              </Box>
              <Box className="flex mt-2 md:mt-0 lg:mt-2">
                <FaClock className="md:mt-2 xl:mt-3" />
                <Box className="text-sm ml-2 md:text-xl lg:text-sm lg:font-semibold lg:mt-1 xl:text-lg">
                  {props.subtitle}: {props.deadline}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className="w-1.5/12 md:w-1.5/12 mr-1  md:w-1.5/12 lg:w-1.5/12 xl:mt-2">
          <FaHeart
            onClick={handleClick}
            className={isSelected ? "fav-icon-selected" : "fav-icon"}
          />
        </Box>
      </Box>
    </>
  );
}
