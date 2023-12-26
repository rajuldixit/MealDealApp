import {
  Paper,
  Dialog,
  DialogContent,
  TextField,
  InputAdornment,
  IconButton,
  Box,
  Stack,
  Button
} from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AreasList from "./areasList";
import CategoriesList from "./categoriesList";
import IngredientsList from "./ingredientsList";
import SuggestedRecipes from "./suggestedRecipes";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../context/AppContext";
import { Types, initialState } from "../../context/AppReducer";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import PublicIcon from "@mui/icons-material/Public";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import GrassIcon from "@mui/icons-material/Grass";
import PrimaryButton from "../Buttons/primaryButton";
import { IButtonIconPosition } from "../../utils/types";
import { NavPanelsKeys, appColors } from "../../utils/constants";
import useUpdateSideNav from "../../hooks/useUpdateSideNav";

const SearchPaper = styled(Paper)(({ theme }) => ({
  height: "auto",
  padding: "1%",
  backgroundColor: "#fff",
  boxSizing: "border-box",
  border: "1px solid lightgrey",
  width: "100%"
}));

interface DialogProps {
  onClose: () => void;
  open: boolean;
}

enum OPTIONS {
  RECIPE = "RECIPE",
  CATEGORY = "CATEGORY",
  AREAS = "AREAS",
  INGREDIENTS = "INGREDIENTS"
}

const SearchExpandedPanel: React.FC<DialogProps> = (props: DialogProps) => {
  const { onClose, open } = props;
  const [searchString, setSearchString] = useState("");
  const [type, setType] = useState(OPTIONS.RECIPE);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedIngredient, setSelectedIngredient] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [inputValue, setInputValue] = useState();
  const dispatch = useAppDispatch();
  const { updateSideNavToRecipe } = useUpdateSideNav();

  const resetAndClose = () => {
    setSelectedArea("");
    setSelectedCategory("");
    setSelectedIngredient("");
    setSearchString("");
    onClose();
  };
  const handleClose = () => {
    resetAndClose();
  };

  const handleListItemClick = (idMeal: string) => {
    resetAndClose();
    updateSideNavToRecipe(idMeal);
  };
  const onSelectedCategory = (category: string) => {
    setSelectedCategory((prev) => category);
    setSearchString("");
    setSelectedIngredient("");
    setSelectedArea("");
    onSettingsearchTagOption(OPTIONS.CATEGORY);
    setType(OPTIONS.RECIPE);
  };

  const onEnteringSearchWord = (str: any) => {
    if (str.keyCode == 13) {
      setSelectedArea("");
      setSelectedCategory("");
      setSelectedIngredient("");
      setSearchString(str.target.value);
      onSettingsearchTagOption("");
      setType(OPTIONS.RECIPE);
    }
  };
  const onEnteringSearchStr = (str: string) => {
    setSelectedArea("");
    setSelectedCategory("");
    setSelectedIngredient("");
    setSearchString(str);
    onSettingsearchTagOption("");
    setType(OPTIONS.RECIPE);
  };

  const onSelectArea = (area: string) => {
    setSelectedArea(area);
    setSelectedIngredient("");
    setSelectedCategory("");
    setSearchString("");
    onSettingsearchTagOption(OPTIONS.AREAS);
    setType(OPTIONS.RECIPE);
  };

  const onSelectIngredient = (str: string) => {
    setSelectedIngredient(str);
    setSelectedCategory("");
    setSearchString("");
    onSettingsearchTagOption(OPTIONS.INGREDIENTS);
    setType(OPTIONS.RECIPE);
  };

  const onSettingsearchTagOption = (option: string) => {
    dispatch({
      type: Types.SaveSearchTagOption,
      payload: {
        ...initialState,
        searchTagOption: option
      }
    });
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      scroll="paper"
      sx={{
        "& .MuiDialog-container": {
          width: "100%",
          justifyContent: "end",
          alignItems: "flex-start",
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: { xs: "400px", sm: "100%", lg: "852px" }
          }
        }
      }}
    >
      <DialogContent
        sx={{
          width: "100%",
          justifyContent: "end",
          alignItems: "flex-start",
          boxSizing: "border-box"
        }}
      >
        <TextField
          id="recipe-search-bar"
          label="Search for any recipe"
          value={inputValue}
          placeholder="Search for any recipe"
          onKeyDown={(e) => onEnteringSearchWord(e)}
          onChange={(e) => onEnteringSearchStr(e.target.value)}
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        <SearchPaper>
          <Box>
            <Stack
              flexDirection={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 0 }}
            >
              <Stack flexDirection={"row"}>
                <PrimaryButton
                  label={"Recipe"}
                  onClick={() => setType(OPTIONS.RECIPE)}
                  buttonIcon={{
                    icon: <AutoStoriesIcon />,
                    position: IButtonIconPosition.LEFT.toString()
                  }}
                  style={{
                    background:
                      type === OPTIONS.RECIPE
                        ? appColors.primaryActionColor
                        : appColors.disabledBGColor,
                    borderColor:
                      type === OPTIONS.RECIPE
                        ? appColors.primaryActionColor
                        : appColors.disabledTextColor,
                    fontColor:
                      type === OPTIONS.RECIPE
                        ? appColors.white
                        : appColors.disabledTextColor,
                    margin: "0 4px 0"
                  }}
                />
                <PrimaryButton
                  label={"Category"}
                  onClick={() => setType(OPTIONS.CATEGORY)}
                  buttonIcon={{
                    icon: <TextSnippetIcon />,
                    position: IButtonIconPosition.LEFT.toString()
                  }}
                  style={{
                    background:
                      type === OPTIONS.CATEGORY
                        ? appColors.primaryActionColor
                        : appColors.disabledBGColor,
                    borderColor:
                      type === OPTIONS.CATEGORY
                        ? appColors.primaryActionColor
                        : appColors.disabledTextColor,
                    fontColor:
                      type === OPTIONS.CATEGORY
                        ? appColors.white
                        : appColors.disabledTextColor,
                    margin: "0 4px 0"
                  }}
                />
                <PrimaryButton
                  label={"Areas"}
                  onClick={() => setType(OPTIONS.AREAS)}
                  buttonIcon={{
                    icon: <PublicIcon />,
                    position: IButtonIconPosition.LEFT.toString()
                  }}
                  style={{
                    background:
                      type === OPTIONS.AREAS
                        ? appColors.primaryActionColor
                        : appColors.disabledBGColor,
                    borderColor:
                      type === OPTIONS.AREAS
                        ? appColors.primaryActionColor
                        : appColors.disabledTextColor,
                    fontColor:
                      type === OPTIONS.AREAS
                        ? appColors.white
                        : appColors.disabledTextColor,
                    margin: "0 4px 0"
                  }}
                />
              </Stack>
              <Stack flexDirection={"row"}>
                <PrimaryButton
                  label={"Ingredients"}
                  onClick={() => setType(OPTIONS.INGREDIENTS)}
                  buttonIcon={{
                    icon: <GrassIcon />,
                    position: IButtonIconPosition.LEFT.toString()
                  }}
                  style={{
                    background:
                      type === OPTIONS.INGREDIENTS
                        ? appColors.primaryActionColor
                        : appColors.disabledBGColor,
                    borderColor:
                      type === OPTIONS.INGREDIENTS
                        ? appColors.primaryActionColor
                        : appColors.disabledTextColor,
                    fontColor:
                      type === OPTIONS.INGREDIENTS
                        ? appColors.white
                        : appColors.disabledTextColor,
                    margin: "0 4px 0"
                  }}
                />
              </Stack>
            </Stack>
            <Stack
              sx={{
                background: "#e0dede",
                padding: "2%",
                minHeight: "200px",
                boxSizing: "border-box",
                borderRadius: "4px",
                marginTop: "8px"
              }}
            >
              {type === OPTIONS.RECIPE && (
                <Box>
                  <SuggestedRecipes
                    searchString={searchString}
                    selectedCategory={selectedCategory}
                    selectedIngredient={selectedIngredient}
                    selectedArea={selectedArea}
                    selectedRecipe={handleListItemClick}
                  />
                </Box>
              )}
              {type === OPTIONS.AREAS && (
                <Box>
                  <AreasList
                    selectedArea={(area: string) => onSelectArea(area)}
                  />
                </Box>
              )}
              {type === OPTIONS.CATEGORY && (
                <Box>
                  <CategoriesList
                    selectedCategory={(category: string) =>
                      onSelectedCategory(category)
                    }
                  />
                </Box>
              )}
              {type === OPTIONS.INGREDIENTS && (
                <Box>
                  <IngredientsList
                    selectedIngredient={(ingredient: string) =>
                      onSelectIngredient(ingredient)
                    }
                  />
                </Box>
              )}
            </Stack>
          </Box>
        </SearchPaper>
      </DialogContent>
    </Dialog>
  );
};

export default SearchExpandedPanel;
