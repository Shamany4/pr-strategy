import React from 'react';

import preview from '../assets/image/preview.png';
import spectr from '../assets/player/spektr.svg';
import play from '../assets/player/play.svg';
import prev from '../assets/player/prev-gray.svg';
import next from '../assets/player/next-gray.svg';

const PlayerWidget = ({ }) => {
  return (
    <div className="player-widget">
      <div className="player-widget-photo">
        <img src={preview} alt="Превью аудиодорожки" className="player-widget-photo__preview" />
      </div>
      <div className="player-widget-info">
        <span className="player-widget-info__name">Кейс 01</span>
        <p className="player-widget-info__desc">Формула Арктика: настоящее и будущее</p>
      </div>
      <img src={spectr} alt="spectr" className="player-widget__spectr" />
      <div className="player-widget-controls">
        <button className="player-widget-controls__btn">
          <img src={prev} alt="Иконка воспроизведения" />
        </button>
        <button className="player-widget-controls__btn">
          <img src={play} alt="Иконка воспроизведения" />
        </button>
        <button className="player-widget-controls__btn">
          <img src={next} alt="Иконка воспроизведения" />
        </button>
      </div>
    </div>
  )
}

export default PlayerWidget;