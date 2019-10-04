/* eslint-disable no-unused-vars */
import React from 'react';
import CalendalDay from '../CalendalDay';

const CalendarWeek = (props) => {
  const { key, cnt, monthRange } = props;

  const dayArr = [];

  for (let idx = cnt * 7; idx < cnt * 7 + 7; idx++) {
    dayArr.push(<CalendalDay key={idx} cnt={idx} monthRange={monthRange} />);
  }

  return (
    <div className="week">
      {dayArr}
    </div>
  );
};

export default CalendarWeek;
