import React, { useState, useEffect } from "react";
//import { styled } from '@material-ui/core/styles';
import { DivFlex } from '../styles/styles';
//import { Grid } from '@material-ui/core';
import ButtonCompetition from "./buttonCompetition";
import axios from "axios";
import { getUrlRequest } from "../utils/utils";

const CompetitionsMenu = () => {
  
  const [competitions, setCompetitions] = useState([]);
  const [selectedCompetition, setSelectedCompetition] = useState("E0");

  useEffect(() => {
    axios
    .get(getUrlRequest("competition/get"))
    .then((res) => {
      setCompetitions(res.data.data);
    })
    .catch((e) => {
      
    });
  }, [])


  return (
    <DivFlex>
      {competitions.map(competition=><ButtonCompetition key={competition._id} id={competition._id} name={competition.name} />)}
    </DivFlex>
  );
};

export default CompetitionsMenu;
