import React from 'react';
import { Box } from '@mui/material';
import styles from './TopTenCard.module.css';

interface Props {
  text: string;
  img: string;
}

const TopTenCard = ({ text, img }: Props) => {
  return (
    <div className={styles.cardContainer}>
      <div>
        <Box component="img" src={img} sx={{ width: 90, height: 120 }} />
        <h3>
          <i>{text}</i>
        </h3>
      </div>
    </div>
  );
};

export default TopTenCard;
