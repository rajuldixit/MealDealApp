import { Paper, Typography, styled, Stack } from "@mui/material";
import React, { InvalidEvent, useEffect, useState } from "react";

import { NavPanelsKeys } from "../../utils/constants";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PeopleIcon from "@mui/icons-material/People";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import { IButtonIconPosition } from "../../utils/types";
import TextButton from "../Buttons/textButton";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppState } from "../../context/AppContext";
import { Types, initialState } from "../../context/AppReducer";

const LeftNavPaper = styled(Paper)(({ theme }) => ({
  width: "100%",
  backgroundColor: "#F4F5F6",
  boxSizing: "border-box",
  padding: "20px 16px",
  marginTop: "8px",
  height: "80vh",
  // position: "relative",
  [theme.breakpoints.between("sm", "md")]: {
    height: "87vh"
  }
}));
interface INavItem {
  key: string;
  title: string;
  icon: any;
  style?: { position: string; bottom: string };
  isActive: boolean;
}
const defaultNavItems = [
  {
    key: NavPanelsKeys.Home.key,
    title: NavPanelsKeys.Home.label,
    icon: HomeIcon,
    isActive: true
  },
  {
    key: NavPanelsKeys.Recipes.key,
    title: NavPanelsKeys.Recipes.label,
    icon: AutoStoriesIcon,
    isActive: false
  },
  {
    key: NavPanelsKeys.Community.key,
    title: NavPanelsKeys.Community.label,
    icon: PeopleIcon,
    isActive: false
  },
  {
    key: NavPanelsKeys.SavedRecipes.key,
    title: NavPanelsKeys.SavedRecipes.label,
    icon: FavoriteIcon,
    isActive: false
  },
  {
    key: NavPanelsKeys.Settings.key,
    title: NavPanelsKeys.Settings.label,
    icon: SettingsIcon,
    style: {
      position: "absolute",
      bottom: "12px"
    },
    isActive: false
  }
];
const LeftNav = () => {
  const [navItems, setNavItems] = useState<INavItem[]>(defaultNavItems);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const appState = useAppState();

  const onSelectNavOption = (itemKey: string) => {
    dispatch({
      type: Types.UpdateSideNavOption,
      payload: {
        ...initialState,
        activeSideNav: itemKey
      }
    });
  };

  useEffect(() => {
    const activeSideNav = appState.activeSideNav;
    const newVal = navItems.filter((nav) => {
      if (nav.key == activeSideNav) {
        nav.isActive = true;
      } else {
        nav.isActive = false;
      }
      return nav;
    });
    setNavItems(newVal);
    if (activeSideNav == NavPanelsKeys.Home.key) {
      navigate("/");
    }
  }, [appState]);

  return (
    <LeftNavPaper elevation={0}>
      {navItems.map((item) => (
        <Stack
          component={"div"}
          flexDirection={"row"}
          justifyContent={"start"}
          alignItems={"center"}
          key={item.key}
          sx={{
            position: item.style?.position || "relative",
            bottom: item.style?.bottom || ""
          }}
        >
          <TextButton
            key={item.key}
            label={item.title}
            onClick={() => onSelectNavOption(item.key)}
            color={item.isActive ? "#15C421" : "grey"}
            buttonIcon={{
              icon: <item.icon />,
              position: IButtonIconPosition.LEFT.toString()
            }}
          />
        </Stack>
      ))}
    </LeftNavPaper>
  );
};

export default LeftNav;
