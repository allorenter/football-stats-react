import React from 'react';
//import { styled } from '@material-ui/core/styles';
//import { colors } from "../styles/styles";
import { Grid } from '@material-ui/core';
import StatsFilters from "./statsFilters";
import CompetitionsMenu from "./competitionsMenu";
import { colors } from '../styles/styles';
import { styled } from '@material-ui/core/styles';

const StyledContainer = styled(Grid)({
    padding: ".1rem 2.5rem",
    background: colors.primary,
    minHeight: "4.4rem",
});

const ContainerMenus = (props) => {
  return (
    <StyledContainer container justify="space-between">
        <StatsFilters />
        <CompetitionsMenu />
    </StyledContainer>
  );
};

export default ContainerMenus;
