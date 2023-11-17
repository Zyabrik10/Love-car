import { createSlice } from '@reduxjs/toolkit';
import { carsInitialValue } from './cars-config';

import { getCars, filterCars, addCars } from './cars-actions';

const carsSlice = createSlice({
  name: 'cars',
  initialState: carsInitialValue,
  reducers: {
    toggleFavorite(state, { payload }) {
      if (!payload.isFav)
        state.favorites[payload.id] = state.cars.filter(
          ({ id }) => id === payload.id
        );
      else {
        state.favorites = state.favorites.filter(({ id }) => id !== payload.id);
      }
    },
  },
  extraReducers: {
    [getCars.pending](state, action) {
      console.log('pending');
    },
    [getCars.fulfilled](state, action) {
      state.cars = action.payload;
    },
    [getCars.rejected](state, action) {
      console.log('rejected');
    },
    [addCars.pending](state, action) {
      console.log('pending');
    },
    [addCars.fulfilled](state, action) {
      const oldStateCarsLength = state.cars.length;
      state.cars.push(...action.payload);

      console.log(oldStateCarsLength, state.cars.length);

      if (oldStateCarsLength === state.cars.length) state.isButtonShown = false;
      else state.isButtonShown = true;
    },
    [addCars.rejected](state, action) {
      console.log('rejected');
    },
    [filterCars.pending](state, action) {
      console.log('pending');
    },
    [filterCars.fulfilled](state, action) {
      state.cars = action.payload.length === 0 ? [{}] : action.payload;
    },
    [filterCars.rejected](state, action) {
      console.log('rejected');
    },
  },
});

export const { toggleFavorite } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
