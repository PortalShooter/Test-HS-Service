import React, { FC } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { hideModal } from '../../store/action-creators/modal';
import { Form } from 'react-bootstrap';
import { changeTodo } from '../../store/action-creators/todo';
import { TodoItem } from '../../types/todoTypes';

interface ModalComponentProps {
}

const ModalComponent: FC<ModalComponentProps> = () => {
  const {showModal, inputList} = useAppSelector(state => state.modal)
  const dispatch = useAppDispatch()
  const newObj: TodoItem = Object.assign({}, inputList)

  const handleClose = () => {
    hideModal(dispatch)
  };

  const handleSaveChange = () => {
    changeTodo(dispatch, newObj)
    hideModal(dispatch)
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Form noValidate>
        <Modal.Header closeButton>
          <Modal.Title>Изменение задачи</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {inputList && Object
            .entries(inputList)
            .filter(([key, value]) => typeof value === 'string')
            .map((input, index) => (
              <Form.Group key={index} controlId="validationCustom01">
                <Form.Label>{input[0]}</Form.Label>
                <Form.Control
                  required
                  type="text"
                  defaultValue={input[1]}
                  onChange={(event) => {
                    newObj.title = event.target.value
                  }}
                />
              </Form.Group>
            ))
          }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
          <Button variant="primary" onClick={handleSaveChange}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default ModalComponent