import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { submit, tts } from '../../modules/tts';
import Link from 'next/link';
import AudioPlayer from 'react-h5-audio-player';
import { useAppDispatch, useAppSelector } from '../../hooks/useSelector';
import { RootState } from '../../modules';
import {
  initialText,
  inputText,
  submitTTS,
  changeType,
} from '../../modules/tts';
import { changeSelect } from '../../modules/music';

const options = [
  { value: 'KSS', label: 'KSS', key: 0 },
  { value: 'TaeYeon', label: 'TaeYeon', key: 1 },
];

export default function TTsSlider({ Select }) {
  const { text, mp3File, type } = useAppSelector(({ tts }: RootState) => ({
    text: tts.text,
    mp3File: tts.mp3File,
    type: tts.type,
  }));
  const [IMAGE_PARTS, onOne] = useState(4);
  const [changeTO, onOne2] = useState(0);
  const AUTOCHANGE_TIME = 4000;
  const [state, onOne4] = useState({
    activeSlide: -1,
    prevSlide: 0,
    sliderReady: true,
  });
  const [value, onChangeValue] = useState({
    value: 'TTS',
    label: 'TTS',
    key: 0,
  });

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
                <button onClick={onSubmitText} className="slider__slide-button">
                  Translate
                </button>
                {mp3File && (
                  <AudioPlayer
                    className="slider__slide-music"
                    style={{ width: '50%', borderRadius: '8px' }}
                    autoPlay
                    src={mp3File}
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
