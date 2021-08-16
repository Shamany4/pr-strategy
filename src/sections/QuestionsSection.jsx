import React from 'react';

import image from '../assets/image/businnes.png';

const QuestionsSection = ({ }) => {
  return (
    <section className="questions questions__section">
      <h2 className="section-title questions__title">Остались вопросы?</h2>
      <div className="container questions__content d-flex justify-center">
        <img src={image} alt="Фоновая картинка" className="questions__image" />
        <div className="d-flex align-end">
          <div className="d-flex flex-column questions__block">
            <h3 className="questions__subtitle">Остались вопросы?</h3>
            <p className="questions__text section-subtitle">Получите консультацию
              наших специалистов</p>
          </div>
          <a href="#" className="questions__link">Получить предложение</a>
        </div>
      </div>
    </section>
  )
}

export default QuestionsSection;