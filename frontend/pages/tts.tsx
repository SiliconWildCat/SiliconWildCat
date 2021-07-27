import Head from 'next/head';
import Icon from '../static/icon.png';

import TTsSlider from '../components/TTS/TTsSlider';
import ToggleMenu from '../components/Music/ToggleMenu';
import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), {
  ssr: false,
});
function Tts() {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <TTsSlider Select={Select} />
    </>
  );
}

export default Tts;
