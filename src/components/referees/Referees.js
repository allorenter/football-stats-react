import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { ContentMenu, StyledSelectors } from "../../styles/styles";
import CompetitionSelector from "../CompetititonSelector";
import RefereesList from "./RefereesList";
import { getRefereesBySeasonCompetition } from "../../service/api";
import Loading from "../Loading";
import Alert from '@material-ui/lab/Alert';
import { styled } from "@material-ui/core/styles";
import SeasonSelector from "../SeasonSelector";

const ACTUAL_SEASON = process.env.REACT_APP_ACTUAL_SEASON;

const Referees = (props) => {
  const [refereesData, setRefereesData] = useState([]);
  const [selectedCompetition, setSelectedCompetition] = useState("E0");
  const [loading, setLoading] = useState(false);
  const [selectedSeason, setSelectedSeason] = useState(ACTUAL_SEASON);

  useEffect(() => {
    setLoading(true);
    getRefereesBySeasonCompetition(selectedSeason, selectedCompetition)
      .then((res) => {
        setRefereesData(res.data.data);
        setLoading(false);
      })
      .catch((e) => {});
  }, [selectedCompetition, selectedSeason]);

  const StyledAlert = styled(Alert)({
    margin: "10vh auto",
  });

  return (
    <Grid container>
      <ContentMenu container justify="space-between">
          <StyledSelectors>
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
      {Array.isArray(refereesData) && refereesData.length > 0 
        ? <RefereesList loading={loading} refereesData={refereesData} />
        : !loading && <StyledAlert severity="warning">NO HAY DATOS DISPONIBLES EN ESTA COMPETICIÓN</StyledAlert>
      }
    </Grid>
  );
};

export default Referees;
