import React, { useEffect } from 'react';
import WelcomeHeader from '../../lib/WelcomeHeader/WelcomeHeader';
import PreferenceCard from '../../lib/PreferenceCard/PreferenceCard';
import BeerMatchCarousel from '../../lib/BeerMatchCarousel/BeerMatchCarousel';
import styles from './HomePage.module.css';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setBeerMatchShowsAction } from '../../redux/actions/BeerMatchActions';
import TopTenCard from '../../lib/TopTenCard/TopTenCard';
import ipa from '../../utils/images/ipa.png';
import ale from '../../utils/images/ale.png';
import lager from '../../utils/images/lager.png';
import winter from '../../utils/images/winter-ale.png';
import summer from '../../utils/images/summer.png';
import SearchBar from '../../lib/SearchBar/SearchBar';
import BeatLoader from 'react-spinners/BeatLoader';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const beerMatch = useAppSelector((state) => state.BeerMatchReducer.match);
  const userState = useAppSelector((state) => state.UserReducer);
  useEffect(() => {
    dispatch(setBeerMatchShowsAction(true));
  }, []);
  return (
    <div className={styles.homePageContainer}>
      <WelcomeHeader />
      <div className={styles.headerContainer}>
        <h1>Welcome, {userState.name}</h1>
        <SearchBar />
      </div>
      <PreferenceCard />
      <div className={styles.subHeaderContainer}>
        <h2>Top 10 Beers Based On Your Preference</h2>
        {beerMatch.length > 0 && <BeerMatchCarousel />}
        {beerMatch.length === 0 && (
          <div className={styles.loaderContainer}>
            <BeatLoader color="white" />
          </div>
        )}
      </div>
      <div className={styles.topTenContainer}>
        <div className={styles.topTenHeadingContainer}>
          <h2>Top 10s By Anonymous Axolotl</h2>
        </div>
        <div className={styles.topTenRow}>
          <TopTenCard img={ipa} text="Top 10 IPA(s)" url="/topipa" />
          <TopTenCard img={lager} text="Top 10 Lager(s)" url="/toplager" />
          <TopTenCard img={ale} text="Top 10 Ale(s)" url="/topale" />
          <TopTenCard
            img={winter}
            text="Top 10 Most Reviewed in Winter"
            url="/topwinter"
          />
          <TopTenCard
            img={summer}
            text="Top 10 Most Reviewed in Summer"
            url="/topsummer"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
