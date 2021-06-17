import React, { useState } from "react";
import { styled } from "@material-ui/core/styles";
import { colors } from "./styles/styles";
import { Grid } from "@material-ui/core";
import MainMenu from "./components/MainMenu";
import AvgStats from './components/avgStats/AvgStats';
import Referees from './components/referees/Referees';

function App() {
  const [content, setContent] = useState("avgStats"); 

  const StyledApp = styled(Grid)({
    background: colors.secondary,
    color: colors.font,
    fontSize: "1em",
    minHeight: '100vh'
  });

  const element = {
    avgStats: <AvgStats />,
    referee: <Referees />
  };

  return (
    <StyledApp container direction="column">
      <Grid container>
        <Grid style={{height: '100%'}} item xs={12} sm={12} md={3} lg={2} xl={2}>
          <MainMenu 
            content={content}
            setContent={setContent}
          />
        </Grid>
        <Grid style={{background: colors.tertiary, minHeight: '100vh'}} item xs={12} sm={12} md={9} lg={10} xl={10}>
          {element[content]}
        </Grid>
      </Grid>
    </StyledApp>
  );
}

export default App;
