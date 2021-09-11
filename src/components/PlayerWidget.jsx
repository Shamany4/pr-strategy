import React from 'react';

const PlayerWidget = ({ isPlay, endPlaylist, isReady, setPlay, useRef, playFunc, pauseFunc, current, nextFunc, prevFunc }) => {

  const playSoundHandler = () => {
    setPlay();
    if (isPlay) {
      pauseFunc();
    } else {
      playFunc();
    }
  }

  const getUrlImage = () => {
    return require('../assets/cases/image/' + current.preview);
  }

  return (
    <div className="player-widget" data-aos="fade-up">
      <div className="player-widget-photo">
        <img src={getUrlImage().default} alt="Превью аудиодорожки" className="player-widget-photo__preview" />
      </div>
      <div className="player-widget-info">
        <span className="player-widget-info__name">Кейс {current.count}</span>
        <p className="player-widget-info__desc">{current.name}</p>
      </div>
      <div ref={useRef} id="waveform"></div>
      {
        !isReady ? <span>Аудио загружается...</span> : null
      }
      <div className="player-widget-controls">
        <button className="player-widget-controls__btn"
          onClick={prevFunc}
          disabled={!isReady || endPlaylist.start}
        >
          <svg viewBox="0 0 15 8.62" fill="#D9D9DE" stroke="none">
            <linearGradient id="player-widget-gradient">
              <stop offset="0%" stopColor="#FF6E65" />
              <stop offset="100%" stopColor="#C14C45" />
            </linearGradient>
            <path d="M.46,3.65,6.58.17a.91.91,0,0,1,1,0,.85.85,0,0,1,.32.61V3.43L13.65.17a.91.91,0,0,1,1,0A.93.93,0,0,1,15,.76v7a.83.83,0,0,1-.35.76.84.84,0,0,1-1,0L7.92,5.27V7.72a.8.8,0,0,1-.35.76.85.85,0,0,1-1,0L.38,5A.79.79,0,0,1,0,4.27.83.83,0,0,1,.46,3.65Z" />
          </svg>
        </button>
        <button className="player-widget-controls__btn"
          onClick={playSoundHandler}
          disabled={!isReady}
        >
          {
            !isPlay
              ?
              <svg viewBox="0 0 19.04 20.53" fill="none" stroke="white" strokeWidth={2}>
                <path d="M18,10.18a1.74,1.74,0,0,0-1-1.33L3.9,1.36a1.93,1.93,0,0,0-2.2,0A1.87,1.87,0,0,0,1,2.63v15a1.76,1.76,0,0,0,.75,1.64,1.79,1.79,0,0,0,2-.05l13.41-7.4A1.65,1.65,0,0,0,18,10.18Z" />
              </svg>
              :
              <svg viewBox="0 0 18 21" fill="none" stroke="white" strokeWidth={2}
                style={{ marginTop: 2, marginLeft: -2 }}
              >
                <rect x="1" y="1" width="5" height="19" rx="2.5" />
                <rect x="12" y="1" width="5" height="19" rx="2.5" />
              </svg>
          }
        </button>
        <button className="player-widget-controls__btn"
          onClick={nextFunc}
          disabled={!isReady || endPlaylist.finish}
        >
          <svg viewBox="0 0 15 8.62" fill="#D9D9DE" stroke="none">
            <linearGradient id="player-widget-gradient">
              <stop offset="0%" stopColor="#FF6E65" />
              <stop offset="100%" stopColor="#C14C45" />
            </linearGradient>
            <path d="M14.54,3.65,8.42.17a.91.91,0,0,0-1,0,.85.85,0,0,0-.32.61V3.43L1.35.17a.91.91,0,0,0-1,0A.93.93,0,0,0,0,.76v7a.83.83,0,0,0,.35.76.84.84,0,0,0,1,0L7.08,5.27V7.72a.8.8,0,0,0,.35.76.85.85,0,0,0,1,0L14.62,5A.79.79,0,0,0,15,4.27.83.83,0,0,0,14.54,3.65Z" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default PlayerWidget;