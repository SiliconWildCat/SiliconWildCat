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
      title: 'Mind',
      subTitle: '마음',
      imgURL:
        'https://t1.daumcdn.net/cfile/tistory/994D5C485C8EEF791E?original',
      musicURL: '',
    },
    {
      title: 'FourSeasons',
      subTitle: '사계',
      imgURL: 'https://t1.daumcdn.net/cfile/tistory/9980B4485C8EEF781C',
      musicURL: '',
    },
    {
      title: 'SecretGarden',
      subTitle: '비밀의 화원',
      imgURL: 'https://t1.daumcdn.net/cfile/tistory/9975134C5C97724E08',
      musicURL: '',
    },
    {
      title: 'Weekend',
      subTitle: 'Weekend',
      imgURL: 'https://t1.daumcdn.net/cfile/tistory/9954D9485C8EEF7C1E',
      musicURL:
        'https://ww8007bucket.s3.ap-northeast-2.amazonaws.com/%ED%83%9C%EC%97%B0/y2mate.com+-+MV+Lee+Mujin%EC%9D%B4%EB%AC%B4%EC%A7%84++Traffic+light%EC%8B%A0%ED%98%B8%EB%93%B1.mp3',
    },
  ],
  music: '',
  Title: '',
  error: '',
};

const GET_MUSIC = 'music/GET_MUSIC';

export const getMusic = createAction(GET_MUSIC, (title: string) => title);
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
      state.musics[state.selectNum].musicURL = action.payload;
    },
    GET_MUSIC_FAILURE: (state, action: PayloadAction<any>) => {
      state.error = action.payload;
    },
  },
});

export const { changeSelect } = musicSlice.actions;

export default musicSlice.reducer;
