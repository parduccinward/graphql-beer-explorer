import * as React from "react";
import { Box } from "@mui/material";
import SearchBar from "./SearchBar";
import BeerTable from "./BeerTable";

const Main: React.FC = () => {
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
        <SearchBar />
      <BeerTable beers={[]} />
      </Box>
    </>
  );
};

export default Main;
