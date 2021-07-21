import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {};

export const loadingSlice = createSlice({
  name: 'LOADING',
  initialState,
  reducers: {
    startLoading: (state, action: PayloadAction<symbol>) => ({
      ...state,
      [action.payload]: true,
    }),
    endLoading: (state, action: PayloadAction<symbol>) => ({
      ...state,
      [action.payload]: false,
    }),
  },
});

export const { startLoading, endLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
