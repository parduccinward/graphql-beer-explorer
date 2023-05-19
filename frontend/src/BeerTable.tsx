import React from "react";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Paper,
} from "@mui/material";
import { IBeerTableProps } from "./types/beers";
import { StyledTableCell, StyledTableRow } from "./mui/StyledTableComponents";

const BeerTable: React.FC<IBeerTableProps> = ({ beers }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Type</StyledTableCell>
            <StyledTableCell>Alcohol By Volume</StyledTableCell>
            <StyledTableCell>Brewery Name</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {beers.map((beer, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell>{beer.name}</StyledTableCell>
              <StyledTableCell>{beer.type}</StyledTableCell>
              <StyledTableCell>{beer.alcoholByVolume}</StyledTableCell>
              <StyledTableCell>{beer.breweryName}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BeerTable;
