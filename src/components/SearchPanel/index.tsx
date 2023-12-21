import {
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  IconButton,
  InputAdornment,
  Box,
  ClickAwayListener,
  Grow,
  Popper,
  Stack
} from "@mui/material";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import CategoriesList from "./categoriesList";

const SearchPaper = styled(Paper)(({ theme }) => ({
  height: "auto",
  padding: "1%",
  backgroundColor: "#fff",
  boxSizing: "border-box",
  border: "1px solid lightgrey",
  width: "100%"
}));

enum OPTIONS {
  RECIPE = "RECIPE",
  CATEGORY = "CATEGORY",
  AREAS = "AREAS",
  INGREDIENTS = "INGREDIENTS"
}

interface DialogProps {
  onClose: () => void;
  open: boolean;
  selectedValue: string;
}

export const SearchExpandedPanel: React.FC<DialogProps> = (
  props: DialogProps
) => {
  const { onClose, selectedValue, open } = props;
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
              <Button onClick={() => setType(OPTIONS.RECIPE)}>Area</Button>
              <Button onClick={() => setType(OPTIONS.RECIPE)}>
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
              {type === OPTIONS.RECIPE && <Box>searching....</Box>}
              {type === OPTIONS.AREAS && <Box>searching....</Box>}
              {type === OPTIONS.CATEGORY && (
                <Box>
                  <CategoriesList />
                </Box>
              )}
              {type === OPTIONS.INGREDIENTS && <Box>searching....</Box>}
            </Stack>
          </Box>
        </SearchPaper>
      </DialogContent>
    </Dialog>
  );
};

const SearchPanel = () => {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <TextField
        id="recipe-search-bar"
        label="Search"
        placeholder="Search"
        onClick={handleClickOpen}
        sx={{
          width: 200
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
      <SearchExpandedPanel
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </>
  );
};

export default SearchPanel;
