import { createReducer } from '@reduxjs/toolkit';
import { IBeer } from '../../utils/types/types';
import {
  setBeerMatchResultAction,
  setBeerMatchShowsAction,
} from '../actions/BeerMatchActions';

interface IBeerMatch {
  match: IBeer[];
  shows: boolean;
}

const initialState: IBeerMatch = {
  match: [],
  shows: false,
};

export const BeerMatchReducer = createReducer(initialState, (builder) => {
  builder.addCase(setBeerMatchResultAction.pending, (state, action) => {
    state.match = [];
  });
  builder.addCase(setBeerMatchResultAction.fulfilled, (state, action) => {
    for (let i = 0; i < 10; i++) {
      var beer: IBeer = {
        beerName: action.payload[i][0],
        appearance: action.payload[i][1],
        aroma: action.payload[i][2],
        palate: action.payload[i][3],
        taste: action.payload[i][4],
      };
      state.match.push(beer);
    }
  });
  builder.addCase(setBeerMatchShowsAction, (state, action) => {
    state.shows = action.payload;
  });
});
