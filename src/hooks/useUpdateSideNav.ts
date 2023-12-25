import React from "react";
import { useAppDispatch } from "../context/AppContext";
import { Types, initialState } from "../context/AppReducer";
import { NavPanelsKeys } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const useUpdateSideNav = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const updateSideNavToRecipe = (idMeal: string) => {
    dispatch({
      type: Types.UpdateSideNavOption,
      payload: {
        ...initialState,
        activeSideNav: NavPanelsKeys.Recipes.key
      }
    });
    navigate(`/mealDetails/${idMeal}`);
  };
  return { updateSideNavToRecipe };
};

export default useUpdateSideNav;
