import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import TextButton from "./Buttons/textButton";
import { IRecipeInfo } from "../utils/types";
import RecipeInfoCard from "./Cards/recipeInfoCard";
import { useNavigate } from "react-router-dom";

const NewRecipes = () => {
  const [recipes, setRecipes] = useState<IRecipeInfo[]>(new Array());
  const navigate = useNavigate();
  const showRecipe = (recipe: IRecipeInfo) => {
    navigate("/mealDetails", { state: recipe.id });
  };
  useEffect(() => {
    const recipees = [
      {
        id: "52784",
        name: "Smoky Lentil Chili with Squash",
        image:
          "https://www.themealdb.com/images/media/meals/uwxqwy1483389553.jpg",
        tags: ["Pulse"],
        duration: "2h 30m",
        expertLevel: "inter"
      },
      {
        id: "52773",
        name: "Honey Teriyaki Salmon",
        image:
          "https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg",
        tags: ["Fish", "Breakfast", "DateNight"],
        duration: "2h 30m",
        expertLevel: "inter"
      },
      {
        id: "53024",
        name: "Rogaliki (Polish Croissant Cookies)",
        image:
          "https://www.themealdb.com/images/media/meals/7mxnzz1593350801.jpg",
        tags: ["Pulse"],
        duration: "2h 30m",
        expertLevel: "inter"
      },
      {
        id: "52994",
        name: "Skillet Apple Pork Chops with Roasted Sweet Potatoes & Zucchini",
        image:
          "https://www.themealdb.com/images/media/meals/h3ijwo1581013377.jpg",
        tags: ["Fish", "Breakfast", "DateNight"],
        duration: "2h 30m",
        expertLevel: "inter"
      }
    ];
    setRecipes([...recipees]);
  }, []);

  return (
    <>
      <Stack
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        mt={4}
      >
        <Typography>New Recipes</Typography>
        <TextButton label={"See all recipes"} onClick={() => {}} />
      </Stack>
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
    </>
  );
};

export default NewRecipes;
