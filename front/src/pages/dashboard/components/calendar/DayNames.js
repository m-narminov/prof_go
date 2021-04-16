import React, { Component } from 'react';
import s from './Calendar.module.scss';

class DayNames extends Component {
  render() {
    return (
      <div className={`${s.calendarRow} ${s.daysHeader}`}>
        <span className={`${s.calendarItemContainer} ${s.dayName}`}>Пн</span>
        <span className={`${s.calendarItemContainer} ${s.dayName}`}>Вт</span>
        <span className={`${s.calendarItemContainer} ${s.dayName}`}>Ср</span>
        <span className={`${s.calendarItemContainer} ${s.dayName}`}>Чт</span>
        <span className={`${s.calendarItemContainer} ${s.dayName}`}>Пт</span>
        <span className={`${s.calendarItemContainer} ${s.dayName}`}>Сб</span>
        <span className={`${s.calendarItemContainer} ${s.dayName}`}>Вс</span>
      </div>
    );
  }
}

export default DayNames;
