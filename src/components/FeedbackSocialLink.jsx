import React from 'react';

const FeedbackSocialLink = ({ active, name, viebox, url, path_1, path_2 }) => {

  const openUrlHandler = (url) => {
    window.open(url);
  }

  const clickLinkHandler = (name) => {

    let figure = document.querySelector('.feedback-social__figure');

    switch (name) {
      case 'telegram':
        figure.classList.remove('feedback-social__figure_whatsapp');
        figure.classList.remove('feedback-social__figure_phone');
        figure.classList.remove('feedback-social__figure_mail');
        figure.classList.add('feedback-social__figure_telegram');
        break;
      case 'whatsapp':
        figure.classList.remove('feedback-social__figure_telegram');
        figure.classList.remove('feedback-social__figure_phone');
        figure.classList.remove('feedback-social__figure_mail');
        figure.classList.add('feedback-social__figure_whatsapp');
        break;
      case 'phone':
        figure.classList.remove('feedback-social__figure_telegram');
        figure.classList.remove('feedback-social__figure_whatsapp');
        figure.classList.remove('feedback-social__figure_mail');
        figure.classList.add('feedback-social__figure_phone');
        break;
      case 'mail':
        figure.classList.remove('feedback-social__figure_telegram');
        figure.classList.remove('feedback-social__figure_phone');
        figure.classList.remove('feedback-social__figure_whatsapp');
        figure.classList.add('feedback-social__figure_mail');
        break;
      default:
        break;
    }
  }

  return (
    <button
      className={'feedback-social__link' + (active === name ? ' feedback-social__link_active' : '')}
      onMouseEnter={() => {
        clickLinkHandler(name)
      }}
      onClick={() => openUrlHandler(url)}
    >
      <svg viewBox={viebox}>
        <linearGradient id="linear-gradient">
          <stop offset="0%" stopColor="#FF6E65" />
          <stop offset="100%" stopColor="#C14C45" />
        </linearGradient>
        <path d={path_1} />
        <path d={path_2} />
      </svg>
    </button>
  )
}

export default FeedbackSocialLink;