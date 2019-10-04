import React from 'react';
import CalendarWeek from '../CalendarWeek';

const CalendarMonth = (props) => {
  const { monthRange } = props;
  const weekArr = [];

  for (let idx = 0; idx < monthRange.weekRange; idx++) {
    weekArr.push(<CalendarWeek key={idx + 1} cnt={`${idx}`} monthRange={monthRange} />);
  }

  return (
    <div>
      {weekArr}
    </div>
  );
};

export default CalendarMonth;
