import * as React from 'react';
import { Box, TextField, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

interface SearchBarProps {
  onSearchChange: (searchText: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearchChange }) => {
  const [searchText, setSearchText] = React.useState('');

  const handleSearchTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
    onSearchChange(event.target.value);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <TextField 
        value={searchText} 
        onChange={handleSearchTextChange} 
        variant="outlined" 
        size="small" 
        placeholder="Search..." 
      />
      <IconButton>
        <Search />
      </IconButton>
    </Box>
  );
};

export default SearchBar;