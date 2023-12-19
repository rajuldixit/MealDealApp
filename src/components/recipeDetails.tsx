import { Box, Stack, Typography, duration } from "@mui/material";
import React, { useEffect, useState } from "react";
import ClockIcon from "../assets/icons/clock.svg";
import GraphIcon from "../assets/icons/graph.svg";
import InfoChip from "./Chips/infoChip";
import PrimaryButton from "./Buttons/primaryButton";
import SecondaryButton from "./Buttons/secondaryButton";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IButtonIconPosition } from "../utils/types";
import useFormatRecipeDetails from "../hooks/useFormatRecipeDetails";

const recipe1 = {
  idMeal: "52913",
  strMeal: "Brie wrapped in prosciutto & brioche",
  strDrinkAlternate: null,
  strCategory: "Side",
  strArea: "French",
  strInstructions:
    "Mix the flour, 1 tsp salt, caster sugar, yeast, milk and eggs together in a mixer using the dough attachment for 5 mins until the dough is smooth. Add the butter and mix for a further 4 mins on medium speed. Scrape the dough bowl and mix again for 1 min. Place the dough in a container, cover with cling film and leave in the fridge for at least 6 hrs before using.\r\nWrap the Brie in the prosciutto and set aside. Turn out the dough onto a lightly floured surface. Roll into a 25cm circle. Place the wrapped Brie in the middle of the circle and fold the edges in neatly. Put the parcel onto a baking tray lined with baking parchment and brush with beaten egg. Chill in the fridge for 30 mins, then brush again with beaten egg and chill for a further 30 mins. Leave to rise for 1 hr at room temperature. Heat oven to 200C/180C fan/gas 6, then bake for 22 mins. Serve warm.",
  strMealThumb:
    "https://www.themealdb.com/images/media/meals/qqpwsy1511796276.jpg",
  strTags: "SideDish,Treat,Baking",
  strYoutube: "https://www.youtube.com/watch?v=FzNPPD8lbWg",
  strIngredient1: "Plain Flour",
  strIngredient2: "Caster Sugar",
  strIngredient3: "Yeast",
  strIngredient4: "Milk",
  strIngredient5: "Eggs",
  strIngredient6: "Eggs",
  strIngredient7: "Butter",
  strIngredient8: "Brie",
  strIngredient9: "Prosciutto",
  strIngredient10: "",
  strIngredient11: "",
  strIngredient12: "",
  strIngredient13: "",
  strIngredient14: "",
  strIngredient15: "",
  strIngredient16: "",
  strIngredient17: "",
  strIngredient18: "",
  strIngredient19: "",
  strIngredient20: "",
  strMeasure1: "375g",
  strMeasure2: "50g",
  strMeasure3: "7g",
  strMeasure4: "75g",
  strMeasure5: "3 Large",
  strMeasure6: "To Glaze",
  strMeasure7: "180g",
  strMeasure8: "250g",
  strMeasure9: "8 slices",
  strMeasure10: "",
  strMeasure11: "",
  strMeasure12: "",
  strMeasure13: "",
  strMeasure14: "",
  strMeasure15: "",
  strMeasure16: "",
  strMeasure17: "",
  strMeasure18: "",
  strMeasure19: "",
  strMeasure20: "",
  strSource:
    "https://www.bbcgoodfood.com/recipes/1803634/brie-wrapped-in-prosciutto-and-brioche",
  strImageSource: null,
  strCreativeCommonsConfirmed: null,
  dateModified: null
};

const RecipeDetails = () => {
  const { format, recipe } = useFormatRecipeDetails();

  const getFormattedRecipe = async () => {
    await format(recipe1);
    console.log("recipe :", recipe);
  };
  const ingredients = () => {
    return recipe?.ingredients.map((item, idx) => (
      <Stack flexDirection={"row"} justifyContent={"start"} mb={0.5}>
        <Typography sx={{ fontWeight: "bold" }} variant="body2" mr={0.5}>
          {recipe.measurements[idx]}
        </Typography>
        <Typography variant="body2">{item}</Typography>
      </Stack>
    ));
  };
  useEffect(() => {
    getFormattedRecipe();
  }, []);
  return (
    <Box>
      <Stack
        sx={{
          display: "flex",
          justifyContent: "start",
          pb: 1,
          pt: 0.5,
          flexDirection: { xs: "column", md: "row" }
        }}
      >
        <Box sx={{ width: { xs: "100%", sm: "240px", lg: "300px" } }}>
          <img
            src={recipe?.basicDetails.image}
            style={{ width: "inherit", borderRadius: "8px" }}
          />
        </Box>
        <Box ml={2}>
          <Box sx={{ display: "flex", alignItems: "center", pb: 1 }}>
            <Stack flexDirection={"row"} mr={1}>
              <img src={ClockIcon} />
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
                sx={{ marginLeft: "4px" }}
              >
                {recipe?.basicDetails.duration}
              </Typography>
            </Stack>
            <Stack flexDirection={"row"}>
              <img src={GraphIcon} />
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
                sx={{ marginLeft: "4px" }}
              >
                {recipe?.basicDetails.expertLevel}
              </Typography>
            </Stack>
          </Box>
          <Typography
            component={"div"}
            mt={2}
            sx={{ typography: { xs: "h5", sm: "h5", md: "h5", lg: "h4" } }}
          >
            {recipe?.basicDetails.name}
          </Typography>
          <Typography component={"div"} variant="body1" mt={2} mb={2}>
            {recipe?.description}
          </Typography>
          {recipe?.basicDetails.tags.map((tag) => (
            <InfoChip tag={tag} />
          ))}
          <Stack
            flexDirection={"row"}
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              mt: 4
            }}
          >
            <PrimaryButton
              label={"Go to recipe"}
              onClick={() => {}}
              buttonIcon={{
                icon: <ArrowDownwardIcon />,
                position: IButtonIconPosition.RIGHT.toString()
              }}
            />
            <SecondaryButton
              label={"Save recipe"}
              onClick={() => {}}
              buttonIcon={{
                icon: <FavoriteBorderIcon />,
                position: IButtonIconPosition.RIGHT.toString()
              }}
            />
          </Stack>
        </Box>
      </Stack>
      <Stack
        sx={{
          display: "flex",
          justifyContent: "start",
          pb: 1,
          pt: 0.5,
          mt: 4,
          flexDirection: { xs: "column", sm: "row" }
        }}
      >
        <Box sx={{ width: { xs: "100%", sm: "240px", lg: "300px" } }}>
          <Typography component={"div"} variant="h6" mb={2}>
            Ingredients
          </Typography>
          {ingredients()}
        </Box>
        <Box
          ml={{ xs: 0, sm: 4 }}
          mt={{ xs: 4, sm: 0 }}
          sx={{
            width: {
              xs: "100%",
              sm: "calc(100% - 240px)",
              lg: "calc(100% - 300px)"
            }
          }}
        >
          <Typography component={"div"} variant="h6" mb={2}>
            Instructions
          </Typography>

          {recipe?.instructions &&
            recipe?.instructions.map((item) => (
              <Typography component={"div"} variant="body2" mb={3}>
                {item}
              </Typography>
            ))}
        </Box>
      </Stack>
    </Box>
  );
};

export default RecipeDetails;
