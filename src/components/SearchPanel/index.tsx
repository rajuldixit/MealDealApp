import React, { useEffect, useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import SearchExpandedPanel from "./searchExpandedPanel";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { useAppState } from "../../context/AppContext";

const SearchPanel = () => {
  const [open, setOpen] = useState(false);

  const appState = useAppState();
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
          width: { xs: "100%", sm: "200px" }
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
      <SearchExpandedPanel open={open} onClose={handleClose} />
    </>
  );
};

export default SearchPanel;
