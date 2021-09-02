import React from 'react';

const PlayerControls = ({ isPlay, setPlay, pauseFunc, prevFunc, nextFunc, isReady, endPlaylist, stopFunc }) => {
  return (
    <div className="player-controls">
      <div className="d-flex flex-column">
        <div className="d-flex">
          {/* Pause btn */}
          <button className="player-controls__btn"
                  onClick={() => {
                    if (isPlay) {
                      setPlay();
                    }
                    pauseFunc();
                  }}
                  disabled={!isReady}
          >
            <svg viewBox="0 0 9.84 12.21">
              <rect width="3.89" height="12.21" rx="1.94" />
              <rect x="5.95" width="3.89" height="12.21" rx="1.94" />
            </svg>
          </button>
          {/* Next btn */}
          <button className="player-controls__btn"
                  onClick={nextFunc}
                  disabled={!isReady || endPlaylist.finish}
          >
            <svg viewBox="0 0 15 8.62">
              <path d="M14.54,3.65,8.42.17a.91.91,0,0,0-1,0,.85.85,0,0,0-.32.61V3.43L1.35.17a.91.91,0,0,0-1,0A.93.93,0,0,0,0,.76v7a.83.83,0,0,0,.35.76.84.84,0,0,0,1,0L7.08,5.27V7.72a.8.8,0,0,0,.35.76.85.85,0,0,0,1,0L14.62,5A.79.79,0,0,0,15,4.27.83.83,0,0,0,14.54,3.65Z" />
            </svg>
          </button>
        </div>
        <div className="d-flex player-controls_bottom">
          {/* Stop btn */}
          <button className="player-controls__btn"
                  onClick={() => {
                    if (isPlay) {
                      setPlay();
                    }
                    stopFunc();
                  }}
                  disabled={!isReady}
          >
            <svg viewBox="0 0 12.21 12.21">
              <rect width="12.21" height="12.21" rx="2.56" />
            </svg>
          </button>
          {/* Prev btn */}
          <button className="player-controls__btn"
                  onClick={prevFunc}
                  disabled={!isReady || endPlaylist.start}
          >
            <svg viewBox="0 0 15 8.62">
              <path d="M.46,3.65,6.58.17a.91.91,0,0,1,1,0,.85.85,0,0,1,.32.61V3.43L13.65.17a.91.91,0,0,1,1,0A.93.93,0,0,1,15,.76v7a.83.83,0,0,1-.35.76.84.84,0,0,1-1,0L7.92,5.27V7.72a.8.8,0,0,1-.35.76.85.85,0,0,1-1,0L.38,5A.79.79,0,0,1,0,4.27.83.83,0,0,1,.46,3.65Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default PlayerControls;