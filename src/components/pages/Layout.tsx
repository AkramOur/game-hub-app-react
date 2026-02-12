import { Box } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
