import React from 'react';
import CalendarModalForm from '../CalendalModalForm';

const CalendarModal = (props) => {
  const { counter } = props;
  return (
    <div
      className="modal fade"
      id="registerSchedule"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="registerScheduleLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="registerScheduleLabel">
              일정 만들기
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body" />
          <CalendarModalForm />
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              취소
            </button>
            <button type="button" className="btn btn-primary">
              일정 만들기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarModal;
