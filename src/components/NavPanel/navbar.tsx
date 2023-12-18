import { Stack, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import AppLogo from "./appLogo";
import LeftNav from "./LeftNav";
import BottomNav from "./BottomNav";

const Navbar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Stack position={"relative"}>
      <AppLogo />
      {matches ? <LeftNav /> : <BottomNav />}
    </Stack>
  );
};

export default Navbar;
