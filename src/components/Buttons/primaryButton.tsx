import { Button, ButtonProps, styled } from "@mui/material";
import React, { cloneElement } from "react";
import { IButtonIconPosition, IButtonType } from "../../utils/types";

const ColorContainedButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: "white",
  backgroundColor: "#15C421",
  "&:hover": {
    backgroundColor: "#05820e"
  },
  textTransform: "none"
}));

const PrimaryButton: React.FC<IButtonType> = ({
  label,
  onClick,
  buttonIcon
}) => {
  return (
    <ColorContainedButton variant="contained" onClick={onClick}>
      {buttonIcon &&
        buttonIcon.position == IButtonIconPosition.LEFT.toString() &&
        cloneElement(buttonIcon.icon, { "stroke-width": 1 })}
      {label}
      {buttonIcon &&
        buttonIcon.position == IButtonIconPosition.RIGHT.toString() &&
        cloneElement(buttonIcon.icon, { "stroke-width": 1 })}
    </ColorContainedButton>
  );
};

export default PrimaryButton;
