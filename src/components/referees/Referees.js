import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { ContentMenu } from "../../styles/styles";
import CompetitionSelector from "../CompetititonSelector";
import RefereesList from "./RefereesList";
import { getRefereesBySeasonCompetition } from "../../utils/api";

const Referees = (props) => {
  const [refereesData, setRefereesData] = useState([]);
  const [selectedCompetition, setSelectedCompetition] = useState("E0");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getRefereesBySeasonCompetition([], selectedCompetition)
      .then((res) => {
        setRefereesData(res.data.data);
        setLoading(false);
      })
      .catch((e) => {});
  }, [selectedCompetition]);

  return (
    <Grid container>
      <ContentMenu container justify="flex-end">
        <CompetitionSelector
          setSelectedCompetition={setSelectedCompetition}
          selectedCompetition={selectedCompetition}
        />
      </ContentMenu>
      <RefereesList loading={loading} refereesData={refereesData} />
    </Grid>
  );
};

export default Referees;
