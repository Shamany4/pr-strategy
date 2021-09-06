import React, { useEffect, useRef, useState } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper.scss';
import json from '../assets/cases/cases.json';
import WaveSurfer from 'wavesurfer.js';


import whiteArrow from '../assets/icons/whiteArrow.svg';
import image from '../assets/image/portfolio-bg.jpg';
import PlayerControls from '../components/PlayerControls';
import PlayerSpeaker from '../components/PlayerSpeaker';
import PlayerWidget from '../components/PlayerWidget';
import AudioCase from '../components/AudioCase';

let wavesurfer;

const PortfolioSection = () => {
  const [playing, setPlaying] = useState(false);
  const [first, setFirst] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isReady, setIsReady] = useState(true);
  const [endPlaylist, setEndPlaylist] = useState({
    start: false,
    finish: false
  });
  const [currentSound, setCurrentSound] = useState({
    count: json[currentIndex].count,
    name: json[currentIndex].name,
    preview: json[currentIndex].preview,
    path: json[currentIndex].path
  });
  const waveRef = useRef(null);

  const circleRef = useRef(null);

  const changeState = () => {
    setPlaying(!playing);
  }

  useEffect(() => {
    wavesurfer = WaveSurfer.create({
      container: waveRef.current,
      waveColor: '#DADADF',
      progressColor: '#818191',
      barWidth: 3,
      barHeight: 1, // the height of the wave
      barGap: null,
      cursorWidth: 0
    });
    loadAudioWave(currentIndex);
    new Swiper('.swiper-container', {
      direction: 'vertical',
      slidesPerView: 6,
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 6,
        },
        1140: {
          slidesPerView: 6
        }
      }
    });
  }, []);

  const getAudioPath = (index) => {
    return require('../assets/cases/audio/' + json[index].path);
  }

  const loadAudioWave = (currentIndex) => {
    wavesurfer.load(getAudioPath(currentIndex).default);
  }

  const pauseAudio = () => {
    wavesurfer.pause();
  }

  const playAudio = () => {
    wavesurfer.play();
  }

  const stopAudio = () => {
    wavesurfer.stop();
  }

  const nextAudio = async () => {
    setFirst(false);
    await setCurrentIndex(currentIndex + 1);
    setProgress()
  }

  const prevAudio = async () => {
    await setCurrentIndex(currentIndex - 1);
  }

  useEffect(() => {
    (async () => {
      setIsReady(false);
      if (currentIndex === 0) {
        setEndPlaylist({
          start: true,
          finish: false
        })
      } else {
        if (currentIndex === 2) {
          setEndPlaylist({
            start: false,
            finish: true
          })
        } else {
          setEndPlaylist({
            start: false,
            finish: false
          })
        }
      }
      await loadAudioWave(currentIndex);
      await setCurrentSound({
        count: json[currentIndex].count,
        name: json[currentIndex].name,
        preview: json[currentIndex].preview,
        path: json[currentIndex].path
      });
      wavesurfer.on('ready', function () {
        setIsReady(true);
        if (first) {
          setPlaying(false);
          wavesurfer.stop();
        } else {
          wavesurfer.play();
          setPlaying(true);
        }
      });
      if (currentIndex === 2) {
        wavesurfer.on('finish', function () {
          setCurrentIndex(0);
        });
      } else {
        wavesurfer.on('finish', function () {
          nextAudio();
        });
      }
      wavesurfer.on('audioprocess', function () {
        let current = Math.round(wavesurfer.getCurrentTime());
        let duration = Math.round(wavesurfer.getDuration());
        setProgress((current / duration) * 100);
      });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  const changeSound = async (index) => {
    setFirst(false);
    await setCurrentIndex(index);
  }

  const setProgress = (percent) => {
    const radius = circleRef.current.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    circleRef.current.style.strokeDasharray = ` ${circumference} ${circumference} `;
    circleRef.current.style.strokeDashoffset = circumference;

    let offset = circumference - percent / 100 * circumference;
    circleRef.current.style.strokeDashoffset = offset;
    circleRef.current.style.transition = '0.5s';
  }

  return (
    <section className="portfolio portfolio__section">
      <img src={image} alt="Фоновое изображение" className="portfolio__bg" />
      <div className="container">
        <div className="d-flex justify-between portfolio__heading">
          <h2 className="section-title portfolio__title" data-aos="fade-right">Портфолио</h2>
          <div className="portfolio-info" data-aos="fade-left">
            <div className="d-flex flex-column align-end">
              <span className="portfolio-info__businnes">The Business Pill</span>
              <div className="portfolio-info__line"></div>
            </div>
            <p className="portfolio-info__text">Наши специалисты подготовили для Вас интересный <span>storytelling</span> по&nbsp;авторским PR-программам
              из&nbsp;собственного опыта работы в&nbsp;области &laquo;Public
              Relations: strategies and tactics&raquo;.</p>
          </div>
        </div>
        <div className="d-flex justify-between portfolio__content">
          <div className="d-flex flex-column portfolio__controls">
            <div className="voice" data-aos="fade-right">
              <span className="voice__text">* Voice</span>
              <p className="voice__speaker">©Игорь Малинин</p>
            </div>
            <PlayerControls
              isPlay={playing}
              setPlay={changeState}
              pauseFunc={pauseAudio}
              nextFunc={nextAudio}
              prevFunc={prevAudio}
              stopFunc={stopAudio}
              endPlaylist={endPlaylist}
              isReady={isReady}
            />
            <div className="enjoy" data-aos="fade-up">
              <span className="enjoy__title">Play enjoy</span>
              <p className="enjoy__text section-subtitle">Блокбастер Тарантино
                уже не&nbsp;кажется таким
                захватывающим!</p>
            </div>
          </div>
          <div className="d-flex flex-column align-center ml-20 portfolio-players">
            <PlayerSpeaker
              current={currentSound.preview}
              useRef={circleRef}
              isPlay={playing}
              isReady={isReady}
              playFunc={playAudio}
              pauseFunc={pauseAudio}
              setPlay={changeState}
            />
            <PlayerWidget
              isPlay={playing}
              isReady={isReady}
              setPlay={changeState}
              endPlaylist={endPlaylist}
              useRef={waveRef}
              playFunc={playAudio}
              pauseFunc={pauseAudio}
              nextFunc={nextAudio}
              prevFunc={prevAudio}
              current={currentSound}
            />
          </div>
          <div className="d-flex flex-column align-center portfolio-cases">
            <button className="swiper-button-prev slider__prev">
              <img src={whiteArrow} alt="Иконка стрелки" />
            </button>
            <div className="swiper-container">
              <div className="swiper-wrapper">
                {
                  json.map((el, key) => {
                    return <div className="swiper-slide" key={key}>
                      <AudioCase
                        count={el.count}
                        name={el.name}
                        isPlay={playing}
                        preview={el.preview}
                        pauseFunc={pauseAudio}
                        playFunc={playAudio}
                        isReady={isReady}
                        setPlay={changeState}
                        changeSound={changeSound}
                        index={key}
                        currentIndex={currentIndex}
                      />
                    </div>
                  })
                }
              </div>
            </div>
            <button className="swiper-button-next slider__next">
              <img src={whiteArrow} alt="Иконка стрелки" />
            </button>
          </div>
        </div>
      </div>
    </section >
  )
}

export default PortfolioSection;
