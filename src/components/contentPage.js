import React from 'react';
import { styled } from '@material-ui/core/styles';
//import { colors } from "../styles/styles";
import { Grid } from '@material-ui/core';
import AvgStats from './avgStats';

const  StyledGrid = styled(Grid)({
  height: "93.5vh"
});

const ContentPage = (props) => {
  return (
    <StyledGrid justify="center" container>
        <AvgStats selectedCompetition={props.selectedCompetition} selectedStat={props.selectedStat}/>
    </StyledGrid>
  );
};

export default ContentPage;
