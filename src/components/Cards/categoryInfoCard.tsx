import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from "@mui/material";
import React from "react";

interface ICategory {
  name: string;
  strThumb: string;
}
const CategoryInfoCard: React.FC<ICategory> = (props: ICategory) => {
  const { name, strThumb } = props;
  return (
    <>
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
            image={strThumb}
            alt="green iguana"
            sx={{ objectFit: "contain" }}
          />
          <CardContent>
            <Typography
              textAlign={"center"}
              gutterBottom
              variant="body1"
              component="div"
            >
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default CategoryInfoCard;
