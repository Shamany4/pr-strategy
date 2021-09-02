import React from 'react';


const AudioCase = ({ name, preview, isPlay, isReady, setPlay, playFunc, pauseFunc, count, index, changeSound, currentIndex }) => {
  const setPreview = () => {
    return require('../assets/cases/image/' + preview);
  }

  const clickButtonHandler = () => {
    if (isPlay) {
      setPlay();
      pauseFunc();
    } else {
      setPlay();
      playFunc();
    }
    changeSound(index);
  }

  return (
    <div className="case" data-aos="fade-up">
      <div className="d-flex align-center">
        <div className="case-photo">
          <img src={setPreview().default} alt="Превью обложки" className="case-photo__preview" />
        </div>
        <div className="case-info">
          <span className="case-info__name">Кейс {count}</span>
          <p className="case-info__desc">{name}</p>
        </div>
      </div>
      {
        currentIndex !== index
          ?
          // !active btn
          <button className="case__btn"
                  onClick={clickButtonHandler}
          >
            <svg viewBox="0 0 7.1 7.72" fill="#DADADF" stroke="none">
              <path d="M7.1,3.83a.77.77,0,0,0-.4-.56L1.21.15a.8.8,0,0,0-.92,0A.82.82,0,0,0,0,.68V6.92a.75.75,0,0,0,.32.68.75.75,0,0,0,.85,0L6.76,4.5A.69.69,0,0,0,7.1,3.83Z" />
            </svg>
          </button>
          : !isPlay
            ?
          // active btn - play
          <button className="case__btn case__btn_active case__btn_play"
                  onClick={clickButtonHandler}
                  disabled={!isReady}
          >
            <svg viewBox="0 0 7.1 7.72" fill="#DADADF" stroke="none">
              <path d="M7.1,3.83a.77.77,0,0,0-.4-.56L1.21.15a.8.8,0,0,0-.92,0A.82.82,0,0,0,0,.68V6.92a.75.75,0,0,0,.32.68.75.75,0,0,0,.85,0L6.76,4.5A.69.69,0,0,0,7.1,3.83Z" />
            </svg>
          </button>
          :
          // active btn - pause
          <button className="case__btn case__btn_active"
                  onClick={clickButtonHandler}
                  disabled={!isReady}
          >
            <svg viewBox="0 0 9.84 12.21" fill="#DADADF" stroke="none">
              <rect className="cls-1" width="3.89" height="12.21" rx="1.94"/>
              <rect className="cls-1" x="5.95" width="3.89" height="12.21" rx="1.94"/>
            </svg>
          </button>

      }
    </div>
  )
}

export default AudioCase;