import { Button, ButtonProps, styled } from "@mui/material";
import React from "react";
import { IButtonType } from "../../utils/types";

const ColorContainedButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: "white",
  backgroundColor: "#15C421",
  "&:hover": {
    backgroundColor: "#05820e"
  }
}));

const PrimaryButton: React.FC<IButtonType> = ({
  label,
  onClick,
  icon = ""
}) => {
  return (
    <ColorContainedButton variant="contained" onClick={onClick}>
      {label}
    </ColorContainedButton>
  );
};

export default PrimaryButton;
