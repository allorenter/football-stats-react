import React from "react";
import { CircularProgress, Box } from "@material-ui/core";
import { colors } from "../styles/styles";
import { styled } from "@material-ui/core/styles";

const Loading = (props) => {
  
  const StyledBox = styled(Box)({
    position: 'relative',
    width: '100%',
    height: '0',
    top: props.topPosition || 0
    
  });

  const StyledCircularProgress = styled(CircularProgress)({
    "& .MuiCircularProgress-circle": {
      color: colors.detailsColor,
    },
  });

  return (
    <StyledBox
      display={props.boxDisplay || "flex"}
      justifyContent={props.boxJustify || "center"}
      alignItems={props.boxAlign || "center"}
    >
      <StyledCircularProgress size={props.size} />
    </StyledBox>
  );
};

export default Loading;
