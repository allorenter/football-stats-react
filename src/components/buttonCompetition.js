import React from "react";
import { styled, withStyles } from "@material-ui/core/styles";
import { colors } from "../styles/styles";
import { Tooltip, Button } from "@material-ui/core";

const StyledImg = styled("img")({
  width: "2.7rem",
  opacity: ".7",
  padding: "0 .3rem",
  "&:hover": {
    opacity: "1",
  },
});

const StyledTooltip = withStyles({
  tooltip: {
    background: colors.detailsColor,
    color: colors.primary,
    fontWeight: "700",
    fontSize: ".8rem"
  },
})(Tooltip);

const ButtonCompetition = (props) => (
  <Button>
    <StyledTooltip
      title={props.name}
      placement="top"
    >
      <StyledImg
        src={"images/" + props.id + ".png"}
        alt={props.name}
      />
    </StyledTooltip>
  </Button>
);

export default ButtonCompetition;
