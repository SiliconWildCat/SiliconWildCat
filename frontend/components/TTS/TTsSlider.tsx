import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { submit, tts, submitTTS } from '../../modules/tts';
import Link from 'next/link';
import AudioPlayer from 'react-h5-audio-player';
import { useAppDispatch, useAppSelector } from '../../hooks/useSelector';
import { RootState } from '../../modules';
import axios from 'axios';
import {
  initialText,
  inputText,
  // submitTTS,
  changeType,
} from '../../modules/tts';
import { changeSelect } from '../../modules/music';

const options = [
  { value: 'KSS', label: 'KSS', key: 0 },
  { value: 'TaeYeon', label: 'TaeYeon', key: 1 },
];

export default function TTsSlider({ Select }) {
  const { text, mp3File, type, mp3File2 } = useAppSelector(
    ({ tts }: RootState) => ({
      text: tts.text,
      mp3File: tts.mp3File,
      type: tts.type,
      mp3File2: tts.mp3File2,
    })
  );
  const [IMAGE_PARTS, onOne] = useState(4);
  const [changeTO, onOne2] = useState(0);
  const AUTOCHANGE_TIME = 4000;
  const [state, onOne4] = useState({
    activeSlide: -1,
    prevSlide: 0,
    sliderReady: true,
  });
  const [value, onChangeValue] = useState({
    value: 'KSS',
    label: 'KSS',
    key: 0,
  });
  const [myURL, onChangemyURL] = useState('');

  const dispatch = useAppDispatch();
  const onSubmitText = (e) => {
    e.preventDefault();
    const info: submit = { text: text, type: type };

    dispatch(submitTTS(info));
    dispatch(initialText());
  };
  useEffect(() => {
    window.clearTimeout(changeTO);
  }, [changeTO]);
  useEffect(() => {
    // runAutochangeTO();
    setTimeout(() => {
      onOne4({
        activeSlide: value.key,
        prevSlide: 0,
        sliderReady: true,
      });
    }, 0);
  }, [value]);
  useEffect(() => {
    const { label } = value;
    dispatch(changeType(label));
  }, [value, dispatch]);

  // const onGET = async () => {
  //   const { data } = await axios.post(
  //     'http://localhost:5000/TTS',
  //     {
  //       speech: '태연',
  //       voices: 'KSS',
  //     },
  //     {
  //       responseType: 'arraybuffer',
  //       headers: {
  //         'Content-Type': 'audio/wav',
  //       },
  //     }
  //   );
  // const blob = new Blob([data], {
  //   type: 'audio/wav',
  // });

  //   const myURL = URL.createObjectURL(blob);
  //   onChangemyURL(myURL);
  // };
  const onChangeText = (e) => {
    dispatch(inputText(e.target.value));
  };
  const onInitial = () => {
    dispatch(changeSelect(0));
  };
  function onClickChange(e) {
    window.clearTimeout(changeTO);

    const prevSlide = state.activeSlide;
    let activeSlide = 3;

    onOne4({
      activeSlide: activeSlide,
      prevSlide: prevSlide,
      sliderReady: true,
    });
  }
  const onChangeVal = () => {
    onChangeValue(value);
  };
  function changeSlides(change) {
    window.clearTimeout(changeTO);
    const { length } = tts;

    const prevSlide = state.activeSlide;
    let activeSlide = prevSlide + change;
    if (activeSlide < 0) activeSlide = length - 1;
    if (activeSlide >= length) activeSlide = 0;

    onOne4({
      activeSlide: activeSlide,
      prevSlide: prevSlide,
      sliderReady: true,
    });
  }

  return (
    <>
      <div className={classNames('slider', { 's--ready': state.sliderReady })}>
        {/* <button onClick={onClickChange}>2</button> */}
        <p className="slider__top-headings">Text to speech</p>
        {console.log(type)}
        <div className="slider__slides">
          {tts.map((slide, index) => (
            <div
              className={classNames('slider__slide', {
                's--active': state.activeSlide === index,
                's--prev': state.prevSlide === index,
              })}
              key={slide.city}
            >
              <form onSubmit={onSubmitText} className="slider__slide-contentt">
                <h3
                  className="slider__slide-subheadings"
                  style={{ color: 'white', marginTop: '100px' }}
                >
                  변환할 텍스트를 입력하세요.
                </h3>
                <input
                  value={text}
                  onChange={onChangeText}
                  className="slider__slide-inputs"
                  type="text"
                />
                <h3
                  className="slider__slide-subheadings"
                  style={{ color: 'white' }}
                >
                  변환 방법을 선택하세요.
                </h3>
                <Select
                  className="slider__slide-subheadingss"
                  options={options}
                  value={value}
                  defaultValue={{ value: `${type}`, label: `${type}`, key: 0 }}
                  onChange={onChangeValue}
                />
                <button className="slider__slide-button">Translate</button>
                {myURL && (
                  <AudioPlayer
                    className="slider__slide-music"
                    style={{ width: '60%', borderRadius: '8px' }}
                    src={myURL}
                    onPlay={(e) => console.log('onPlay')}
                  />
                )}
                {mp3File2 && (
                  <AudioPlayer
                    className="slider__slide-music"
                    style={{ width: '60%', borderRadius: '8px' }}
                    src={mp3File2}
                    onPlay={(e) => console.log('onPlay')}
                  />
                )}
              </form>
              <div className="slider__slide-parts">
                {[...Array(IMAGE_PARTS).fill(0)].map((x, i) => (
                  <div className="slider__slide-part" key={i}>
                    <div
                      className="slider__slide-part-inner"
                      style={{ backgroundImage: `url(${slide.img})` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <Link href="/music">
          <a onClick={onInitial} className="slider__control" />
        </Link>
      </div>
    </>
  );
}
