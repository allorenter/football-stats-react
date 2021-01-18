import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { ContentMenu } from "../../styles/styles";
import CompetitionsSelector from "../CompetititonsSelector";
import RefereesList from "./RefereesList";
import { getRefereesBySeasonCompetition } from "../../utils/api";

const Referee = (props) => {
  const [refereesData, setRefereesData] = useState([]);
  const [selectedCompetition, setSelectedCompetition] = useState("E0");

  useEffect(() => {
    getRefereesBySeasonCompetition([], selectedCompetition)
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
