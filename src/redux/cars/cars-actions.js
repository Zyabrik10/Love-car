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
 * GET @ /favorites
 */
export const getFavorites = createAsyncThunk(
  'cars/getFavorites',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`/favorites?page=1&limit=12`);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

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

      // return data.filter(
      //   ({ miliage, rentalPrice }) => miliage >= from && miliage <= to
      // );
      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

/*
 * GET @ /toggleFavorite
 */
export const toggleFavorite = createAsyncThunk(
  'cars/toggleFavorite',
  async ({ id, isFav }, thunkAPI) => {
    try {
      // console.log(isFav);
      if (isFav) {
        const { data } = await axios.get(`/favorites?carId=${id}`);
        const { id: favId } = data[0];

        await axios.delete(`/favorites/${favId}`);

        return { id, isFav };
      }

      const { data } = await axios.get(`/adverts?id=${id}`);
      const { data: favData } = await axios.post(`/favorites`, {
        carId: id,
        ...data[0],
      });

      return { id, isFav, car: data[0], favId: favData.id };
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);
