import React, { useEffect, useState } from "react";
import useDataApi from "../../hooks/useDataApi";
import { Grid } from "@mui/material";
import CategoryInfoCard from "../Cards/categoryInfoCard";

interface ICategoryOptions {
  idCategory: string;
  strCategory: string;
  strCategoryDescription: string;
  strCategoryThumb: string;
}

const CategoriesList = () => {
  const { fetchCategories, categories, errorMessage, actionExecuting } =
    useDataApi();

  const getCategories = async () => {
    await fetchCategories();
  };

  useEffect(() => {
    getCategories();
  }, []);

  if (errorMessage) {
    return <div>error</div>;
  }
  if (actionExecuting) {
    return <div>loading</div>;
  }
  return (
    <>
      {!actionExecuting && !!categories && (
        <Grid container spacing={2}>
          {categories &&
            categories.map((recipe) => (
              <Grid item xs={6} sm={4} md={3}>
                <CategoryInfoCard
                  key={recipe.idCategory}
                  name={recipe.strCategory}
                  strThumb={recipe.strCategoryThumb}
                  strCategoryDescription={recipe.strCategoryDescription}
                />
              </Grid>
            ))}
        </Grid>
      )}
    </>
  );
};

export default CategoriesList;
