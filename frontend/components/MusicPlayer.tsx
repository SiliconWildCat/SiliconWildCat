import { useEffect, useRef } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import { useAppSelector } from '../hooks/useSelector';
import { RootState } from '../modules';

export default function Player() {
  const { selectNum, musics } = useAppSelector(({ music }: RootState) => ({
    selectNum: music.selectNum,
    musics: music.musics,
  }));
  const player = useRef<any>();
  useEffect(() => {
    player.current.audio.current.pause();
  }, [selectNum]);

  return (
    <AudioPlayer
      src={musics[selectNum].musicURL}
      showDownloadProgress={true}
      autoPlay={false}
      preload={'metadata'}
      volume={0.3}
      ref={player}
    />
  );
}
