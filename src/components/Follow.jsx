import React from 'react';

const Follow = ({ bottom, right, left }) => {
  const openUrlHandler = (url) => {
    window.open(url);
  }
  return (
    <div
      className={left ? 'd-flex flex-column follow follow__content' : 'd-flex flex-column follow follow__content m-follow'}
      style={{
        bottom: bottom,
        right: right,
        left: left
      }}
    >
      <span className={left ? 'follow__span follow__span_active' : 'follow__span'}>Follow us</span>
      <button
        className={left ? 'follow__link follow__link_active' : 'follow__link'}
        onClick={() => openUrlHandler('https://www.instagram.com/tbp.agency/')}
        title="https://www.instagram.com/tbp.agency/"
      >
        <svg viewBox="0 0 27.83 27.83" fill="white" stroke="none">
          <linearGradient id="follow-gradient">
            <stop offset="0%" stopColor="#C14C45" />
            <stop offset="100%" stopColor="#FF6E65" />
          </linearGradient>
          <path d="M13.92,21A7.07,7.07,0,1,1,21,13.92,7.07,7.07,0,0,1,13.92,21ZM13.92,9a4.88,4.88,0,1,0,4.87,4.88A4.89,4.89,0,0,0,13.92,9Z" />
          <circle cx="21.15" cy="6.79" r="1.26" />
          <path d="M18.64,27.83H9.19A9.2,9.2,0,0,1,0,18.64V9.19A9.2,9.2,0,0,1,9.19,0h9.45a9.2,9.2,0,0,1,9.19,9.19v9.45A9.2,9.2,0,0,1,18.64,27.83ZM9.19,2.19a7,7,0,0,0-7,7v9.45a7,7,0,0,0,7,7h9.45a7,7,0,0,0,7-7V9.19a7,7,0,0,0-7-7Z" />
        </svg>
      </button>
      <button
        className={left ? 'follow__link follow__link_active' : 'follow__link'}
        onClick={() => openUrlHandler('https://www.behance.net/thebusinesspill/')}
        title="https://www.behance.net/thebusinesspill/"
      >
        <svg viewBox="0 0 27.83 27.83" fill="white" stroke="none" strokeWidth={1} >
          <linearGradient id="follow-gradient">
            <stop offset="0%" stopColor="#C14C45" />
            <stop offset="100%" stopColor="#FF6E65" />
          </linearGradient>
          <path d="M13.92,21A7.07,7.07,0,1,1,21,13.92,7.07,7.07,0,0,1,13.92,21ZM13.92,9a4.88,4.88,0,1,0,4.87,4.88A4.89,4.89,0,0,0,13.92,9Z" />
          <circle cx="21.15" cy="6.79" r="1.26" />
          <path d="M18.64,27.83H9.19A9.2,9.2,0,0,1,0,18.64V9.19A9.2,9.2,0,0,1,9.19,0h9.45a9.2,9.2,0,0,1,9.19,9.19v9.45A9.2,9.2,0,0,1,18.64,27.83ZM9.19,2.19a7,7,0,0,0-7,7v9.45a7,7,0,0,0,7,7h9.45a7,7,0,0,0,7-7V9.19a7,7,0,0,0-7-7Z" />
        </svg>
      </button>
    </div>
  )
}

export default Follow;