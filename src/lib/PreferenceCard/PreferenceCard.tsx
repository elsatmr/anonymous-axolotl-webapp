import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import styles from './PreferenceCard.module.css';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useAppSelector } from '../../redux/hooks';
import { BeerPreferences } from '../../utils/enums/enums';

const PreferenceCard = () => {
  const userState = useAppSelector((state) => state.UserReducer);
  const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
      color: '#ff3d47',
    },
    fontSize: 60,
  });
  return (
    <div>
      <div className={styles.cardContainer}>
        <div className={styles.ratingsContainer}>
          <div className={styles.ratingContainer}>
            <p>{BeerPreferences.Aroma}</p>
            <StyledRating
              readOnly
              value={userState.aroma}
              precision={0.5}
              icon={<FavoriteIcon fontSize="medium" />}
              emptyIcon={<FavoriteBorderIcon fontSize="medium" />}
            />
          </div>
          <div className={styles.ratingContainer}>
            <p>{BeerPreferences.Appearance}</p>
            <StyledRating
              readOnly
              value={userState.appearance}
              precision={0.5}
              icon={<FavoriteIcon fontSize="medium" />}
              emptyIcon={<FavoriteBorderIcon fontSize="medium" />}
            />
          </div>
          <div className={styles.ratingContainer}>
            <p>{BeerPreferences.Taste}</p>
            <StyledRating
              readOnly
              value={userState.taste}
              precision={0.5}
              icon={<FavoriteIcon fontSize="medium" />}
              emptyIcon={<FavoriteBorderIcon fontSize="medium" />}
            />
          </div>
          <div className={styles.ratingContainer}>
            <p>{BeerPreferences.Mouthfeel}</p>
            <StyledRating
              readOnly
              value={userState.mouthfeel}
              precision={0.5}
              icon={<FavoriteIcon fontSize="medium" />}
              emptyIcon={<FavoriteBorderIcon fontSize="medium" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreferenceCard;
