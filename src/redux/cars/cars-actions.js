import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6554dbaa63cafc694fe71e2b.mockapi.io';

export const getCars = createAsyncThunk('cars/getCars', async (_, thunkAPI) => {
  try {
    const { data: carData } = await axios.get(`/adverts?page=1&limit=12`);
    const { data: favData } = await axios.get(`/favorites`);

    return { carData, favData };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getFavorites = createAsyncThunk(
  'cars/getFavorites',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`/favorites`);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addCars = createAsyncThunk(
  'cars/addCars',
  async ({ model = '', page = 1, limit = 12 }, thunkAPI) => {
    try {
      const res = await axios.get(
        `/adverts?model=${model}&page=${page}&limit=${limit}`
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

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

export const filterCars = createAsyncThunk(
  'cars/filterCars',
  async ({ carBrand, price, from, to, page = 1, limit = 12 }, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `/adverts?make=${carBrand}&page=${page}&limit=${limit}`
      );

      if (carBrand === '' && price === 0 && from === 0 && to === 0) return data;

      let filteredData = [...data];

      if (price !== 0) {
        filteredData = filteredData.filter(({ rentalPrice }) => {
          let isRel = Number(rentalPrice.split('$')[1]) <= price;

          return isRel;
        });
      }

      if (to !== 0 && from <= to) {
        filteredData = filteredData.filter(({ mileage }) => {
          let isMileage = Number(mileage) >= from && Number(mileage) <= to;

          return isMileage;
        });
      }

      return filteredData;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const toggleFavorite = createAsyncThunk(
  'cars/toggleFavorite',
  async ({ id, isFav }, thunkAPI) => {
    try {
      if (isFav) {
        const { data } = await axios.get(`/favorites?carId=${id}`);
        const { id: favId } = data[0];

        await axios.delete(`/favorites/${favId}`);

        return { id, isFav };
      }

      const { data } = await axios.get(`/adverts/${id}`);

      const { data: favData } = await axios.post(`/favorites`, {
        carId: id,
        ...data,
      });

      return { id, isFav, car: data[0], favId: favData.id };
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);
