import React from 'react';

import ArrowCircle from "../components/ArrowCircle";

const ExperienceSection = () => {
  return (
    <section className="experience experience__section">
      <div className="experience_rectangle"></div>
      <div className="container experience__content">
        <h2 className="section-title experience__title"
            data-aos="flip-down"
            data-aos-offset="50"
        >По нашему опыту,</h2>
        <div className="d-flex">
          <p className="section-subtitle experience__text" data-aos="fade-right">По нашему опыту, компании теряют от восьми месяцев и миллиона рублей прежде, чем найдут правильный путь в пиаре и коммуникациях. <br /> И это без учёта «чёрных лебедей»!</p>
          <div className="experience-card" data-aos="fade-left">
            <p className="section-subtitle experience-card__text">Хорошая новость в том, <br /> что и общий вектор, <br /> и понятный алгоритм <br /> действий, и даже <br /> антикризисный менеджмент <br /> можно проработать заранее!</p>
            <h3 className="experience-card__title">Что мы вместе <br /> с вами создадим?</h3>
            <div className="experience-warning">
              <span>!</span>
            </div>
            <ArrowCircle
              secondClass="experience-card_circle"
              height={46}
              width={46}
              background="#000000"
              stroke="white"
              strokeWidth={2}
              angle={0}
              heightSVG={10}
              widthSVG={11}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection;