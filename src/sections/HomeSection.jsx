import React from 'react';

import whiteArrowIcon from '../assets/icons/whiteArrow.svg';
import Follow from '../components/Follow';

const HomeSection = () => {
  return (
    <section className="home home__section">
      <Follow bottom={60} right={5 + '%'} />
      <div className="container">
        <h1 className="section-title home__title">Получите работающую PR-стратегию</h1>
        <div className="d-flex align-start home__content">
          <div className="blockquote d-flex flex-column">
            <div className="d-flex align-center"
              data-aos="fade-right"
            >
              <div className="arrow-circle home__circles">
                <img src={whiteArrowIcon} alt="White arrow icon" />
              </div>
              <div className="circles circles__block">
                <div className="circles__item"></div>
                <div className="circles__item"></div>
                <div className="circles__item"></div>
              </div>
            </div>
            <p className="section-subtitle blockquote__text"
              data-aos="fade-right"
              data-aos-delay="200"
            >Нужны&nbsp;ли ещё классические СМИ?
              Что делать, если вовремя не&nbsp;вышли
              в&nbsp;ТикТок, приняв его за&nbsp;&laquo;детскую
              соцсеть&raquo;? Как можно было
              воспользоваться КлабХаусом,
              который появился, хайпанул&nbsp;и... умер?</p>
          </div>
          <div className="dividends dividends__content">
            <div className="dividends-block" data-aos="fade-left">
              <p className="section-subtitle dividends__text">...извлекайте
                дивиденды
                от&nbsp;узнаваемости
                компании...</p>
            </div>
            <a href="#" className="button dividends__link" data-aos="fade-up">уже сейчас</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeSection;
