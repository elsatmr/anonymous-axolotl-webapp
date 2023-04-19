import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import styles from './PreferencePage.module.css';
import { Button } from '@mui/material';
import Preference from '../../lib/Preference/Preference';
import { setUserPreferencesAction } from '../../redux/actions/UserActions';
import { useNavigate } from 'react-router-dom';
import { setBeerMatchResultAction } from '../../redux/actions/BeerMatchActions';

const PreferencePage = () => {
  const userState = useAppSelector((state) => state.UserReducer);
  const [animate, setAnimate] = useState<boolean>(false);
  const [aroma, setAroma] = useState<number | null>(0);
  const [taste, setTaste] = useState<number | null>(0);
  const [appearance, setAppearance] = useState<number | null>(0);
  const [mouthfeel, setMouthfeel] = useState<number | null>(0);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleOnSubmit = () => {
    dispatch(
      setUserPreferencesAction({
        aroma: aroma,
        taste: taste,
        mouthfeel: mouthfeel,
        appearance: appearance,
      })
    );
    dispatch(
      setBeerMatchResultAction({
        aroma: aroma ?? 0,
        taste: taste ?? 0,
        mouthfeel: mouthfeel ?? 0,
        appearance: appearance ?? 0,
      })
    );
    navigate('/home');
  };

  return (
    <div
      className={`${styles['container']} ${animate ? styles['animate'] : ''}`}
    >
      <div className={styles.childContainer}>
        <h1>Hello, {userState.name} !</h1>
        <h2>Tell us more about your favorite beer! 🍻</h2>
        <div className={styles.firstRow}>
          <Preference
            header="Aroma"
            subheader="The Smell of The Beer"
            onRatingChange={setAroma}
          />
          <Preference
            header="Appearance"
            subheader="Color, Clarity, Visual Carbonation"
            onRatingChange={setAppearance}
          />
        </div>
        <div className={styles.firstRow}>
          <Preference
            header="Taste"
            subheader="Palate, Bitterness, and Finish"
            onRatingChange={setTaste}
          />
          <Preference
            header="Mouthfeel"
            subheader="Body, Carbonation, Astringency"
            onRatingChange={setMouthfeel}
          />
        </div>
        <Button
          variant="contained"
          onClick={handleOnSubmit}
          sx={{ pr: 5, pl: 5 }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default PreferencePage;
