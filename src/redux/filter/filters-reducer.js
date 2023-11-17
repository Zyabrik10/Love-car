import { createSlice } from '@reduxjs/toolkit';
import { filtersInitialValue } from './filters-config';

const filtersSlice = createSlice({
  name: 'filter',
  initialState: filtersInitialValue,
  reducers: {
    setBrand(state, { payload }) {
      state.carBrand = payload;
    },
    setPrice(state, { payload }) {
      state.price = payload;
    },
    setFrom(state, { payload }) {
      state.from = payload;
    },
    setTo(state, { payload }) {
      state.from = payload;
    },
  },
});

export const { setBrand, setPrice, setFrom, setTo } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
