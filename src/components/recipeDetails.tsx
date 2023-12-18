import { Box, Stack, Typography, duration } from "@mui/material";
import React from "react";
import ClockIcon from "../assets/icons/clock.svg";
import GraphIcon from "../assets/icons/graph.svg";
import InfoChip from "./Chips/infoChip";
import PrimaryButton from "./Buttons/primaryButton";
import SecondaryButton from "./Buttons/secondaryButton";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IButtonIconPosition } from "../utils/types";

const RecipeDetails = () => {
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
    </Box>
  );
};

export default RecipeDetails;
