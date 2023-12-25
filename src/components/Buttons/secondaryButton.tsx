import React, { cloneElement } from "react";
import { IButtonIconPosition, IButtonType } from "../../utils/types";
import { Button, ButtonProps, styled } from "@mui/material";

const ColorOutlinedButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: "#15C421",
  borderColor: "#15C421",
  backgroundColor: "#fff",
  textTransform: "none"
}));

const SecondaryButton: React.FC<IButtonType> = ({
  label,
  onClick,
  buttonIcon
}) => {
  return (
    <ColorOutlinedButton onClick={onClick} variant="outlined">
      {buttonIcon &&
        buttonIcon.position == IButtonIconPosition.LEFT.toString() &&
        cloneElement(buttonIcon.icon, {
          "margin-right": "4px"
        })}
      {label}
      {buttonIcon &&
        buttonIcon.position == IButtonIconPosition.RIGHT.toString() &&
        cloneElement(buttonIcon.icon, {
          "margin-left": "4px"
        })}
    </ColorOutlinedButton>
  );
};

export default SecondaryButton;
