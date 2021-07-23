import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { ReactDOM } from 'react';
import { useAppSelector } from '../../hooks/useSelector';
import { slides } from '../../modules/music';
import image1 from '../../images/1.jpeg';
import image2 from '../../images/1.png';
import { truncate } from 'node:fs';

export default function MusicSlider() {
  // const { slides2 } = useAppSelector(({ music }) => ({
  //   slides2: music.slides,
  // }));
  const [IMAGE_PARTS, onOne] = useState(4);
  const [changeTO, onOne2] = useState(0);
  const AUTOCHANGE_TIME = 4000;
  const [state, onOne4] = useState({
    activeSlide: -1,
    prevSlide: -1,
    sliderReady: false,
  });

  useEffect(() => {
    window.clearTimeout(changeTO);
  }, []);
  useEffect(() => {
    // runAutochangeTO();
    setTimeout(() => {
      onOne4({
        activeSlide: 1,
        prevSlide: 0,
        sliderReady: true,
      });
    }, 0);
  }, []);

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

  function changeSlides(change) {
    window.clearTimeout(changeTO);
    const { length } = slides;

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
      <button onClick={onClickChange}>2</button>
      <div className={classNames('slider', { 's--ready': state.sliderReady })}>
        <p className="slider__top-heading">Taeyeon</p>
        <div className="slider__slides">
          {slides.map((slide, index) => (
            <div
              className={classNames('slider__slide', {
                's--active': state.activeSlide === index,
                's--prev': state.prevSlide === index,
              })}
              key={slide.city}
            >
              <div className="slider__slide-content">
                <h3
                  className="slider__slide-subheading"
                  style={{ color: 'white' }}
                >
                  {slide.country}
                </h3>
                <h2 className="slider__slide-heading">
                  {slide.city.split('').map((l, index) => (
                    <span style={{ color: 'white' }} key={index}>
                      {l}
                    </span>
                  ))}
                </h2>
                <p className="slider__slide-readmore">Go to Youtube</p>
              </div>
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
        {/* <div className="slider__control" onClick={() => changeSlides(-1)}>
          <div className="__control" onClick={() => changeSlides(-1)} />
          <div className="__control" onClick={() => changeSlides(-1)} />
          <div className="__control" onClick={() => changeSlides(-1)} />
        </div> */}
        <div
          className="slider__control slider__control--right"
          onClick={() => changeSlides(1)}
        />
      </div>
    </>
  );
}
