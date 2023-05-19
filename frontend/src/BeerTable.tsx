import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { IBeerTableProps } from "./types/beers";

const BeerTable: React.FC<IBeerTableProps> = ({ beers }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Alcohol By Volume</TableCell>
            <TableCell>Brewery Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {beers.map((beer, index) => (
            <TableRow key={index}>
              <TableCell>{beer.name}</TableCell>
              <TableCell>{beer.type}</TableCell>
              <TableCell>{beer.alcoholByVolume}</TableCell>
              <TableCell>{beer.breweryName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BeerTable;
