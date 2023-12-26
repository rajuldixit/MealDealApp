import Chip from "@mui/material/Chip";
import React from "react";
import { appColors } from "../../utils/constants";

const InfoChip = (props: { tag: string }) => {
  const { tag } = props;
  return (
    <Chip
      variant="filled"
      label={tag}
      sx={{
        borderRadius: "8px",
        margin: "0 2px 0",
        background: appColors.tagBGColor,
        color: appColors.tagTextColor,
        cursor: "pointer"
      }}
    />
  );
};

export default InfoChip;
