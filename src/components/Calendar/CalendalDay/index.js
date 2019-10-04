import React from 'react';

const CalendalDay = (props) => {
  const {key, cnt, monthRange} = props;
  return (
    <div key={key} className="day">
      <h3 className="day-label">{monthRange.jobs[cnt].day}</h3>
    </div>
  );
};

export default CalendalDay;
