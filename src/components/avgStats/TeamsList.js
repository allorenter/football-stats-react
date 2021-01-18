import React from "react";
//import { colors } from "../styles/styles";
import { TableContainer, TableHead, TableBody, TableRow, TableCell } from "@material-ui/core";
import { StyledTable } from "../../styles/styles";
import TeamDataTableRow from "./TeamDataTableRow";

const TeamsList = (props) => {
  return (<TableContainer>
    <StyledTable size="small" aria-label="a dense table">
      <TableHead>
        <TableRow>
          <TableCell className="c1"></TableCell>
          <TableCell colSpan={3} className="c2">Local</TableCell>
          <TableCell colSpan={3} className="c1">Visitante</TableCell>
          <TableCell colSpan={3} className="c2">Total</TableCell>
        </TableRow>
        <TeamDataTableRow subHeader={true} />
      </TableHead>
      <TableBody>
        {props.teamsData?.map((row) => <TeamDataTableRow data={row} /> )}
      </TableBody>
    </StyledTable>
  </TableContainer>
  );
};

export default TeamsList;
