import React from 'react';
import stop from '../assets/player/stop.svg';
import prev from '../assets/player/prev.svg';
import next from '../assets/player/next.svg';
import pause from '../assets/player/pause.svg';

const PlayerControls = ({ }) => {
  return (
    <div className="player-controls">
      <div className="d-flex flex-column">
        <div className="d-flex">
          <button className="player-controls__btn">
            <img src={pause} alt="Иконка паузы" className="player-controls__icon" />
          </button>
          <button className="player-controls__btn">
            <img src={next} alt="Иконка следующего трека" className="player-controls__icon" />
          </button>
        </div>
        <div className="d-flex player-controls_bottom">
          <button className="player-controls__btn">
            <img src={stop} alt="Иконка остановки трека" className="player-controls__icon" />
          </button>
          <button className="player-controls__btn">
            <img src={prev} alt="Иконка предыдущего трека" className="player-controls__icon" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default PlayerControls;