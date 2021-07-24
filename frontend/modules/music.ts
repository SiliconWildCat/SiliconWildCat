import { IMusic } from '../interface/music';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
};

export const musicSlice = createSlice({
  name: 'music',
  initialState: initialState,
  reducers: {
    changeSelect: (state, action: PayloadAction<number>) => {
      state.selectNum = action.payload;
    },
  },
});

export const { changeSelect } = musicSlice.actions;

export default musicSlice.reducer;
