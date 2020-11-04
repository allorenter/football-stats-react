import React, { useState, useEffect } from "react";
import { styled } from "@material-ui/core/styles";
import { colors } from "../styles/styles";
import { Grid, TableRow, TableHead, Table, TableBody, TableCell, TableContainer} from "@material-ui/core";
import { getUrlRequest } from "../utils/utils";
import axios from "axios";

const StyledTable = styled(Table)({
  height: "100%",
  background: colors.tertiary,
  "& tr td, tr th": {
    width: "9%",
    color: colors.font,
    borderBottom: `none`,
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
    width: "16%",
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

const AvgStats = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const url = getUrlRequest(`match/get-avg-stats-teams/2021/${props.selectedCompetition}/${props.selectedStat}`);
    axios
    .get(url)
    .then((res) => {
      setData(res.data.data);
      setLoading(false);
    })
    .catch((e) => { 
      setLoading(false);
    });
    
  }, [props.selectedStat, props.selectedCompetition]);
 
  return (
    <Grid container>
      <TableContainer>
        <StyledTable size="small" aria-label="a dense table">
          <StyledTableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell colSpan={3} className="home">Local</TableCell>
              <TableCell colSpan={3} className="away">Visitante</TableCell>
              <TableCell colSpan={3} className="total">Total</TableCell>
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
            {data.map((row) => (
              <TableRow key={row._id}>
                <TableCell className="team" component="th" scope="row">
                  {row._id}
                </TableCell>
                <TableCell className="home">{row.home.avgFor}</TableCell>
                <TableCell className="home">{row.home.avgAgainst}</TableCell>
                <TableCell className="home">{row.home.total}</TableCell>
                <TableCell className="away">{row.away.avgFor}</TableCell>
                <TableCell className="away">{row.away.avgAgainst}</TableCell>
                <TableCell className="away">{row.away.total}</TableCell>
                <TableCell className="total">{row.total.avgFor}</TableCell>
                <TableCell className="total">{row.total.avgAgainst}</TableCell>
                <TableCell className="total">{row.total.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      </TableContainer>
    </Grid>
  );
};

export default AvgStats;
