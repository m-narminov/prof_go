import React from 'react';
import { Row, Col, Table, Badge } from 'reactstrap';

import Widget from '../../../components/Widget';
import s from './Static.module.scss';

class Static extends React.Component {
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
                      <th>#</th>
                      <th>Фамилия</th>
                      <th>Имя</th>
                      <th>Отчество</th>
                      <th>Email</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  {/* eslint-disable */}
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Достоевский</td>
                      <td>Федор</td>
                      <td>Михайлович</td>
                      <td>
                        <a href='#'>sam@example.com</a>
                      </td>
                      <td>
                        <Badge color='gray' className='text-secondary' pill>
                          Приглашенный
                        </Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Раскольникв</td>
                      <td>Родион</td>
                      <td>Романович</td>
                      <td>
                        <a href='#'>fat.thor@example.com</a>
                      </td>
                      <td>
                        <Badge color='gray' className='text-secondary' pill>
                          Не подтвержденный
                        </Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Мармеладова</td>
                      <td>Соня</td>
                      <td>Семеновна</td>
                      <td>
                        <a href='#'>larry@example.com</a>
                      </td>
                      <td>
                        <Badge color='primary' className='text-secondary' pill>
                          Новый
                        </Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Раскольникова</td>
                      <td>Авдотья</td>
                      <td>Романовна</td>
                      <td>
                        <a href='#'>peter@example.com</a>
                      </td>
                      <td>
                        <Badge color='success' className='text-secondary' pill>
                          Активный
                        </Badge>
                      </td>
                    </tr>
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
