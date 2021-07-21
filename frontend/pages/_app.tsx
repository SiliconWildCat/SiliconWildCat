import { AppProps } from 'next/app';
import wrapper from '../store';
import withReduxSaga from 'next-redux-saga';
function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(withReduxSaga(App));
