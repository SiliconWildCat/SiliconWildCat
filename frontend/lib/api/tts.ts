import axios from 'axios';
import { submit } from '../../modules/tts';
import client from './client';
export const submitTTS = ({ text, type }: submit) => {
  const headers = {
    'Content-type': 'application/json; charset=UTF-8',
  };
  // const Accept = '*/*';
  const data = JSON.stringify({ speech: text, voices: type });
  return client.post(`/TTS`, data, { headers });
};

export const getMP3 = () =>
  axios.get(
    `https://ww8007bucket.s3.ap-northeast-2.amazonaws.com/%ED%83%9C%EC%97%B0/y2mate.com+-+MV+Lee+Mujin%EC%9D%B4%EB%AC%B4%EC%A7%84++Traffic+light%EC%8B%A0%ED%98%B8%EB%93%B1.mp3`
  );

export const setTime = () => {
  var _promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('22');
    }, 3000);
  });
  return _promise;
};
