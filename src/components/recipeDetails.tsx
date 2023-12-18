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

const RecipeDetails = () => {
  const [instruction, setInstruction] = useState<Array<string>>(new Array());
  const [ingredients, setIngredients] = useState<Array<string>>(new Array());
  useEffect(() => {
    const strIngredients = {
      strIngredient1: "Plain Flour",
      strIngredient2: "Caster Sugar",
      strIngredient3: "Yeast",
      strIngredient4: "Milk",
      strIngredient5: "Eggs",
      strIngredient6: "Eggs",
      strIngredient7: "Butter",
      strIngredient8: "Brie",
      strIngredient9: "Prosciutto"
    };
    const strMeasurements = {
      strMeasure1: "375g",
      strMeasure2: "50g",
      strMeasure3: "7g",
      strMeasure4: "75g",
      strMeasure5: "3 Large",
      strMeasure6: "To Glaze",
      strMeasure7: "180g",
      strMeasure8: "250g",
      strMeasure9: "8 slices"
    };
    const strInstruction =
      "Mix the flour, 1 tsp salt, caster sugar, yeast, milk and eggs together in a mixer using the dough attachment for 5 mins until the dough is smooth. Add the butter and mix for a further 4 mins on medium speed. Scrape the dough bowl and mix again for 1 min. Place the dough in a container, cover with cling film and leave in the fridge for at least 6 hrs before using.\r\nWrap the Brie in the prosciutto and set aside. Turn out the dough onto a lightly floured surface. Roll into a 25cm circle. Place the wrapped Brie in the middle of the circle and fold the edges in neatly. Put the parcel onto a baking tray lined with baking parchment and brush with beaten egg. Chill in the fridge for 30 mins, then brush again with beaten egg and chill for a further 30 mins. Leave to rise for 1 hr at room temperature. Heat oven to 200C/180C fan/gas 6, then bake for 22 mins. Serve warm.";

    const splitedInstruction = strInstruction.split("\r\n");
    setInstruction([...splitedInstruction]);

    let newIngre = new Array();
    for (let i = 0; i < Object.keys(strIngredients).length; i++) {
      newIngre[i] =
        Object.values(strMeasurements)[i] +
        " " +
        Object.values(strIngredients)[i];
    }
    setIngredients([...newIngre]);
  }, []);
  return (
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
            src="https://www.themealdb.com/images/media/meals/qqpwsy1511796276.jpg"
            style={{ width: "inherit", borderRadius: "8px" }}
          />
        </Box>
        <Box ml={2}>
          <Box sx={{ display: "flex", alignItems: "center", pb: 1, pt: 0.5 }}>
            <Stack flexDirection={"row"} mr={1}>
              <img src={ClockIcon} />
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
                sx={{ marginLeft: "4px" }}
              >
                {"2h 30m"}
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
                {"Advanced"}
              </Typography>
            </Stack>
          </Box>
          <Typography component={"div"} variant="h4">
            {"Brie wrapped in prosciutto & brioche"}
          </Typography>
          <Typography component={"div"} variant="body1">
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
               nisi ut aliquip ex ea commodo consequat.`}
          </Typography>
          {["Dessert", "French"].map((tag) => (
            <InfoChip tag={tag} />
          ))}
          <Stack
            flexDirection={"row"}
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center"
            }}
          >
            <PrimaryButton
              label={"Go to recipe"}
              onClick={() => {}}
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
          flexDirection: { xs: "column", md: "row" }
        }}
      >
        <Box sx={{ width: { xs: "100%", sm: "240px", lg: "300px" } }}>
          <Typography component={"div"} variant="h6" mb={2}>
            Ingredients
          </Typography>
          {ingredients &&
            ingredients.map((item) => (
              <Typography component={"div"} variant="body2" mb={0.5}>
                {item}
              </Typography>
            ))}
        </Box>
        <Box
          ml={2}
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

          {instruction &&
            instruction.map((item) => (
              <Typography component={"div"} variant="body2" mb={3}>
                {item}
              </Typography>
            ))}
        </Box>
      </Stack>
    </Box>
  );
};

export default RecipeDetails;
