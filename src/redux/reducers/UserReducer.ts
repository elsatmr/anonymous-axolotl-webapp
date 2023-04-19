import { createReducer } from '@reduxjs/toolkit';
import {
  setUserNameAction,
  setUserPreferencesAction,
} from '../actions/UserActions';

interface IUserState {
  name: string;
  aroma: number;
  appearance: number;
  taste: number;
  mouthfeel: number;
}

const initialState: IUserState = {
  name: '',
  aroma: 0,
  appearance: 0,
  taste: 0,
  mouthfeel: 0,
};

export const UserReducer = createReducer(initialState, (builder) => {
  builder.addCase(setUserNameAction, (state, action) => {
    state.name = action.payload;
  });
  builder.addCase(setUserPreferencesAction, (state, action) => {
    state.aroma = action.payload.aroma ?? 0;
    state.mouthfeel = action.payload.mouthfeel ?? 0;
    state.taste = action.payload.taste ?? 0;
    state.appearance = action.payload.appearance ?? 0;
    console.log(state.aroma, state.mouthfeel, state.taste, state.appearance);
  });
});
