import React from "react";
import { TableContainer, TableHead, TableBody, TableRow, TableCell } from "@material-ui/core";
import { StyledTable } from "../../styles/styles";
import TeamDataTableRow from "./TeamDataTableRow";
import { darkenOpacity, lightenOpacity } from "../../styles/styles";

const TeamsList = (props) => {

  const classes = props.loading ? darkenOpacity() : lightenOpacity();

  return (
    <TableContainer>
      <StyledTable size="small" aria-label="Tabla" className={classes.root}>
        <TableHead>
          <TableRow>
            <TableCell className="c1"></TableCell>
            <TableCell colSpan={3} className="c2">
              Local
            </TableCell>
            <TableCell colSpan={3} className="c1">
              Visitante
            </TableCell>
            <TableCell colSpan={3} className="c2">
              Total
            </TableCell>
          </TableRow>
          <TeamDataTableRow subHeader={true} />
        </TableHead>
        <TableBody>
          {props.teamsData?.map((row) => {
            return <TeamDataTableRow key={row.teamId} data={row} />
          })}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
};

export default TeamsList;
