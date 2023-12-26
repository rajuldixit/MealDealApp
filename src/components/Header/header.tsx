import { Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import SearchPanel from "../SearchPanel";
import { useAppDispatch } from "../../context/AppContext";
import useInitialStateSetup from "../../hooks/useInitialStateSetup";
import { appColors } from "../../utils/constants";

const Header = () => {
  const dispatch = useAppDispatch();
  const {
    saveApiResponse,
    errorMessage,
    actionExecuting,
    saveRandomRecipesResponse
  } = useInitialStateSetup();
  useEffect(() => {
    saveApiResponse(dispatch);
    saveRandomRecipesResponse(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (!actionExecuting && errorMessage) {
    }
  }, [errorMessage, actionExecuting]);
  return (
    <Stack
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      mb={2}
      mt={{ sm: "16px", md: "18px" }}
    >
      <Typography
        sx={{
          display: { xs: "none", sm: "block" },
          fontWeight: "400",
          color: appColors.primaryTextColor,
          fontSize: { sm: "18px", md: "32px" }
        }}
      >
        Discover Recipes
      </Typography>

      <SearchPanel />
    </Stack>
  );
};

export default Header;
