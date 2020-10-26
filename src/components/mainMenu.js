import React, { useState, useEffect }  from "react";
import { styled } from "@material-ui/core/styles";
import { colors } from "../styles/styles";
import { MenuList, MenuItem } from '@material-ui/core';
import {ReactComponent as AvgIcon} from "../images/avg.svg";
import {ReactComponent as TeamIcon} from "../images/team.svg";
import {ReactComponent as CardsIcon} from "../images/cards.svg";
import {ReactComponent as OddsIcon} from "../images/odds.svg";

const StyledMenu = styled(MenuList)({
  background: colors.secondary,
  minHeight: "97vh",
  paddingTop: "1.5vh",
  paddingBottom: "1.5vh"
});

const StyledItem = styled(MenuItem)({
  fontWeight: "600",
  paddingTop: ".5rem",
  paddingBottom: ".5rem",
  marginTop: "2rem",
  marginBottom: "2rem",
  borderLeft: "4px solid "+colors.secondary,
  "& svg": {
    width: "1.5rem",
    height: "1.5rem",
    marginRight: "1rem",
    "& path": {
      fill: colors.font
    }
  },
  "&:hover" : {
    background: "inherit",
    color: colors.detailsColor,
    "& svg path": {
      fill: colors.detailsColor
    }
  },
  "&.selected": {
    color: colors.detailsColor,
    borderLeft: "4px solid",
    "& svg path": {
      fill: colors.detailsColor
    }
  }
});

const MainMenu = () => {
  const [selected, setSelected] = useState("avg");
  return (
    <StyledMenu>
      <StyledItem className={selected === "avg" && "selected"} onClick={()=>setSelected("avg")}>
        <AvgIcon />
        Promedio de estadísticas
      </StyledItem>
      <StyledItem className={selected === "teams" && "selected"} onClick={()=>setSelected("teams")}>
        <TeamIcon />
        Estadísticas por equipo
      </StyledItem>
      <StyledItem className={selected === "odds" && "selected"} onClick={()=>setSelected("odds")}>
        <OddsIcon />
        Cuotas
      </StyledItem>
      <StyledItem className={selected === "referee" && "selected"} onClick={()=>setSelected("referee")}>
        <CardsIcon />
        Arbitros
      </StyledItem>
    </StyledMenu>
  );
};

export default MainMenu;
