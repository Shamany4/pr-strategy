import React from 'react';

import preview from '../assets/image/preview.png';
import caseplay from '../assets/player/case-play.svg';


const AudioCase = ({ }) => {
  return (
    <div className="case" data-aos="fade-up">
      <div className="d-flex align-center">
        <div className="case-photo">
          <img src={preview} alt="preview" className="case-photo__preview" />
        </div>
        <div className="case-info">
          <span className="case-info__name">Кейс 01</span>
          <p className="case-info__desc">«Артика: настоящее и будущее» с Артуром Чилингаровым</p>
        </div>
      </div>
      <button className="case__btn">
        <img src={caseplay} alt="Иконка воспроизведения" className="case__icon" />
      </button>
    </div>
  )
}

export default AudioCase;