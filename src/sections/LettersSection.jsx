import { React, useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper.scss';
import LettersBlock from '../components/LettersBlock';

import whiteArrow from '../assets/icons/whiteArrow.svg';

const LettersSection = ({ }) => {
  useEffect(() => {
    const swiper = new Swiper('.letters-container', {
      direction: 'horizontal',
      slidesPerView: 6,
      spaceBetween: 25,
      loop: true,
      // Navigation arrows
      navigation: {
        nextEl: '.letter-controls__next',
        prevEl: '.letter-controls__prev',
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
          centeredSlides: true
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 0,
          centeredSlides: true
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        992: {
          slidesPerView: 5,
          spaceBetween: 60
        },
        1140: {
          slidesPerView: 6
        }
      }
    });
  }, []);
  return (
    <section className="letters letters__section">
      <div className="letters__content">
        <div className="letters-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide"><LettersBlock /></div>
            <div className="swiper-slide"><LettersBlock /></div>
            <div className="swiper-slide"><LettersBlock /></div>
            <div className="swiper-slide"><LettersBlock /></div>
            <div className="swiper-slide"><LettersBlock /></div>
            <div className="swiper-slide"><LettersBlock /></div>
            <div className="swiper-slide"><LettersBlock /></div>
            <div className="swiper-slide"><LettersBlock /></div>
            <div className="swiper-slide"><LettersBlock /></div>
          </div>
        </div>
        <div className="container">
          <div className="letters-controls d-flex align-center justify-center">
            <button className="letters-controls__btn letter-controls__prev">
              <img src={whiteArrow} alt="Иконка стрелки" />
            </button>
            <div className="circles circles__block letters-circles">
              <div className="circles__item"></div>
              <div className="circles__item"></div>
              <div className="circles__item"></div>
            </div>
            <button className="letters-controls__btn letter-controls__next">
              <img src={whiteArrow} alt="Иконка стрелки" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LettersSection;