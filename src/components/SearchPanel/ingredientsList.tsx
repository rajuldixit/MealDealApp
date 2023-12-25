import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import useDataApi from "../../hooks/useDataApi";
import InfoChip from "../Chips/infoChip";
import { useAppState } from "../../context/AppContext";

interface IingredientTypes {
  strIngredient: string;
}

type IingredientsProps = {
  selectedIngredient: (arg: string) => void;
};

const IngredientsList: React.FC<IingredientsProps> = ({
  selectedIngredient
}: IingredientsProps) => {
  const appState = useAppState();

  return (
    <>
      {!!appState.ingredients && (
        <Grid container spacing={2}>
          {appState.ingredients &&
            appState.ingredients.map((ingredient: IingredientTypes) => (
              <Grid
                item
                xs={3}
                sm={2}
                onClick={() => selectedIngredient(ingredient.strIngredient)}
                key={ingredient.strIngredient}
              >
                <InfoChip tag={ingredient.strIngredient} />
              </Grid>
            ))}
        </Grid>
      )}
    </>
  );
};

export default IngredientsList;
