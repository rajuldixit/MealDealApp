import React from "react";
import TextButton from "../../components/Buttons/textButton";
import { Box } from "@mui/material";
import RecipeDetails from "../../components/recipeDetails";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IButtonIconPosition } from "../../utils/types";
import MoreRecipeOptions from "./../../components/moreRecipeOptions";

const MealDetails = () => {
  const navigate = useNavigate();
  return (
    <Box>
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
      <MoreRecipeOptions />
    </Box>
  );
};

export default MealDetails;
