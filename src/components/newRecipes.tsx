import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import TextButton from "./Buttons/textButton";
import {
  ExperienceLevel,
  IButtonIconPosition,
  IRecipeInfo
} from "../utils/types";
import RecipeInfoCard from "./Cards/recipeInfoCard";
import { useNavigate } from "react-router-dom";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import useDataApi from "../hooks/useDataApi";
import { useAppState } from "../context/AppContext";
import { BriefRecipeInfo } from "../context/AppReducer";

const NewRecipes = () => {
  const appState = useAppState();
  const [recipes, setRecipes] = useState<BriefRecipeInfo[]>(new Array());
  const navigate = useNavigate();
  const showRecipe = (recipe: BriefRecipeInfo) => {
    navigate(`/mealDetails/${recipe.idMeal}`);
  };

  useEffect(() => {
    setRecipes([...appState.randomRecipes]);
  }, [appState]);

  return (
    <>
      <Stack
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        sx={{ marginTop: "48px" }}
      >
        <Typography sx={{ typography: { xs: "h6", sm: "h5" } }}>
          New Recipes
        </Typography>
        <TextButton
          label={"See all recipes"}
          onClick={() => {}}
          buttonIcon={{
            icon: <ArrowForwardIcon />,
            position: IButtonIconPosition.RIGHT.toString()
          }}
        />
      </Stack>
      {appState.randomRecipes && (
        <Grid container spacing={2}>
          {appState.randomRecipes &&
            appState.randomRecipes.slice(0, 4).map((recipe) => (
              <Grid item xs={12} md={6}>
                <RecipeInfoCard
                  recipe={recipe}
                  onSelect={() => showRecipe(recipe)}
                />
              </Grid>
            ))}
        </Grid>
      )}
    </>
  );
};

export default NewRecipes;
