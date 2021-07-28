import axios from 'axios';
import { setInitialText, submit } from '../../modules/tts';
import client from './client';
export const submitTTS = ({ text, type }: submit) => {
  const headers = {
    'Content-type': 'application/json; charset=UTF-8',
  };
  setInitialText;
  // const Accept = '*/*';
  const data = JSON.stringify({ speech: text, voices: type });
  return client.post(`/TTS`, data, { headers });
};
