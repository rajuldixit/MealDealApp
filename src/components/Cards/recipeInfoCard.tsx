import React from "react";
import { IRecipeInfo } from "../../utils/types";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Stack
} from "@mui/material";
import InfoChip from "../Chips/infoChip";

interface IRecipe {
  recipe: IRecipeInfo;
  onSelect: () => void;
}

const RecipeInfoCard: React.FC<IRecipe> = (props: IRecipe) => {
  const { id, image, duration, tags, name, expertLevel } = props.recipe;
  return (
    <Card
      sx={{
        display: "flex",
        maxWidth: "448px",
        borderRadius: "16px",
        margin: "10px 0",
        cursor: "pointer"
      }}
      onClick={props.onSelect}
    >
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={image}
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {name}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {duration}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {expertLevel}
            </Typography>
          </Box>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          {tags && tags.map((tag) => <InfoChip key={tag} />)}
        </Box>
      </Box>
    </Card>
  );
};

export default RecipeInfoCard;
