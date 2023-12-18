import { Paper, BottomNavigation, BottomNavigationAction } from "@mui/material";
import React from "react";

import HomeIcon from "../../assets/icons/home.svg";
import RecipesIcon from "../../assets/icons/recipes.svg";
import CommunityIcon from "../../assets/icons/vector.svg";
import SavedRecipeIcon from "../../assets/icons/vector1.svg";
import SettingIcon from "../../assets/icons/settings.svg";

const BottomNav = () => {
  const [value, setValue] = React.useState(0);
  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: "8px",
        left: 0,
        right: 0
      }}
      elevation={0}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          borderRadius: "32px",
          background: "#F4F5F6"
        }}
      >
        <BottomNavigationAction icon={<img src={HomeIcon} />} />
        <BottomNavigationAction icon={<img src={RecipesIcon} />} />
        <BottomNavigationAction icon={<img src={CommunityIcon} />} />
        <BottomNavigationAction icon={<img src={SavedRecipeIcon} />} />
        <BottomNavigationAction icon={<img src={SettingIcon} />} />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNav;
