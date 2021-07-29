import { useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { submit, tts, submitTTS, setInitialText } from '../../modules/tts';
import Link from 'next/link';
import AudioPlayer from 'react-h5-audio-player';
import { useAppDispatch, useAppSelector } from '../../hooks/useSelector';
import { RootState } from '../../modules';
import { initialText, inputText, changeType } from '../../modules/tts';
import { changeSelect } from '../../modules/music';
import Loader from 'react-loader-spinner';
import LoadingProgress from '../../lib/Loading/LoadingProgress';
const options = [
  { value: 'KSS', label: 'KSS', key: 0 },
  { value: 'TaeYeon', label: 'TaeYeon', key: 1 },
];

export default function TTsSlider({ Select }) {
  const scrollRef = useRef(null);
  const { text, mp3File, type, loadingWAV, mp3File2, saveText } =
    useAppSelector(({ tts, loading }: RootState) => ({
      text: tts.text,
      mp3File: tts.mp3File,
      type: tts.type,
      loadingWAV: loading['tts/SUBMIT_TTS'],
      mp3File2: tts.mp3File2,
      saveText: tts.saveText,
    }));
  const [IMAGE_PARTS, onOne] = useState(4);
  const [changeTO, onOne2] = useState(0);
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
  const count = useRef(0);
  const dispatch = useAppDispatch();
  const onSubmitText = useCallback(
    (e) => {
      e.preventDefault();
      const info: submit = { text: text, type: type };
      dispatch(submitTTS(info));
      dispatch(initialText());
      dispatch(setInitialText());
    },
    [text, type, dispatch]
  );
  useEffect(() => {
    window.clearTimeout(changeTO);
  }, [changeTO, mp3File, mp3File2]);
  useEffect(() => {
    dispatch(setInitialText());
  }, [type, dispatch]);
  useEffect(() => {
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

  return (
    <>
      <div
        className={classNames('slider', { 's--ready': state.sliderReady })}
        ref={scrollRef}
      >
        <p className="slider__top-headings">Text to speech</p>

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
                  텍스트를 입력하세요.
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
                  목소리를 선택하세요.
                </h3>
                <Select
                  className="slider__slide-subheadingss"
                  options={options}
                  value={value}
                  isSearchable={false}
                  defaultValue={{ value: `${type}`, label: `${type}`, key: 0 }}
                  onChange={onChangeValue}
                  theme={(theme) => ({
                    ...theme,
                    colors: {
                      ...theme.colors,
                      primary: '#8977ad',
                    },
                  })}
                />
                <button className="slider__slide-button">Translate</button>
                {loadingWAV && (
                  <LoadingProgress className="slider__slide-loading" />
                )}
                {!loadingWAV && mp3File && (
                  <AudioPlayer
                    className="slider__slide-music"
                    style={{
                      left: '20%',
                      top: '80%',
                      width: '60%',
                      borderRadius: '8px',
                      zIndex: mp3File2,
                    }}
                    src={mp3File}
                    autoPlay={true}
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
        <div className="slide_btns">
          <Link passHref href="/music">
            <p onClick={onInitial} className="slider__slide-readmores">
              go to music page
            </p>
          </Link>
          <Link href="/music">
            <a onClick={onInitial} className="slider__control" />
          </Link>
        </div>
      </div>
    </>
  );
}
