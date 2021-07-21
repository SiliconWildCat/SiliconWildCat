import { AppProps } from 'next/app';
import wrapper from '../store';
function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(App);
