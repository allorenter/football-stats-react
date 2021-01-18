import React, { useState, useEffect } from "react";
import { ContentMenu } from "../../styles/styles";
import { Grid} from "@material-ui/core";
import StatSelector from "./StatSelector";
import CompetitionsSelector from "../CompetititonsSelector";
import TeamsList from "./TeamsList";
import { getAvgStatTeams } from "../../utils/api";

const AvgStats = (props) => {
  const [teamsData, setteamsData] = useState([]);
  const [selectedStat, setSelectedStat] = useState("ftg");
  const [selectedCompetition, setSelectedCompetition] = useState("E0");

  useEffect(() => {
    getAvgStatTeams(selectedCompetition, selectedStat)
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
