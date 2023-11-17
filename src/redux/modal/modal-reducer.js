import { createSlice } from '@reduxjs/toolkit';
import { initialModalValue } from './modal-config';

import { openModal } from './modal-actions';

const modalSlice = createSlice({
  name: 'cars',
  initialState: initialModalValue,
  reducers: {
    closeModal(state) {
      state.isOpened = false;
      // state.car = {};
    },
  },
  extraReducers: {
    [openModal.fulfilled]: (state, { payload }) => {
      state.isOpened = true;
      state.car = { ...payload };
    },
  },
});

export const { closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
