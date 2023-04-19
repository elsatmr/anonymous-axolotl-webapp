import { IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

const SearchBar = () => {
  const [query, setQuery] = React.useState<string>('');
  const handleSearch = () => {};
  return (
    <OutlinedInput
      id="outlined-adornment-password"
      // type={values.showPassword ? 'text' : 'password'}
      // value={values.password}
      onChange={(e) => {
        setQuery(e.target.value);
      }}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            //   onClick={handleClickShowPassword}
            //   onMouseDown={handleMouseDownPassword}
            edge="end"
          >
            <SearchIcon />
          </IconButton>
        </InputAdornment>
      }
      fullWidth
      placeholder="Search"
      sx={{ width: '30%' }}
    />
  );
};

export default SearchBar;
