import React from "react";
import Navbar from "../../components/NavPanel/navbar";
import Header from "../../components/Header/header";
import { Container, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Container
        sx={{
          display: { xs: "block", sm: "flex" },
          padding: "0 !important",
          width: "100%",
          margin: "0",
          maxWidth: "1920px !important"
        }}
      >
        <Stack
          sx={{
            width: { xs: "100%", sm: "30%", md: "18%" },
            padding: "10px",
            boxSizing: "border-box"
          }}
        >
          <Navbar />
        </Stack>
        <Stack
          sx={{
            width: { xs: "100%", sm: "70%", md: "82%" },
            padding: { xs: "10px", sm: "10px 2%", md: "10px 5%" },
            boxSizing: "border-box"
          }}
        >
          <Header />

          <Outlet />
        </Stack>
      </Container>
    </>
  );
};

export default AppLayout;
