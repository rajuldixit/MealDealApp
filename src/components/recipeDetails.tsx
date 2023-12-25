import { Box, Stack, Typography, duration } from "@mui/material";
import React, { useEffect, useState } from "react";
import ClockIcon from "../assets/icons/clock.svg";
import GraphIcon from "../assets/icons/graph.svg";
import InfoChip from "./Chips/infoChip";
import PrimaryButton from "./Buttons/primaryButton";
import SecondaryButton from "./Buttons/secondaryButton";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IButtonIconPosition } from "../utils/types";
import useFormatRecipeDetails from "../hooks/useFormatRecipeDetails";
import useDataApi from "../hooks/useDataApi";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../context/AppContext";
import { Types, initialState } from "../context/AppReducer";
import { NavPanelsKeys } from "../utils/constants";

const RecipeDetails = () => {
  const { id } = useParams();
  const { fetchMealById, mealDetails, errorMessage, actionExecuting } =
    useDataApi();
  const { format, recipe } = useFormatRecipeDetails();
  const dispatch = useAppDispatch();

  const getFormattedRecipe = async () => {
    if (!!mealDetails) {
      await format(mealDetails);
    }
  };
  const ingredients = () => {
    return recipe?.ingredients.map((item, idx) => (
      <Stack flexDirection={"row"} justifyContent={"start"} mb={0.5}>
        <Typography sx={{ fontWeight: "bold" }} variant="body2" mr={0.5}>
          {recipe.measurements[idx]}
        </Typography>
        <Typography variant="body2">{item}</Typography>
      </Stack>
    ));
  };

  const fetchMeal = async () => {
    if (!!id) {
      await fetchMealById(parseInt(id));
    }
  };

  useEffect(() => {
    getFormattedRecipe();
  }, [mealDetails]);
  useEffect(() => {
    fetchMeal();
  }, [id]);
  useEffect(() => {
    if (!!recipe) {
      dispatch({
        type: Types.SaveSearchKey,
        payload: {
          ...initialState,
          searchKey: recipe.category || ""
        }
      });
    }
  }, [recipe]);

  if (errorMessage) {
    return <div>Error {errorMessage}</div>;
  }
  if (actionExecuting) {
    return <div>loading</div>;
  }
  return (
    <>
      {" "}
      {!actionExecuting && !!recipe && (
        <Box>
          <Stack
            sx={{
              display: "flex",
              justifyContent: "start",
              pb: 1,
              pt: 0.5,
              flexDirection: { xs: "column", md: "row" }
            }}
          >
            <Box sx={{ width: { xs: "100%", sm: "240px", lg: "300px" } }}>
              <img
                src={recipe?.basicDetails.image}
                style={{ width: "inherit", borderRadius: "8px" }}
              />
            </Box>
            <Box ml={2}>
              <Box sx={{ display: "flex", alignItems: "center", pb: 1 }}>
                <Stack flexDirection={"row"} mr={1}>
                  <img src={ClockIcon} />
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                    sx={{ marginLeft: "4px" }}
                  >
                    {recipe?.basicDetails.duration}
                  </Typography>
                </Stack>
                <Stack flexDirection={"row"}>
                  <img src={GraphIcon} />
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                    sx={{ marginLeft: "4px" }}
                  >
                    {recipe?.basicDetails.expertLevel}
                  </Typography>
                </Stack>
              </Box>
              <Typography
                component={"div"}
                mt={2}
                sx={{ typography: { xs: "h5", sm: "h5", md: "h5", lg: "h4" } }}
              >
                {recipe?.basicDetails.name}
              </Typography>
              <Typography component={"div"} variant="body1" mt={2} mb={2}>
                {recipe?.description}
              </Typography>
              {recipe?.basicDetails.tags.map((tag) => (
                <InfoChip tag={tag} />
              ))}
              <Stack
                flexDirection={"row"}
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  mt: 4
                }}
              >
                <PrimaryButton
                  label={"Go to recipe"}
                  onClick={() => {}}
                  style={{ margin: "0 8px 0" }}
                  buttonIcon={{
                    icon: <ArrowDownwardIcon />,
                    position: IButtonIconPosition.RIGHT.toString()
                  }}
                />
                <SecondaryButton
                  label={"Save recipe"}
                  onClick={() => {}}
                  buttonIcon={{
                    icon: <FavoriteBorderIcon />,
                    position: IButtonIconPosition.RIGHT.toString()
                  }}
                />
              </Stack>
            </Box>
          </Stack>
          <Stack
            sx={{
              display: "flex",
              justifyContent: "start",
              pb: 1,
              pt: 0.5,
              mt: 4,
              flexDirection: { xs: "column", sm: "row" }
            }}
          >
            <Box sx={{ width: { xs: "100%", sm: "240px", lg: "300px" } }}>
              <Typography component={"div"} variant="h6" mb={2}>
                Ingredients
              </Typography>
              {ingredients()}
            </Box>
            <Box
              ml={{ xs: 0, sm: 4 }}
              mt={{ xs: 4, sm: 0 }}
              sx={{
                width: {
                  xs: "100%",
                  sm: "calc(100% - 240px)",
                  lg: "calc(100% - 300px)"
                }
              }}
            >
              <Typography component={"div"} variant="h6" mb={2}>
                Instructions
              </Typography>

              {recipe?.instructions &&
                recipe?.instructions.map((item) => (
                  <Typography component={"div"} variant="body2" mb={3}>
                    {item}
                  </Typography>
                ))}
            </Box>
          </Stack>
        </Box>
      )}{" "}
    </>
  );
};

export default RecipeDetails;
