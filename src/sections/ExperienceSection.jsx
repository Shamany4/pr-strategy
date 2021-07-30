import React from 'react';

import whiteArrowIcon from '../assets/icons/whiteArrow.svg';

const ExperienceSection = () => {
  return (
    <section className="experience experience__section">
      <div className="experience_rectangle"></div>
      <div className="container experience__content">
        <h2 className="section-title experience__title">По нашему опыту,</h2>
        <div className="d-flex">
          <p className="section-subtitle experience__text">По нашему опыту, компании теряют от восьми месяцев и миллиона рублей прежде, чем найдут правильный путь в пиаре и коммуникациях. <br /> И это без учёта «чёрных лебедей»!</p>
          <div className="experience-card">
            <p className="section-subtitle experience-card__text">Хорошая новость в том, <br /> что и общий вектор, <br /> и понятный алгоритм <br /> действий, и даже <br /> антикризисный менеджмент <br /> можно проработать заранее!</p>
            <h3 className="experience-card__title">Что мы вместе <br /> с вами создадим?</h3>
            <div className="experience-warning">
              <span>!</span>
            </div>
            <div className="arrow-circle experience-card_circle">
              <img src={whiteArrowIcon} alt="White arrow icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection;