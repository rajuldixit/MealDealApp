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
import { useAppDispatch, useAppState } from "../context/AppContext";
import { BriefRecipeInfo, Types, initialState } from "../context/AppReducer";
import { NavPanelsKeys, appColors } from "../utils/constants";
import useUpdateSideNav from "../hooks/useUpdateSideNav";
import useResetAppState from "../hooks/useResetAppState";

const NewRecipes = () => {
  const appState = useAppState();
  const [recipes, setRecipes] = useState<BriefRecipeInfo[]>(new Array());
  const { updateSideNavToRecipe } = useUpdateSideNav();
  const { updateSuggestedRecipes } = useResetAppState();
  const showRecipe = (recipe: BriefRecipeInfo) => {
    updateSuggestedRecipes();
    updateSideNavToRecipe(recipe.idMeal);
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
        sx={{ marginTop: "48px", marginBottom: "24px" }}
      >
        <Typography
          sx={{
            typography: { xs: "h6", sm: "h5" },
            color: appColors.primaryTextColor
          }}
        >
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
              <Grid item xs={12} md={6} key={recipe.idMeal}>
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
