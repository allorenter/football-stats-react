import React from "react";
import { TableRow, TableCell } from "@material-ui/core";
import { round } from "lodash";

const RefereeDataTableRow = (props) => {
  return props.subHeader ? (
    <TableRow>
      <TableCell className="c1">Arbitro</TableCell>
      <TableCell className="c2">Local</TableCell>
      <TableCell className="c2">Visitante</TableCell>
      <TableCell className="c2">Total</TableCell>
      <TableCell className="c1">Local</TableCell>
      <TableCell className="c1">Visitante</TableCell>
      <TableCell className="c1">Total</TableCell>
    </TableRow>
  ) : props.data.refereeId ? (
    <TableRow key={props.data.refereeId}>
      <TableCell className="c1">{props.data.refereeName}</TableCell>
      <TableCell className="c2">
        {round(props.data.yellowCards.homeTeam, 3)}
      </TableCell>
      <TableCell className="c2">
        {round(props.data.yellowCards.awayTeam, 3)}
      </TableCell>
      <TableCell className="c2">
        {round(props.data.yellowCards.total, 3)}
      </TableCell>
      <TableCell className="c1">
        {round(props.data.redCards.homeTeam, 3)}
      </TableCell>
      <TableCell className="c1">
        {round(props.data.redCards.awayTeam, 3)}
      </TableCell>
      <TableCell className="c1">
        {round(props.data.redCards.total, 3)}
      </TableCell>
    </TableRow>
  ) : (
    ""
  );
};

export default RefereeDataTableRow;
