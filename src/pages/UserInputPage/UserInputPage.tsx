import React, { useEffect, useState } from 'react';
import styles from './UserInputPage.module.css';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';
import { setUserNameAction } from '../../redux/actions/UserActions';

const UserInputPage = () => {
  const [animate, setAnimate] = useState(false);
  const [name, setName] = useState<string>('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleOnEnter = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key == 'Enter') {
      navigate('/preference');
      dispatch(setUserNameAction(name));
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={`${styles['question']} ${animate ? styles['animate'] : ''}`}
      >
        <h1>Hello, what's your name?</h1>
        <TextField
          variant="standard"
          onChange={(e) => {
            setName(e.target.value);
          }}
          onKeyDown={handleOnEnter}
        />
      </div>
    </div>
  );
};

export default UserInputPage;
