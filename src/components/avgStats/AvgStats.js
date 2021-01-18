import React, { useState, useEffect } from "react";
import { ContentMenu } from "../../styles/styles";
import { Grid} from "@material-ui/core";
import { getUrlRequest } from "../../utils/utils";
import axios from "axios";
import StatSelector from "./StatSelector";
import CompetitionsSelector from "../CompetititonsSelector";
import TeamsList from "./TeamsList";

const AvgStats = (props) => {
  const [teamsData, setteamsData] = useState([]);
  const [selectedStat, setSelectedStat] = useState("ftg");
  const [selectedCompetition, setSelectedCompetition] = useState("E0");

  useEffect(() => {
    const url = getUrlRequest(`team/get-avg-stats-teams/2021/${selectedCompetition}/${selectedStat}`);
    axios
    .get(url)
    .then((res) => {
      setteamsData(res.data.data);
    })
    .catch((e) => { 
    });
    
  }, [selectedStat, selectedCompetition]);
 
  return (
    <Grid container>
      <ContentMenu container justify="space-between">
        <StatSelector
          selectedStat={selectedStat}
          setSelectedStat={setSelectedStat}
        />
        <CompetitionsSelector
          setSelectedCompetition={setSelectedCompetition}
          selectedCompetition={selectedCompetition}
        />
      </ContentMenu>
      <TeamsList teamsData={teamsData} />
    </Grid>
  );
};

export default AvgStats;
