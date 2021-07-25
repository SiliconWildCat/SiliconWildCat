import axios from 'axios';
import { submit } from '../../modules/tts';
import client from './client';
export const submitTTS = ({ text, type }: submit) => {
  const headers = {
    'Content-type': 'application/json; charset=UTF-8',
     Accept: '*/*',
  };

  const data = JSON.stringify({ "speech": text, "voices": type });
  return client.post(`/TTS`,data, {headers});
};

export const getUsers = () =>
  axios.get(`https://jsonplaceholder.typicode.com/users`);
