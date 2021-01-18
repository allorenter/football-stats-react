import React from "react";
//import { colors } from "../styles/styles";
import { TableContainer, TableHead, TableBody, TableRow, TableCell } from "@material-ui/core";
import { StyledTable } from "../../styles/styles";
import RefereeDataTableRow from "./RefereeDataTableRow";

const RefereesList = (props) => {
  return (
    <TableContainer>
      <StyledTable size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell className="c1"></TableCell>
            <TableCell colSpan={3} className="c2">
              Amarillas
            </TableCell>
            <TableCell colSpan={3} className="c1">
              Rojas
            </TableCell>
          </TableRow>
          <RefereeDataTableRow subHeader={true} />
        </TableHead>
        <TableBody>
          {props.refereesData?.map((row) => (
            <RefereeDataTableRow data={row} />
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
};

export default RefereesList;
