import React from "react";
import { IRecipeInfo } from "../../utils/types";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Stack,
  styled
} from "@mui/material";
import InfoChip from "../Chips/infoChip";
import ClockIcon from "../../assets/icons/clock.svg";
import GraphIcon from "../../assets/icons/graph.svg";

const TitleTypography = styled(Typography)(({ theme }) => ({
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden",
  [theme.breakpoints.up("lg")]: {
    width: "260px",
    fontWeight: "bold",
    fontSize: "18px"
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "184px",
    fontWeight: "bold",
    fontSize: "18px"
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "250px",
    fontSize: "16px"
  },
  [theme.breakpoints.down("sm")]: {
    width: "230px",
    fontSize: "14px"
  }
}));
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
        alt="recipe-image"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <TitleTypography>{name}</TitleTypography>
          <Box sx={{ display: "flex", alignItems: "center", pb: 1, pt: 0.5 }}>
            <Stack flexDirection={"row"} mr={1}>
              <img src={ClockIcon} />
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
                sx={{ marginLeft: "4px" }}
              >
                {duration}
              </Typography>
            </Stack>
            <Stack flexDirection={"row"}>
              <img src={GraphIcon} />
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
                sx={{ marginLeft: "4px" }}
              >
                {expertLevel}
              </Typography>
            </Stack>
          </Box>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 2 }}>
          {tags && tags.map((tag) => <InfoChip tag={tag} />)}
        </Box>
      </Box>
    </Card>
  );
};

export default RecipeInfoCard;
