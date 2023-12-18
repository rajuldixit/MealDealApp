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
  borderRadius: "16px",
  padding: "0 8% 0 2%"
}));

const HeroBanner = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const navigate = useNavigate();
  const showRecipe = () => {
    navigate(`/mealDetails/52784`, { state: "52784" });
  };
  return (
    <HeroBannerPaper elevation={0}>
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box>
          <Typography
            my={2}
            sx={{ typography: { xs: "h6", sm: "h5", md: "h4", lg: "h3" } }}
          >
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
