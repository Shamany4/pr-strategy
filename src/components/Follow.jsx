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
        <svg viewBox="0 0 27.84 27.83" fill="white" stroke="none" strokeWidth={1} >
          <linearGradient id="follow-gradient">
            <stop offset="0%" stopColor="#C14C45" />
            <stop offset="100%" stopColor="#FF6E65" />
          </linearGradient>
          <path d="M26.64,4.65a8.18,8.18,0,0,0-.51-.79A9.28,9.28,0,0,0,18.64,0H9.19A9.06,9.06,0,0,0,3.73,1.81a8.76,8.76,0,0,0-2,2,6.56,6.56,0,0,0-.54.83A9.07,9.07,0,0,0,0,9.19v9.45a9.1,9.1,0,0,0,1.19,4.52,7.39,7.39,0,0,0,.42.66,8.85,8.85,0,0,0,2.58,2.52l0,0a9.09,9.09,0,0,0,4.95,1.45h9.45a9.09,9.09,0,0,0,4.95-1.45s0,0,0,0h0a9,9,0,0,0,2.64-2.6q.19-.29.36-.57a9.08,9.08,0,0,0,1.21-4.54V9.19A9.15,9.15,0,0,0,26.64,4.65Zm-1,14a7,7,0,0,1-7,7H9.19a7,7,0,0,1-7-7V9.19a7,7,0,0,1,7-7h9.45a7,7,0,0,1,7,7Z"/>
          <path d="M12.25,13.65A1.87,1.87,0,0,0,13.9,11.6a2.76,2.76,0,0,0-3.05-2.87H5.24V19.51h5.61s3.42.1,3.42-3.18c0,0,.15-2.68-2-2.68Zm-1.81-3h.41s.76,0,.76,1.12-.45,1.28-1,1.28H7.71v-2.4Zm.25,6.94h-3V14.71h3.14S12,14.7,12,16.19c0,1.26-.84,1.39-1.29,1.4Zm8.14-6.12c-4.14,0-4.14,4.14-4.14,4.14a3.83,3.83,0,0,0,4.14,4.12s3.69.21,3.69-2.86h-1.9S20.69,18,18.9,18A1.75,1.75,0,0,1,17,16.15h5.58s.61-4.68-3.75-4.68ZM17,14.71a1.93,1.93,0,0,1,1.9-1.66,1.6,1.6,0,0,1,1.64,1.66Zm4-4H16.52V9.37H21v1.32Z"/>
        </svg>
      </button>
    </div>
  )
}

export default Follow;