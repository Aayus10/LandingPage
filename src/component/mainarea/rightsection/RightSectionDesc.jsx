import { Badge, Box } from "@mantine/core";
import React from "react";

export default function RightSectionDesc() {
  return (
    <>
      <Box className="desc mx-1">
        <Box className="skills ">
          <Box className="text-xl font-bold md:text-2xl xl:text-3xl text-center lg:text-left">
            Skills
          </Box>

          <Box className=" md:flex xs:flex-col xs:text-center items-center ">
            <Badge className="badges " color="rgba(216, 223, 230, 1)" size="xl">
              UI Designs
            </Badge>
            <Badge className="badges" color="rgba(216, 223, 230, 1)" size="xl">
              Coding
            </Badge>
            <Badge className="badges" color="rgba(216, 223, 230, 1)" size="xl">
              Python
            </Badge>
            <Badge className="badges" color="rgba(216, 223, 230, 1)" size="xl">
              Artificial Intelligence
            </Badge>
          </Box>
        </Box>

        <Box className="text-xl font-bold md:text-2xl xl:text-3xl text-center mt-8 lg:text-left">
          Job Description
        </Box>

        <Box className="text-md font-sans md:text-lg xl:text-xl text-center lg:text-left">
          We're seeking a talented and passionate Senior Frontend Engineer to
          join our growing team! You'll play a key role in crafting beautiful,
          interactive, and performant user experiences for our web applications.
          As a senior member, you'll leverage your in-depth knowledge of modern
          JavaScript frameworks (React, Angular, Vue.js, etc.) and libraries to
          build scalable and maintainable code. <br />
          <br />
          You'll also collaborate closely with designers and back-end developers
          to ensure a seamless user journey. We're looking for someone who
          thrives in a fast-paced environment, is a strong problem solver, and
          enjoys staying on top of the latest trends in frontend development. If
          you're excited to tackle challenging projects and make a significant
          impact, we encourage you to apply!
        </Box>
      </Box>
      <Box className="desc">
        <Box className="text-xl font-bold md:text-2xl xl:text-3xl text-center lg:text-left">
          Required Knowledge and Skills
        </Box>
        <Box className="text-md font-sans md:text-lg xl:text-xl text-center lg:text-left">
          We require 5+ years of experience crafting web apps with modern
          JavaScript frameworks (React, Angular, Vue.js, etc.) and libraries,
          along with strong HTML, CSS, JavaScript, and testing skills. Bonus
          points for performance optimization, communication, and a passion for
          staying ahead of the frontend curve.
        </Box>
      </Box>
    </>
  );
}
