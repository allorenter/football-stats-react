import React, { useState, useEffect } from "react";
import { ContentMenu } from "../../styles/styles";
import { Grid } from "@material-ui/core";
import StatSelector from "./StatSelector";
import CompetitionSelector from "../CompetititonSelector";
import TeamsList from "./TeamsList";
import { getAvgStatTeams } from "../../utils/api";

const AvgStats = (props) => {
  const [teamsData, setTeamsData] = useState([]);
  const [selectedStat, setSelectedStat] = useState("ftg");
  const [selectedCompetition, setSelectedCompetition] = useState("E0");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAvgStatTeams(selectedCompetition, selectedStat)
      .then((res) => {
        setTeamsData(res.data.data);
        setLoading(false);
      })
      .catch((e) => {});
  }, [selectedStat, selectedCompetition]);

  return (
    <Grid container>
      <ContentMenu container justify="space-between">
        <StatSelector
          selectedStat={selectedStat}
          setSelectedStat={setSelectedStat}
        />
        <CompetitionSelector
          setSelectedCompetition={setSelectedCompetition}
          selectedCompetition={selectedCompetition}
        />
      </ContentMenu>
      <TeamsList loading={loading} teamsData={teamsData} />
    </Grid>
  );
};

export default AvgStats;
