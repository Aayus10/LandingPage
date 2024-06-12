import { Box, Image } from "@mantine/core";
import React from "react";
import logo from "../../assets/logo2.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <Box className="mx-2  mt-6 h-[760px] md:h-[680px] lg:h-[310px] xl:h-[250px] bg-blue-900 text-white text-lg md:text-xl xl:text-xl">
        <Box className="lg:flex lg:justify-evenly">
          <Box className="flex-col  text-center lg:w-4/12 lg:text-left">
            <Box className="flex justify-center lg:justify-start lg:mt-7">
              <Image
                className="w-6/12 h-[80px] lg:h-[70px] text-center align-middle "
                src={logo}
              />
            </Box>
            <Box>
              JobAxle is a dedicated job portal for IT and engineering jobs.
              JobAxle strives to provide the best services in the fields of
              recruitment solutions. Read More
              <Box className="mx-0 mt-3 flex gap-4 justify-center lg:justify-start ">
                <Box className="text-center">Social Media Links:</Box>
                <FaFacebook className="mt-1" />
                <FaInstagram className="mt-1" />
                <FaLinkedin className="mt-1" />
              </Box>
            </Box>
          </Box>
          <Box className="flex-col  text-center mt-5 lg:w-2/12 lg:text-left">
            <Box className="font-bold">Job Seekers</Box>
            <Box>Create Account</Box>
            <Box>FAQ</Box>
            <Box>Terms and Conditions</Box>
            <Box>Feedback</Box>
          </Box>
          <Box className="flex-col  text-center mt-5 lg:w-2/12 lg:text-left">
            <Box>
              <strong>For Employer</strong>
            </Box>
            <Box>Post a Job</Box>
            <Box>Pricing</Box>
            <Box>Recruitment Services</Box>
            <Box>HR Insider</Box>
          </Box>
          <Box className="flex-col  text-center mt-5 lg:w-2/12 lg:text-left">
            <Box>
              <strong>Our Services</strong>
            </Box>
            <Box>Top Jobs Services</Box>
            <Box>Hot Jobs Services</Box>
            <Box>Featured Jobs Services</Box>
            <Box>General Jobs Services</Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
