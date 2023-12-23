import { AxiosError } from "axios";
import React, { useState } from "react";
import { Category, IBriefRecipeInfo, MealsByCategory } from "../utils/types";
import { base_url, urls } from "../utils/constants";
import fetchApi from "../lib/fetchApi";

const useDataApi = () => {
  const [randomMeals, setRandomMeals] = useState(new Array());
  const [suggestRecipes, setSuggestedRecipes] = useState(new Array());
  const [mealDetails, setMealDetails] = useState();
  const [heroBannerMeal, setHeroBannerMeal] = useState<MealsByCategory[]>(
    new Array()
  );
  const [mealByArea, setMealByArea] = useState<IBriefRecipeInfo[]>(new Array());
  const [errorMessage, setErrorMessage] = useState("");
  const [actionExecuting, setActionExecuting] = useState<boolean>(false);

  const fetchMealsByCategory = async (category: string) => {
    setActionExecuting(true);
    try {
      await fetchApi(`${base_url}${urls.MEALSBYCATEGORY}${category}`).then(
        (resp: any) => {
          setSuggestedRecipes(resp["data"]["meals"]);
        }
      );
    } catch (err) {
      const error = err as AxiosError;
      const errorData = error?.response?.data || "error";
      setErrorMessage(errorData as string);
    } finally {
      setActionExecuting(false);
    }
  };
  const fetchMealById = async (id: number) => {
    setActionExecuting(true);
    try {
      await fetchApi(`${base_url}${urls.MEALBYID}${id}`).then((resp: any) => {
        setMealDetails(resp["data"]["meals"][0]);
      });
    } catch (err) {
      const error = err as AxiosError;
      const errorData = error?.response?.data || "error";
      setErrorMessage(errorData as string);
    } finally {
      setActionExecuting(false);
    }
  };

  const fetchMealsByFirstLetter = async (searchString: string) => {
    setActionExecuting(true);
    try {
      await fetchApi(
        `${base_url}${urls.SEARCHBYFIRSTLETTER}${searchString}`
      ).then((resp: any) => {
        setSuggestedRecipes(resp["data"]["meals"]);
      });
    } catch (err) {
      const error = err as AxiosError;
      const errorData = error?.response?.data || "error";
      setErrorMessage(errorData as string);
    } finally {
      setActionExecuting(false);
    }
  };
  const fetchMealByName = async (name: string) => {
    setActionExecuting(true);
    try {
      await fetchApi(`${base_url}${urls.SEARCHBYNAME}${name}`).then(
        (resp: any) => {
          setSuggestedRecipes(resp["data"]["meals"]);
        }
      );
    } catch (err) {
      const error = err as AxiosError;
      const errorData = error?.response?.data || "error";
      setErrorMessage(errorData as string);
    } finally {
      setActionExecuting(false);
    }
  };
  const fetchMealsByArea = async (name: string) => {
    setActionExecuting(true);
    try {
      await fetchApi(`${base_url}${urls.FILTERBYAREA}${name}`).then(
        (resp: any) => {
          setMealByArea(resp["data"]["meals"]);
        }
      );
    } catch (err) {
      const error = err as AxiosError;
      const errorData = error?.response?.data || "error";
      setErrorMessage(errorData as string);
    } finally {
      setActionExecuting(false);
    }
  };

  return {
    fetchMealById,
    fetchMealsByCategory,
    fetchMealsByFirstLetter,
    fetchMealByName,
    fetchMealsByArea,
    mealByArea,
    suggestRecipes,
    actionExecuting,
    randomMeals,
    mealDetails,
    heroBannerMeal,
    errorMessage
  };
};

export default useDataApi;
