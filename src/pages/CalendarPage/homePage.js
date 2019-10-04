/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice, createAction } from 'redux-starter-kit';
import moment from 'moment';
import {pender} from 'redux-pender';

const getMonthDateRange = (year, month) => {
  const startDate = moment([year, month]);
  const startDay = startDate.get('d');
  const endDate = startDate.endOf('month');

  const prevEndDate = moment([year, month]).subtract(1, 'month').endOf('month').format('D');

  const rangeStart = month === 0 ? 0 : moment([year, month]).startOf('month').startOf('week').format('W');
  const rangeEnd = moment([year, month]).endOf('month').startOf('week').format('W');
  const weekRange = rangeEnd - rangeStart + 1;
  return {
    prevEndDate,
    start: startDay,
    end: endDate.format('D'),
    weekRange,
    jobs: jobs(prevEndDate, startDay, endDate.format('D'), weekRange)
  };
};

const jobs = (prevEndDate, start, end, WeekRange) => {
  const job = [{}];
  let idx = 0;
  for (let index = prevEndDate - start + 1; index <= prevEndDate; index++) {
    job[idx++] = {day: index};
  }

  for (let index = 1; index <= end; index++) {
    job[idx++] = {day: index};
  }

  let jdx = 1;
  while (idx < WeekRange * 7) {
    job[idx++] = {day: jdx++};
  }
  return job;
};

const { actions, reducer } = createSlice({
  slice: 'Calendar',
  initialState: {
    dateTime: moment().locale('ko'),
    calDate: moment(),
    monthRange: getMonthDateRange(moment().get('year'), moment().get('month')),
    isMonth: true,
    isModal: false
  },
  reducers: {
    nextMonthCalendar(state, action) {
      state.dateTime = state.dateTime.add(1, 'month');
      state.calDate = state.dateTime.format('LLL');
      state.monthRange = getMonthDateRange(state.dateTime.get('year'), state.dateTime.get('month'));
    },
    prevMonthCalendar(state, action) {
      state.dateTime = state.dateTime.subtract(1, 'month');
      state.calDate = state.dateTime.format('LLL');
      state.monthRange = getMonthDateRange(state.dateTime.get('year'), state.dateTime.get('month'));
    },
    goTodayCalendar(state, action) {
      state.dateTime = moment().locale('ko');
      state.monthRange = getMonthDateRange(moment().get('year'), moment().get('month'));
    },
    clickMonthCalendar(state, action) {
      state.calDate = state.dateTime.get('D');
      state.isMonth = action.payload.isMonth;
      state.monthRange = getMonthDateRange(state.dateTime.get('year'), state.dateTime.get('month'));
    },
    clickDayCalendar(state, action) {
      state.calDate = state.dateTime.get('D');
      state.isMonth = action.payload.isMonth;
      state.monthRange = getMonthDateRange(state.dateTime.get('year'), state.dateTime.get('month'));
    },
    clickModalCalendar(state, action) {
      state.isModal = !state.isModal;
    },
    closeModalCalendar(state, action) {
      state.isModal = !state.isModal;
    }
  }
});

export const {
  nextMonthCalendar,
  prevMonthCalendar,
  goTodayCalendar,
  clickDayCalendar,
  clickMonthCalendar,
  clickModalCalendar,
  closeModalCalendar
} = actions;

export default reducer;
