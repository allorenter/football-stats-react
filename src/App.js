import React, { useState, useEffect } from "react";
import { styled } from "@material-ui/core/styles";
import { colors } from "./styles/styles";
import { Grid } from "@material-ui/core";
import LeftMenu from "./components/leftMenu";
import ContentPage from "./components/contentPage";
import StatSelector from "./components/statSelector";
import CompetitionsSelector from "./components/competititonsSelector";

const StyledApp = styled(Grid)({
  minHeight: "100vh",
  background: colors.primary,
  color: colors.font,
});

const StyledContainerMenus = styled(Grid)({
  padding: ".1rem 2.5rem",
  background: colors.primary,
  minHeight: "6.5vh",
});

function App() {
  const [selectedStat, setSelectedStat] = useState("ftg");
  const [selectedCompetition, setSelectedCompetition] = useState("E0");

  return (
    <StyledApp container direction="column">
      <Grid container>
        <Grid item xs={2}>
          <LeftMenu />
        </Grid>
        <Grid item xs={10}>
          <StyledContainerMenus container justify="space-between">
            <StatSelector
              selectedStat={selectedStat}
              setSelectedStat={setSelectedStat}
            />
            <CompetitionsSelector
              setSelectedCompetition={setSelectedCompetition}
              selectedCompetition={selectedCompetition}
            />
          </StyledContainerMenus>
          <ContentPage
            selectedStat={selectedStat}
            selectedCompetition={selectedCompetition}
          />
        </Grid>
      </Grid>
    </StyledApp>
  );
}

export default App;
