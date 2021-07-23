import { AppProps } from 'next/app';
import wrapper from '../store';
import withReduxSaga from 'next-redux-saga';
// import '../styles/playerStyles.css';
import '../components/Music/music.scss';
import '../components/TTS/tts.scss';
import 'react-h5-audio-player/lib/styles.css';
function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(withReduxSaga(App));
