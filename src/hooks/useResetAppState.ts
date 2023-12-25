import React from "react";
import { useAppDispatch } from "../context/AppContext";
import { Types, initialState } from "../context/AppReducer";

const useResetAppState = () => {
  const dispatch = useAppDispatch();
  const updateSuggestedRecipes = () => {
    dispatch({
      type: Types.SaveSuggestedRecipes,
      payload: {
        ...initialState,
        moreRecipes: []
      }
    });
  };
  return {
    updateSuggestedRecipes
  };
};

export default useResetAppState;
