import Chip from "@mui/material/Chip";
import React from "react";

const InfoChip = (props: { tag: string }) => {
  const { tag } = props;
  return (
    <Chip
      color="primary"
      variant="filled"
      label={tag}
      sx={{
        borderRadius: "8px",
        margin: "0 2px 0",
        background: "#E6EEFE",
        color: "#2851A3",
        cursor: "pointer"
      }}
    />
  );
};

export default InfoChip;
