import * as React from "react";
import { Box } from "@mui/material";
import SearchBar from "./SearchBar";

const Main: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: 2,
      }}
    >
      <h1>Beer explorer</h1>
      <p>Use the search bar below to search your favorite drinks.</p>
      <SearchBar />
    </Box>
  );
};

export default Main;
