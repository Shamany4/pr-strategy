import React from 'react';

const PersonSocialLink = ({ path_1, path_2, circle, cx, cy, r, viewBox, url, mobile }) => {
  const openUrlHandler = (url) => {
    window.open(url);
  }
  return (
    <li className="person-social__item">
      <button className="person-social__link m-person-social__link"
        onClick={() => openUrlHandler(url)}
      >
        <svg viewBox={viewBox} fill="white" stroke="none">
          <linearGradient id={!mobile ? 'social-gradient' : 'm-social-gradient'}>
            <stop offset="0%" stopColor="#FF6E65" />
            <stop offset="100%" stopColor="#C14C45" />
          </linearGradient>
          <path d={path_1} />
          {
            circle
            ?
              <circle cx={cx} cy={cy} r={r} />
            :
            null
          }
          <path d={path_2} />
        </svg>
      </button>
    </li>
  )
}

export default PersonSocialLink;