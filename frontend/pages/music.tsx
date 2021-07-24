import Head from 'next/head';
import Icon from '../static/icon.png';

import MusicSlider from '../components/Music/MusicSlider';
import ToggleMenu from '../components/Music/ToggleMenu';
import MusicPlayer from '../components/musicPlayer';
function Music() {
  return (
    <>
      <ToggleMenu></ToggleMenu>
      <MusicSlider />
      <MusicPlayer />
    </>
  );
}

export default Music;
