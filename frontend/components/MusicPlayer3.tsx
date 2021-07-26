import AudioPlayer from 'react-h5-audio-player';
// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS

const Player = () => (
  <AudioPlayer
    src="https://fastcampus2022.s3.ap-northeast-2.amazonaws.com/Ed+Sheeran+Bad+Habits+%5BOfficial+Acoustic+Video%5D+(2)+(2).mp3"
    onPlay={e => console.log("onPlay")}
    // other props here
  />
);

export default Player;