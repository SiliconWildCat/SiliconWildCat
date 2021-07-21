import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICounter } from '../interface/counter';

const initialState: ICounter = {
  number: 3,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addNumber: (state) => {
      state.number += 1;
    },
    subNumber: (state) => {
      state.number -= 1;
    },
  },
});

export const { addNumber, subNumber } = counterSlice.actions;

export default counterSlice.reducer;
