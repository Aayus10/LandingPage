import { Box, Burger, Image } from "@mantine/core";
import React, { useEffect, useState } from "react";
import logo from "../assets/logo2.png";
import "./styles/Header.css";

export default function Header() {
  const [opened, setopened] = useState(false);
  const [isWide, setIsWide] = useState(window.innerWidth > 767);
  const toggle = () => {
    setopened(!opened);
  };
  useEffect(() => {
    const handleResize = () => setIsWide(window.innerWidth > 767);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <Box
        className={
          opened
            ? " h-[300px] md:h-[110px] mx-2 lg:flex lg:h-[70px]"
            : "h-[60px] md:h-[110px]  mx-2 lg:flex lg:h-[70px]"
        }
      >
        <Box className="flex justify-between lg:w-6/12">
          <Box className="w-6/12 md:w-4/12 lg:w-12/12">
            <Image
              src={logo}
              className="w-full h-[50px] my-[5px] lg:h-[55px] "
            />
          </Box>
          <Burger
            className="w-2/12 lg:w-0 m-3 "
            hiddenFrom="sm"
            opened={opened}
            onClick={toggle}
          />
        </Box>

        {isWide ? (
          <Box
            className={"text-center md:flex justify-evenly md:mx-2 lg:w-6/12"}
          >
            <Box className="navlinks md:w-1/6">Home</Box>
            <Box className="navlinks md:w-1/6">Find Jobs</Box>
            <Box className="navlinks md:w-1/6">Services</Box>
            <Box className="navlinks md:w-1/6">Blogs</Box>
            <Box className="login md:w-1/6">Login</Box>
            <Box className="signup md:w-1/6">Sign Up</Box>
          </Box>
        ) : opened ? (
          <Box
            className={"text-center md:flex justify-evenly md:mx-2 lg:w-6/12"}
          >
            <Box className="navlinks md:w-1/6">Home</Box>
            <Box className="navlinks md:w-1/6">Find Jobs</Box>
            <Box className="navlinks md:w-1/6">Services</Box>
            <Box className="navlinks md:w-1/6">Blogs</Box>
            <Box className="login md:w-1/6">Login</Box>
            <Box className="signup md:w-1/6">Sign Up</Box>
          </Box>
        ) : (
          ""
        )}
      </Box>
    </>
  );
}
