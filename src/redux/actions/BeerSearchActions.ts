import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getBeerSearchAction = createAsyncThunk(
  'BeerSearchReducer/GetBeerSearch',
  async (pattern: string) => {
    const res = await axios.get('http://localhost:8080/beerapp/findbeer', {
      params: {
        pattern: pattern,
        pagesize: 10,
        pagenumber: 1,
      },
    });
    return res.data;
  }
);
