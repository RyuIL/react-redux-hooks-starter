import React, {useState} from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import axios from 'axios';

import 'react-datepicker/dist/react-datepicker.css';

const handleSubmit = (event) => {
  event.preventDefault();
  console.log(event.target.elements.formTitle.value);
  console.log(event.target.elements.formContent.value);
  console.log(event.target.elements.formCheckbox.value);


  axios({
    method: 'post',
    url: 'http://127.0.0.1:5000/calendar/createjob',
    data: {
      title: event.target.elements.formTitle.value,
      content: event.target.elements.formContent.value,
      check: event.target.elements.formCheckbox.value
    }
  }).then(response => console.log('response :', response))
    .catch(err => console.error('error :', err));
};

const ModalTest = (props) => {
  const { isModal, closeModal } = props;
  const [startDate, setStartDate] = useState(new Date());
  const [startDate2, setStartDate2] = useState(new Date());
  const [is24, setIs24] = useState(false);
  return (
    <>
      <Modal show={isModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>일정 만들기</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formTitle" name="formTitle">
              <Form.Label>일정 제목</Form.Label>
              <Form.Control type="text" name="formTitle" />
            </Form.Group>

            <Form.Group controlId="formContent">
              <Form.Label>일정 설명</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>

            <div className="row">
              <div className="col-md-6">
                <Form.Group controlId="formStateDate">
                  <Form.Label>일정 시작 날짜</Form.Label>
                  <Form.Control as={DatePicker} selected={startDate} onChange={setStartDate} />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group controlId="formStateDate">
                  <Form.Label>일정 시작 시간</Form.Label>
                  <Form.Control
                    as={DatePicker}
                    selected={startDate}
                    onChange={setStartDate}
                    dateFormat="h:mm aa"
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Time"
                    disabled={is24}
                  />
                </Form.Group>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <Form.Group controlId="formStateDate">
                  <Form.Label>일정 종료 날짜</Form.Label>
                  <Form.Control
                    as={DatePicker}
                    selected={startDate2}
                    onChange={setStartDate2}
                    minDate={startDate}
                    showDisabledMonthNavigation
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group controlId="formStateDate">
                  <Form.Label>일정 종료 시간</Form.Label>
                  <Form.Control
                    as={DatePicker}
                    selected={startDate2}
                    onChange={setStartDate2}
                    dateFormat="h:mm aa"
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Time"
                    minDate={startDate}
                    disabled={is24}
                  />
                </Form.Group>
              </div>
            </div>

            <Form.Group controlId="formCheckbox">
              <div className="row">
                <div className="col-md-8">
                  <Form.Check type="checkbox" label="매월 반복" />
                  <Form.Check type="checkbox" label="하루 종일" onClick={() => setIs24(!is24)} />
                </div>
              </div>
            </Form.Group>
            <Button variant="primary" type="submit">
              일정 만들기
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="primary" type="submit">
              일정 만들기
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalTest;
