import { Paper, Stack, Typography, styled } from "@mui/material";
import React from "react";
import LogoICon from "../../assets/icons/logo.svg";
import { appColors } from "../../utils/constants";

const LogoPaper = styled(Paper)(({ theme }) => ({
  width: "100%",
  backgroundColor: appColors.primaryTextColor,
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.up("md")]: {
    padding: "36px 16px",
    justifyContent: "center",
    height: "16vh"
  },
  [theme.breakpoints.between("sm", "md")]: {
    padding: "36px 10px",
    justifyContent: "center",
    height: "10vh"
  },
  [theme.breakpoints.down("sm")]: {
    padding: "10px",
    justifyContent: "start"
  }
}));

const AppLogo = () => {
  return (
    <LogoPaper elevation={0}>
      <img src={LogoICon} alt="logo-icon" />
      <Stack sx={{ marginLeft: "8px" }}>
        <Typography
          sx={{
            fontSize: { xs: "16px", sm: "14px", md: "16px" },
            fontWeight: "bold",
            color: appColors.grey50
          }}
        >
          Meal Deal
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "14px", sm: "12px", md: "14px" },
            color: appColors.grey300
          }}
        >
          Recipes for healthy life
        </Typography>
      </Stack>
    </LogoPaper>
  );
};

export default AppLogo;
