import React, {useEffect, useState} from 'react';
import Swiper from 'swiper';
import 'swiper/swiper.scss';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import LettersBlock from '../components/LettersBlock';
import ArrowCircle from "../components/ArrowCircle";

let swiper;

const LettersSection = () => {
  const lettersArray = [
    "letters_1.webp",
    "letters_2.webp",
    "letters_3.webp",
    "letters_4.webp",
    "letters_5.webp",
    "letters_6.webp",
    "letters_7.webp",
    "letters_8.webp",
    "letters_9.webp",
    "letters_10.webp",
    "letters_11.webp",
    "letters_12.webp",
    "letters_13.webp"
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeStateOpen = () => {
    setIsOpen(!isOpen);
  }
  // button_2Savo sizeS_2yB0V play_29jUQ
  const changeCurrentIndex = (index) => {
    setCurrentIndex(index);
    swiper.slideTo(swiper.clickedIndex);
  }

  const getUrlImage = () => {
    return require('../assets/letters/' + lettersArray[currentIndex]);
  }

  useEffect(() => {
    swiper = new Swiper('.letters-container', {
      direction: 'horizontal',
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
        430: {
          slidesPerView: 2,
          spaceBetween: 0,
          centeredSlides: true
        },
        // when window width is >= 640px
        576: {
          slidesPerView: 3,
          spaceBetween: 20,
          centeredSlides: false
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
        <div className="letters-container">
          <div className="swiper-wrapper">
            {
              lettersArray.map((el, key) => {
                return <div className="swiper-slide" key={key}>
                  <LettersBlock
                    path={el}
                    changeOpen={changeStateOpen}
                    changeIndex={changeCurrentIndex}
                    index={key}
                  />
                </div>
              })
            }
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
      {
        isOpen
          ?
          <Lightbox
            mainSrc={getUrlImage().default}
            nextSrc={getUrlImage().default}
            prevSrc={getUrlImage().default}
            onMovePrevRequest={() => {
              if (currentIndex === 0) {
                setCurrentIndex(lettersArray.length - 1);
              } else {
                setCurrentIndex(currentIndex - 1);
              }
              swiper.slidePrev(0);
            }}
            onMoveNextRequest={() => {
              if (currentIndex === lettersArray.length - 1) {
                setCurrentIndex(0);
              } else {
                setCurrentIndex(currentIndex + 1);
              }
              swiper.slideNext(0);
            }}
            onCloseRequest={() => setIsOpen(false)}
          />
          :
          null
      }
    </section>
  )
}

export default LettersSection;