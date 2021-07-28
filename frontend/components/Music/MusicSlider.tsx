import { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks/useSelector';
import Link from 'next/link';
import { RootState } from '../../modules';

export default function MusicSlider() {
  const { selectNum, musics } = useAppSelector(({ music }: RootState) => ({
    selectNum: music.selectNum,
    musics: music.musics,
  }));
  const [IMAGE_PARTS, onOne] = useState(4);
  const [changeTO, onOne2] = useState(0);
  const [state, onOne4] = useState({
    activeSlide: -1,
    prevSlide: -1,
    sliderReady: true,
  });
  const dispatch = useAppDispatch();
  useEffect(() => {
    window.clearTimeout(changeTO);
  }, [changeTO]);

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
  }, [selectNum]);

  return (
    <>
      <div className={classNames('slider', { 's--ready': state.sliderReady })}>
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
                  Title : {slide.subTitle}
                </h3>

                {/* <p className="slider__slide-readmore">Go to TTS Page</p> */}
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
            </div>
          ))}
        </div>
        <div className="slide_btn">
          <Link href="/tts">
            <p className="slider__slide-readmore">Go to TTS Page</p>
          </Link>
          <Link href="/tts">
            <a className="slider__control  slider__control--right" />
          </Link>
        </div>
      </div>
    </>
  );
}
