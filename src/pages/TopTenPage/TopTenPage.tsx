import React, { useEffect } from 'react';
import Logo from '../../utils/images/axolotl.png';
import { Box } from '@mui/material';
import styles from './TopTenPage.module.css';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

interface Props {
  header: string;
  action: any;
}

const TopTenPage = ({ header, action }: Props) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(action());
  }, []);
  const results: string[] = useAppSelector(
    (state) => state.TopTenReducer.results
  );
  const numbers: number[] = [];
  const combined = [...results, ...numbers];

  const jokes = [
    'Why did the Tomato turn red? Because it saw the salad dressing!',
    "What do you call a can opener that doesn't work? A can't opener!",
    'Why did the chicken cross the playground? To get to the other slide!',
    'Why did the coffee file a police report? Because it got mugged!',
    'What do you call a fake noodle? An impasta!',
    'Why did the math book look so sad? Because it had too many problems!',
    'What do you call an alligator in a vest? An investi-gator!',
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why don't skeletons fight each other? They don't have the guts!",
    'Why did the bicycle fall over? Because it was two-tired!',
  ];

  const randomIndex = Math.floor(Math.random() * 10);
  const randomJoke = jokes[randomIndex];

  return (
    <div className={styles.topTenPageContainer}>
      <div className={styles.topTenHeaderContainer}>
        <div className={styles.topTenHeader}>
          <Box
            component="img"
            src={Logo}
            sx={{ width: '20%', height: '100%', mr: 10 }}
          />
          <h1>{header}</h1>
        </div>
      </div>
      <div className={styles.topTenItemContainer}>
        {combined.map((elem, index) => (
          <div className={styles.topTenItemParent}>
            <div className={styles.topTenItemChild}>
              <h2>{index + 1}</h2>
              <h3>{elem}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.footerContainer}>
        <div className={styles.footer}>
          <p>
            <i>{randomJoke}</i>
          </p>
          <p>
            This service is brought to you by a team of Axolotl Brewers. Have
            fun and drink responsibly! 🎉 🥳
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopTenPage;
