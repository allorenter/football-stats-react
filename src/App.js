import React from "react";
import "./App.css";
import { styled } from "@material-ui/core/styles";
import { colors } from "./styles/styles";
import { Grid } from "@material-ui/core";
import Header from "./components/header";
import MainMenu from "./components/mainMenu";
import ContentPage from "./components/contentPage";
import ContainerMenus from "./components/containerMenus";

const StyledApp = styled(Grid)({
  minHeight: "100vh",
  background: colors.primary,
  color: colors.font,
});

function App() {
  return (
    <StyledApp container direction="column">
      <Header />
      <Grid container>
        <Grid item xs={2}>
          <MainMenu />
        </Grid>
        <Grid item xs={10}>
          <Grid>
            <ContainerMenus />
          </Grid>
          <ContentPage />
        </Grid>
      </Grid>
    </StyledApp>
  );
}

export default App;
