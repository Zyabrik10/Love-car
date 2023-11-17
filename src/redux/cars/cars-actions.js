import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6554dbaa63cafc694fe71e2b.mockapi.io';

/*
 * GET @ /adverts
 */
export const getCars = createAsyncThunk('cars/getCars', async (_, thunkAPI) => {
  try {
    const res = await axios.get(`/adverts?page=1&limit=12`);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

/*
 * GET @ /adverts
 */
export const addCars = createAsyncThunk(
  'cars/addCars',
  async ({ page, limit = 12 }, thunkAPI) => {
    try {
      const res = await axios.get(`/adverts?page=${page}&limit=${limit}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * GET @ /adverts/:id
 */
export const getCar = createAsyncThunk(
  'cars/getCar',
  async (payload, thunkAPI) => {
    try {
      const res = await axios.get(`/adverts/${payload}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * GET @ /filterCars
 */
export const filterCars = createAsyncThunk(
  'cars/filterCars',
  async ({ model, price, from, to }, thunkAPI) => {
    try {
      const { data } = await axios.get(`/adverts?model=${model}`);

      if (to === 0) to = Infinity;
      if (price === 0 && to === 0) price = Infinity;

      return data.filter(
        ({ miliage, rentalPrice }) => miliage >= from && miliage <= to
      );
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);
