import React from 'react';
import { styled } from '@material-ui/core/styles';
//import { colors } from "../styles/styles";
import { Grid } from '@material-ui/core';
import AvgStats from './avgStats';

const  StyledGrid = styled(Grid)({
});

const ContentPage = (props) => {
  return (
    <StyledGrid justify="center" container>
        <AvgStats />
    </StyledGrid>
  );
};

export default ContentPage;
