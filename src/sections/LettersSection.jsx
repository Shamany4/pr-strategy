import { React, useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper.scss';
import LettersBlock from '../components/LettersBlock';

import whiteArrow from '../assets/icons/whiteArrow.svg';
import ArrowCircle from "../components/ArrowCircle";

const LettersSection = () => {
  useEffect(() => {
    new Swiper('.letters-container', {
      direction: 'horizontal',
      slidesPerView: 6,
      spaceBetween: 25,
      loop: true,
      // Navigation arrows
      navigation: {
        nextEl: '.letters-controls__next',
        prevEl: '.letters-controls__prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        bulletElement: 'span',
        bulletActiveClass: 'letters-controls__bullet_active',
        bulletClass: 'letters-controls__bullet',
        clickable: true
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
        576: {
          slidesPerView: 1,
          spaceBetween: 0,
          centeredSlides: true
        },
        712: {
          slidesPerView: 4,
          spaceBetween: 150
        },
        992: {
          slidesPerView: 5,
          spaceBetween: 60
        },
        1140: {
          slidesPerView: 5
        },
        1245: {
          slidesPerView: 6
        },
        1460: {
          slidesPerView: 7
        },
        1645: {
          slidesPerView: 8
        }

      }
    });
  }, []);
  return (
    <section className="letters letters__section">
      <div className="letters__content">
        <div className="letters-hide">
          <p className="letters-hide__text"><span>Благодарственные письма</span> о нашей работе </p>
        </div>
        <div className="letters-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide"><LettersBlock path="letters_1.webp"/></div>
            <div className="swiper-slide"><LettersBlock path="letters_2.webp"/></div>
            <div className="swiper-slide"><LettersBlock path="letters_3.webp"/></div>
            <div className="swiper-slide"><LettersBlock path="letters_4.webp"/></div>
            <div className="swiper-slide"><LettersBlock path="letters_5.webp"/></div>
            <div className="swiper-slide"><LettersBlock path="letters_6.webp"/></div>
            <div className="swiper-slide"><LettersBlock path="letters_7.webp"/></div>
            <div className="swiper-slide"><LettersBlock path="letters_8.webp"/></div>
            <div className="swiper-slide"><LettersBlock path="letters_9.webp"/></div>
            <div className="swiper-slide"><LettersBlock path="letters_10.webp"/></div>
            <div className="swiper-slide"><LettersBlock path="letters_11.webp"/></div>
            <div className="swiper-slide"><LettersBlock path="letters_12.webp"/></div>
            <div className="swiper-slide"><LettersBlock path="letters_13.webp"/></div>
          </div>
          <div className="letters-controls">
            <ArrowCircle
              secondClass="letters-controls__prev"
              height={46}
              width={46}
              background="#000000"
              stroke="white"
              strokeWidth={2}
              angle={90}
              heightSVG={10}
              widthSVG={11}
            />
            <div className="swiper-pagination"></div>
            <ArrowCircle
              secondClass="letters-controls__next"
              height={46}
              width={46}
              background="#000000"
              stroke="white"
              strokeWidth={2}
              angle={-90}
              heightSVG={10}
              widthSVG={11}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default LettersSection;