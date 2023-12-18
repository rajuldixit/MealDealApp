import React from "react";
import { IButtonType } from "../../utils/types";
import { Button, ButtonProps, styled } from "@mui/material";

const ColorTextButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: "#15C421"
}));

const TextButton: React.FC<IButtonType> = ({ label, onClick, icon = "" }) => {
  return (
    <ColorTextButton onClick={onClick} variant="text">
      {label}
    </ColorTextButton>
  );
};

export default TextButton;
