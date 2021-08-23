import React from 'react';

import smile from '../assets/icons/smile.svg';
import whiteArrowIcon from '../assets/icons/whiteArrow.svg';

const FeedbackSection = () => {
  return (
    <section className="feedback feedback__section">
      <div className="container feedback__content">
        <div className="arrow-circle feedback_circle">
          <img src={whiteArrowIcon} alt="White arrow icon" />
        </div>
        <div className="d-flex justify-between feedback__block">
          <aside className="feedback-aside">
            <div className="feedback-aside-circle">
              <img src={smile} alt="Изображение смайлика" className="feedback-aside-circle__smile" />
            </div>
            <p className="feedback-aside__text section-subtitle">Мы&nbsp;можем скорректировать
              текущую стратегию развития
              компании с&nbsp;точки зрения более
              быстрого достижения целей. <br />
              Или написать новую стратегию
              развития на&nbsp;2-3 года с&nbsp;учетом
              достигнутых результатов бренда.</p>
            <p className="feedback-aside__text section-subtitle">
              <span>+ <br /></span>Проработать имидж компании,
              подготовить спикеров для пресс-
              конференций и&nbsp;интервью,
              сформировать список целевых
              СМИ, разработать рубрикатор
              и&nbsp;контент-план для соцсетей
              и&nbsp;дать рекомендации по&nbsp;развитию
              фирменного стиля, позволяющие
              вырастить настоящий бренд!</p>
          </aside>
          <div className="feedback-description">
            <h4 className="feedback__heading">Свяжитесь с нами</h4>
            <p className="feedback__text section-subtitle">...мы проконсультируем вас по&nbsp;вопросу <br />
              PR-стратегии, поможем определить объём
              работы и&nbsp;расскажем, чем вам могут помочь
              наши специалисты.</p>
          </div>
        </div>
        <h2 className="section-title feedback__title">Сейчас</h2>
      </div>
    </section>
  )
}

export default FeedbackSection;