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
            <div class="circles circles__block letters-circles">
              <div class="circles__item"></div>
              <div class="circles__item"></div>
              <div class="circles__item"></div>
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