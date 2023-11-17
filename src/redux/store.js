import { configureStore } from '@reduxjs/toolkit';
import { carsReducer } from './cars/cars-reducer';
import { filtersReducer } from './filter/filters-reducer';
import { modalReducer } from './modal/modal-reducer';

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filters: filtersReducer,
    modal: modalReducer,
  },
});
