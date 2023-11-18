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

    [getCars.fulfilled](state, { payload }) {
      state.cars = payload;
    },
    [getCars.rejected](state, action) {
      console.log('rejected');
    },
    [addCars.fulfilled](state, action) {
      state.cars.push(...action.payload);

      if (32 === state.cars.length) state.isButtonShown = false;
      else state.isButtonShown = true;
    },
    [addCars.rejected](state, action) {
      console.log('rejected');
    },
    [filterCars.fulfilled](state, { payload }) {
      console.log(payload);
      state.cars = [];
    },
    [filterCars.rejected](state, action) {
      console.log('rejected');
    },
  },
});

export const carsReducer = carsSlice.reducer;
