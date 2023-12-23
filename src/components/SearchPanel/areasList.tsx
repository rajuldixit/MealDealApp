import React, { useEffect } from "react";
import useDataApi from "../../hooks/useDataApi";
import { Grid } from "@mui/material";
import CategoryInfoCard from "../Cards/categoryInfoCard";
import InfoChip from "../Chips/infoChip";
import { useAppState } from "../../context/AppContext";

interface IAreaType {
  strArea: string;
}

type IAreaProps = {
  selectedArea: (arg: string) => void;
};

const AreasList: React.FC<IAreaProps> = ({ selectedArea }: IAreaProps) => {
  const appState = useAppState();

  useEffect(() => {}, [appState]);

  return (
    <>
      {!!appState.areas && (
        <Grid container spacing={2}>
          {appState.areas &&
            appState.areas.map((area: IAreaType) => (
              <Grid
                item
                xs={3}
                sm={2}
                onClick={() => selectedArea(area.strArea)}
              >
                <InfoChip tag={area.strArea} />
              </Grid>
            ))}
        </Grid>
      )}
    </>
  );
};

export default AreasList;
