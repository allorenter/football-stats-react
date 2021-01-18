import React from "react";
import { TableRow, TableCell } from "@material-ui/core";
import { round } from "lodash";

const TeamTableRow = (props) => {
  return props.subHeader ? (
    <TableRow>
      <TableCell className="c1">Equipo</TableCell>
      <TableCell className="c2">Favor</TableCell>
      <TableCell className="c2">Contra</TableCell>
      <TableCell className="c2">Total</TableCell>
      <TableCell className="c1">Favor</TableCell>
      <TableCell className="c1">Contra</TableCell>
      <TableCell className="c1">Total</TableCell>
      <TableCell className="c2">Favor</TableCell>
      <TableCell className="c2">Contra</TableCell>
      <TableCell className="c2">Total</TableCell>
    </TableRow>
  ) : props.data.teamId ? (
    <TableRow key={props.data.teamId}>
      <TableCell className="c1">{props.data.teamName}</TableCell>
      <TableCell className="c2">{round(props.data.homeMatches.for, 3)}</TableCell>
      <TableCell className="c2">
        {round(props.data.homeMatches.against, 3)}
      </TableCell>
      <TableCell className="c2">{round(props.data.homeMatches.total, 3)}</TableCell>
      <TableCell className="c1">{round(props.data.awayMatches.for, 3)}</TableCell>
      <TableCell className="c1">
        {round(props.data.awayMatches.against, 3)}
      </TableCell>
      <TableCell className="c1">{round(props.data.awayMatches.total, 3)}</TableCell>
      <TableCell className="c2">
        {round(props.data.allMatches.for, 3)}
      </TableCell>
      <TableCell className="c2">
        {round(props.data.allMatches.against, 3)}
      </TableCell>
      <TableCell className="c2">
        {round(props.data.allMatches.total, 3)}
      </TableCell>
    </TableRow>
  ) : (
    ""
  );
};

export default TeamTableRow;
