import React, {  } from "react";
//import { styled } from '@material-ui/core/styles';
//import { colors } from "../styles/styles";
import { Grid } from '@material-ui/core';
import AvgStats from './avgStats/AvgStats';
import Referee from './referees/Referees';


const Content = (props) => {

  const element = {
    avgStats: <AvgStats />,
    referee: <Referee />
  };

  return (
    <Grid justify="center" container>
        {element[props.content]}
    </Grid>
  );
};

export default Content;
