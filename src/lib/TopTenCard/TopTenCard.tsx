import React from 'react';
import { Box } from '@mui/material';
import styles from './TopTenCard.module.css';
import { useNavigate } from 'react-router-dom';

interface Props {
  text: string;
  img: string;
  url: string;
}

const TopTenCard = ({ text, img, url }: Props) => {
  const navigate = useNavigate();
  return (
    <div
      className={styles.cardContainer}
      onClick={() => {
        navigate(url);
      }}
    >
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
