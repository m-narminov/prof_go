import React, { useState } from 'react';
import { Row, Col, Progress, Table, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, Form, FormGroup, Label, Input, FormText  } from 'reactstrap';
import { TemplateHandler } from 'easy-template-x';


import Widget from '../../components/Widget';

import Calendar from './components/calendar/Calendar';
import Map from './components/am4chartMap/am4chartMap';

import AnimateNumber from 'react-animated-number';

import s from './Dashboard.module.scss';

const xl = require('excel4node');


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      graph: null,
      checkedArr: [false, false, false],
      dropdownOpen: false
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

  async generate() {
    const response = await fetch('/doc/template.docx');
    const templateFile = await response.blob();
      const data = {
         org: 'Томский колледж', 
         adres: 'Адрес', 
         god: '2021'         
    };

    const handler = new TemplateHandler();
    const doc = await handler.process(templateFile, data);

    window.saveFile('отчёт-'+Date.now()+'.docx', doc);

  }

  generateExcel() {
    window.open('/doc/template.xls','_blank')
  }






  render() {

    return (
      <div className={s.root}>
        <h1 className='page-title'>
          Работа с контингентом
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
                  <span className='fw-semi-bold'>Численность обучающихся на 01.01.2021 года</span>
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
                &nbsp; 6 городов, 21 район
              </p>
              <div className='row progress-stats'>
                <div className='col-md-9 col-12'>
                  <h6 className='name fw-semi-bold'>Асиновский техникум </h6>
                  <Progress
                    color='primary'
                    value='40'
                    className='bg-custom-dark progress-xs'
                  />
                </div>
                <div className='col-md-3 col-12 text-center'>
                  <span className='status rounded rounded-lg bg-default text-light'>
                    <small>
                      <AnimateNumber value={500} />ч.
                    </small>
                  </span>
                </div>
              </div>
              <div className='row progress-stats'>
                <div className='col-md-9 col-12'>
                  <h6 className='name fw-semi-bold'>Каргасокский техникум</h6>
                  <Progress
                    color='danger'
                    value='36'
                    className='bg-custom-dark progress-xs'
                  />
                </div>
                <div className='col-md-3 col-12 text-center'>
                  <span className='status rounded rounded-lg bg-default text-light'>
                    <small>
                      <AnimateNumber value={300} />ч.
                    </small>
                  </span>
                </div>
              </div>
              <div className='row progress-stats'>
                <div className='col-md-9 col-12'>
                  <h6 className='name fw-semi-bold'>Кожевниковский техникум </h6>

                  <Progress
                    color='success'
                    value='24'
                    className='bg-custom-dark progress-xs'
                  />
                </div>
                <div className='col-md-3 col-12 text-center'>
                  <span className='status rounded rounded-lg bg-default text-light'>
                    <small>
                      <AnimateNumber value={242} />ч.
                    </small>
                  </span>
                </div>
              </div>
              <div className='row progress-stats'>
                <div className='col-md-9 col-12'>
                  <h6 className='name fw-semi-bold'>Северский промышленный колледж</h6>

                  <Progress
                    color='secondary'
                    value='24'
                    className='bg-custom-dark progress-xs'
                  />
                </div>
                <div className='col-md-3 col-12 text-center'>
                  <span className='status rounded rounded-lg bg-default text-light'>
                    <small>
                      <AnimateNumber value={240} />ч.
                    </small>
                  </span>
                </div>
              </div>
              <div className='row progress-stats'>
                <div className='col-md-9 col-12'>
                  <h6 className='name fw-semi-bold'>Молчановский техникум </h6>

                  <Progress
                    color='info'
                    value='24'
                    className='bg-custom-dark progress-xs'
                  />
                </div>
                <div className='col-md-3 col-12 text-center'>
                  <span className='status rounded rounded-lg bg-default text-light'>
                    <small>
                      <AnimateNumber value={238} />ч.
                    </small>
                  </span>
                </div>
              </div>
              <div className='row progress-stats'>
                <div className='col-md-9 col-12'>
                  <h6 className='name fw-semi-bold'>Томский гос пед колледж</h6>

                  <Progress
                    color='warning'
                    value='24'
                    className='bg-custom-dark progress-xs'
                  />
                </div>
                <div className='col-md-3 col-12 text-center'>
                  <span className='status rounded rounded-lg bg-default text-light'>
                    <small>
                      <AnimateNumber value={245} />ч.
                    </small>
                  </span>
                </div>
              </div>
            </Widget>
          </Col>
        </Row>
        <Row>
          <Col lg={12} xs={12}>
            <Widget title={<h6>Форма приведения и фильтры</h6>} close settings>
              <div>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={() => this.setState({ dropdownOpen: !this.state.dropdownOpen })}>
                  <DropdownToggle style={{ background: 'rgba(0, 0, 0, 0.24)' }} caret>
                    Тип формы
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Интересуемая форма</DropdownItem>
                    <DropdownItem>ППСС3</DropdownItem>
                    <DropdownItem text>Сироты-инв ППКРС</DropdownItem>
                    <DropdownItem disabled>Выпуск ППКРС (недоступно)</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem disabled>Трудоустройство ППСС3</DropdownItem>
                    <DropdownItem>Контр. ППКРС</DropdownItem>
                    <DropdownItem>Трудоустройство ОВЗ</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
              <Form className={s.form}>
                <FormGroup className={s.formgroup}>
                  <Label for="exampleSelect">Количество обучающихся</Label>
                  <Input type="select" name="select" id="exampleSelect">
                    <option>Максимальное</option>
                    <option>Минимальное</option>
                    <option>По регионам</option>
                  </Input>
                </FormGroup>
                <FormGroup className={s.formgroup}>
                  <Label for="exampleSelectMulti">Выбор пола</Label>
                  <Input className={s.formselect} type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                    <option>Мужской</option>
                    <option>Женский</option>
                  </Input>
                </FormGroup>
                <FormGroup className={s.formgroup} check>
                  <Label check>
                    <Input type="checkbox" />{' '}
                      Наличие водительских прав
                    </Label>
                </FormGroup>
                <FormGroup className={s.formgroup} check>
                  <Label check>
                    <Input type="checkbox" />{' '}
                      Сироты
                    </Label>
                </FormGroup>
                <FormGroup className={s.formgroup} check>
                  <Label check>
                    <Input type="checkbox" />{' '}
                      Инвалиды
                    </Label>
                </FormGroup>
                <FormGroup className={s.formgroup} check>
                  <Label>Период</Label>
                  <Input type="text" placeholder="2019" />
                  <Input type="text" placeholder="2021" />
                </FormGroup>
                <FormGroup className={s.formgroup}>
                  <Label for="exampleSelect">Форма обучения</Label>
                  <Input type="select" name="select" id="exampleSelect">
                    <option>Очная</option>
                    <option>Заочная</option>
                    <option>Очно-Заочная</option>
                  </Input>
                </FormGroup>
                {/* <Button>Submit</Button> */}
              </Form>
              <div className={s.more}>
                Большей фильтров
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
                  <h6 className='name'>Всего</h6>
                  <p className='value'>100</p>
                </div>
                <div className='stat-item'>
                  <h6 className='name'>Устроены</h6>
                  <p className='value'>43</p>
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
                  <span className='badge badge-success'>%</span> трудоустроенных выпускников
                </h6>
              }
              refresh
              close
            >

              <div className={`widget-table-overflow ${s.table}`}>
                <Table striped size='sm'>
                  <thead className='no-bd'>
                    <tr>
                      <th>Населенный пункт</th>
                      <th>ППКРС (бюджет)%</th>
                      <th>ППСС3 (бюджет)%</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Верхнекетский</td>
                      <td className='text-align-right fw-semi-bold'>4</td>
                      <td className='text-align-right fw-semi-bold'>40</td>
                    </tr>
                    <tr>
                      <td>Каргасокский</td>
                      <td className='text-align-right fw-semi-bold'>1</td>
                      <td className='text-align-right fw-semi-bold'>7</td>
                    </tr>
                  </tbody>
                </Table>
              </div>

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
                      <th>Учебное учреждение</th>
                      <th>ППКРС (бюджет)</th>
                      <th>ППСС3 (бюджет)</th>
                      <th>ППКРС (внебюджет)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Кожевниковский техникум агробизнеса</td>
                      <td className='text-align-right fw-semi-bold'>4</td>
                      <td className='text-align-right fw-semi-bold'>40</td>
                      <td className='text-align-right fw-semi-bold'>0</td>
                    </tr>
                    <tr>
                      <td>Северский промышленный колледж</td>
                      <td className='text-align-right fw-semi-bold'>1</td>
                      <td className='text-align-right fw-semi-bold'>7</td>
                      <td className='text-align-right fw-semi-bold'>0</td>
                    </tr>
                    <tr>
                      <td>Асиновский техникум промышленной индустрии и сервиса</td>
                      <td className='text-align-right fw-semi-bold'>70</td>
                      <td className='text-align-right fw-semi-bold'>673</td>
                      <td className='text-align-right fw-semi-bold'>16</td>
                    </tr>
                    <tr>
                      <td>Молчановский техникум отраслевых технологий</td>
                      <td className='text-align-right fw-semi-bold'>8</td>
                      <td className='text-align-right fw-semi-bold'>70</td>
                      <td className='text-align-right fw-semi-bold'>0</td>
                    </tr>
                    <tr>
                      <td>Томский государственный педагогический колледж</td>
                      <td className='text-align-right fw-semi-bold'>0</td>
                      <td className='text-align-right fw-semi-bold'>2</td>
                      <td className='text-align-right fw-semi-bold'>0</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Widget>
          </Col>

          <Col lg={4} xs={12}>
            <Widget
              title={<h6>Период</h6>}
              settings
              close
              bodyClass={'pt-2 px-0 py-0'}
            >
              <Calendar />
            </Widget>
          </Col>

          <Col lg={4} xs={12}>
            <Widget
              title={<h6>Генерировать отчёт</h6>}
              settings
              close
              bodyClass={'pt-2 px-0 py-0'}
            >
              <div className='list-group fs-mini'>
                <button className='list-group-item text-ellipsis' onClick={() => this.generateExcel()}>
                  <span className='badge badge-pill badge-primary float-right'>
                    Excel
                  </span>
                  Сформировать сводную талицу
                </button>
                <button className='list-group-item text-ellipsis' onClick={() => this.generate()}>
                  <span className='badge badge-pill badge-success float-right'>
                    doc
                  </span>
                  Сформировать отчёт
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
