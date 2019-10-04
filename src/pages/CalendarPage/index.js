/* eslint-disable max-len */
import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import useRequest from '../../hooks/useRequest';
import {
  nextMonthCalendar, prevMonthCalendar, goTodayCalendar, clickDayCalendar, clickMonthCalendar, clickModalCalendar, closeModalCalendar
} from './homePage';
import CalendarContainer from '../../components/Calendar/CalendarContainer';
import ModalTest from '../../components/Calendar/CalendarModal/ModalTest';

const CalendarPage = () => {
  const dispatch = useDispatch();
  const { dateTime, monthRange, isModal } = useSelector(state => state.Calendar);

  const [response, loading, error] = useRequest(
    'http://127.0.0.1:5000/calendar/job'
  );

  if (loading) {
    return <div>로딩중..</div>;
  }

  if (error) {
    console.log(error);
    return <div>에러 발생!</div>;
  }

  if (!response) return null;

  // const res = response.data;

  const { jobno } = response.data[0];

  const nextMonth = () => {
    dispatch(nextMonthCalendar(dateTime));
  };

  const prevMonth = () => {
    dispatch(prevMonthCalendar(dateTime));
  };

  const goToday = () => {
    dispatch(goTodayCalendar(dateTime));
  };

  const clickMonth = (e) => {
    dispatch(clickMonthCalendar({isMonth: true}));
  };

  const clickDay = () => {
    dispatch(clickDayCalendar({isMonth: false}));
  };

  const clickModal = () => {
    dispatch(clickModalCalendar());
  };

  const closeModal = () => {
    dispatch(closeModalCalendar());
  };

  return (
    <div>
      <CalendarContainer
        dateTime={dateTime}
        nextMonth={nextMonth}
        prevMonth={prevMonth}
        goToday={goToday}
        monthRange={monthRange}
        clickDay={clickDay}
        clickMonth={clickMonth}
        clickModal={clickModal}
      />
      <ModalTest
        isModal={isModal}
        closeModal={closeModal}
      />
      <p>{jobno}</p>
    </div>
  );
};

export default CalendarPage;
