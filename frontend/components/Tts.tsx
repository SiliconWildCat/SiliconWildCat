import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useAppSelector } from '../hooks/useSelector';
import { RootState } from '../modules';
import { initialText, inputText, submitTTS } from '../modules/tts';

export function useTts() {
  const { text, mp3File } = useAppSelector(({ tts }: RootState) => ({
    text: tts.text,
    mp3File: tts.mp3File,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initialText());
  }, [dispatch]);

  const onChangeText = (e) => {
    dispatch(inputText(e.target.value));
  };

  const onSubmitText = (e) => {
    e.preventDefault();
    dispatch(submitTTS(text));
    dispatch(initialText());
  };

  return { text, mp3File, onChangeText, onSubmitText };
}

export default function TTS() {
  const { text, mp3File, onChangeText, onSubmitText } = useTts();
  return (
    <>
      <form onSubmit={onSubmitText}>
        <div>text : {text}</div>
        <input type="text" value={text} onChange={onChangeText} />
        <button type="submit">전송</button>
      </form>
    </>
  );
}
