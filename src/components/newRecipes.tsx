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

const NewRecipes = () => {
  const { fetchRandomMeal, randomMeals, errorMessage, actionExecuting } =
    useDataApi();
  const [recipes, setRecipes] = useState<IRecipeInfo[]>(new Array());
  const navigate = useNavigate();
  const showRecipe = (recipe: IRecipeInfo) => {
    navigate(`/mealDetails/${recipe.id}`);
  };
  const getNewRecipes = async () => {
    await fetchRandomMeal();
  };
  useEffect(() => {
    const formedRecipes = randomMeals.map((meal) => {
      return {
        id: meal.idMeal,
        name: meal.strMeal,
        image: meal.strMealThumb,
        tags: new Array(meal.strTags),
        duration: "2h 30m",
        expertLevel: ExperienceLevel.ADVANCE
      };
    });
    setRecipes([...formedRecipes]);
  }, [randomMeals]);
  useEffect(() => {
    getNewRecipes();
  }, []);

  if (errorMessage) {
    return <div>Error {errorMessage}</div>;
  }
  if (actionExecuting) {
    return <div>loading</div>;
  }

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
      {!actionExecuting && recipes && (
        <Grid container spacing={2}>
          {recipes &&
            recipes.map((recipe) => (
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
