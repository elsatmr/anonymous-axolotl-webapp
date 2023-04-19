import { createReducer } from '@reduxjs/toolkit';
import {
  getTopTenAleAction,
  getTopTenIpaAction,
  getTopTenLagerAction,
  getTopTenSummerAction,
  getTopTenWinterAction,
} from '../actions/TopTenActions';

interface ITopTen {
  results: string[];
}

const initialState: ITopTen = {
  results: [],
};

export const TopTenReducer = createReducer(initialState, (builder) => {
  builder.addCase(getTopTenAleAction.fulfilled, (state, action) => {
    state.results = action.payload;
  });
  builder.addCase(getTopTenLagerAction.fulfilled, (state, action) => {
    state.results = action.payload;
  });
  builder.addCase(getTopTenIpaAction.fulfilled, (state, action) => {
    state.results = action.payload;
  });
  builder.addCase(getTopTenSummerAction.fulfilled, (state, action) => {
    state.results = action.payload;
  });
  builder.addCase(getTopTenWinterAction.fulfilled, (state, action) => {
    state.results = action.payload;
  });
});
