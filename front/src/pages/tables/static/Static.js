import React from 'react';
import { Row, Col, Table, Badge, Modal } from 'reactstrap';

import Widget from '../../../components/Widget';
import s from './Static.module.scss';

class Static extends React.Component {
  thead = ['#', 'ФИО', 'Телефон', 'Email', 'Инвалидность', 'Из многодетной семьи']
  users = [
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

  render() {
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
                      {this.thead.map(el => <th>{el}</th>)}
                    </tr>
                  </thead>
                  {/* eslint-disable */}
                  <tbody>
                    {this.users.map(user =>
                      <tr>
                        <td>{user.id}</td>
                        <td>{user.fio}</td>
                        <td>{user.phone}</td>
                        <td>
                          <a href='#'>{user.email}</a>
                        </td>
                        <td>{user.isInvalid ? 'Да' : 'Нет'}</td>
                        <td>{user.largeFamily ? 'Да' : 'Нет'}</td>
                        <Modal></Modal>
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
}

export default Static;
