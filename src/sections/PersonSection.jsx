import react from 'react';
import photo_1 from '../assets/image/photo_1.jpg';
import icon from '../assets/icons/orangeArrow.svg';

const PersonSection = () => {
  return (
    <section className="person person__section d-flex">
      <div className="person-photo">
        <div className="person-photo-info">
          <span className="person-photo-info__span">Игорь Малинин</span>
          <p className="person-photo-info__text">Вас проконсультирует</p>
        </div>
        <img src={photo_1} alt="Игорь Малинин" className="person-photo__img" />
        <div className="count">
          <span className="count__span">01</span>
          <div className="count__progress"></div>
        </div>
        <div className="count-photo">
          <span className="count-photo__number">01</span>
          <span className="count-photo__number">02</span>
        </div>
      </div>
      <div className="person-info d-flex flex-column justify-between">
        <div className="d-flex justify-between">
          <div className="d-flex flex-column">
            <span className="person__questionnaire">Анкета</span>
            <h3 className="person__name">Юлианна <br /> Милевская</h3>
            <div className="person-desc">
              <span className="person-desc__span">PR-стратег</span>
              <p className="person-desc__text">с&nbsp;экспертизой
                в&nbsp;медиапланировании
                и&nbsp;аудите более 15&nbsp;лет.</p>
            </div>
          </div>
          <div className="d-flex flex-column person__figure">
            <svg strokeWidth={3} stroke="#DADADE" fill="none" className="person__icon">
              <path d="M.69,1,6.44,6.49,12,.69,6.44,6.49Z" />
            </svg>
            <div className="person__line"></div>
          </div>
          <div className="d-flex flex-column">
            <span className="person__questionnaire person__details">Детали</span>
            <div className="instagram">
              <svg height="260" width="260">
                <circle cx="130" cy="130" r="120" strokeWidth={3} stroke="#F2F2F4" fill="none" />
              </svg>
            </div>
            <a href="#" className="person__link">@milevskaya_pr_jvm</a>
            <p className="person__quote section-subtitle">&laquo;PR&nbsp;&mdash; это прежде всего общение
              и&nbsp;транслирование правильных
              слов, ценностей&raquo;.</p>
          </div>
        </div>
        <div className="d-flex justify-end align-center">
          <ul className="person-social">
            <li className="person-social__item">
              <a href="#" className="person-social__link"></a>
            </li>
          </ul>
          <button className="person-controls__btn">
            <svg strokeWidth={2} stroke="#000000" fill="none" className="person-controls__icon">
              <path d="M.69,1,6.44,6.49,12,.69,6.44,6.49Z" />
            </svg>
          </button>
        </div>
      </div>
    </section >
  )
}

export default PersonSection;