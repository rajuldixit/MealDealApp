import React from "react";
import HeroBanner from "../../components/heroBanner";
import { Box } from "@mui/material";
import NewRecipes from "../../components/newRecipes";

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <NewRecipes />
    </Box>
  );
};

export default Home;
