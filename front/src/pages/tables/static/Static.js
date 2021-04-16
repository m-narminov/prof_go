import React, { useState } from 'react';
import { Row, Col, Table, Modal } from 'reactstrap';
import ModalBody from 'reactstrap/lib/ModalBody';
import ModalFooter from 'reactstrap/lib/ModalFooter';
import ModalHeader from 'reactstrap/lib/ModalHeader';

import Widget from '../../../components/Widget';
import s from './Static.module.scss';

const thead = ['#', 'ФИО', 'Телефон', 'Email', 'Инвалидность', 'Из многодетной семьи']
const users = [
  {
    id: 1,
    fio: 'Достоевский Федор Михайлович',
    phone: '9992221155',
    email: 'sam@example.com',
    isInvalid: false,
    largeFamily: false
  },
  {
    id: 2,
    fio: 'Раскольников Родион Романович',
    phone: '9992221155',
    email: 'fat.thor@example.com',
    isInvalid: false,
    largeFamily: true
  },
  {
    id: 3,
    fio: 'Мармеладова Соня Семеновна',
    phone: '9992221155',
    email: 'larry@example.com',
    isInvalid: true,
    largeFamily: false
  },
  {
    id: 4,
    fio: 'Раскольникова Авдотья Романовна',
    phone: '9992221155',
    email: 'peter@example.com',
    isInvalid: false,
    largeFamily: false
  }
]

const Static = () => {

  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <div className={s.root}>
      <h2 className='page-title'>Пользователи</h2>
      <Row>
        <Col lg={12}>
          <Widget title={<h5>Все пользователи</h5>} settings close>
            <div className='table-responsive'>
              <Table className='table-hover'>
                <thead>
                  <tr>
                    {thead.map((el, index) => <th key={index}>{el}</th>)}
                  </tr>
                </thead>
                {/* eslint-disable */}
                <tbody>
                  {users.map(user =>
                    <tr key={user.id} onClick={toggle}>
                      <td>{user.id}</td>
                      <td>{user.fio}</td>
                      <td>{user.phone}</td>
                      <td>
                        <a href='#'>{user.email}</a>
                      </td>
                      <td>{user.isInvalid ? 'Да' : 'Нет'}</td>
                      <td>{user.largeFamily ? 'Да' : 'Нет'}</td>
                      <Modal isOpen={isOpen} toggle={toggle}>
                        <ModalHeader></ModalHeader>
                        <ModalBody>
                          {
                            123123123123
                          }
                        </ModalBody>
                        <ModalFooter></ModalFooter>
                        </Modal>
                    </tr>
                  )}
                </tbody>
                {/* eslint-enable */}
              </Table>
            </div>
          </Widget>
        </Col>
      </Row>
    </div>
  );

}

export default Static;
