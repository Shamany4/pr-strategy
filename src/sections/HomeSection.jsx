import React from 'react';
import { Link } from "react-scroll";

import Follow from '../components/Follow';
import AudioPlayer from "../components/AudioPlayer";
import ArrowCircle from "../components/ArrowCircle";

const HomeSection = () => {
  return (
    <section className="home home__section">
      <Follow bottom={60} right={5 + '%'} />
      <div className="container home-block">
        <AudioPlayer />
        <h1 className="section-title home__title">Получите работающую PR-стратегию</h1>
        <h1 className="section-title  home__title m-home__title">Получите работающую <br/> PR-стратегию</h1>
        <div className="d-flex align-start home__content">
          <div className="blockquote d-flex flex-column">
            <div className="d-flex align-center"
              data-aos="fade-right"
            >
              <ArrowCircle
                secondClass="home__circles"
                height={46}
                width={46}
                background="#000000"
                stroke="white"
                strokeWidth={2}
                angle={0}
                heightSVG={10}
                widthSVG={11}
              />
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
            <div className="dividends-block" data-aos="fade-left" data-aos-offset="-200">
              <p className="section-subtitle dividends__text">...извлекайте
                дивиденды
                от&nbsp;узнаваемости
                компании...</p>
            </div>
            <Link className="button dividends__link"
                  data-aos="fade-up"
                  data-aos-offset="-200"
                  to="questions"
                  spy={true}
                  smooth={true}
                  duration={1500}
            >уже сейчас</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeSection;
