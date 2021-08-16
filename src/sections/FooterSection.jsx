import React from 'react';

import figure from '../assets/icons/footer-figure.svg';

const FooterSection = ({ }) => {
  return (
    <footer className="footer footer__section">
      <div className="d-flex">
        <img src={figure} alt="Изображение фигуры" className="footer__figure" />
        <p className="footer__text">Holding company The Business Pill</p>
      </div>
    </footer>
  )
}

export default FooterSection;