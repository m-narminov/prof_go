import React from 'react';
import { Row, Col, Progress, Table } from 'reactstrap';

import Widget from '../../components/Widget';

import Calendar from './components/calendar/Calendar';
import Map from './components/am4chartMap/am4chartMap';

import AnimateNumber from 'react-animated-number';

import s from './Dashboard.module.scss';

import peopleA1 from '../../images/people/a1.jpg';
import peopleA2 from '../../images/people/a2.jpg';
import peopleA5 from '../../images/people/a5.jpg';
import peopleA4 from '../../images/people/a4.jpg';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      graph: null,
      checkedArr: [false, false, false],
    };
    this.checkTable = this.checkTable.bind(this);
  }

  checkTable(id) {
    let arr = [];
    if (id === 0) {
      const val = !this.state.checkedArr[0];
      for (let i = 0; i < this.state.checkedArr.length; i += 1) {
        arr[i] = val;
      }
    } else {
      arr = this.state.checkedArr;
      arr[id] = !arr[id];
    }
    if (arr[0]) {
      let count = 1;
      for (let i = 1; i < arr.length; i += 1) {
        if (arr[i]) {
          count += 1;
        }
      }
      if (count !== arr.length) {
        arr[0] = !arr[0];
      }
    }
    this.setState({
      checkedArr: arr,
    });
  }

  render() {
    return (
      <div className={s.root}>
        <h1 className='page-title'>
          Главная
        </h1>

        <Row>
          <Col lg={8}>
            <Widget className='bg-transparent'>
              <Map />
            </Widget>
          </Col>

          <Col lg={4}>
            <Widget
              className='bg-transparent'
              title={
                <h5>
                  <span className='fw-semi-bold'>Статистика по Томской области</span>
                </h5>
              }
              settings
              refresh
              close
            >
              <p>
                <span className='circle bg-default text-white'>
                  <i className='fa fa-map-marker' />
                </span>{' '}
                &nbsp; 6 городов, 17 районов
              </p>
              <div className='row progress-stats'>
                <div className='col-md-9 col-12'>
                  <h6 className='name fw-semi-bold'>Кедровый</h6>
                  <Progress
                    color='primary'
                    value='40'
                    className='bg-custom-dark progress-xs'
                  />
                </div>
                <div className='col-md-3 col-12 text-center'>
                  <span className='status rounded rounded-lg bg-default text-light'>
                    <small>
                      <AnimateNumber value={40} />%
                    </small>
                  </span>
                </div>
              </div>
              <div className='row progress-stats'>
                <div className='col-md-9 col-12'>
                  <h6 className='name fw-semi-bold'>Стрежевой</h6>
                  <Progress
                    color='danger'
                    value='36'
                    className='bg-custom-dark progress-xs'
                  />
                </div>
                <div className='col-md-3 col-12 text-center'>
                  <span className='status rounded rounded-lg bg-default text-light'>
                    <small>
                      <AnimateNumber value={36} />%
                    </small>
                  </span>
                </div>
              </div>
              <div className='row progress-stats'>
                <div className='col-md-9 col-12'>
                  <h6 className='name fw-semi-bold'>Томск</h6>

                  <Progress
                    color='success'
                    value='24'
                    className='bg-custom-dark progress-xs'
                  />
                </div>
                <div className='col-md-3 col-12 text-center'>
                  <span className='status rounded rounded-lg bg-default text-light'>
                    <small>
                      <AnimateNumber value={24} />%
                    </small>
                  </span>
                </div>
              </div>
              <div className='row progress-stats'>
                <div className='col-md-9 col-12'>
                  <h6 className='name fw-semi-bold'>Северск</h6>

                  <Progress
                    color='secondary'
                    value='24'
                    className='bg-custom-dark progress-xs'
                  />
                </div>
                <div className='col-md-3 col-12 text-center'>
                  <span className='status rounded rounded-lg bg-default text-light'>
                    <small>
                      <AnimateNumber value={24} />%
                    </small>
                  </span>
                </div>
              </div>
              <div className='row progress-stats'>
                <div className='col-md-9 col-12'>
                  <h6 className='name fw-semi-bold'>Асино</h6>

                  <Progress
                    color='info'
                    value='24'
                    className='bg-custom-dark progress-xs'
                  />
                </div>
                <div className='col-md-3 col-12 text-center'>
                  <span className='status rounded rounded-lg bg-default text-light'>
                    <small>
                      <AnimateNumber value={24} />%
                    </small>
                  </span>
                </div>
              </div>
              <div className='row progress-stats'>
                <div className='col-md-9 col-12'>
                  <h6 className='name fw-semi-bold'>Колпашево</h6>

                  <Progress
                    color='warning'
                    value='24'
                    className='bg-custom-dark progress-xs'
                  />
                </div>
                <div className='col-md-3 col-12 text-center'>
                  <span className='status rounded rounded-lg bg-default text-light'>
                    <small>
                      <AnimateNumber value={24} />%
                    </small>
                  </span>
                </div>
              </div>
            </Widget>
          </Col>
        </Row>

        <Row>
          <Col lg={4} xs={12}>
            <Widget title={<h6>Информация об образовательной программе</h6>} close settings>
              <div className='stats-row'>
                <div className='stat-item'>
                  <h6 className='name'>Специальность</h6>
                  <p className='value'>Сетевое и системное администрирование</p>
                </div>
                <div className='stat-item'>
                  <h6 className='name'>Принято документов</h6>
                  <p className='value'>181</p>
                </div>
                <div className='stat-item'>
                  <h6 className='name'>Средний балл аттестата</h6>
                  <p className='value'>4,02</p>
                </div>
              </div>
            </Widget>
          </Col>
          <Col lg={4} xs={12}>
            <Widget title={<h6>Количество трудоустроенных студентов</h6>} close settings>
              <div className='stats-row'>
                <div className='stat-item'>
                  <h6 className='name'>Населенный пункт</h6>
                  <p className='value'>Томск</p>
                </div>
                <div className='stat-item'>
                  <h6 className='name'>Итого</h6>
                  <p className='value'>10</p>
                </div>
              </div>
            </Widget>
          </Col>
          <Col lg={4} xs={12}>
            <Widget title={<h6>Статистика приемной кампании</h6>} close settings>
              <div className='stats-row'>
                <div className='stat-item'>
                  <h6 className='name'>Всего</h6>
                  <p className='value'>30</p>
                </div>
                <div className='stat-item'>
                  <h6 className='name'>Поступивших</h6>
                  <p className='value'>10</p>
                </div>
                <div className='stat-item'>
                  <h6 className='name'>Средний балл</h6>
                  <p className='value'>4,07</p>
                </div>
                <div className='stat-item'>
                  <h6 className='name'>Бюджет</h6>
                  <p className='value'>8</p>
                </div>
                <div className='stat-item'>
                  <h6 className='name'>Коммерция</h6>
                  <p className='value'>2</p>
                </div>
              </div>
            </Widget>
          </Col>
        </Row>

        <Row>
          <Col lg={4} xs={12}>
            <Widget
              title={
                <h6>
                  <span className='badge badge-success'>Новые</span> Сообщения
                </h6>
              }
              refresh
              close
            >
              <div className='widget-body undo_padding'>
                <div className='list-group list-group-lg'>
                  <button className='list-group-item text-left'>
                    <span className='thumb-sm float-left mr'>
                      <img
                        className='rounded-circle'
                        src={peopleA2}
                        alt='...'
                      />
                      <i className='status status-bottom bg-success' />
                    </span>
                    <div>
                      <h6 className='m-0'>Админ</h6>
                      <p className='help-block text-ellipsis m-0'>
                        Добрый день! Пожалуйста, подтвердите свое участие в
                        вебинаре.
                      </p>
                    </div>
                  </button>
                  <button className='list-group-item text-left'>
                    <span className='thumb-sm float-left mr'>
                      <img
                        className='rounded-circle'
                        src={peopleA4}
                        alt='...'
                      />
                      <i className='status status-bottom bg-success' />
                    </span>
                    <div>
                      <h6 className='m-0'>Василий Егоров</h6>
                      <p className='help-block text-ellipsis m-0'>
                        Здравствуйте, хочу с вами посоветоваться
                      </p>
                    </div>
                  </button>
                  <button className='list-group-item text-left'>
                    <span className='thumb-sm float-left mr'>
                      <img
                        className='rounded-circle'
                        src={peopleA1}
                        alt='...'
                      />
                      <i className='status status-bottom bg-default' />
                    </span>
                    <div>
                      <h6 className='m-0'>Анна Захарова</h6>
                      <p className='help-block text-ellipsis m-0'>
                        Приходи на встречу завтра к 13:30!
                      </p>
                    </div>
                  </button>
                  <button className='list-group-item text-left'>
                    <span className='thumb-sm float-left mr'>
                      <img
                        className='rounded-circle'
                        src={peopleA5}
                        alt='...'
                      />
                      <i className='status status-bottom bg-danger' />
                    </span>
                    <div>
                      <h6 className='m-0'>Артур Новиков</h6>
                      <p className='help-block text-ellipsis m-0'>
                        Привет, как твои успехи?
                      </p>
                    </div>
                  </button>
                </div>
              </div>
              <footer className='bg-widget-transparent mt'>
                <input
                  type='search'
                  className='form-control form-control-sm bg-custom-dark border-0'
                  placeholder='Найти'
                />
              </footer>
            </Widget>
          </Col>

          <Col lg={4} xs={12}>
            <Widget
              title={
                <h6>
                  <span className='fw-semi-bold'>Информация о приеме</span>
                </h6>
              }
              close
            >
              <div className='widget-body'>
              </div>
              <div className={`widget-table-overflow ${s.table}`}>
                <Table striped size='sm'>
                  <thead className='no-bd'>
                    <tr>
                      <th>Населенный пункт</th>
                      <th>ППКРС (бюджет)</th>
                      <th>ППСС3 (бюджет)</th>
                      <th>ППКРС (внебюджет)</th>
                      <th>ППСС3 (внебюджет)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Верхнекетский</td>
                      <td className='text-align-right fw-semi-bold'>4</td>
                      <td className='text-align-right fw-semi-bold'>40</td>
                      <td className='text-align-right fw-semi-bold'>0</td>
                      <td className='text-align-right fw-semi-bold'>1</td>
                    </tr>
                    <tr>
                      <td>Каргасокский</td>
                      <td className='text-align-right fw-semi-bold'>1</td>
                      <td className='text-align-right fw-semi-bold'>7</td>
                      <td className='text-align-right fw-semi-bold'>0</td>
                      <td className='text-align-right fw-semi-bold'>1</td>
                    </tr>
                    <tr>
                      <td>Томск</td>
                      <td className='text-align-right fw-semi-bold'>70</td>
                      <td className='text-align-right fw-semi-bold'>673</td>
                      <td className='text-align-right fw-semi-bold'>16</td>
                      <td className='text-align-right fw-semi-bold'>98</td>
                    </tr>
                    <tr>
                      <td>Северск</td>
                      <td className='text-align-right fw-semi-bold'>8</td>
                      <td className='text-align-right fw-semi-bold'>70</td>
                      <td className='text-align-right fw-semi-bold'>0</td>
                      <td className='text-align-right fw-semi-bold'>15</td>
                    </tr>
                    <tr>
                      <td>Стрежевой</td>
                      <td className='text-align-right fw-semi-bold'>0</td>
                      <td className='text-align-right fw-semi-bold'>2</td>
                      <td className='text-align-right fw-semi-bold'>0</td>
                      <td className='text-align-right fw-semi-bold'>0</td>
                    </tr>
                    <tr>
                      <td>Из других областей РФ</td>
                      <td className='text-align-right fw-semi-bold'>17</td>
                      <td className='text-align-right fw-semi-bold'>248</td>
                      <td className='text-align-right fw-semi-bold'>5</td>
                      <td className='text-align-right fw-semi-bold'>34</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Widget>
          </Col>

          <Col lg={4} xs={12}>
            <Widget
              title={<h6>Календарь</h6>}
              settings
              close
              bodyClass={'pt-2 px-0 py-0'}
            >
              <Calendar />
              <div className='list-group fs-mini'>
                <button className='list-group-item text-ellipsis'>
                  <span className='badge badge-pill badge-primary float-right'>
                    6:45
                  </span>
                  Записать цели на неделю
                </button>
                <button className='list-group-item text-ellipsis'>
                  <span className='badge badge-pill badge-success float-right'>
                    9:41
                  </span>
                  Просмотреть новый курс
                </button>
              </div>
            </Widget>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
