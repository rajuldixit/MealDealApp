import React, { useState } from "react";
import { ExperienceLevel, IRecipeDetails } from "../utils/types";

const useFormatRecipeDetails = () => {
  const [recipe, setRecipe] = useState<IRecipeDetails>();

  const format = async (raw: any) => {
    if (!!raw) {
      let ingredientsList = new Array();
      let measurementList = new Array();
      for (let i = 1; i <= 20; i++) {
        if (!!raw[`strIngredient${i}`]) {
          ingredientsList.push(raw[`strIngredient${i}`]);
        }
        if (!!raw[`strMeasure${i}`]) {
          measurementList.push(raw[`strMeasure${i}`]);
        }
      }

      const formattedRecipe: IRecipeDetails = {
        basicDetails: {
          id: raw.idMeal,
          name: raw.strMeal,
          image: raw.strMealThumb,
          tags:
            raw.strTags && raw.strTags.length > 0 ? raw.strTags.split(",") : [],
          duration: "2h 15m",
          expertLevel: ExperienceLevel.ADVANCE
        },
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
               nisi ut aliquip ex ea commodo consequat.`,
        instructions: raw.strInstructions.split("\r\n"),
        ingredients: ingredientsList,
        measurements: measurementList
      };
      setRecipe(formattedRecipe);
    }
  };

  return { format, recipe };
};

export default useFormatRecipeDetails;
