import { createSlice } from '@reduxjs/toolkit';
import { carsInitialValue } from './cars-config';

import {
  getCars,
  filterCars,
  addCars,
  getFavorites,
  toggleFavorite,
} from './cars-actions';

const carsSlice = createSlice({
  name: 'cars',
  initialState: carsInitialValue,
  extraReducers: {
    [toggleFavorite.fulfilled](state, { payload }) {
      if (payload.isFav) {
        state.favorites = state.favorites.filter(
          ({ carId }) => carId !== payload.id
        );
      }
    },
    [getFavorites.fulfilled](state, { payload }) {
      state.favorites = payload;
    },

    [getCars.pending](state) {
      state.isLoading = true;
    },
    [getCars.fulfilled](state, { payload }) {
      state.cars = payload.carData;
      state.favorites = payload.favData;
      state.isLoading = false;
    },
    [getCars.rejected](state, action) {
      console.log('rejected');
      state.isLoading = false;
    },
    [addCars.fulfilled](state, action) {
      state.cars.push(...action.payload);

      if (32 >= state.cars.length || action.payload.length <= 12)
        state.isButtonShown = false;
      else state.isButtonShown = true;
    },
    [addCars.rejected](state, action) {
      console.log('rejected');
    },
    [filterCars.fulfilled](state, { payload }) {
      state.cars = [];
    },
    [filterCars.rejected](state, action) {
      console.log('rejected');
    },
  },
});

export const carsReducer = carsSlice.reducer;
