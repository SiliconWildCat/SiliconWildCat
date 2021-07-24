import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITts } from '../interface/tts';
import * as api from '../lib/api/tts';
import createRequestSaga from '../hooks/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import { createAction } from 'redux-actions';
import { stat } from 'fs';

export const tts = [
  {
    city: 'Paris',
    country: '제주도 푸른밤',
    img: `https://t1.daumcdn.net/cfile/tistory/9975134C5C97724E08`,
  },
  {
    city: 'NewYork',
    country: '제주도 푸른밤',
    img: `https://t1.daumcdn.net/cfile/tistory/994D5C485C8EEF791E?original`,
  },
];

const initialState: ITts = {
  text: '',
  mp3File: '',
  type: '',
  error: '',
};

export interface submit {
  text: string;
  type: string;
}
const SUBMIT_TTS = 'tts/SUBMIT_TTS';
const GET_TTS = 'tts/GET_TTS';

export const submitTTS = createAction(SUBMIT_TTS, (info: submit) => info);
export const getTTS = createAction(GET_TTS);

const submitTTSSaga = createRequestSaga(SUBMIT_TTS, api.submitTTS);
const getTTSSaga = createRequestSaga(GET_TTS, api);

export function* ttsSaga() {
  yield takeLatest(SUBMIT_TTS, submitTTSSaga);
  yield takeLatest(GET_TTS, getTTSSaga);
}

export const ttsSlice = createSlice({
  name: 'tts',
  initialState: initialState,
  reducers: {
    inputText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
    initialText: (state) => {
      state.text = '';
    },
    changeType: (state, action: PayloadAction<string>) => {
      state.type = action.payload;
    },
    SUBMIT_TTS_SUCCESS: (state, action: PayloadAction<any>) => {
      state.mp3File = action.payload;
    },
    SUBMIT_TTS_FAILURE: (state, action: PayloadAction<any>) => {
      state.error = action.payload;
    },
  },
});

export const { inputText, initialText, changeType, SUBMIT_TTS_SUCCESS } =
  ttsSlice.actions;

export default ttsSlice.reducer;
