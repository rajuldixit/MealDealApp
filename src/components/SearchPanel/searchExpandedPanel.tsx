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
import React, { useState } from "react";
import styled from "styled-components";
import AreasList from "./areasList";
import CategoriesList from "./categoriesList";
import IngredientsList from "./ingredientsList";
import SuggestedRecipes from "./suggestedRecipes";
import SearchIcon from "@mui/icons-material/Search";

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
  selectedValue: string;
}

enum OPTIONS {
  RECIPE = "RECIPE",
  CATEGORY = "CATEGORY",
  AREAS = "AREAS",
  INGREDIENTS = "INGREDIENTS"
}

const SearchExpandedPanel: React.FC<DialogProps> = (props: DialogProps) => {
  const { onClose, selectedValue, open } = props;
  const [searchString, setSearchString] = useState("");
  const [type, setType] = useState(OPTIONS.RECIPE);
  const handleClose = () => {
    // onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    // onClose(value);
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
            maxWidth: { xs: "400px", sm: "600px", lg: "852px" } // Set your width here
          }
        }
      }}
    >
      <DialogContent
        sx={{
          width: { xs: "300px", sm: "600px", md: "800px" },
          justifyContent: "end",
          alignItems: "flex-start"
        }}
      >
        <TextField
          id="recipe-search-bar"
          label="Search"
          placeholder="Search"
          onChange={(e) => setSearchString(e.target.value)}
          sx={{
            width: { xs: "300px", sm: "600px", md: "800px" }
          }}
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
            <Stack flexDirection={"row"}>
              <Button onClick={() => setType(OPTIONS.RECIPE)}>Recipe</Button>
              <Button onClick={() => setType(OPTIONS.CATEGORY)}>
                Category
              </Button>
              <Button onClick={() => setType(OPTIONS.AREAS)}>Area</Button>
              <Button onClick={() => setType(OPTIONS.INGREDIENTS)}>
                Ingredients
              </Button>
            </Stack>
            <Stack
              sx={{
                background: "#e0dede",
                padding: "2%",
                minHeight: "200px",
                boxSizing: "border-box",
                borderRadius: "4px"
              }}
            >
              {type === OPTIONS.RECIPE && (
                <Box>
                  <SuggestedRecipes searchString={searchString} />
                </Box>
              )}
              {type === OPTIONS.AREAS && (
                <Box>
                  <AreasList />
                </Box>
              )}
              {type === OPTIONS.CATEGORY && (
                <Box>
                  <CategoriesList />
                </Box>
              )}
              {type === OPTIONS.INGREDIENTS && (
                <Box>
                  <IngredientsList />
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
