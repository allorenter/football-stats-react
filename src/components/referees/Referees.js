import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { ContentMenu } from "../../styles/styles";
import CompetitionSelector from "../CompetititonSelector";
import RefereesList from "./RefereesList";
import { getRefereesBySeasonCompetition } from "../../utils/api";
import Loading from "../Loading";
import Alert from '@material-ui/lab/Alert';
import { styled } from "@material-ui/core/styles";

const ACTUAL_SEASON = process.env.REACT_APP_ACTUAL_SEASON;

const Referees = (props) => {
  const [refereesData, setRefereesData] = useState([]);
  const [selectedCompetition, setSelectedCompetition] = useState("E0");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getRefereesBySeasonCompetition(ACTUAL_SEASON, selectedCompetition)
      .then((res) => {
        setRefereesData(res.data.data);
        setLoading(false);
      })
      .catch((e) => {});
  }, [selectedCompetition]);

  const StyledAlert = styled(Alert)({
    margin: "10vh auto",
  });

  return (
    <Grid container>
      <ContentMenu container justify="flex-end">
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
