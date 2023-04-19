import { Button, Box } from '@mui/material';
import React from 'react';
import styles from './WelcomePage.module.css';
import { useNavigate } from 'react-router-dom';
import Logo from '../../utils/images/axolotl.png';

const WelcomePage = () => {
  let navigate = useNavigate();
  const handleStartClick = () => {
    navigate('/input');
  };
  return (
    <div className={styles.pageContainer}>
      <div className={styles.textContainer}>
        <Box component="img" src={Logo} sx={{ width: '25%', height: '25%' }} />
        <h1>Welcome To Anonymous Axoltl</h1>
        <h3>We are the internet's best brewery</h3>
        <h3>Let us find the best beer for you!</h3>
        <Button onClick={handleStartClick} variant="contained">
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default WelcomePage;
