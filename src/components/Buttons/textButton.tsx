import React, { cloneElement } from "react";
import { IButtonIconPosition, IButtonType } from "../../utils/types";
import { Button, ButtonProps, Typography, styled } from "@mui/material";

const ColorTextButton = styled(Button)<ButtonProps>(({ theme }) => ({
  textTransform: "none"
}));

const TextButton: React.FC<IButtonType> = ({
  label,
  onClick,
  buttonIcon,
  color = "#15C421"
}) => {
  return (
    <ColorTextButton onClick={onClick} variant="text" sx={{ color: color }}>
      {buttonIcon &&
        buttonIcon.position == IButtonIconPosition.LEFT.toString() &&
        cloneElement(buttonIcon.icon, {
          "stroke-width": 1,
          "margin-right": "4px"
        })}
      <Typography ml={1} mr={1}>
        {label}
      </Typography>
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
