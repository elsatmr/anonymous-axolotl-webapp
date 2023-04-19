import { createAction } from '@reduxjs/toolkit';

export const setUserNameAction = createAction<string>('SET_APP_STATE');

export const setUserPreferencesAction = createAction<{
  aroma: number | null;
  taste: number | null;
  mouthfeel: number | null;
  appearance: number | null;
}>('SET_USER_PREFERENCES');
