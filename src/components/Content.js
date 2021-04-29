import React, {  } from "react";
import { Grid } from '@material-ui/core';
import AvgStats from './avgStats/AvgStats';
import Referees from './referees/Referees';


const Content = (props) => {

  const element = {
    avgStats: <AvgStats />,
    referee: <Referees />
  };

  return (
    <Grid justify="center" container>
        {element[props.content]}
    </Grid>
  );
};

export default Content;
