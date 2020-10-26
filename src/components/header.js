import React from 'react';
import { styled } from '@material-ui/core/styles';
import { colors } from "../styles/styles";

const StyledHeader = styled('div')({
    background: colors.detailsColor,
    fontWeight: "600",
});

const Header = () => {
  return (
    <StyledHeader>
       
    </StyledHeader>
  );
};

export default Header;
