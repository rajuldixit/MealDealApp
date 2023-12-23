import axios, { AxiosError } from "axios";
import React, { useState } from "react";
import { Category, MealsByCategory } from "../utils/types";
import data from "./fetchApi";
import { urls } from "../utils/constants";

const useDataApi = () => {
  const base_url =
    process.env.BASE_URL || "https://www.themealdb.com/api/json/v1/1/";
  const [ingredients, setIngredients] = useState();
  const [categories, setCategories] = useState<Category[]>(new Array());
  const [areas, setAreas] = useState();
  const [randomMeals, setRandomMeals] = useState(new Array());
  const [mealDetails, setMealDetails] = useState();
  const [heroBannerMeal, setHeroBannerMeal] = useState<MealsByCategory[]>(
    new Array()
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [actionExecuting, setActionExecuting] = useState<boolean>(false);

  const fetchAreas = async () => {
    setActionExecuting(true);
    try {
      await data(`${base_url}${urls.AREAS}`).then((resp: any) => {
        setAreas(resp["meals"]);
      });
    } catch (err) {
      const error = err as AxiosError;
      const errorData = error?.response?.data || "error";
      setErrorMessage(errorData as string);
    } finally {
      setActionExecuting(false);
    }
  };
  const fetchIngredients = async () => {
    setActionExecuting(true);
    try {
      await axios.get(`${base_url}list.php?i=list`).then((resp: any) => {
        setIngredients(resp["meals"]);
      });
    } catch (err) {
      const error = err as AxiosError;
      const errorData = error?.response?.data || "error";
      setErrorMessage(errorData as string);
    } finally {
      setActionExecuting(false);
    }
  };
  const fetchCategories = async () => {
    setActionExecuting(true);
    try {
      await axios.get(`${base_url}categories.php`).then((resp: any) => {
        setCategories(resp["data"]["categories"]);
      });
    } catch (err) {
      const error = err as AxiosError;
      const errorData = error?.response?.data || "error";
      setErrorMessage(errorData as string);
    } finally {
      setActionExecuting(false);
    }
  };
  const fetchRandomMeal = async () => {
    setActionExecuting(true);
    try {
      let randomMeals = new Array();
      for (let i = 0; i < 4; i++) {
        await axios.get(`${base_url}random.php`).then((resp: any) => {
          randomMeals.push(resp["meals"][0]);
        });
      }
      setRandomMeals([...randomMeals]);
    } catch (err) {
      const error = err as AxiosError;
      const errorData = error?.response?.data || "error";
      setErrorMessage(errorData as string);
    } finally {
      setActionExecuting(false);
    }
  };
  const fetchMealsByCategory = async (category: string) => {
    setActionExecuting(true);
    try {
      await axios
        .get(`${base_url}filter.php?c=${category}`)
        .then((resp: any) => {
          setHeroBannerMeal(resp["data"]["meals"]);
        });
    } catch (err) {
      const error = err as AxiosError;
      const errorData = error?.response?.data || "error";
      setErrorMessage(errorData as string);
    } finally {
      setActionExecuting(false);
    }
  };
  const fetchMealById = async (id: string) => {
    setActionExecuting(true);
    try {
      await axios.get(`${base_url}lookup.php?i=${id}`).then((resp: any) => {
        setMealDetails(resp["meals"]);
      });
    } catch (err) {
      const error = err as AxiosError;
      const errorData = error?.response?.data || "error";
      setErrorMessage(errorData as string);
    } finally {
      setActionExecuting(false);
    }
  };
  const fetchHeroBanneMeal = async (id: string) => {
    setActionExecuting(true);
    try {
      await axios.get(`${base_url}lookup.php?i=${id}`).then((resp: any) => {
        setMealDetails(resp["meals"]);
      });
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
    fetchRandomMeal,
    fetchAreas,
    fetchCategories,
    fetchIngredients,
    ingredients,
    areas,
    categories,
    actionExecuting,
    randomMeals,
    mealDetails,
    heroBannerMeal,
    errorMessage
  };
};

export default useDataApi;
