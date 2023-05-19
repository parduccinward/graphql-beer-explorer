import * as React from "react";
import { Box } from "@mui/material";
import SearchBar from "./SearchBar";
import BeerTable from "./BeerTable";
import { IBeer } from "./types/beers";

const Main: React.FC = () => {
  const [ArrayOfBeers, setArrayOfBeers] = React.useState<IBeer[]>([]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <h1>Beer explorer</h1>
        <p>Use the search bar below to search your favorite drinks.</p>
        <SearchBar setArrayOfBeers={setArrayOfBeers} />
        <BeerTable beers={ArrayOfBeers} />
      </Box>
    </>
  );
};

export default Main;
