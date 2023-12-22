import React, { useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import SearchExpandedPanel from "./searchExpandedPanel";
import { TextField, InputAdornment, IconButton } from "@mui/material";

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
