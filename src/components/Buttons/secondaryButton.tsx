import React, { cloneElement } from "react";
import { IButtonIconPosition, IButtonType } from "../../utils/types";
import { Button, ButtonProps, styled } from "@mui/material";
import { appColors } from "../../utils/constants";

const ColorOutlinedButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: appColors.primaryActionColor,
  borderColor: appColors.primaryActionColor,
  backgroundColor: appColors.white,
  textTransform: "none",
  "&:hover": {
    color: appColors.primaryActionColor,
    borderColor: appColors.primaryActionColor,
    backgroundColor: appColors.white
  }
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
