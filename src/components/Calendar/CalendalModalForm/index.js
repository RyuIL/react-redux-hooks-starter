/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';

const CalendarModalForm = (props) => {
  const { counter } = props;

  return (
    <form>
      <div className="form-group">
        <label className="col-form-label">일정 제목</label>
        <input type="text" className="form-control" id="recipient-name" />
      </div>
      <div className="form-group">
        <label htmlFor="message-text" className="col-form-label">
          일정 설명
        </label>
        <textarea className="form-control" id="message-text" />
      </div>
      <div className="form-row">
        <div className="col-md-6">
          <div className="form-group">
            <label className="col-form-label">일정 시작 날짜</label>
            <div
              className="input-group date"
              id="datetimepicker1"
              data-target-input="nearest"
            >
              <input
                type="text"
                className="form-control datetimepicker-input"
                data-target="#datetimepicker1"
              />
              <div
                className="input-group-append"
                data-target="#datetimepicker1"
                data-toggle="datetimepicker"
              >
                <div className="input-group-text">
                  <i className="material-icons">calendar_today</i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label className="col-form-label">일정 시작 시간</label>
            <div
              className="input-group date"
              id="datetimepicker2"
              data-target-input="nearest"
            >
              <input
                type="text"
                className="form-control datetimepicker-input"
                data-target="#datetimepicker2"
              />
              <div
                className="input-group-append"
                data-target="#datetimepicker2"
                data-toggle="datetimepicker"
              >
                <div className="input-group-text">
                  <i className="material-icons">access_time</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="col-md-6">
          <div className="form-group">
            <label className="col-form-label">일정 종료 날짜</label>
            <div
              className="input-group date"
              id="datetimepicker3"
              data-target-input="nearest"
            >
              <input
                type="text"
                className="form-control datetimepicker-input"
                data-target="#datetimepicker3"
              />
              <div
                className="input-group-append"
                data-target="#datetimepicker3"
                data-toggle="datetimepicker"
              >
                <div className="input-group-text">
                  <i className="material-icons">calendar_today</i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label className="col-form-label">일정 종료 시간</label>
            <div
              className="input-group date"
              id="datetimepicker4"
              data-target-input="nearest"
            >
              <input
                type="text"
                className="form-control datetimepicker-input"
                data-target="#datetimepicker4"
              />
              <div
                className="input-group-append"
                data-target="#datetimepicker4"
                data-toggle="datetimepicker"
              >
                <div className="input-group-text">
                  <i className="material-icons">access_time</i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
          />
          <label className="form-check-label" htmlFor="inlineCheckbox1">
            매월 반복
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
          />
          <label className="form-check-label" htmlFor="inlineCheckbox2">
            하루 종일
          </label>
        </div>
      </div>
    </form>
  );
};

export default CalendarModalForm;
