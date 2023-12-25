import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography
} from "@mui/material";
import React from "react";
import { IBriefRecipeInfo } from "../../utils/types";

type ICardProps = {
  recipe: IBriefRecipeInfo;
};

const BriefInfoCard: React.FC<ICardProps> = (props: ICardProps) => {
  const { idMeal, strMeal, strMealThumb } = props.recipe;
  return (
    <Card
      sx={{
        maxWidth: "200px",
        borderRadius: "8px",
        margin: "10px 0",
        cursor: "pointer"
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={strMealThumb}
          alt="green iguana"
          sx={{ objectFit: "cover" }}
        />
        <CardContent>
          <Typography
            textAlign={"center"}
            gutterBottom
            variant="body1"
            component="div"
          >
            {strMeal}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BriefInfoCard;
