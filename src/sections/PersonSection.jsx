import React, { useEffect, useState, useRef } from 'react';
import 'swiper/swiper.scss';

import photo_1 from '../assets/image/photo_1.webp';
import photo_2 from '../assets/image/photo_2.webp';

import PersonSocialLink from "../components/PersonSocialLink";


const PersonSection = () => {
  const [active, setActive] = useState(false);
  const animateRef = useRef(null);
  const buttonRef = useRef(null);


  const clickBtnHandler = async () => {
    setActive(!active);
    animateRef.current.beginElement();
  }

  const openUrlHandler = (url) => {
    window.open(url);
  }

  useEffect(() => {
    animateRef.current.addEventListener('repeatEvent', () => {
      setActive(!active);
    })
  }, [active])

  return (
    <section className="person person__section d-flex">
      <div className="person-photo">
        <div className="person-photo-info">
          <span className="person-photo-info__span">{active ? 'Юна Милевская' : 'Игорь Малинин'}</span>
          <p className="person-photo-info__text">Вас проконсультирует</p>
        </div>

        <img src={photo_1}
          alt="Игорь Малинин"
          className="person-photo__img"
        />

        <img src={photo_2}
          alt="Юлианна Милевская"
          className="person-photo__img"
          style={{
            left: active ? '0' : '-100%',
            transition: '1s'
          }}
        />

        <div className="count">
          <span className="count__span" style={{
            marginRight: active ? '-50px' : '271px',
            transition: '1s'
          }}>{active ? '02' : '01'}</span>
          <div className={active ? 'count__progress count__progress_active' : 'count__progress'}></div>
        </div>
        <div className="count-photo">
          <span className="count-photo__number">{active ? '02' : '01'}</span>
          <span className="count-photo__number">02</span>
        </div>
      </div>
      <div className="person-info d-flex flex-column justify-between">
        <div className="d-flex justify-around person__content">
          <div className="d-flex flex-column person-column_one">
            <span className="person__questionnaire">Анкета</span>

            {
              !active
                ?
                <h3 className="person__name person__name_igor">Игорь <br /> Малинин</h3>
                :
                <h3 className="person__name">Юлианна <br /> Милевская</h3>
            }

            <div className={!active ? 'person-desc person-desc_igor' : 'person-desc person-desc_active'}>
              <span className={!active ? 'person-desc__span person-desc__span_igor' : 'person-desc__span'}>
                {
                  !active ? 'Руководитель холдинга The Business Pill.' : 'PR-стратег'
                }
              </span>
              {
                !active
                  ?
                  <p className="person-desc__text person-desc__text_igor">
                    Специалист в&nbsp;интеграции new
                    media в&nbsp;коммуникационные
                    стратегии компаний.
                    Обладатель Премии Рунета
                    2019 и&nbsp;2020.
                  </p>
                  :
                  <p className="person-desc__text person-desc__text_active">
                    C&nbsp;экспертизой
                    в&nbsp;медиапланировании
                    и&nbsp;аудите более 15&nbsp;лет.
                  </p>
              }
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
              <div className={active ? 'instagram-photo instagram-photo_active' : 'instagram-photo'}>
              </div>
              <div className="instagram-icons">
                <svg viewBox="0 0 27.83 27.83">
                  <g>
                    <g>
                      <path d="M13.92,21A7.07,7.07,0,1,1,21,13.92,7.07,7.07,0,0,1,13.92,21ZM13.92,9a4.88,4.88,0,1,0,4.87,4.88A4.89,4.89,0,0,0,13.92,9Z" />
                      <circle cx="21.15" cy="6.79" r="1.26" />
                      <path d="M18.64,27.83H9.19A9.2,9.2,0,0,1,0,18.64V9.19A9.2,9.2,0,0,1,9.19,0h9.45a9.2,9.2,0,0,1,9.19,9.19v9.45A9.2,9.2,0,0,1,18.64,27.83ZM9.19,2.19a7,7,0,0,0-7,7v9.45a7,7,0,0,0,7,7h9.45a7,7,0,0,0,7-7V9.19a7,7,0,0,0-7-7Z" />
                    </g>
                  </g>
                </svg>
              </div>
              <svg height="260" width="260" id="instagram">
                <linearGradient id="instagram-gradient">
                  <stop offset="0%" stopColor="#FF6E65" />
                  <stop offset="100%" stopColor="#C14C45" />
                </linearGradient>
                <g>
                  <circle cx="130" cy="130" r="120" strokeWidth={3} stroke="#F2F2F4" fill="none" />
                  <circle
                    cx="130"
                    cy="130"
                    r="120"
                    strokeWidth={5}
                    stroke="url(#instagram-gradient)"
                    fill="none"
                    strokeDasharray="0 816.4"
                  >
                    <animate
                      ref={animateRef}
                      id="line"
                      values="0;760"
                      dur="20s"
                      begin="person__btn.click"
                      repeatCount="indefinite"
                      attributeName="stroke-dasharray"
                    />
                  </circle>
                </g>
              </svg>
            </div>
            <button
              className={!active ? 'person__link person__link_igor' : 'person__link'}
              ref={buttonRef}
              onClick={() => openUrlHandler(!active ? 'https://www.instagram.com/igormalinin.ru/' : 'https://www.instagram.com/julinn_ita/')}
            >
              {!active ? '@igormalinin.ru' : '@milevskaya_pr_jvm'}
            </button>
            {
              !active
                ?
                <p className="person__quote section-subtitle person__quote_igor">«Завтра <br />
                  будет <br />
                  поздно...»</p>
                :
                <p className="person__quote section-subtitle">«PR — это прежде всего общение
                  и транслирование правильных
                  слов, ценностей».</p>
            }
          </div>
        </div>

        <div className="d-flex justify-end align-center person-footer">
          <button
            className={active ? 'person-controls__btn person-controls__btn_hide person-controls__btn_active' : 'person-controls__btn person-controls__btn_hide'}
            onClick={clickBtnHandler}
            id="person__btn"
          >
            <svg strokeWidth={2} stroke="#000000" fill="none" className="person-controls__icon" viewBox="0 0 12.74 7.9">
              <path d="M.69,1,6.44,6.49,12,.69,6.44,6.49Z" />
            </svg>
          </button>
          <ul className="person-social">
            <PersonSocialLink
              viewBox="0 0 27.84 27.83"
              url={active ? 'https://www.facebook.com/juna.milevskaya' : 'https://www.facebook.com/artijado/'}
              path_1="M26.64,4.65a9.2,9.2,0,0,0-8-4.65H9.19a9.18,9.18,0,0,0-8,4.67A9.07,9.07,0,0,0,0,9.19v9.45a9.1,9.1,0,0,0,1.19,4.52,9.22,9.22,0,0,0,3.05,3.22,9.09,9.09,0,0,0,4.95,1.45h9.45a9.09,9.09,0,0,0,4.95-1.45,9.22,9.22,0,0,0,3-3.2,9.08,9.08,0,0,0,1.21-4.54V9.19A9.15,9.15,0,0,0,26.64,4.65Zm-1,14a7,7,0,0,1-7,7H18v-8h3V13.89H18v-2c0-.49.13-.84.74-.84h2.31V6.79H18.48A4.92,4.92,0,0,0,13.73,12v1.9H11v3.79h2.77v8H9.19a7,7,0,0,1-7-7V9.19a7,7,0,0,1,7-7h9.45a7,7,0,0,1,7,7Z"
            />
            <PersonSocialLink
              viewBox="0 0 27.84 27.83"
              url={active ? 'https://vk.com/julinnmilli' : 'https://vk.com/igor_malinin'}
              path_1="M26.64,4.65a8.18,8.18,0,0,0-.51-.79A9.28,9.28,0,0,0,18.64,0H9.19A9.06,9.06,0,0,0,3.73,1.81a8.76,8.76,0,0,0-2,2,6.56,6.56,0,0,0-.54.83A9.07,9.07,0,0,0,0,9.19v9.45a9.1,9.1,0,0,0,1.19,4.52,7.39,7.39,0,0,0,.42.66,8.85,8.85,0,0,0,2.58,2.52l0,0a9.09,9.09,0,0,0,4.95,1.45h9.45a9.09,9.09,0,0,0,4.95-1.45s0,0,0,0h0a9,9,0,0,0,2.64-2.6q.19-.29.36-.57a9.08,9.08,0,0,0,1.21-4.54V9.19A9.15,9.15,0,0,0,26.64,4.65Zm-1,14a7,7,0,0,1-7,7H9.19a7,7,0,0,1-7-7V9.19a7,7,0,0,1,7-7h9.45a7,7,0,0,1,7,7Z"
              path_2="M19.9,14.55a.77.77,0,0,0,.11,1c.39.44.81.85,1.21,1.28a8,8,0,0,1,1.18,1.53,1.37,1.37,0,0,1,.15.38.53.53,0,0,1-.51.76c-.38,0-.77,0-1.15,0s-1,0-1.49,0a1.65,1.65,0,0,1-1.12-.45c-.35-.32-.65-.69-1-1s-.46-.51-.7-.76a.69.69,0,0,0-.22-.16.39.39,0,0,0-.54.08,1.63,1.63,0,0,0-.43,1.1c0,.18,0,.36,0,.54,0,.37-.19.58-.53.61a5.88,5.88,0,0,1-4.19-1,9.67,9.67,0,0,1-2.15-2.27,30,30,0,0,1-3.22-6,.77.77,0,0,0-.07-.16V9.79a.51.51,0,0,1,.44-.26l.27,0h2.2a.82.82,0,0,1,.81.55c.44,1,.89,1.94,1.36,2.9A3,3,0,0,0,11.09,14a1.06,1.06,0,0,0,.26.17.35.35,0,0,0,.48-.2A2.58,2.58,0,0,0,12,13,7.72,7.72,0,0,0,12,10.63a.93.93,0,0,0-.78-.81c-.22-.05-.23-.11-.08-.28a1.07,1.07,0,0,1,.66-.38,9,9,0,0,1,2.93,0c.49.08.67.26.71.87s0,.93,0,1.4c0,.63,0,1.25,0,1.88a1.66,1.66,0,0,0,.1.54c.13.37.39.42.67.18a5.89,5.89,0,0,0,1.08-1.45,14.41,14.41,0,0,0,1.19-2.51c.18-.46.26-.51.72-.51l2.73,0a1.52,1.52,0,0,1,.42.06c.26.08.34.23.29.52a3,3,0,0,1-.49,1.17c-.59.9-1.21,1.79-1.81,2.68A5.7,5.7,0,0,0,19.9,14.55Z"
            />
            <PersonSocialLink
              viewBox="0 0 27.83 27.83"
              url={active ? 'https://www.instagram.com/julinn_ita/' : 'https://www.instagram.com/igormalinin.ru/'}
              path_1="M13.92,21A7.07,7.07,0,1,1,21,13.92,7.07,7.07,0,0,1,13.92,21ZM13.92,9a4.88,4.88,0,1,0,4.87,4.88A4.89,4.89,0,0,0,13.92,9Z"
              circle={true}
              cx={21.15}
              cy={6.79}
              r={1.26}
              path_2="M18.64,27.83H9.19A9.2,9.2,0,0,1,0,18.64V9.19A9.2,9.2,0,0,1,9.19,0h9.45a9.2,9.2,0,0,1,9.19,9.19v9.45A9.2,9.2,0,0,1,18.64,27.83ZM9.19,2.19a7,7,0,0,0-7,7v9.45a7,7,0,0,0,7,7h9.45a7,7,0,0,0,7-7V9.19a7,7,0,0,0-7-7Z"
            />
          </ul>
          <button
            className={active ? 'person-controls__btn person-controls__btn_active' : 'person-controls__btn'}
            onClick={clickBtnHandler}
            id="person__btn"
          >
            <svg strokeWidth={2} stroke="#000000" fill="none" className="person-controls__icon" viewBox="0 0 12.74 7.9">
              <path d="M.69,1,6.44,6.49,12,.69,6.44,6.49Z" />
            </svg>
          </button>
        </div>
      </div>


    </section >
  )
}

export default PersonSection;