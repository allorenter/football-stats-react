import React, { useState } from "react";
import { styled } from "@material-ui/core/styles";
import { colors } from "./styles/styles";
import { Grid } from "@material-ui/core";
import MainMenu from "./components/MainMenu";
import Content from "./components/Content";

function App() {
  const [content, setContent] = useState("avgStats"); 

  const StyledApp = styled(Grid)({
    minHeight: "100vh",
    background: colors.primary,
    color: colors.font,
    fontSize: "1em"
  });

  return (
    <StyledApp container direction="column">
      <Grid container>
        <Grid item xs={2}>
          <MainMenu 
            content={content}
            setContent={setContent}
          />
        </Grid>
        <Grid item xs={10}>
          <Content content={content} />
        </Grid>
      </Grid>
    </StyledApp>
  );
}

export default App;
