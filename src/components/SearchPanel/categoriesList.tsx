import React, { useEffect, useState } from "react";
import useDataApi from "../../hooks/useDataApi";
import { Grid } from "@mui/material";
import CategoryInfoCard from "../Cards/categoryInfoCard";
import { useAppState } from "../../context/AppContext";

interface ICategoryProps {
  selectedCategory: (arg: string) => void;
}

const CategoriesList: React.FC<ICategoryProps> = ({
  selectedCategory
}: ICategoryProps) => {
  const appState = useAppState();

  return (
    <>
      {!!appState.categories && (
        <Grid container spacing={2}>
          {appState.categories &&
            appState.categories.map((category) => (
              <Grid
                item
                xs={6}
                sm={4}
                md={3}
                onClick={() => selectedCategory(category.strCategory)}
                key={category.idCategory}
              >
                <CategoryInfoCard
                  key={category.idCategory}
                  name={category.strCategory}
                  strThumb={category.strCategoryThumb}
                  strCategoryDescription={category.strCategoryDescription}
                />
              </Grid>
            ))}
        </Grid>
      )}
    </>
  );
};

export default CategoriesList;
