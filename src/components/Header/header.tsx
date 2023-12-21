import { Stack, Typography } from "@mui/material";
import React from "react";
import SearchPanel from "../SearchPanel";

const Header = () => {
  return (
    <Stack flexDirection={"row"} justifyContent={"space-between"} mb={2} mt={4}>
      <Typography
        sx={{
          display: { xs: "none", sm: "block" },
          fontWeight: "400",
          fontSize: { sm: "18px", md: "22px" }
        }}
      >
        Discover Recipes
      </Typography>
      <SearchPanel />
    </Stack>
  );
};

export default Header;
