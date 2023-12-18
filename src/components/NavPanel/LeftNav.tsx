import { Paper, Typography, styled, Stack } from "@mui/material";
import React from "react";

import HomeIcon from "../../assets/icons/home.svg";
import RecipesIcon from "../../assets/icons/recipes.svg";
import CommunityIcon from "../../assets/icons/vector.svg";
import SavedRecipeIcon from "../../assets/icons/vector1.svg";
import SettingIcon from "../../assets/icons/settings.svg";
import { NavPanelsKeys } from "../../utils/constants";

const LeftNavPaper = styled(Paper)(({ theme }) => ({
  width: "100%",
  backgroundColor: "#F4F5F6",
  boxSizing: "border-box",
  padding: "20px 16px",
  marginTop: "8px",
  height: "100vh",
  // position: "relative",
  [theme.breakpoints.between("sm", "md")]: {
    height: "87vh"
  }
}));
interface INavItem {
  key: string;
  title: string;
  icon: string;
  style?: { position: string; bottom: string };
}
const LeftNav = () => {
  const navItems: INavItem[] = [
    {
      key: NavPanelsKeys.Home.key,
      title: NavPanelsKeys.Home.label,
      icon: HomeIcon
    },
    {
      key: NavPanelsKeys.Recipes.key,
      title: NavPanelsKeys.Recipes.label,
      icon: RecipesIcon
    },
    {
      key: NavPanelsKeys.Community.key,
      title: NavPanelsKeys.Community.label,
      icon: CommunityIcon
    },
    {
      key: NavPanelsKeys.SavedRecipes.key,
      title: NavPanelsKeys.SavedRecipes.label,
      icon: SavedRecipeIcon
    },
    {
      key: NavPanelsKeys.Settings.key,
      title: NavPanelsKeys.Settings.label,
      icon: SettingIcon,
      style: {
        position: "absolute",
        bottom: "4%"
      }
    }
  ];
  return (
    <LeftNavPaper elevation={0}>
      {navItems.map((item) => (
        <Stack
          key={item.key}
          flexDirection={"row"}
          my={2}
          sx={{
            position: `${item?.style?.position}` || "",
            bottom: `${item?.style?.bottom}` || ""
          }}
        >
          <img src={item.icon} style={{ width: "24px" }} />
          <Typography sx={{ marginLeft: "8px" }} variant="h6">
            {item.title}
          </Typography>
        </Stack>
      ))}
    </LeftNavPaper>
  );
};

export default LeftNav;
