import React, { useEffect } from "react";
import useDataApi from "../../hooks/useDataApi";
import { Grid } from "@mui/material";
import CategoryInfoCard from "../Cards/categoryInfoCard";
import InfoChip from "../Chips/infoChip";

interface IAreaType {
  strArea: string;
}
const AreasList = () => {
  const { fetchAreas, areas, errorMessage, actionExecuting } = useDataApi();
  const getAreas = async () => {
    await fetchAreas();
  };
  useEffect(() => {
    console.log(areas);
  }, [areas]);
  useEffect(() => {
    getAreas();
  }, []);

  if (errorMessage) {
    return <div>error</div>;
  }
  if (actionExecuting) {
    return <div>loading</div>;
  }
  return (
    <>
      {!actionExecuting && !!areas && (
        <Grid container spacing={2}>
          {areas &&
            areas.map((area: IAreaType) => (
              <Grid item xs={3} sm={2}>
                <InfoChip tag={area.strArea} />
              </Grid>
            ))}
        </Grid>
      )}
    </>
  );
};

export default AreasList;
