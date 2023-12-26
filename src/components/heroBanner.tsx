import {
  Box,
  Paper,
  Stack,
  Typography,
  styled,
  useMediaQuery,
  useTheme
} from "@mui/material";
import React, { useEffect, useState } from "react";
import PrimaryButton from "./Buttons/primaryButton";
import { useNavigate } from "react-router-dom";
import { Category, MealsByCategory } from "../utils/types";
import useDataApi from "../hooks/useDataApi";
import useUpdateSideNav from "../hooks/useUpdateSideNav";
import useResetAppState from "../hooks/useResetAppState";
import { appColors } from "../utils/constants";

const HeroBannerPaper = styled(Paper)(({ theme }) => ({
  width: "100%",
  backgroundColor: "#E3E5E8",
  boxSizing: "border-box",
  borderRadius: "16px",
  [theme.breakpoints.up("sm")]: {
    padding: "1% 8% 2%"
  },
  [theme.breakpoints.between("xs", "sm")]: {
    padding: "4%"
  }
}));

const defaultRecipeData = {
  idMeal: "53080",
  strMeal: "Blini Pancakes",
  strMealThumb:
    "https://www.themealdb.com/images/media/meals/0206h11699013358.jpg"
};

const HeroBanner = () => {
  const theme = useTheme();
  const strCategory = "Side";
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const { updateSideNavToRecipe } = useUpdateSideNav();
  const { updateSuggestedRecipes } = useResetAppState();
  const {
    fetchMealsByCategory,
    heroBannerMeal,
    actionExecuting,
    errorMessage
  } = useDataApi();
  const [recipe, setRecipe] = useState<MealsByCategory>(defaultRecipeData);

  const showRecipe = () => {
    updateSuggestedRecipes();
    updateSideNavToRecipe(recipe.idMeal);
  };
  const heroRecipe = async () => {
    await fetchMealsByCategory(strCategory);
  };
  useEffect(() => {
    if (heroBannerMeal && heroBannerMeal.length > 0) {
      setRecipe(heroBannerMeal[0]);
    }
  }, [heroBannerMeal]);
  useEffect(() => {
    heroRecipe();
  }, [!!heroBannerMeal]);

  if (errorMessage) {
    return <div>Error {errorMessage}</div>;
  }
  if (actionExecuting) {
    return <div>loading</div>;
  }
  return (
    <HeroBannerPaper elevation={0}>
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        {!actionExecuting && !!recipe && (
          <>
            <Box>
              <Typography
                my={2}
                sx={{
                  typography: { xs: "h6", sm: "h5", md: "h4", lg: "h3" },
                  color: appColors.primaryTextColor
                }}
              >
                {recipe?.strMeal}
              </Typography>
              <PrimaryButton label="View Recipe" onClick={showRecipe} />
            </Box>
            <Box>
              <img
                src={recipe?.strMealThumb}
                alt="img"
                style={{
                  width: matches ? "200px" : "125px",
                  borderRadius: "50%"
                }}
              />
            </Box>
          </>
        )}
      </Stack>
    </HeroBannerPaper>
  );
};

export default HeroBanner;
