import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6554dbaa63cafc694fe71e2b.mockapi.io';

export const openModal = createAsyncThunk(
  'modal/openModal',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/adverts?id=${id}`);

      return data[0];
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
