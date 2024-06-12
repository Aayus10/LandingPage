import React from "react";
import RightSectionMain from "./rightsection/RightSectionMain";
import LeftSectionMain from "./leftsection/LeftSectionMain";
import { Box } from "@mantine/core";

export default function MainSection() {
  return (
    <>
      <Box className="lg:flex mx-2 mt-4 xs:flex-col">
        <LeftSectionMain className="w-4/12 " />
        <RightSectionMain className="w-8/12 " />
      </Box>
    </>
  );
}
