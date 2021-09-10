import React from "react";
import calendarIcons from "../assets/icons/calendar.svg";

const CalendarWidget = () => {
  const clickButtonHandler = () => {
    window.open('https://calendar.google.com/event?action=TEMPLATE&tmeid=MHRwbDh2YXVib2hrczZqdWM1OTY4c25mMjMgaGVkZGRqbWN2N285bDh0ZmV1ODB1Z2FuM3NAZw&tmsrc=hedddjmcv7o9l8tfeu80ugan3s%40group.calendar.google.com')
  }

  return(
    <div className="calendar calendar-widget">
      <div
        className="d-flex align-end calendar-block"
        onClick={clickButtonHandler}
      >
        <div className="calendar-image">
          <img src={calendarIcons} alt="Calendar icon" className="calendar-image__icon" />
        </div>
        <h3 className="calendar__title">Внести в календарь</h3>
      </div>
      <p className="calendar__desc"><span>Сейчас</span> самое время —
        Завтра будет поздно!</p>
    </div>
  );
}

export default CalendarWidget;