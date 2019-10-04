import React from 'react';
import CalendarContainer from './CalendarContainer';
import CalendarModal from './CalendarModal';
import ModalTest from './CalendarModal/ModalTest';

const Calendar = (props) => {
  const { counter } = props;
  return (
    <div>
      <CalendarContainer />
      <ModalTest />
    </div>
  );
};

export default Calendar;
