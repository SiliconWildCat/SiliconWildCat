import lamejs from 'lamejs';
const Lame = require('node-lame').Lame;
export function wavToMp3() {
  var mp3Data = [];

  var mp3encoder = new lamejs.Mp3Encoder(1, 44100, 128); //mono 44.1khz encode to 128kbps
  var samples = new Int16Array(44100); //one second of silence replace that with your own samples
  var mp3Tmp = mp3encoder.encodeBuffer(samples); //encode mp3

  //Push encode buffer to mp3Data variable
  mp3Data.push(mp3Tmp);

  // Get end part of mp3
  mp3Tmp = mp3encoder.flush();

  // Write last data to the output data, too
  // mp3Data contains now the complete mp3Data
  mp3Data.push(mp3Tmp);
  return mp3Data;
  console.debug(mp3Data);
}

export function Hi() {
  const encoder = new Lame({
    output: './audio-files/demo.mp3',
    bitrate: 192,
  }).setFile('./audio-files/demo.wav');

  encoder
    .encode()
    .then(() => {
      // Encoding finished
    })
    .catch((error) => {
      // Something went wrong
    });
}
