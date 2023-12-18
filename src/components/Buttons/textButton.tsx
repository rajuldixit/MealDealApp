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
        cloneElement(buttonIcon.icon, { size: 24, "stroke-width": 2 })}
      {label}
      {buttonIcon &&
        buttonIcon.position == IButtonIconPosition.RIGHT.toString() &&
        cloneElement(buttonIcon.icon, { size: 24, "stroke-width": 2 })}
    </ColorTextButton>
  );
};

export default TextButton;
