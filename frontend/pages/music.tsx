import Head from 'next/head';
import Icon from '../static/icon.png';

import MusicSlider from '../components/Music/MusicSlider';
import ToggleMenu from '../components/Music/ToggleMenu';
import MusicPlayer from '../components/MusicPlayer';

function Music() {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <ToggleMenu></ToggleMenu>
      <MusicSlider />

      <MusicPlayer />
    </>
  );
}

export default Music;
