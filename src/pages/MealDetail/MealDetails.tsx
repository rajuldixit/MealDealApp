import React from "react";
import TextButton from "../../components/Buttons/textButton";
import { Box, Stack } from "@mui/material";
import RecipeDetails from "../../components/recipeDetails";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IButtonIconPosition } from "../../utils/types";
import MoreRecipeOptions from "./../../components/moreRecipeOptions";
import Breadcrumb from "../../components/breadcrumb";

const MealDetails = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Stack
        mb={1}
        pb={1}
        sx={{
          borderBottom: "1px solid lightgrey"
        }}
      >
        <Breadcrumb />
      </Stack>
      <TextButton
        label="Go Back"
        onClick={() => {
          navigate("/");
        }}
        buttonIcon={{
          icon: <ArrowBackIcon />,
          position: IButtonIconPosition.LEFT.toString()
        }}
      />

      <RecipeDetails />
      <hr />
      <MoreRecipeOptions />
    </Box>
  );
};

export default MealDetails;
