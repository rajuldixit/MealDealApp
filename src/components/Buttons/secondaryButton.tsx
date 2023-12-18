import React from "react";
import { IButtonType } from "../../utils/types";
import { Button, ButtonProps, styled } from "@mui/material";

const ColorOutlinedButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: "#15C421",
  borderColor: "#15C421",
  backgroundColor: "#fff"
}));

const SecondaryButton: React.FC<IButtonType> = ({
  label,
  onClick,
  icon = ""
}) => {
  return (
    <ColorOutlinedButton onClick={onClick} variant="outlined">
      {label}
    </ColorOutlinedButton>
  );
};

export default SecondaryButton;
