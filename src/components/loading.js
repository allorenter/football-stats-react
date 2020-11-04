import React from 'react';
import { styled } from '@material-ui/core/styles';
//import { colors } from "../styles/styles";
import { Grid, CircularProgress } from '@material-ui/core';
import { colors } from "../styles/styles";

const  StyledGrid = styled(Grid)({
  
  height: "100%",
  "& svg": {
    fill: colors.detailsColor,
    position: "absolute",
    top: "0"
  } 
});

const Loading = (props) => {
  return (
    <StyledGrid justify="center" container>
        {props.children}
        {props.loading ? <CircularProgress /> : ""}
    </StyledGrid>
  );
};

export default Loading;
