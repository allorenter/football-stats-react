import React from "react";
import { styled } from "@material-ui/core/styles";
import { colors } from "../styles/styles";
import { Grid, TableRow, TableHead, Table, TableBody, TableCell, TableContainer} from "@material-ui/core";

const StyledTable = styled(Table)({
  background: colors.tertiary,
  "& tr td, tr th": {
    color: colors.font,
    borderBottom: `2px solid ${colors.primary}`
  },
  "& tr:hover" : {
    "& td": {
      background: colors.detailsColor
    }
    
  },
  "& .home": {
    color: colors.font,
    background: colors.secondary,
  },
  "& .away": {
    color: colors.font,
    background: colors.tertiary,
  },
  "& .total": {
    color: colors.font,
    background: colors.secondary,
  },
  "& .team": {
    color: colors.font,
    background: colors.tertiary,
  }
});

const StyledTableHead = styled(TableHead)({
  "& tr:nth-child(2) th": {
    borderBottom: `2px solid ${colors.detailsColor}`
  },
  "& tr th": {
    color: colors.font,
    borderBottom: "none",
    fontWeight: "600",
  }, 
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
/*
const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];
*/
const rows = [];
const AvgStats = (props) => {
  return (
    <Grid container>
      <TableContainer>
        <StyledTable size="small" aria-label="a dense table">
          <StyledTableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell className="home"></TableCell>
              <TableCell className="home">Local</TableCell>
              <TableCell className="home"></TableCell>
              <TableCell className="away"></TableCell>
              <TableCell className="away">Visitante</TableCell>
              <TableCell className="away"></TableCell>
              <TableCell className="total"></TableCell>
              <TableCell className="total">Total</TableCell>
              <TableCell className="total"></TableCell>
            </TableRow>
            <TableRow className="secondTrHeader">
              <TableCell className="team">Equipo</TableCell>
              <TableCell className="home">Favor</TableCell>
              <TableCell className="home">Contra</TableCell>
              <TableCell className="home">Total</TableCell>
              <TableCell className="away">Favor</TableCell>
              <TableCell className="away">Contra</TableCell>
              <TableCell className="away">Total</TableCell>
              <TableCell className="total">Favor</TableCell>
              <TableCell className="total">Contra</TableCell>
              <TableCell className="total">Total</TableCell>
            </TableRow>
          </StyledTableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell className="team" component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell className="home">{row.calories}</TableCell>
                <TableCell className="home">{row.fat}</TableCell>
                <TableCell className="home">{row.carbs}</TableCell>
                <TableCell className="away">{row.protein}</TableCell>
                <TableCell className="away">{row.calories}</TableCell>
                <TableCell className="away">{row.fat}</TableCell>
                <TableCell className="total">{row.carbs}</TableCell>
                <TableCell className="total">{row.protein}</TableCell>
                <TableCell className="total">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      </TableContainer>
    </Grid>
  );
};

export default AvgStats;
