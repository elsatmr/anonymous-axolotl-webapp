import { IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { getBeerSearchAction } from '../../redux/actions/BeerSearchActions';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [query, setQuery] = React.useState<string>('');
  const handleSearch = () => {
    dispatch(getBeerSearchAction(query));
    navigate('/search');
  };
  return (
    <OutlinedInput
      id="outlined-adornment-password"
      onChange={(e) => {
        setQuery(e.target.value);
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleSearch();
        }
      }}
      endAdornment={
        <InputAdornment position="end">
          <IconButton edge="end">
            <SearchIcon />
          </IconButton>
        </InputAdornment>
      }
      fullWidth
      placeholder="Search"
    />
  );
};

export default SearchBar;
