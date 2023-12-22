import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Tooltip,
  TooltipProps,
  Typography,
  styled,
  tooltipClasses
} from "@mui/material";
import { Instance } from "@popperjs/core";
import React from "react";

interface ICategory {
  name: string;
  strThumb: string;
  strCategoryDescription: string;
}

const CategoryTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.common.white,
    boxShadow: theme.shadows[1],
    fontSize: 11
  }
}));
const CategoryInfoCard: React.FC<ICategory> = (props: ICategory) => {
  const { name, strThumb, strCategoryDescription } = props;
  const positionRef = React.useRef<{ x: number; y: number }>({
    x: 0,
    y: 0
  });
  const popperRef = React.useRef<Instance>(null);
  const areaRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent) => {
    positionRef.current = { x: event.clientX, y: event.clientY };

    if (popperRef.current != null) {
      popperRef.current.update();
    }
  };
  return (
    <>
      <CategoryTooltip
        title={strCategoryDescription}
        placement="top"
        PopperProps={{
          popperRef,
          anchorEl: {
            getBoundingClientRect: () => {
              return new DOMRect(
                positionRef.current.x,
                areaRef.current!.getBoundingClientRect().y,
                0,
                0
              );
            }
          }
        }}
      >
        <Card
          ref={areaRef}
          onMouseMove={handleMouseMove}
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
      </CategoryTooltip>
    </>
  );
};

export default CategoryInfoCard;
