import React, { useState, useEffect } from "react";
import { ContentMenu } from "../../styles/styles";
import { Grid } from "@material-ui/core";
import StatSelector from "./StatSelector";
import CompetitionSelector from "../CompetititonSelector";
import TeamsList from "./TeamsList";
import { getAvgStatTeams } from "../../utils/api";
import Loading from "../Loading";
import Alert from '@material-ui/lab/Alert';
import { styled } from "@material-ui/core/styles";
import SeasonSelector from "../SeasonSelector";

const ACTUAL_SEASON = process.env.REACT_APP_ACTUAL_SEASON;

const StyledSelectors = styled('div')({
  display: 'flex',
  gap: '1em',
  flexWrap: 'wrap',
  "@media (max-width: 1140px)": {
    padding: '1em'
  }
});


const AvgStats = (props) => {
  const [teamsData, setTeamsData] = useState([]);
  const [selectedStat, setSelectedStat] = useState("ftg");
  const [selectedCompetition, setSelectedCompetition] = useState("E0");
  const [loading, setLoading] = useState(false);
  const [selectedSeason, setSelectedSeason] = useState(ACTUAL_SEASON);

  useEffect(() => {
    setLoading(true);
    getAvgStatTeams(selectedSeason, selectedCompetition, selectedStat)
      .then((res) => {
        setTeamsData(res.data.data);
        setLoading(false);
      })
      .catch((e) => {});
  }, [selectedStat, selectedCompetition, selectedSeason]);

  const StyledAlert = styled(Alert)({
    margin: "10vh auto",
  });
  
  return (
    <Grid container>
      <ContentMenu container justify="space-between">
        <StyledSelectors>
          <StatSelector
            selectedStat={selectedStat}
            setSelectedStat={setSelectedStat}
          />
          <SeasonSelector 
            selectedSeason={selectedSeason}
            setSelectedSeason={setSelectedSeason}
          />
        </StyledSelectors>        
        <CompetitionSelector
          setSelectedCompetition={setSelectedCompetition}
          selectedCompetition={selectedCompetition}
        />
      </ContentMenu>
      {loading && <Loading topPosition={'15em'}/> }
      {Array.isArray(teamsData) && teamsData.length > 0 
        ? <TeamsList loading={loading} teamsData={teamsData} /> 
        : !loading && <StyledAlert severity="warning">NO HAY DATOS DISPONIBLES EN ESTA COMPETICIÓN</StyledAlert>
      }
    </Grid>
  );
};

export default AvgStats;
