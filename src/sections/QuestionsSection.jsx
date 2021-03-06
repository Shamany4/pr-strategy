import React from 'react';

import image from '../assets/image/businnes.webp';

const QuestionsSection = () => {
  return (
    <section className="questions questions__section">
      <h2 className="section-title questions__title" data-aos="zoom-in">Остались вопросы?</h2>
      <div className="container questions__content d-flex justify-center">
        <img src={image} alt="Фоновая картинка" className="questions__image" />
        <div className="d-flex align-end questions-flex">
          <div className="d-flex flex-column questions__block">
            <h3 className="questions__subtitle" data-aos="fade-right">Остались вопросы?</h3>
            <p className="questions__text section-subtitle" data-aos="fade-up">Получите консультацию
              наших специалистов...</p>
            <div className="questions-social">
              <span className="questions__span section-subtitle"
                    onClick={() => {
                      window.open('mailto:info@tbp.agency');
                    }}
              >info@tbp.agency</span>
              <span className="questions__span section-subtitle"
                    onClick={() => {
                      window.open('tel:+74994906289');
                    }}
              >+7 499 490-62-89</span>
            </div>
          </div>
          <button className="questions__link"
                  data-aos="fade-left"
                  data-aos-offset="-100"
                  onClick={() => {
                    window.open('https://forms.gle/wgjWmvvRAZeyvFe17')
                  }}
          >Получить предложение</button>
        </div>
      </div>
    </section>
  )
}

export default QuestionsSection;