import React from "react";
import TextButton from "../../components/Buttons/textButton";
import { Box } from "@mui/material";
import RecipeDetails from "../../components/recipeDetails";
import { useNavigate } from "react-router-dom";

const MealDetails = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <TextButton
        label="Go Back"
        onClick={() => {
          navigate("/");
        }}
      />
      <RecipeDetails />
    </Box>
  );
};

export default MealDetails;
