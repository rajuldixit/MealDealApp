import React, { useEffect } from "react";
import Navbar from "../../components/NavPanel/navbar";
import Header from "../../components/Header/header";
import { Container, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import { AppContextProvider } from "../../context/AppContext";
import { Types } from "../../context/AppReducer";

const AppLayout = () => {
  return (
    <>
      <AppContextProvider>
        <Container
          sx={{
            display: { xs: "block", sm: "flex" },
            padding: "0 !important",
            width: "100%",
            overflow: "hidden",
            margin: "0",
            height: { sm: "100vh" },
            maxWidth: "1920px !important"
          }}
        >
          <Stack
            sx={{
              width: { xs: "100%", sm: "30%", md: "28%", lg: "18%" },
              padding: "10px",
              height: { sm: "96vh" },
              boxSizing: "border-box"
            }}
          >
            <Navbar />
          </Stack>
          <Stack
            sx={{
              width: { xs: "100%", sm: "70%", md: "72%", lg: "82%" },
              padding: {
                xs: "10px",
                sm: "10px 2%",
                md: "10px 2%",
                lg: "10px 5%"
              },
              overflowY: "scroll",
              boxSizing: "border-box"
            }}
          >
            <Header />
            <Outlet />
          </Stack>
        </Container>
      </AppContextProvider>
    </>
  );
};

export default AppLayout;
