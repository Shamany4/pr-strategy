import { React, useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper.scss';

import photo_1 from '../assets/image/photo_1.jpg';
import vk from '../assets/icons/social/vk.svg';
import telegram from '../assets/icons/social/telegram.svg';
import facebook from '../assets/icons/social/facebook.svg';
import instagram from '../assets/icons/social/instagram.svg';


const PersonSection = () => {
  useEffect(() => {
    const swiper = new Swiper('.person-container', {
      direction: 'horizontal',
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 5000,
      },
    });
  }, []);
  return (
    <section className="person person__section d-flex">
      <div className="person-photo">
        <div className="person-photo-info">
          <span className="person-photo-info__span">Игорь Малинин</span>
          <p className="person-photo-info__text">Вас проконсультирует</p>
        </div>
        <img src={photo_1} alt="Игорь Малинин" className="person-photo__img" />
        <div className="count">
          <span className="count__span">01</span>
          <div className="count__progress"></div>
        </div>
        <div className="count-photo">
          <span className="count-photo__number">01</span>
          <span className="count-photo__number">02</span>
        </div>
      </div>
      <div className="person-info d-flex flex-column justify-between">
        <div className="d-flex justify-between person__content">
          <div className="d-flex flex-column person-column_one">
            <span className="person__questionnaire">Анкета</span>
            <h3 className="person__name">Юлианна <br /> Милевская</h3>
            <div className="person-desc">
              <span className="person-desc__span">PR-стратег</span>
              <p className="person-desc__text">с&nbsp;экспертизой
                в&nbsp;медиапланировании
                и&nbsp;аудите более 15&nbsp;лет.</p>
            </div>
          </div>
          <div className="d-flex flex-column person__figure person-column_two">
            <svg strokeWidth={3} stroke="#DADADE" fill="none" className="person__icon">
              <path d="M.69,1,6.44,6.49,12,.69,6.44,6.49Z" />
            </svg>
            <div className="person__line"></div>
          </div>
          <div className="d-flex flex-column person-column_three">
            <span className="person__questionnaire person__details">Детали</span>
            <div className="instagram">
              <svg height="260" width="260">
                <circle cx="130" cy="130" r="120" strokeWidth={3} stroke="#F2F2F4" fill="none" />
              </svg>
            </div>
            <a href="#" className="person__link">@milevskaya_pr_jvm</a>
            <p className="person__quote section-subtitle">&laquo;PR&nbsp;&mdash; это прежде всего общение
              и&nbsp;транслирование правильных
              слов, ценностей&raquo;.</p>
          </div>
        </div>
        <div className="d-flex justify-end align-center">
          <ul className="person-social">
            <li className="person-social__item">
              <a href="#" className="person-social__link"></a>
            </li>
          </ul>
          <button className="person-controls__btn">
            <svg strokeWidth={2} stroke="#000000" fill="none" className="person-controls__icon">
              <path d="M.69,1,6.44,6.49,12,.69,6.44,6.49Z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="container m-person__content">
        <div className="person-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="m-person">
                <div className="instagram m-instagram">
                  <svg height="260" width="260">
                    <circle cx="130" cy="130" r="120" strokeWidth={3} stroke="#F2F2F4" fill="none" />
                  </svg>
                </div>
                <h3 className="m-person__name">Игорь Малинин</h3>
                <p className="m-person__post">Руководитель холдинга
                  The Business Pill.</p>
                <p className="m-person__desc">Специалист в интеграции new
                  media в коммуникационные
                  стратегии компаний.
                  Обладатель Премии Рунета
                  2019 и 2020.</p>
                <div className="m-person-social">
                  <a href="#" className="m-person-social__link">
                    <img src={vk} alt="Иконка социальной сети" className="m-person-social__icon" />
                  </a>
                  <a href="#" className="m-person-social__link">
                    <img src={telegram} alt="Иконка социальной сети" className="m-person-social__icon" />
                  </a>
                  <a href="#" className="m-person-social__link">
                    <img src={instagram} alt="Иконка социальной сети" className="m-person-social__icon" />
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="m-person">
                <div className="instagram m-instagram">
                  <svg height="260" width="260">
                    <circle cx="130" cy="130" r="120" strokeWidth={3} stroke="#F2F2F4" fill="none" />
                  </svg>
                </div>
                <h3 className="m-person__name">Юлианна
                  Милевская</h3>
                <p className="m-person__post">PR-стратег</p>
                <p className="m-person__desc">с экспертизой
                  в медиапланировании
                  и аудите более 15 лет.</p>
                <div className="m-person-social">
                  <a href="#" className="m-person-social__link">
                    <img src={vk} alt="Иконка социальной сети" className="m-person-social__icon" />
                  </a>
                  <a href="#" className="m-person-social__link">
                    <img src={telegram} alt="Иконка социальной сети" className="m-person-social__icon" />
                  </a>
                  <a href="#" className="m-person-social__link">
                    <img src={instagram} alt="Иконка социальной сети" className="m-person-social__icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default PersonSection;