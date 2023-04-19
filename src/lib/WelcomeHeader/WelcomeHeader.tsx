import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import Logo from '../../utils/images/axolotl.png';
import { Box } from '@mui/material';
import styles from './WelcomeHeader.module.css';
import PreferenceCard from '../PreferenceCard/PreferenceCard';
import { BeerPreferences } from '../../utils/enums/enums';

const WelcomeHeader = () => {
  return (
    <div className={styles.headerContainer}>
      <Box
        component="img"
        src={Logo}
        sx={{ width: '15%', height: '100%', minHeight: 90, minWidth: 120 }}
      />
    </div>
  );
};

export default WelcomeHeader;
