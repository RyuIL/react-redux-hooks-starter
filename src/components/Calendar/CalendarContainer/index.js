/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import CalendarWeek from '../CalendarWeek';
import CalendarMonth from '../CalendarMonth';
import CalendarModal from '../CalendarModal';

const CalendarContainer = (props) => {
  const {
    dateTime, nextMonth, prevMonth, goToday, monthRange, clickDay, clickMonth, clickModal
  } = props;

  return (
    <body>
      <div className="calendar-container">
        <div className="calendar-header">
          <button type="button" className="btn btn-light" onClick={goToday}>
            Today
          </button>
          <div className="ico-arrow">
            <a
              href="#"
              data-toggle="tooltip"
              data-placement="top"
              title="이전"
              onClick={prevMonth}
            >
              <i className="material-icons">chevron_left</i>
            </a>
            <a
              href="#"
              data-toggle="tooltip"
              data-placement="top"
              title="다음"
              onClick={nextMonth}
            >
              <i className="material-icons">chevron_right</i>
            </a>
          </div>
          <h4>
            {dateTime.get('year')}년 {dateTime.get('month') + 1}월
          </h4>
          <ul className="nav nav-tabs view-tab" id="view" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="tab-month"
                data-toggle="tab"
                href="#month"
                role="tab"
                aria-controls="month"
                aria-selected="true"
                onClick={clickMonth}
              >
                월
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="tab-day"
                data-toggle="tab"
                href="#day"
                role="tab"
                aria-controls="day"
                aria-selected="false"
                onClick={clickDay}
              >
                일
              </a>
            </li>
          </ul>
        </div>
        <div className="tab-content" onClick={clickModal}>
          <div
            className="tab-pane active show"
            id="month"
            role="tabpanel"
            aria-labelledby="tab-month"
          >
            <div className="monthly-calendar">
              <div className="week-day">
                <div className="day-name">일</div>
                <div className="day-name">월</div>
                <div className="day-name">화</div>
                <div className="day-name">수</div>
                <div className="day-name">목</div>
                <div className="day-name">금</div>
                <div className="day-name">토</div>
              </div>
              <CalendarMonth monthRange={monthRange} />
            </div>
          </div>
        </div>
      </div>
      <CalendarModal />
    </body>
  );
};

export default CalendarContainer;
