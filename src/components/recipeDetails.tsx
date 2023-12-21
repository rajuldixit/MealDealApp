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
import useDataApi from "../hooks/useDataApi";
import { useParams } from "react-router-dom";

const recipe1 = {
  idMeal: "52966",
  strMeal: "Chocolate Caramel Crispy",
  strDrinkAlternate: null,
  strCategory: "Dessert",
  strArea: "British",
  strInstructions:
    'Grease and line a 20 x 20cm/8" x 8" baking tin with parchment paper.\r\nPut the mars bars and butter in a heat proof bowl and place over a pan of barely simmering water. Mixing with a whisk, melt until the mixture is smooth.\r\nPour over the rice krispies in a mixing bowl and mix until all the ingredients are evenly combined. Press evenly into the prepare baking tin and set aside.\r\nMelt the milk chocolate in the microwave or over a pan of barely simmering water.\r\nSpread the melted chocolate over the rice krispie mixture and leave to set in a cool place. Once set slice into squares and serve!',
  strMealThumb: "https://www.themealdb.com/images/media/meals/1550442508.jpg",
  strTags: "Sweet,Snack,Treat,Tart,Alcoholic,BBQ",
  strYoutube: "https://www.youtube.com/watch?v=qsk_At_gjv0",
  strIngredient1: "Mars Bar",
  strIngredient2: "Butter",
  strIngredient3: "Rice Krispies",
  strIngredient4: "Milk Chocolate",
  strIngredient5: "",
  strIngredient6: "",
  strIngredient7: "",
  strIngredient8: "",
  strIngredient9: "",
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
  strMeasure1: "6 chopped",
  strMeasure2: "150g",
  strMeasure3: "120g",
  strMeasure4: "150g",
  strMeasure5: " ",
  strMeasure6: " ",
  strMeasure7: " ",
  strMeasure8: " ",
  strMeasure9: " ",
  strMeasure10: " ",
  strMeasure11: " ",
  strMeasure12: " ",
  strMeasure13: " ",
  strMeasure14: " ",
  strMeasure15: " ",
  strMeasure16: " ",
  strMeasure17: " ",
  strMeasure18: " ",
  strMeasure19: " ",
  strMeasure20: " ",
  strSource:
    "http://www.donalskehan.com/recipes/chocolate-caramel-rice-crispy-treats/",
  strImageSource: null,
  strCreativeCommonsConfirmed: null,
  dateModified: null
};

const RecipeDetails = () => {
  const { id } = useParams();
  const { fetchMealById, mealDetails, errorMessage, actionExecuting } =
    useDataApi();
  const { format, recipe } = useFormatRecipeDetails();

  const getFormattedRecipe = async () => {
    if (!!mealDetails) {
      await format(mealDetails);
    }
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

  const fetchMeal = async () => {
    console.log(typeof id);
    if (!!id) {
      await fetchMealById(parseInt(id));
    }
  };

  useEffect(() => {
    getFormattedRecipe();
  }, [mealDetails]);
  useEffect(() => {
    fetchMeal();
  }, [id]);

  if (errorMessage) {
    return <div>Error {errorMessage}</div>;
  }
  if (actionExecuting) {
    return <div>loading</div>;
  }
  return (
    <>
      {" "}
      {!actionExecuting && !!recipe && (
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
      )}{" "}
    </>
  );
};

export default RecipeDetails;
