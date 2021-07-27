import { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import { ReactDOM } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useSelector';

import Link from 'next/link';
import { changeSelect } from '../../modules/music';
import { RootState } from '../../modules';
import Music from '../../pages/music';
import Player from '../MusicPlayer3';

export default function MusicSlider() {
  const { selectNum, musics } = useAppSelector(({ music }: RootState) => ({
    selectNum: music.selectNum,
    musics: music.musics,
  }));
  const [IMAGE_PARTS, onOne] = useState(4);
  const [changeTO, onOne2] = useState(0);
  const AUTOCHANGE_TIME = 4000;
  const [state, onOne4] = useState({
    activeSlide: -1,
    prevSlide: -1,
    sliderReady: true,
  });
  const dispatch = useAppDispatch();
  useEffect(() => {
    window.clearTimeout(changeTO);
  }, []);

  useEffect(() => {
    if (selectNum === 0) {
      onOne4({
        activeSlide: 1,
        prevSlide: 0,
        sliderReady: true,
      });
      setTimeout(() => {
        onOne4({
          activeSlide: 0,
          prevSlide: 0,
          sliderReady: true,
        });
      }, 100);
    } else {
      onOne4({
        activeSlide: selectNum,
        prevSlide: 0,
        sliderReady: true,
      });
    }

    // changeSlides(selectNum);
  }, [selectNum]);

  // function runAutochangeTO() {
  //   onOne2(
  //     setTimeout(() => {
  //       changeSlides(1);
  //       runAutochangeTO();
  //     }, AUTOCHANGE_TIME)
  //   );
  // }

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
  const changeSlides = useCallback(
    (change) => {
      window.clearTimeout(changeTO);
      const { length } = musics;

      const prevSlide = state.activeSlide;
      let activeSlide = prevSlide + change;
      if (activeSlide < 0) activeSlide = length - 1;
      if (activeSlide >= length) activeSlide = 0;
      // dispatch(changeSelect(activeSlide));
      onOne4({
        activeSlide: selectNum,
        prevSlide: prevSlide,
        sliderReady: true,
      });
    },
    [selectNum]
  );

  return (
    <>
      <div className={classNames('slider', { 's--ready': state.sliderReady })}>
        {/* <button onClick={onClickChange}>2</button> */}
        <p className="slider__top-heading">Taeyeon</p>
        <div className="slider__slides">
          {musics.map((slide, index) => (
            <div
              className={classNames('slider__slide', {
                's--active': state.activeSlide === index,
                's--prev': state.prevSlide === index,
              })}
              key={slide.title}
            >
              <div className="slider__slide-content">
                <h3
                  className="slider__slide-subheading"
                  style={{ color: 'white' }}
                >
                  Title : {slide.title}
                </h3>
                {/* <h2 className="slider__slide-heading">
                  {slide.city.split('').map((l, index) => (
                    <span style={{ color: 'white' }} key={index}>
                      {l}
                    </span>
                  ))}
                </h2> */}
                {/* <p className="slider__slide-readmore">Go to Youtube</p> */}
              </div>
              <div className="slider__slide-parts">
                {[...Array(IMAGE_PARTS).fill(0)].map((x, i) => (
                  <div className="slider__slide-part" key={i}>
                    <div
                      className="slider__slide-part-inner"
                      style={{ backgroundImage: `url(${slide.imgURL})` }}
                    />
                  </div>
                ))}
              </div>
              <Player
                className={'slider__slide-player'}
                url={slide.musicURL}
              ></Player>
            </div>
          ))}
        </div>
        <Link href="/tts">
          <a className="slider__control  slider__control--right" />
        </Link>
      </div>
    </>
  );
}
