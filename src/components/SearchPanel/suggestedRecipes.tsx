import React, { useEffect, useState } from "react";
import useDataApi from "../../hooks/useDataApi";
import { ExperienceLevel, IRecipeInfo } from "../../utils/types";
import { Grid } from "@mui/material";
import RecipeInfoCard from "../Cards/recipeInfoCard";

interface ISuggestedProps {
  searchString: string;
  selectedCategory: string;
}

const SuggestedRecipes: React.FC<ISuggestedProps> = ({
  searchString,
  selectedCategory
}: ISuggestedProps) => {
  const {
    fetchMealsByFirstLetter,
    fetchMealsByCategory,
    fetchMealByName,
    suggestRecipes,
    errorMessage,
    actionExecuting
  } = useDataApi();
  const [recipes, setRecipes] = useState<IRecipeInfo[]>(new Array());
  const getSuggestedRecipes = async () => {
    console.log("get---");
    await fetchMealsByFirstLetter(searchString);
  };
  const getSuggestedRecipesByCategory = async () => {
    await fetchMealByName(selectedCategory);
  };

  const showRecipe = (recipe: IRecipeInfo) => {};
  //   useEffect(() => {
  //     console.log(suggestRecipes);
  // if (suggestRecipes.length > 0) {
  //   const formedRecipes = suggestRecipes?.map((meal) => {
  //     return {
  //       id: meal.idMeal,
  //       name: meal.strMeal,
  //       image: meal.strMealThumb,
  //       tags: new Array(meal.strTags),
  //       duration: "2h 30m",
  //       expertLevel: ExperienceLevel.ADVANCE
  //     };
  //   });
  //   setRecipes([...formedRecipes]);
  // }
  //   }, [suggestRecipes]);

  useEffect(() => {
    console.log("suggested recipe", suggestRecipes);
    if (suggestRecipes.length > 0) {
      const formedRecipes = suggestRecipes?.map((meal) => {
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
    }
  }, [suggestRecipes]);
  useEffect(() => {
    if (!!selectedCategory) getSuggestedRecipesByCategory();
  }, [selectedCategory]);
  useEffect(() => {
    if (!!searchString) getSuggestedRecipes();
  }, [searchString]);

  if (errorMessage) {
    return <div>error</div>;
  }
  if (actionExecuting) {
    return <div>loading</div>;
  }
  return (
    <>
      {!searchString && !selectedCategory && <div>start writing</div>}
      {!actionExecuting &&
        (!!searchString || !!selectedCategory) &&
        recipes && (
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

export default SuggestedRecipes;
