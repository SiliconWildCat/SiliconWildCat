import Head from 'next/head';
import Icon from '../static/icon.png';

import MusicSlider from '../components/Music/MusicSlider';
import ToggleMenu from '../components/Music/ToggleMenu';
import MusicPlayer from '../components/MusicPlayer2';

function Music() {
  return (
    <>
      <ToggleMenu></ToggleMenu>
      <MusicSlider />
      {/* <div className="player_wrapper">
        <MusicPlayer />
      </div> */}
    </>
  );
}

export default Music;
