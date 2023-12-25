import { Button, ButtonProps, styled } from "@mui/material";
import React, { cloneElement } from "react";
import { IButtonIconPosition, IButtonType } from "../../utils/types";

const ColorContainedButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: "white",
  backgroundColor: "#15C421",
  "&:hover": {
    backgroundColor: "#05820e"
  },
  textTransform: "none",
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
    height: "36px",
    padding: "6px 10px !important"
  }
}));

const PrimaryButton: React.FC<IButtonType> = ({
  label,
  onClick,
  buttonIcon,
  style = { margin: "0" }
}) => {
  return (
    <ColorContainedButton
      variant="contained"
      onClick={onClick}
      sx={{
        margin: style.margin,
        background: style.background,
        border: `2px solid ${style.borderColor}`,
        color: style.fontColor
      }}
    >
      {buttonIcon &&
        buttonIcon.position == IButtonIconPosition.LEFT.toString() &&
        cloneElement(buttonIcon.icon)}
      {label}
      {buttonIcon &&
        buttonIcon.position == IButtonIconPosition.RIGHT.toString() &&
        cloneElement(buttonIcon.icon)}
    </ColorContainedButton>
  );
};

export default PrimaryButton;
