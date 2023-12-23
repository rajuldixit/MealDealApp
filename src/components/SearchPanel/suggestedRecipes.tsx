import React, { useEffect, useState } from "react";
import useDataApi from "../../hooks/useDataApi";
import {
  ExperienceLevel,
  IBriefRecipeInfo,
  IRecipeInfo
} from "../../utils/types";
import { Grid } from "@mui/material";
import RecipeInfoCard from "../Cards/recipeInfoCard";
import BriefInfoCard from "../Cards/briefInfoCard";
import { BriefRecipeInfo, Types, initialState } from "../../context/AppReducer";
import { useAppDispatch } from "../../context/AppContext";

interface ISuggestedProps {
  searchString: string;
  selectedCategory: string;
  selectedIngredient: string;
  selectedArea: string;
  selectedRecipe: (arg: string) => void;
}

const SuggestedRecipes: React.FC<ISuggestedProps> = ({
  searchString,
  selectedCategory,
  selectedIngredient,
  selectedArea,
  selectedRecipe
}: ISuggestedProps) => {
  const {
    fetchMealsByFirstLetter,
    fetchMealsByArea,
    fetchMealByName,
    mealByArea,
    suggestRecipes,
    errorMessage,
    actionExecuting
  } = useDataApi();
  const [recipes, setRecipes] = useState<BriefRecipeInfo[]>(new Array());
  const [briefRecipe, setBriefRecipe] = useState<IBriefRecipeInfo[]>(
    new Array()
  );
  const dispatch = useAppDispatch();

  const getSuggestedRecipes = async () => {
    await fetchMealsByFirstLetter(searchString);
  };
  const getSuggestedRecipesByCategoryOrIngredient = async (
    searchStr: string
  ) => {
    await fetchMealByName(searchStr);
  };

  const getMealsByArea = async () => {
    await fetchMealsByArea(selectedArea);
  };

  const showRecipe = (recipe: BriefRecipeInfo) => {};
  useEffect(() => {
    if (suggestRecipes && suggestRecipes.length > 0) {
      dispatch({
        type: Types.SaveSuggestedRecipes,
        payload: { ...initialState, moreRecipes: [...suggestRecipes] }
      });
      setRecipes([...suggestRecipes]);
    } else {
      setRecipes(new Array());
    }
  }, [suggestRecipes]);

  useEffect(() => {
    if (mealByArea && mealByArea.length > 0) setBriefRecipe([...mealByArea]);
  }, [mealByArea]);

  useEffect(() => {
    if (!!selectedArea) getMealsByArea();
  }, [selectedArea]);
  useEffect(() => {
    if (!!selectedCategory)
      getSuggestedRecipesByCategoryOrIngredient(selectedCategory);
  }, [selectedCategory]);
  useEffect(() => {
    !!searchString && searchString.length == 1
      ? getSuggestedRecipes()
      : getSuggestedRecipesByCategoryOrIngredient(searchString);
  }, [searchString]);

  useEffect(() => {
    if (!!selectedIngredient)
      getSuggestedRecipesByCategoryOrIngredient(selectedIngredient);
  }, [selectedIngredient]);

  if (errorMessage) {
    return <div>error</div>;
  }
  if (actionExecuting) {
    return <div>loading</div>;
  }
  return (
    <>
      {!actionExecuting && (recipes.length == 0 || briefRecipe.length == 0) && (
        <div>no recipe found</div>
      )}
      {!searchString && !selectedCategory && !selectedIngredient && (
        <div>start writing</div>
      )}
      {!actionExecuting &&
        !selectedArea &&
        (!!searchString || !!selectedCategory || !!selectedIngredient) &&
        recipes && (
          <Grid container spacing={2}>
            {recipes &&
              recipes.map((recipe) => (
                <Grid
                  item
                  xs={12}
                  md={6}
                  onClick={() => selectedRecipe(recipe.idMeal)}
                >
                  <RecipeInfoCard
                    recipe={recipe}
                    onSelect={() => showRecipe(recipe)}
                  />
                </Grid>
              ))}
          </Grid>
        )}
      {!actionExecuting &&
        !searchString &&
        !selectedCategory &&
        !selectedIngredient &&
        !!selectedArea &&
        briefRecipe && (
          <Grid container spacing={2}>
            {briefRecipe &&
              briefRecipe.map((recipe: IBriefRecipeInfo) => (
                <Grid
                  item
                  xs={6}
                  sm={4}
                  md={3}
                  onClick={() => selectedRecipe(recipe.idMeal)}
                >
                  <BriefInfoCard recipe={recipe} />
                </Grid>
              ))}
          </Grid>
        )}
    </>
  );
};

export default SuggestedRecipes;
