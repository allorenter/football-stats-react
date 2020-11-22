import React, { useState, useEffect } from "react";
//import { styled } from '@material-ui/core/styles';
import { DivFlex } from "../styles/styles";
//import { Grid } from '@material-ui/core';
import ButtonCompetition from "./competitionButton";
import axios from "axios";
import { getUrlRequest } from "../utils/utils";

const CompetitionsSelector = (props) => {
  const [competitions, setCompetitions] = useState([]);

  useEffect(() => {
    axios
      .get(getUrlRequest("competition/get"))
      .then((res) => {
        setCompetitions(res.data.data);
      })
      .catch((e) => {});
  }, []);

  return (
    <DivFlex>
      {competitions.map((competition) => (
        <ButtonCompetition
          key={competition._id}
          id={competition._id}
          name={competition.name}
          selected={competition._id === props.selectedCompetition}
          setSelectedCompetition={props.setSelectedCompetition}
        />
      ))}
    </DivFlex>
  );
};

export default CompetitionsSelector;
