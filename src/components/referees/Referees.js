import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { ContentMenu } from "../../styles/styles";
import CompetitionsSelector from "../CompetititonsSelector";
import { getUrlRequest } from "../../utils/utils";
import axios from "axios";
import RefereesList from "./RefereesList";

const Referee = (props) => {
  const [refereesData, setRefereesData] = useState([]);
  const [selectedCompetition, setSelectedCompetition] = useState("E0");

  useEffect(() => {
    const url = getUrlRequest(
      `referee/get-by-seasons-competition`
    );
    axios
      .post(url, {
        competition: selectedCompetition,
        seasons: []
      })
      .then((res) => {
        setRefereesData(res.data.data);       
      })
      .catch((e) => {});
  }, [selectedCompetition]);

  return (
    <Grid container>
      <ContentMenu container justify="flex-end">
        <CompetitionsSelector
          setSelectedCompetition={setSelectedCompetition}
          selectedCompetition={selectedCompetition}
        />
      </ContentMenu>
      <RefereesList refereesData={refereesData} />
    </Grid>
  );
};

export default Referee;
