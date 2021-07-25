import { IMusic } from '../interface/music';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import createRequestSaga from '../hooks/createRequestSaga';
import * as api from '../lib/api/music';
import { takeLatest } from 'redux-saga/effects';
import { createAction } from 'redux-actions';
export const initialState: IMusic = {
  selectNum: 0,
  musics: [
    {
      title: '별 보러 갈래',
      imgURL:
        'https://t1.daumcdn.net/cfile/tistory/994D5C485C8EEF791E?original',
    },
    {
      title: '그리 쉽게 이별을 말하지 말아요',
      imgURL: 'https://t1.daumcdn.net/cfile/tistory/9980B4485C8EEF781C',
    },
    {
      title: '제주도 푸른밤',
      imgURL: 'https://t1.daumcdn.net/cfile/tistory/9975134C5C97724E08',
    },

    {
      title: 'Stay',
      imgURL: 'https://t1.daumcdn.net/cfile/tistory/9954D9485C8EEF7C1E',
    },
  ],
  music: '',
};

const GET_MUSIC = 'music/GET_MUSIC';

export const submitTTS = createAction(GET_MUSIC);

const getMusicSaga = createRequestSaga(GET_MUSIC, api.getMusic);

export function* musicSaga() {
  yield takeLatest(GET_MUSIC, getMusicSaga);
}

export const musicSlice = createSlice({
  name: 'music',
  initialState: initialState,
  reducers: {
    changeSelect: (state, action: PayloadAction<number>) => {
      state.selectNum = action.payload;
    },
    GET_MUSIC_SUCCESS: (state, action: PayloadAction<any>) => {
      state.music = action.payload;
    },
  },
});

export const { changeSelect } = musicSlice.actions;

export default musicSlice.reducer;
