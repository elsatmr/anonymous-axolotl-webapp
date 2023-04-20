import { createReducer } from '@reduxjs/toolkit';
import { getBeerSearchAction } from '../actions/BeerSearchActions';
import { IBeerSearch } from '../../utils/types/types';

interface IBeerSearchResult {
  results: IBeerSearch[];
}

const initialState: IBeerSearchResult = {
  results: [],
};

export const BeerSearchReducer = createReducer(initialState, (builder) => {
  builder.addCase(getBeerSearchAction.fulfilled, (state, action) => {
    state.results = action.payload;
  });
});
