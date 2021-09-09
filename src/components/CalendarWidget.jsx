import React from "react";
import calendarIcons from "../assets/icons/calendar.svg";

const CalendarWidget = () => {
  const clickButtonHandler = () => {
    window.open('https://calendar.google.com/event?action=TEMPLATE&tmeid=Nm1nazMyZjRydWxxbGowc3QwYWw1cmE4YzMgZHFhbmExOHM3cmZmcXNoN2M2cmJiZWFybTRAZw&tmsrc=dqana18s7rffqsh7c6rbbearm4%40group.calendar.google.com')
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