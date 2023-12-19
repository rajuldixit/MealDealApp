import React, { cloneElement } from "react";
import { IButtonIconPosition, IButtonType } from "../../utils/types";
import { Button, ButtonProps, styled } from "@mui/material";

const ColorTextButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: "#15C421",
  textTransform: "none"
}));

const TextButton: React.FC<IButtonType> = ({ label, onClick, buttonIcon }) => {
  return (
    <ColorTextButton onClick={onClick} variant="text">
      {buttonIcon &&
        buttonIcon.position == IButtonIconPosition.LEFT.toString() &&
        cloneElement(buttonIcon.icon, {
          "stroke-width": 1,
          "margin-right": "4px"
        })}
      {label}
      {buttonIcon &&
        buttonIcon.position == IButtonIconPosition.RIGHT.toString() &&
        cloneElement(buttonIcon.icon, {
          "stroke-width": 1,
          "margin-left": "4px"
        })}
    </ColorTextButton>
  );
};

export default TextButton;
