import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getTopTenIpaAction = createAsyncThunk(
  'TopTenReducer/GetTopTenIpa',
  async () => {
    const res = await axios.get(
      'http://localhost:8080/beerapp/getTopBeersCountsByIPA'
    );
    return res.data;
  }
);

export const getTopTenLagerAction = createAsyncThunk(
  'TopTenReducer/GetTopTenLager',
  async () => {
    const res = await axios.get(
      'http://localhost:8080/beerapp/getTopBeersCountsByLager'
    );
    return res.data;
  }
);

export const getTopTenAleAction = createAsyncThunk(
  'TopTenReducer/GetTopTenAle',
  async () => {
    const res = await axios.get(
      'http://localhost:8080/beerapp/getTopBeersCountsByAle'
    );
    return res.data;
  }
);

export const getTopTenSummerAction = createAsyncThunk(
  'TopTenReducer/GetTopTenSummer',
  async () => {
    const res = await axios.get(
      'http://localhost:8080/beerapp/getTopBeersBySummerReviews'
    );
    return res.data;
  }
);

export const getTopTenWinterAction = createAsyncThunk(
  'TopTenReducer/GetTopTenWinter',
  async () => {
    const res = await axios.get(
      'http://localhost:8080/beerapp/getTopBeersByWinterReviews'
    );
    return res.data;
  }
);
