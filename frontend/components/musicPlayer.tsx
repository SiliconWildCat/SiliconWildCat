import React, { Component } from 'react';
import jquery from 'jquery';
import $ from 'jquery';
import { TimelineMax, Power0, TweenMax } from 'gsap';
import { useAppSelector } from '../hooks/useSelector';
import { initialState } from '../modules/music';
import { RootState } from '../modules';
class musicPlayer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $(document).ready(function () {
      var audioElement = document.createElement('audio');
      audioElement.setAttribute('src', $('.active-song').attr('data-src'));

      var tl = new TimelineMax();
      tl.to(
        '.player__albumImg',
        3,
        {
          rotation: '360deg',
          repeat: -1,
          ease: Power0.easeNone,
        },
        '-=0.2'
      );
      tl.pause();

      $('.player__play').click(function () {
        if ($('.player').hasClass('play')) {
          $('.player').removeClass('play');
          audioElement.pause();
          TweenMax.to('.player__albumImg', 0.2, {
            scale: 1,
            ease: Power0.easeNone,
          });
          tl.pause();
        } else {
          $('.player').addClass('play');
          audioElement.play();
          TweenMax.to('.player__albumImg', 0.2, {
            scale: 1.1,
            ease: Power0.easeNone,
          });
          tl.resume();
        }
      });

      var playhead = document.getElementById('playhead');
      audioElement.addEventListener('timeupdate', function () {
        var duration = this.duration;
        var currentTime = this.currentTime;
        var percentage = (currentTime / duration) * 100;
        playhead.style.width = percentage + '%';
      });

      function updateInfo() {
        $('.player__author').text($('.active-song').attr('data-author'));
        $('.player__song').text($('.active-song').attr('data-song'));
      }
      updateInfo();

      $('.player__next').click(function () {
        if ($('.player .player__albumImg.active-song').is(':last-child')) {
          $('.player__albumImg.active-song').removeClass('active-song');
          $('.player .player__albumImg:first-child').addClass('active-song');
          audioElement.addEventListener('timeupdate', function () {
            var duration = this.duration;
            var currentTime = this.currentTime;
            var percentage = (currentTime / duration) * 100;
            playhead.style.width = percentage + '%';
          });
        } else {
          $('.player__albumImg.active-song')
            .removeClass('active-song')
            .next()
            .addClass('active-song');
          audioElement.addEventListener('timeupdate', function () {
            var duration = this.duration;
            var currentTime = this.currentTime;
            var percentage = (currentTime / duration) * 100;
            playhead.style.width = percentage + '%';
          });
        }
        updateInfo();
        audioElement.setAttribute('src', $('.active-song').attr('data-src'));
        audioElement.play();
      });

      $('.player__prev').click(function () {
        if ($('.player .player__albumImg.active-song').is(':first-child')) {
          $('.player__albumImg.active-song').removeClass('active-song');
          $('.player .player__albumImg:last-child').addClass('active-song');
          audioElement.addEventListener('timeupdate', function () {
            var duration = this.duration;
            var currentTime = this.currentTime;
            var percentage = (currentTime / duration) * 100;
            playhead.style.width = percentage + '%';
          });
        } else {
          $('.player__albumImg.active-song')
            .removeClass('active-song')
            .prev()
            .addClass('active-song');
          audioElement.addEventListener('timeupdate', function () {
            var duration = this.duration;
            var currentTime = this.currentTime;
            var percentage = (currentTime / duration) * 100;
            playhead.style.width = percentage + '%';
          });
        }
        updateInfo();
        audioElement.setAttribute('src', $('.active-song').attr('data-src'));
        audioElement.play();
      });
    });
  }

  render() {
    return (
      <div className="player">
        <div className="player__bar">
          <div className="player__album">
            <div
              className="player__albumImg active-song"
              data-author=""
              data-song="Location"
              data-src="https://fastcampus2022.s3.ap-northeast-2.amazonaws.com/Ed+Sheeran+Bad+Habits+%5BOfficial+Acoustic+Video%5D+(2)+(2).mp3"
              style={{
                backgroundImage: `url(${initialState.musics[0].imgURL})`,
              }}
            ></div>
            <div
              className="player__albumImg"
              data-author="Khalid"
              data-song="Angels"
              data-src="https://fastcampus2022.s3.ap-northeast-2.amazonaws.com/Ed+Sheeran+Bad+Habits+%5BOfficial+Acoustic+Video%5D+(2)+(2).mp3"
              style={{
                backgroundImage: `url(${initialState.musics[0].imgURL})`,
              }}
            ></div>
          </div>
          <div className="player__controls">
            <div className="player__prev">
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
              >
                <path d="M26.695 34.434v31.132L54.5 49.998z" />
                <path d="M24.07 34.434v31.132c0 2.018 2.222 3.234 3.95 2.267l27.804-15.568c1.706-.955 1.707-3.578 0-4.533L28.02 32.168c-2.957-1.655-5.604 2.88-2.649 4.533l27.805 15.564v-4.533L25.371 63.3l3.95 2.267V34.435c-.001-3.387-5.251-3.387-5.251-.001z" />
                <g>
                  <path d="M55.5 34.434v31.132l27.805-15.568z" />
                  <path d="M52.875 34.434v31.132c0 2.018 2.222 3.234 3.949 2.267 9.27-5.189 18.537-10.379 27.805-15.568 1.705-.955 1.705-3.578 0-4.533L56.824 32.168c-2.957-1.655-5.604 2.88-2.648 4.533l27.803 15.564v-4.533L54.176 63.3l3.949 2.267V34.435c0-3.387-5.25-3.387-5.25-.001z" />
                </g>
              </svg>
            </div>
            <div className="player__play">
              <svg
                className="icon play"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
              >
                <path d="M51.109 30.335l-36-24A2 2 0 0 0 12 8v48a2.003 2.003 0 0 0 2 2c.388 0 .775-.113 1.109-.336l36-24a2 2 0 0 0 0-3.329z" />
              </svg>
              <svg
                className="icon pause"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
              >
                <path d="M22.537 8.046h17.791c1.104 0 2.003.898 2.003 1.993v79.912a2.005 2.005 0 0 1-2.003 2.003h-17.79a2.005 2.005 0 0 1-2.003-2.003V10.04c0-1.095.898-1.993 2.002-1.993zM59.672 8.046h17.8c1.095 0 1.993.898 1.993 1.993v79.912a2.003 2.003 0 0 1-1.993 2.003h-17.8a1.997 1.997 0 0 1-1.993-2.003V10.04c0-1.095.889-1.993 1.993-1.993z" />
              </svg>
            </div>
            <div className="player__next">
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
              >
                <path d="M26.695 34.434v31.132L54.5 49.998z" />
                <path d="M24.07 34.434v31.132c0 2.018 2.222 3.234 3.95 2.267l27.804-15.568c1.706-.955 1.707-3.578 0-4.533L28.02 32.168c-2.957-1.655-5.604 2.88-2.649 4.533l27.805 15.564v-4.533L25.371 63.3l3.95 2.267V34.435c-.001-3.387-5.251-3.387-5.251-.001z" />
                <g>
                  <path d="M55.5 34.434v31.132l27.805-15.568z" />
                  <path d="M52.875 34.434v31.132c0 2.018 2.222 3.234 3.949 2.267 9.27-5.189 18.537-10.379 27.805-15.568 1.705-.955 1.705-3.578 0-4.533L56.824 32.168c-2.957-1.655-5.604 2.88-2.648 4.533l27.803 15.564v-4.533L54.176 63.3l3.949 2.267V34.435c0-3.387-5.25-3.387-5.25-.001z" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="player__timeline">
          <p className="player__author" />
          <p className="player__song" />
          <div className="player__timelineBar">
            <div id="playhead" />
          </div>
        </div>
      </div>
    );
  }
}

export default musicPlayer;
