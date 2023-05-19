import * as React from "react";
import { Box, TextField, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import { fetchBeer } from "./api/FetchBeers";

const SearchBar: React.FC = ({}) => {
  const [searchText, setSearchText] = React.useState("");

  const handleSearchTextChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchText(event.target.value);
  };

  const handleClick = async () => {
    try {
      fetchBeer(searchText);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <TextField
        value={searchText}
        onChange={handleSearchTextChange}
        variant="outlined"
        size="small"
        placeholder="Search..."
      />
      <IconButton onClick={handleClick}>
        <Search />
      </IconButton>
    </Box>
  );
};

export default SearchBar;
