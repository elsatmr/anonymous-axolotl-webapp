import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const setBeerMatchResultAction = createAsyncThunk<
  string,
  { aroma: number; taste: number; appearance: number; mouthfeel: number }
>(
  'BeerMatchReducer/SetBeerMatchResult',
  async ({ aroma, taste, appearance, mouthfeel }) => {
    console.log(aroma, taste, appearance, mouthfeel, 'AA');
    const res = await axios.get(
      'http://localhost:8080/beerapp/getuserrecommendations',
      {
        params: {
          aroma: aroma * 2,
          taste: taste * 2,
          appearance: appearance * 2,
          palate: mouthfeel * 2,
        },
      }
    );
    // const res = await axios.get(
    //   'http://localhost:8080/beerapp/getTopBeersBySummerReviews'
    // );
    console.log(res.data);
    return res.data;
  }
);

export const setBeerMatchShowsAction = createAction<boolean>(
  'SET_BEER_MATCH_SHOWS'
);
