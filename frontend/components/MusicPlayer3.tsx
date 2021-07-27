import AudioPlayer from 'react-h5-audio-player';
// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS

const Player = ({ url, className }) => (
  <AudioPlayer
    className={className}
    src={url}
    showDownloadProgress={true}

    // other props here
  />
);

export default Player;
