import React from 'react';
import Logo from '../../utils/images/axolotl.png';
import Box from '@mui/material/Box';
import styles from './SearchBeerPage.module.css';
import { IBeerSearch } from '../../utils/types/types';
import { useAppSelector } from '../../redux/hooks';
import SearchBar from '../../lib/SearchBar/SearchBar';
import { useNavigate } from 'react-router-dom';

const SearchBeerPage = () => {
  const results: IBeerSearch[] = useAppSelector(
    (state) => state.BeerSearchReducer.results
  );
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/home');
  };

  return (
    <div className={styles.parentContainer}>
      <div className={styles.searchBeerHeaderContainer}>
        <div className={styles.searchBeerHeader}>
          <Box
            component="img"
            src={Logo}
            sx={{ width: '13%', height: '100%', mr: 5 }}
            onClick={handleLogoClick}
          />
          <h1>Search Results</h1>
        </div>
      </div>
      <div className={styles.searchBarContainer}>
        <div className={styles.searchBar}>
          <SearchBar />
        </div>
      </div>
      <div className={styles.resultsContainer}>
        {results.map((beer) => (
          <div className={styles.searchItemContainer}>
            <div className={styles.searchItem}>
              <div className={styles.searchItemChild}>
                <div className={styles.searchItemHeader}>
                  <div className={styles.beerLogo}>🍻</div>
                  <h2>{beer.name}</h2>
                </div>
                <div className={styles.searchItemDetails}>
                  <p>ABV: {beer.abv} %</p>
                  <p>Style: {beer.style.style}</p>
                  <p>Brewer ID: {beer.brewerId}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBeerPage;
