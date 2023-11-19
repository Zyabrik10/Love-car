import { createSlice } from '@reduxjs/toolkit';
import { filtersInitialValue } from './filters-config';

const filtersSlice = createSlice({
  name: 'filter',
  initialState: filtersInitialValue,
  reducers: {
    setFilter(state, { payload }) {
      const { name, value } = payload;

      state[name] = value;
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
