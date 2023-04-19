import React from 'react';
import styles from './Preference.module.css';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

interface Props {
  header: string;
  subheader: string;
  onRatingChange: (rating: number | null) => void;
}

const Preference = ({ header, subheader, onRatingChange }: Props) => {
  const [rating, setRating] = React.useState<number | null>(0);
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
    <div className={styles.ratingContainer}>
      <h2>{header}</h2>
      <p>
        <i>{subheader}</i>
      </p>
      <StyledRating
        name="appearance"
        defaultValue={0}
        value={rating}
        getLabelText={(value: number) =>
          `${value} Heart${value !== 1 ? 's' : ''}`
        }
        onChange={(event, rating) => {
          onRatingChange(rating);
          setRating(rating);
        }}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
    </div>
  );
};

export default Preference;
