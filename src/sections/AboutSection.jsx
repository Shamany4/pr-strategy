import React from 'react';

import image from '../assets/image/instagram-screen.png';

import orangeArrow from '../assets/icons/orangeArrow.svg';

const AboutSection = () => {
  return (
    <section className="about about__section">
      <div className="container">
        <div className="d-flex">
          <img src={image} alt="Image screen instagram" className="about__image" />
          <div className="d-flex flex-column align-end">
            <div className="about-title">
              <h3 className="about__title">The Business Pill</h3>
            </div>
            <div className="about-description about__description">
              <div className="about-description__rectangle"></div>
              <div className="d-flex about-line">
                <h4 className="step__title about-line__title">О холдинге</h4>
                <h4 className="step__subtitle about-line__subtitle">TBP</h4>
              </div>
              <p className="section-subtitle about__text">Мы&nbsp;оказываем маркетинговые услуги
                полного цикла: PR-стратегии, создание
                и&nbsp;продвижение сайтов, SMM, контент-
                мейкинг. Наши ключевые клиенты&nbsp;&mdash;
                представители сферы FinTech, EdTech,
                MedTech, стартапы, фонды и&nbsp;холдинги.</p>
              <p className="section-subtitle about__text">Кроме того, мы&nbsp;активно работаем
                с&nbsp;сегментом малого и&nbsp;среднего
                бизнеса, которому важен результат
                по&nbsp;продажам &laquo;здесь и&nbsp;сейчас&raquo;.</p>
            </div>
            <div className="about-consultation">
              <h4 className="about-consultation__title">Вас проконсультируют</h4>
              <p className="about-consultation__text">наши ведущие специалисты</p>
              <div className="arrow-circle about-consultation_circle">
                <img src={orangeArrow} alt="White arrow icon" />
              </div>
            </div>
            <div className="about-figure">
              <div className="about-figure__line"></div>
              <div className="about-figure-circles">
                <div className="about-figure-circles__item"></div>
                <div className="about-figure-circles__item"></div>
                <div className="about-figure-circles__item"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection;