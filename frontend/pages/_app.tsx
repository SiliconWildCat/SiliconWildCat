import { AppProps } from 'next/app';
import wrapper from '../store';
import withReduxSaga from 'next-redux-saga';
import '../styles/playerStyles.css';
import '../styles/togglemenu.css';
import '../components/Music/music.scss';
import '../components/TTS/tts.scss';
import '../styles/MusicPlayer3.css';
import '../styles/background.css';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(withReduxSaga(App));
