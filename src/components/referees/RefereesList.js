import React from "react";
import { TableContainer, TableHead, TableBody, TableRow, TableCell } from "@material-ui/core";
import { StyledTable } from "../../styles/styles";
import RefereeDataTableRow from "./RefereeDataTableRow";
import Loading from "../Loading";
import { darkenOpacity, lightenOpacity } from "../../styles/styles";
import Alert from '@material-ui/lab/Alert';
import { styled } from "@material-ui/core/styles";

const RefereesList = (props) => {
  const StyledAlert = styled(Alert)({
    margin: "10vh auto",
  });
  
  const classes = props.loading ? darkenOpacity() : lightenOpacity(); 
  
  if((!props.refereesData || props.refereesData.length === 0) && props.loading === false){
    return (
      <StyledAlert severity="warning">NO HAY DATOS SOBRE ARBITROS DISPONIBLES EN ESTA COMPETICIÓN</StyledAlert>
    );  
  }
  
  return (
    <TableContainer>
      {props.loading 
        ? <Loading boxHeight="45vh" boxWidth="81%" />
        : <StyledTable size="small" aria-label="Tabla" className={classes.root}>
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
      }
    </TableContainer>
  );
};

export default RefereesList;
