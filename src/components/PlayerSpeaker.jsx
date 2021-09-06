import React from 'react';

const PlayerSpeaker = ({ useRef, useRef_2, current, isPlay, setPlay, isReady, playFunc, pauseFunc }) => {

  const getUrlImage = () => {
    return require('../assets/cases/image/' + current);
  }

  const playSoundHandler = () => {
    setPlay();
    if (isPlay) {
      pauseFunc();
    } else {
      playFunc();
    }
  }

  return (
    <div className="player-speaker" data-aos="fade-up">
      <div className="player-speaker-preview">
        <img src={getUrlImage().default} alt="Изображение обложки" className="player-speaker-preview__image" />
      </div>
      <div className="player-speaker-controls">
        <svg height="87" width="87">
          <circle cx="43.5" cy="43.5" r="35" strokeWidth={3} stroke="gray" fill="none" opacity={0.2} />
        </svg>
        <button className="player-speaker-controls__btn"
          onClick={playSoundHandler}
          disabled={!isReady}
        >
          {
            !isPlay
              ?
              <svg viewBox="0 0 19.04 20.53" fill="url(#player-speaker-gradient)">
                <linearGradient id="player-speaker-gradient">
                  <stop offset="0%" stopColor="#FF6E65" />
                  <stop offset="100%" stopColor="#C14C45" />
                </linearGradient>
                <path d="M18,10.18a1.74,1.74,0,0,0-1-1.33L3.9,1.36a1.93,1.93,0,0,0-2.2,0A1.87,1.87,0,0,0,1,2.63v15a1.76,1.76,0,0,0,.75,1.64,1.79,1.79,0,0,0,2-.05l13.41-7.4A1.65,1.65,0,0,0,18,10.18Z" />
              </svg>
              :
              <svg viewBox="0 0 9.84 12.21" fill="url(#player-speaker-gradient)"
                className="player-speaker-controls_pause"
              >
                <linearGradient id="player-speaker-gradient">
                  <stop offset="0%" stopColor="#FF6E65" />
                  <stop offset="100%" stopColor="#C14C45" />
                </linearGradient>
                <rect width="3.89" height="12.21" rx="1.94" />
                <rect x="5.95" width="3.89" height="12.21" rx="1.94" />
              </svg>
          }
        </button>
      </div>
      <svg height="370" width="370" id="player-speaker">
        <g>
          <circle
            className="player-speaker__circle"
            cx="185"
            cy="185"
            r="180"
            strokeWidth={4}
            stroke="#FFFFFF"
            fill="none"
            opacity={0.2}
          />
          <circle
            className="player-speaker__animate"
            ref={useRef}
            cx="185"
            cy="185"
            r="180"
            strokeWidth={6}
            stroke="#FFFFFF"
            fill="none"
          >
          </circle>
        </g>
      </svg>
      <svg height="300" width="300" id="m-player-speaker">
        <g>
          <circle
            id="player-speaker__circle"
            cx="150"
            cy="150"
            r="140"
            strokeWidth={4}
            stroke="#FFFFFF"
            fill="none"
            opacity={0.2}
          />
          <circle
            id="player-speaker__animate"
            ref={useRef_2}
            cx="150"
            cy="150"
            r="140"
            strokeWidth={6}
            stroke="#FFFFFF"
            fill="none"
          >
          </circle>
        </g>
      </svg>
    </div>
  )
}

export default PlayerSpeaker;