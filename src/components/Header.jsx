import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";


import calendarIcons from '../assets/icons/calendar.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="container d-flex justify-between align-center">
        <div className="header_line"></div>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav__item">
              <Link
                className="nav__link"
                to="experience"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
              ><span>Предложение</span></Link>
            </li>
            <li className="nav__item">
              <Link
                className="nav__link"
                to="about"
                spy={true}
                smooth={true}
                duration={1500}
              ><span>О нас</span></Link>
            </li>
            <li className="nav__item">
              <Link
                className="nav__link"
                to="questions"
                spy={true}
                smooth={true}
                duration={1500}
              ><span>Консультация</span></Link>
            </li>
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
      </div>
    </header>
  )
}

export default Header;
