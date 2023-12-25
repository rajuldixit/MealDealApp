import React, { useEffect } from "react";
import { useAppState } from "../context/AppContext";
import { Stack, Typography, Grid } from "@mui/material";
import { IButtonIconPosition } from "../utils/types";
import TextButton from "./Buttons/textButton";
import RecipeInfoCard from "./Cards/recipeInfoCard";
import { useNavigate } from "react-router-dom";
import { BriefRecipeInfo } from "../context/AppReducer";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const MoreRecipeOptions = () => {
  const appState = useAppState();

  const navigate = useNavigate();
  const showRecipe = (recipe: BriefRecipeInfo) => {
    navigate(`/mealDetails/${recipe.idMeal}`);
  };

  return (
    <>
      {appState.moreRecipes && appState.moreRecipes.length > 0 && (
        <>
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            sx={{ marginTop: "48px", marginBottom: "24px" }}
          >
            <Typography sx={{ typography: { xs: "h6", sm: "h5" } }}>
              More Recipes
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
          {appState.moreRecipes && (
            <Grid container spacing={2}>
              {appState.moreRecipes &&
                appState.moreRecipes.splice(0, 2).map((recipe) => (
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
      )}
    </>
  );
};

export default MoreRecipeOptions;
