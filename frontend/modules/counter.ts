import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as api from '../lib/api/api';
import createRequestSaga from '../hooks/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import { createAction } from 'redux-actions';
export interface Sample {
  post: string[];
  users: any[];
}
const initialState: Sample = {
  post: [],
  users: [],
};
const GET_POST = 'counter/GET_POST';
const GET_USERS = 'counter/GET_USERS';

export const getPost = createAction(GET_POST, (id: number) => id);
export const getUsers = createAction(GET_USERS);

const getPostSaga = createRequestSaga(GET_POST, api.getPost);
const getUsersSaga = createRequestSaga(GET_USERS, api.getUsers);

export function* sampleSaga() {
  yield takeLatest(GET_POST, getPostSaga);
  yield takeLatest(GET_USERS, getUsersSaga);
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    GET_POST_SUCCESS: (state, action: PayloadAction<any>) => {
      state.post = action.payload;
    },
    GET_USERS_SUCCESS: (state, action: PayloadAction<any>) => {
      state.users = action.payload;
    },
  },
});

export const { GET_POST_SUCCESS, GET_USERS_SUCCESS } = counterSlice.actions;

export default counterSlice.reducer;
