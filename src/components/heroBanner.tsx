import {
  Box,
  Paper,
  Stack,
  Typography,
  styled,
  useMediaQuery,
  useTheme
} from "@mui/material";
import React from "react";
import PrimaryButton from "./Buttons/primaryButton";
import { useNavigate } from "react-router-dom";

const HeroBannerPaper = styled(Paper)(({ theme }) => ({
  width: "100%",
  backgroundColor: "#E3E5E8",
  boxSizing: "border-box",
  borderRadius: "16px"
}));

const HeroBanner = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const navigate = useNavigate();
  const showRecipe = () => {
    navigate("/mealDetails", { state: "52784" });
  };
  return (
    <HeroBannerPaper elevation={0}>
      <Stack
        flexDirection={"row"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Box>
          <Typography variant="h4" my={2}>
            Vegan Lasagna
          </Typography>
          <PrimaryButton label="View Recipe" onClick={showRecipe} />
        </Box>
        <Box>
          <img
            src="https://www.themealdb.com/images/media/meals/rvxxuy1468312893.jpg"
            alt="img"
            style={{
              width: matches ? "200px" : "125px",
              borderRadius: "50%"
            }}
          />
        </Box>
      </Stack>
    </HeroBannerPaper>
  );
};

export default HeroBanner;
