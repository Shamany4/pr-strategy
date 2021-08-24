import { React, useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper.scss';

import whiteArrow from '../assets/icons/whiteArrow.svg';
import image from '../assets/image/portfolio-bg.jpg';
import Player from '../components/PlayerWidget';
import PlayerControls from '../components/PlayerControls';
import PlayerSpeaker from '../components/PlayerSpeaker';
import PlayerWidget from '../components/PlayerWidget';
import AudioCase from '../components/AudioCase';


const PortfolioSection = () => {
  useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      slidesPerView: 6,
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 6,
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
  return (
    <section className="portfolio portfolio__section">
      <img src={image} alt="Фоновое изображение" className="portfolio__bg" />
      <div className="container">
        <div className="d-flex justify-between portfolio__heading">
          <h2 className="section-title portfolio__title">Портфолио</h2>
          <div className="portfolio-info">
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
            <div className="voice">
              <span className="voice__text">* Voice</span>
              <p className="voice__speaker">©Игорь Малинин</p>
            </div>
            <PlayerControls />
            <div className="enjoy">
              <span className="enjoy__title">Play enjoy</span>
              <p className="enjoy__text section-subtitle">Блокбастер Тарантино
                уже не&nbsp;кажется таким
                захватывающим!</p>
            </div>
          </div>
          <div className="d-flex flex-column align-center ml-20 portfolio-players">
            <PlayerSpeaker />
            <PlayerWidget />
          </div>
          <div className="d-flex flex-column align-center portfolio-cases">
            <button className="swiper-button-prev slider__prev">
              <img src={whiteArrow} alt="Иконка стрелки" />
            </button>
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide"><AudioCase /></div>
                <div className="swiper-slide"><AudioCase /></div>
                <div className="swiper-slide"><AudioCase /></div>
                <div className="swiper-slide"><AudioCase /></div>
                <div className="swiper-slide"><AudioCase /></div>
                <div className="swiper-slide"><AudioCase /></div>
                <div className="swiper-slide"><AudioCase /></div>
                <div className="swiper-slide"><AudioCase /></div>
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
