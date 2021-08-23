import React from 'react';
import calendarIcons from '../assets/icons/calendar.svg';

const Header = () => {
  return (
    <header className="header d-flex justify-between align-center">
      <div className="header_line"></div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav__item"><a href="#" className="nav__link">Предложение</a></li>
          <li className="nav__item"><a href="#" className="nav__link">О нас</a></li>
          <li className="nav__item"><a href="#" className="nav__link">Консультация</a></li>
        </ul>
      </nav>
      <div className="burger">Меню</div>
      <div className="calendar calendar-widget">
        <div className="d-flex align-end">
          <div className="calendar-image">
            <img src={calendarIcons} alt="Calendar icon" className="calendar-image__icon" />
          </div>
          <h3 className="calendar__title">Внести в календарь</h3>
        </div>
        <p className="calendar__desc"><span>Сейчас</span> самое время —
          Завтра будет поздно!</p>
      </div>
    </header>
  )
}

export default Header;
