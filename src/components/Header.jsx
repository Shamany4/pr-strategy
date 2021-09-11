import React, {useState} from 'react';
import { Link } from "react-scroll";

import CalendarWidget from "./CalendarWidget";

const Header = () => {
  const [active, setActive] = useState(false);
  const openUrlHandler = (url) => {
    window.open(url);
  }
  return (
    <header className="header">
      <div className={active ? 'drop-block drop-block_active' : 'drop-block'}>
        <div className="drop-block-wrapper d-flex flex-column justify-between">
          <button
            className="drop-block_close"
            onClick={() => setActive(!active)}
          >&times;</button>
          <h3 className="drop-block__title">The Business Pill</h3>

          <div className="drop-block__content">
            <div>
              <span className="drop-block__subtitle">Напиши нам:</span>
              <div className="drop-block-social drop-block-social_first d-flex">
                <div className="drop-block-card d-flex flex-column align-center">
                  <button
                    className="drop-block__icon"
                    onClick={() => openUrlHandler('https://t.me/igor_malinin')}
                  >
                    <svg viewBox="0 0 29 29">
                      <linearGradient id="drop-block-gradient">
                        <stop offset="0%" stopColor="#FF6E65" />
                        <stop offset="100%" stopColor="#C14C45" />
                      </linearGradient>
                      <path d="M20.67,29H8.34A8.35,8.35,0,0,1,0,20.66V8.34A8.35,8.35,0,0,1,8.34,0H20.67A8.35,8.35,0,0,1,29,8.34V20.66A8.35,8.35,0,0,1,20.67,29ZM8.34,2.93A5.42,5.42,0,0,0,2.93,8.34V20.66a5.42,5.42,0,0,0,5.41,5.41H20.67a5.42,5.42,0,0,0,5.4-5.41V8.34a5.42,5.42,0,0,0-5.4-5.41Z"/>
                      <path d="M21.71,6.87a1.79,1.79,0,0,0-1.85-.14L18,7.49C14,9.22,9.89,10.92,5.81,12.68a2.09,2.09,0,0,0-1,.85,1.26,1.26,0,0,0-.08,1.12,1.81,1.81,0,0,0,1.2,1.08c.91.35,1.85.65,2.79.94A.39.39,0,0,1,9,17l.06.21c.35,1.14.67,2.32,1.08,3.46a1.58,1.58,0,0,0,1,1.09,1.61,1.61,0,0,0,1.44-.44c.5-.44,1-.88,1.47-1.35l.88.67c.61.5,1.26,1,1.9,1.47a2.11,2.11,0,0,0,1.15.38,1.66,1.66,0,0,0,.64-.15,1.82,1.82,0,0,0,1.2-1.4c.15-.68.27-1.35.41-2l.68-3.52,1.32-6.72A1.74,1.74,0,0,0,21.71,6.87ZM17.87,20.34c-.73-.56-1.44-1.12-2.17-1.67l-1.76-1.32L12.18,19c.06-.47.14-.91.17-1.35A1.61,1.61,0,0,1,13,16.5c1.85-1.71,3.67-3.41,5.49-5.11a1.64,1.64,0,0,0,.32-.47l.09-.17.44-.74-.85.21a.38.38,0,0,1-.18,0,1.55,1.55,0,0,0-.53.17c-2.43,1.5-4.87,3-7.3,4.52A.4.4,0,0,1,10,15c-.82-.29-1.65-.56-2.5-.85L20.16,8.81,17.9,20.34Z"/>
                    </svg>
                  </button>
                  <span className="drop-block__name">Telegram</span>
                </div>
                <div className="drop-block-card d-flex flex-column align-center">
                  <button
                    className="drop-block__icon"
                    onClick={() => openUrlHandler('https://wa.me/74994906289?text=Здравствуйте,%20The Business Pill.')}
                  >
                    <svg viewBox="0 0 29.5 29.2">
                      <linearGradient id="drop-block-gradient">
                        <stop offset="0%" stopColor="#FF6E65" />
                        <stop offset="100%" stopColor="#C14C45" />
                      </linearGradient>
                      <path d="M14.93,0A14.49,14.49,0,0,0,1.77,20.73l-.09-.08a21.37,21.37,0,0,1-.39,4.22A22.59,22.59,0,0,1,0,29.2a38.85,38.85,0,0,1,3.94-.71,43.51,43.51,0,0,1,5.65-.37l0,0A14.56,14.56,0,1,0,14.93,0Zm0,26.17a11.6,11.6,0,1,1,11.59-11.6A11.62,11.62,0,0,1,14.93,26.17Z"/>
                      <path d="M18.62,16.28a.53.53,0,0,0-.73.16c-.22.27-.45.53-.68.78-.65.72-.7.72-1.53.29a8.81,8.81,0,0,1-3.52-3.22c-.68-1.08-.54-.9.1-1.66a2.17,2.17,0,0,0,.39-.54,1.36,1.36,0,0,0,.11-.83c-.29-.89-.65-1.75-1-2.62a.69.69,0,0,0-.38-.37,1.82,1.82,0,0,0-1.88.4,3.82,3.82,0,0,0-1.1,3.22A8.66,8.66,0,0,0,10,15.44a12.62,12.62,0,0,0,7,5.29c.41.12.84.17,1.14.23l.86-.08a2.72,2.72,0,0,0,2.43-2.61.74.74,0,0,0-.25-.6C20.38,17.17,19.5,16.73,18.62,16.28Z"/>
                    </svg>
                  </button>
                  <span className="drop-block__name">WhatsApp</span>
                </div>
                <div className="drop-block-card d-flex flex-column align-center">
                  <button
                    className="drop-block__icon"
                    onClick={() => openUrlHandler('tel:+7 499 490-62-89')}
                  >
                    <svg viewBox="0 0 29.62 29.62">
                      <linearGradient id="drop-block-gradient">
                        <stop offset="0%" stopColor="#FF6E65" />
                        <stop offset="100%" stopColor="#C14C45" />
                      </linearGradient>
                      <path d="M14.81,29.62A14.81,14.81,0,1,1,29.62,14.81,14.83,14.83,0,0,1,14.81,29.62ZM14.81,3A11.78,11.78,0,1,0,26.59,14.81,11.79,11.79,0,0,0,14.81,3Z"/>
                      <path d="M18.12,21.3c-.3-.06-.74-.11-1.15-.23a12.84,12.84,0,0,1-7.14-5.38,8.62,8.62,0,0,1-1.65-3.61A3.86,3.86,0,0,1,9.29,8.81,1.88,1.88,0,0,1,11.2,8.4a.71.71,0,0,1,.39.39c.36.87.72,1.75,1,2.65a1.46,1.46,0,0,1-.11.84,1.94,1.94,0,0,1-.4.55c-.65.77-.8.59-.1,1.69a9,9,0,0,0,3.57,3.28c.85.43.9.43,1.56-.3.23-.26.47-.52.69-.79a.54.54,0,0,1,.74-.17c.89.47,1.79.91,2.66,1.41a.8.8,0,0,1,.25.61A2.77,2.77,0,0,1,19,21.22Z"/>
                    </svg>
                  </button>
                  <span className="drop-block__name">Телефон</span>
                </div>
                <div className="drop-block-card d-flex flex-column align-center">
                  <button
                    className="drop-block__icon"
                    onClick={() => openUrlHandler('mailto:info@tbp.agency')}
                  >
                    <svg viewBox="0 0 29.24 29.24">
                      <linearGradient id="drop-block-gradient">
                        <stop offset="0%" stopColor="#FF6E65" />
                        <stop offset="100%" stopColor="#C14C45" />
                      </linearGradient>
                      <path d="M14.62,29.24A14.62,14.62,0,1,1,29.24,14.62,14.64,14.64,0,0,1,14.62,29.24Zm0-26.39A11.77,11.77,0,1,0,26.39,14.62,11.78,11.78,0,0,0,14.62,2.85Z"/>
                      <path d="M15.15,5.8a7.34,7.34,0,0,1,7.63,7.64c0,4.2-2.48,5.73-4.27,5.73a2.15,2.15,0,0,1-2.15-2,3.84,3.84,0,0,1-3.29,1.75c-1.74,0-3.29-1.39-3.29-3.75a4.77,4.77,0,0,1,4.48-5.08,2.7,2.7,0,0,1,2.56,1.84l.24-1.6h1.78l-1,5.51a4.37,4.37,0,0,0-.05.64c0,.58.14,1.1.93,1.1s2.36-1.14,2.36-4.15c0-3.17-2-6.09-6-6.09-4.49,0-7.4,3.39-7.4,7.76,0,3.89,2.43,6.32,6.2,6.32a8.45,8.45,0,0,0,4.8-1.24l.83,1.36A9.82,9.82,0,0,1,14,23c-5.1,0-7.87-3.12-7.87-7.87C6.08,9.88,9.8,5.8,15.15,5.8Zm-1.6,11.46c1.19,0,2.79-.81,2.79-3.34a2,2,0,0,0-2.08-2.15c-1.31,0-2.67,1.29-2.67,3.34C11.59,16.45,12.24,17.26,13.55,17.26Z"/>
                    </svg>
                  </button>
                  <span className="drop-block__name">Почта</span>
                </div>
              </div>
            </div>

            <div>
              <span className="drop-block__subtitle drop-block__follow">Follow Us:</span>
              <div className="drop-block-social d-flex">
                <div className="drop-block-card d-flex flex-column align-center">
                  <button
                    className="drop-block__icon"
                    onClick={() => openUrlHandler('https://www.instagram.com/tbp.agency/')}
                  >
                    <svg viewBox="0 0 27.83 27.83">
                      <linearGradient id="drop-block-gradient">
                        <stop offset="0%" stopColor="#FF6E65" />
                        <stop offset="100%" stopColor="#C14C45" />
                      </linearGradient>
                      <path d="M13.92,21A7.07,7.07,0,1,1,21,13.92,7.07,7.07,0,0,1,13.92,21ZM13.92,9a4.88,4.88,0,1,0,4.87,4.88A4.89,4.89,0,0,0,13.92,9Z"/>
                      <circle cx="21.15" cy="6.79" r="1.26"/>
                      <path d="M18.64,27.83H9.19A9.2,9.2,0,0,1,0,18.64V9.19A9.2,9.2,0,0,1,9.19,0h9.45a9.2,9.2,0,0,1,9.19,9.19v9.45A9.2,9.2,0,0,1,18.64,27.83ZM9.19,2.19a7,7,0,0,0-7,7v9.45a7,7,0,0,0,7,7h9.45a7,7,0,0,0,7-7V9.19a7,7,0,0,0-7-7Z"/>
                    </svg>
                  </button>
                  <span className="drop-block__name">Instagram</span>
                </div>
                <div className="drop-block-card d-flex flex-column align-center">
                  <button
                    className="drop-block__icon"
                    onClick={() => openUrlHandler('https://www.behance.net/thebusinesspill/')}
                  >
                    <svg viewBox="0 0 27.84 27.83">
                      <linearGradient id="drop-block-gradient">
                        <stop offset="0%" stopColor="#FF6E65" />
                        <stop offset="100%" stopColor="#C14C45" />
                      </linearGradient>
                      <path d="M26.64,4.65a8.18,8.18,0,0,0-.51-.79A9.28,9.28,0,0,0,18.64,0H9.19A9.06,9.06,0,0,0,3.73,1.81a8.76,8.76,0,0,0-2,2,6.56,6.56,0,0,0-.54.83A9.07,9.07,0,0,0,0,9.19v9.45a9.1,9.1,0,0,0,1.19,4.52,7.39,7.39,0,0,0,.42.66,8.85,8.85,0,0,0,2.58,2.52l0,0a9.09,9.09,0,0,0,4.95,1.45h9.45a9.09,9.09,0,0,0,4.95-1.45s0,0,0,0h0a9,9,0,0,0,2.64-2.6q.19-.29.36-.57a9.08,9.08,0,0,0,1.21-4.54V9.19A9.15,9.15,0,0,0,26.64,4.65Zm-1,14a7,7,0,0,1-7,7H9.19a7,7,0,0,1-7-7V9.19a7,7,0,0,1,7-7h9.45a7,7,0,0,1,7,7Z"/>
                      <path d="M12.25,13.65A1.87,1.87,0,0,0,13.9,11.6a2.76,2.76,0,0,0-3.05-2.87H5.24V19.51h5.61s3.42.1,3.42-3.18c0,0,.15-2.68-2-2.68Zm-1.81-3h.41s.76,0,.76,1.12-.45,1.28-1,1.28H7.71v-2.4Zm.25,6.94h-3V14.71h3.14S12,14.7,12,16.19c0,1.26-.84,1.39-1.29,1.4Zm8.14-6.12c-4.14,0-4.14,4.14-4.14,4.14a3.83,3.83,0,0,0,4.14,4.12s3.69.21,3.69-2.86h-1.9S20.69,18,18.9,18A1.75,1.75,0,0,1,17,16.15h5.58s.61-4.68-3.75-4.68ZM17,14.71a1.93,1.93,0,0,1,1.9-1.66,1.6,1.6,0,0,1,1.64,1.66Zm4-4H16.52V9.37H21v1.32Z"/>
                    </svg>
                  </button>
                  <span className="drop-block__name">Behance</span>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex drop-block-offer align-center">
            <svg viewBox="0 0 9.21 15.54" fill="white" className="footer__figure">
              <rect width="9.21" height="15.54" rx="4.6"/>
            </svg>
            <p className="footer__text drop-block__offer">Holding company The Business Pill</p>
          </div>

        </div>
      </div>
      <div className="container d-flex justify-between align-center">
        <div className="header_line"></div>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav__item">
              <Link
                className="nav__link"
                to="experience"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
              ><span>Предложение</span></Link>
            </li>
            <li className="nav__item">
              <Link
                className="nav__link"
                to="about"
                spy={true}
                smooth={true}
                duration={1500}
              ><span>О нас</span></Link>
            </li>
            <li className="nav__item">
              <Link
                className="nav__link"
                to="questions"
                spy={true}
                smooth={true}
                duration={1500}
              ><span>Консультация</span></Link>
            </li>
          </ul>
        </nav>

        <button className="burger"
                onClick={() => setActive(!active)}
        >
          <span className={active ? 'burger__span burger__span_active' : 'burger__span'}> </span>
        </button>

        <CalendarWidget />
      </div>
    </header>
  )
}

export default Header;
