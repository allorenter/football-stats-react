import React, { useState, useEffect } from "react";
import { FlexDiv } from "../styles/styles";
import { styled, withStyles } from "@material-ui/core/styles";
import { colors } from "../styles/styles";
import { Tooltip, Button } from "@material-ui/core";
import { getAvailableCompetitions } from "../utils/api";
import Loading from "./Loading";

const ButtonCompetition = (props) => {
  const StyledButton = styled(Button)({
    heigth: "100%",
    marginLeft: "10px",
    marginRight: "10px",
    borderRadius: 0,
    borderBottom: `2px solid ${colors.secondary}`,
    "& img": {
      width: "2.7rem",
      opacity: ".5",
      padding: "0 .3rem",
      "&:hover": {
        opacity: "1",
      },
    },
    "&.selected": {
      borderBottom: `2px solid ${colors.detailsColor}`,
      "& img": {
        opacity: 1,
      },
    },
  });

  const StyledTooltip = withStyles({
    tooltip: {
      background: colors.detailsColor,
      color: colors.primary,
      fontWeight: "700",
      fontSize: ".8rem",
    },
  })(Tooltip);

  return (
    <StyledButton
      className={props.selected ? "selected" : ""}
      disableRipple={true}
      onClick={() => props.setSelectedCompetition(props.id)}
    >
      <StyledTooltip title={props.name} placement="top">
        <img src={"images/" + props.id + ".png"} alt={props.name} />
      </StyledTooltip>
    </StyledButton>
  );
};

const CompetitionSelector = (props) => {
  const [competitions, setCompetitions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAvailableCompetitions()
      .then((res) => {
        setCompetitions(res.data.data);
        setLoading(false);
      })
      .catch((e) => {});
  }, []);

  return (
    <FlexDiv>
      {loading ? (
        <Loading size="1.8em" />
      ) : (
        competitions.map((competition) => (
          <ButtonCompetition
            key={competition._id}
            id={competition._id}
            name={competition.name}
            selected={competition._id === props.selectedCompetition}
            setSelectedCompetition={props.setSelectedCompetition}
          />
        ))
      )}
    </FlexDiv>
  );
};

export default CompetitionSelector;
