import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import useDataApi from "../../hooks/useDataApi";
import InfoChip from "../Chips/infoChip";

interface IingredientTypes {
  strIngredient: string;
}

type IingredientsProps = {
  selectedIngredient: (arg: string) => void;
};

const IngredientsList: React.FC<IingredientsProps> = ({
  selectedIngredient
}: IingredientsProps) => {
  const { fetchIngredients, ingredients, errorMessage, actionExecuting } =
    useDataApi();
  const getIningredients = async () => {
    await fetchIngredients();
  };
  useEffect(() => {
    console.log(ingredients);
  }, [ingredients]);
  useEffect(() => {
    getIningredients();
  }, []);

  if (errorMessage) {
    return <div>error</div>;
  }
  if (actionExecuting) {
    return <div>loading</div>;
  }
  return (
    <>
      {!actionExecuting && !!ingredients && (
        <Grid container spacing={2}>
          {ingredients &&
            ingredients.map((ingredient: IingredientTypes) => (
              <Grid
                item
                xs={3}
                sm={2}
                onClick={() => selectedIngredient(ingredient.strIngredient)}
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
