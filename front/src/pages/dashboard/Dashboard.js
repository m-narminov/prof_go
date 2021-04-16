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
                  <span className='fw-semi-bold'>Статистика по городам</span>
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
                &nbsp; 87 регионов, 2759 городов
              </p>
              <div className='row progress-stats'>
                <div className='col-md-9 col-12'>
                  <h6 className='name fw-semi-bold'>Элиста</h6>
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
                  <h6 className='name fw-semi-bold'>Краснодар</h6>
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
                  <h6 className='name fw-semi-bold'>Саратов</h6>

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
            </Widget>
          </Col>
        </Row>

        <Row>
          <Col lg={4} xs={12}>
            <Widget title={<h6> Запланированное событие </h6>} close settings>
              <div className='stats-row'>
                <div className='stat-item'>
                  <h6 className='name'>Дата</h6>
                  <p className='value'>17 Ноября 2020</p>
                </div>
                <div className='stat-item'>
                  <h6 className='name'>Время</h6>
                  <p className='value'>13:30</p>
                </div>
                <div className='stat-item'>
                  <h6 className='name'>Формат</h6>
                  <p className='value'>Офлайн</p>
                </div>
                <div className='stat-item'>
                  <h6 className='name'>Название</h6>
                  <p className='value'>Финансовая грамотность</p>
                </div>
              </div>
            </Widget>
          </Col>
          <Col lg={4} xs={12}>
            <Widget title={<h6> Следующее событие </h6>} close settings>
              <div className='stats-row'>
                <div className='stat-item'>
                  <h6 className='name'>Дата</h6>
                  <p className='value'>30 Октября 2020</p>
                </div>
                <div className='stat-item'>
                  <h6 className='name'>Время</h6>
                  <p className='value'>10:38</p>
                </div>
                <div className='stat-item'>
                  <h6 className='name'>Формат</h6>
                  <p className='value'>Офлайн</p>
                </div>
                <div className='stat-item'>
                  <h6 className='name'>Название</h6>
                  <p className='value'>Лидерство</p>
                </div>
              </div>
            </Widget>
          </Col>
          <Col lg={4} xs={12}>
            <Widget title={<h6>Статистика событий</h6>} close settings>
              <div className='stats-row'>
                <div className='stat-item'>
                  <h6 className='name'>Всего</h6>
                  <p className='value'>30</p>
                </div>
                <div className='stat-item'>
                  <h6 className='name'>Пройдено</h6>
                  <p className='value'>10</p>
                </div>
                <div className='stat-item'>
                  <h6 className='name'>Предстоящие</h6>
                  <p className='value'>17</p>
                </div>
                <div className='stat-item'>
                  <h6 className='name'>Отменено</h6>
                  <p className='value'>3</p>
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
                  <span className='fw-semi-bold'>История операций</span>
                </h6>
              }
              close
            >
              <div className='widget-body'>
                <h3>Баланс: 5232 Эльбрус коинов</h3>
                <p className='fs-mini text-muted mb mt-sm'>
                  Эльбрусы можно потратить для покупки скидок у наших{' '}
                  <span className='fw-semi-bold'>
                    <a href='http://leadersofdigital.ru' target="_blank"> партнеров</a>
                  </span>
                </p>
              </div>
              <div className={`widget-table-overflow ${s.table}`}>
                <Table striped size='sm'>
                  <thead className='no-bd'>
                    <tr>
                      <th>Дата</th>
                      <th>Поступление</th>
                      <th>Списание</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>12:33 23 Октября 2020</td>
                      <td className='text-align-right fw-semi-bold'>460 Э</td>
                      <td className='text-align-right fw-semi-bold'>0 Э</td>
                    </tr>
                    <tr>
                      <td>11:14 30 Октября 2020</td>
                      <td className='text-align-right fw-semi-bold'>0 Э</td>
                      <td className='text-align-right fw-semi-bold'>34 Э</td>
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
