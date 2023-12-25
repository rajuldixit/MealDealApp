import React, { Dispatch, useState } from "react";
import { IActionType, Types, initialState } from "../context/AppReducer";
import useDataApi from "./useDataApi";
import fetchApi from "../lib/fetchApi";
import { base_url, urls } from "../utils/constants";
import { AxiosError } from "axios";

enum UrlKeys {
  AREAS = "areas",
  INGREDIENTS = "ingredients",
  CATEGORY = "categories",
  RANDOMRECIPE = "randomRecipes"
}

enum ErrorMessage {
  AREAS = "areas failed",
  INGREDIENTS = "ingredients failed",
  CATEGORY = "categories failed",
  RANDOMRECIPE = "randomRecipes failed"
}

const useInitialStateSetup = () => {
  const [actionExecuting, setActionExecuting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const saveRandomRecipesResponse = async (dispatch: Dispatch<IActionType>) => {
    try {
      let randomMeals = new Array();
      for (let i = 0; i < 10; i++) {
        await fetchApi(`${base_url}${urls.RANDOMMEAL}`).then((resp: any) => {
          randomMeals.push(resp["data"]["meals"][0]);
        });
        dispatch({
          type: Types.SaveRandomRecipes,
          payload: {
            ...initialState,
            [UrlKeys.RANDOMRECIPE]: randomMeals
          }
        });
      }
    } catch (err) {
      const error = err as AxiosError;
      const errorData = error?.response?.data || "error";
      setErrorMessage(errorData as string);
    } finally {
      setActionExecuting(false);
    }
  };

  const saveApiResponse = async (dispatch: Dispatch<IActionType>) => {
    const urlList = [
      { key: UrlKeys.AREAS, value: `${base_url}${urls.AREAS}` },
      { key: UrlKeys.CATEGORY, value: `${base_url}${urls.CATEGORIES}` },
      { key: UrlKeys.INGREDIENTS, value: `${base_url}${urls.INGREDIENTS}` }
    ];
    const promises = urlList.map(async (url) => await fetchApi(url.value));
    const responses = await Promise.allSettled(promises);

    const newResponseObject = {
      [UrlKeys.AREAS]:
        responses[0]["status"] == "fulfilled"
          ? responses[0]["value"]["data"]["meals"]
          : [],
      [UrlKeys.CATEGORY]:
        responses[1]["status"] == "fulfilled"
          ? responses[1]["value"]["data"]["categories"]
          : [],
      [UrlKeys.INGREDIENTS]:
        responses[2]["status"] == "fulfilled"
          ? responses[2]["value"]["data"]["meals"]
          : []
    };
    dispatch({
      type: Types.SaveAreas,
      payload: {
        ...initialState,
        [UrlKeys.AREAS]: newResponseObject[UrlKeys.AREAS]
      }
    });
    dispatch({
      type: Types.SaveCategory,
      payload: {
        ...initialState,
        [UrlKeys.CATEGORY]: newResponseObject[UrlKeys.CATEGORY]
      }
    });
    dispatch({
      type: Types.SaveIngredients,
      payload: {
        ...initialState,
        [UrlKeys.INGREDIENTS]: newResponseObject[UrlKeys.INGREDIENTS]
      }
    });
  };
  return {
    saveApiResponse,
    actionExecuting,
    errorMessage,
    saveRandomRecipesResponse
  };
};

export default useInitialStateSetup;
