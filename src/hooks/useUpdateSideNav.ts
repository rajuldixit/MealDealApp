import React from "react";
import { useAppDispatch, useAppState } from "../context/AppContext";
import { Types, initialState } from "../context/AppReducer";
import { NavPanelsKeys } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const useUpdateSideNav = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const appState = useAppState();

  const updateSideNavToRecipe = (idMeal: string) => {
    console.log(appState.moreRecipes);
    const newMoreRecipes = appState.moreRecipes.filter(
      (recipe) => recipe.idMeal !== idMeal
    );
    console.log("new more :", newMoreRecipes);
    dispatch({
      type: Types.UpdateSideNavOption,
      payload: {
        ...initialState,
        activeSideNav: NavPanelsKeys.Recipes.key,
        moreRecipes: [...newMoreRecipes]
      }
    });
    dispatch({
      type: Types.SaveSuggestedRecipes,
      payload: {
        ...initialState,
        moreRecipes: [...newMoreRecipes]
      }
    });
    navigate(`/mealDetails/${idMeal}`);
  };
  return { updateSideNavToRecipe };
};

export default useUpdateSideNav;
