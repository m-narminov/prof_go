import React, { useState } from 'react';
import { Row, Col, Table, Modal } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input, FormGroup, Label, Button } from 'reactstrap';
import ModalBody from 'reactstrap/lib/ModalBody';

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
  const [activeNomber, setActiveNomber] = useState(users[0])

  const change = (e) => setActiveNomber(users[e - 1])
  const toggle = () => setIsOpen(!isOpen)

  return (
    <div className={s.root}>
      <h2 className='page-title'>Студенты</h2>
      <Widget title={<h5>Поиск студентов</h5>}>
        <Row>
          <Col sm={4} lg={4}>
            <FormGroup>
              <Label>Введите ФИО</Label>
              <InputGroup className='input-group-no-border'>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>
                    <i className='fa fa-search text-white' />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  id='search-input'
                  className='input-transparent'
                  placeholder='Найти'
                />
              </InputGroup>
            </FormGroup>
          </Col>
          <Col sm={4} lg={4}>
            <FormGroup>
              <Label for="exampleSelect">Среднее профессиональное образование</Label>
              <Input type="select" name="select1" id="exampleSelect">
                <option>Асиновский техникум промышленной индустрии и сервиса</option>
                <option>Каргасокский техникум промышленности и речного транспорта</option>
                <option>Кожевниковский техникум агробизнеса</option>
                <option>Колледж индустрии питания, торговли и сферы услуг</option>
                <option>Томский аграрный колледж</option>
              </Input>
            </FormGroup>
          </Col>
          <Col sm={4} lg={4}>
            <FormGroup>
              <Label for="specialization">Специализация</Label>
              <Input type="select" name="specialization" id="specialization">
                <option>информационные технологии</option>
                <option>Менеджмент</option>
                <option>Фермер и слесарь</option>
                <option>Математика и естественные науки</option>
                <option>Повар</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={3} lg={3}>
            <FormGroup>
              <Label for="exampleSelect">Получают категорию "B"</Label>
              <Input type="select" name="select1" id="exampleSelect">
                <option>Нет</option>
                <option>Да</option>
              </Input>
            </FormGroup>
          </Col>
          <Col sm={3} lg={3}>
            <FormGroup>
              <Label for="exampleSelect">С инвалидностью</Label>
              <Input type="select" name="select1" id="exampleSelect">
                <option>Нет</option>
                <option>Да</option>
              </Input>
            </FormGroup>
          </Col>
          <Col sm={3} lg={3}>
            <FormGroup>
              <Label for="exampleSelect">Сироты</Label>
              <Input type="select" name="select1" id="exampleSelect">
                <option>Нет</option>
                <option>Да</option>
              </Input>
            </FormGroup>
          </Col>
          <Col sm={3} lg={3}>
            <FormGroup>
              <Label for="exampleSelect">Семья</Label>
              <Input type="select" name="select1" id="exampleSelect">
                <option>Полная</option>
                <option>Неполная</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={2} lg={2}>
            <FormGroup>
              <Label for="exampleSelect">Инвалидность</Label>
              <Input type="select" name="select1" id="exampleSelect">
                <option>Нет</option>
                <option>Да</option>
              </Input>
            </FormGroup>
          </Col>
          <Col sm={2} lg={2}>
            <FormGroup>
              <Label for="exampleSelect">Многодентная семья</Label>
              <Input type="select" name="select1" id="exampleSelect">
                <option>Нет</option>
                <option>Да</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Button style={{ background: 'rgba(0,0,0,0.6)', float: 'right' }}>Фильтровать</Button>
      </Widget>
      <Row>
        <Col lg={12}>
          <Widget title={<h5>Все студенты</h5>} settings close>
            <Button style={{ background: 'rgba(0,0,0,0.6)', float: 'right' }}>Добавить студента</Button>
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
                    <tr key={user.id} onClick={() => { change(user.id); toggle(); }}>
                      <td>{user.id}</td>
                      <td>{user.fio}</td>
                      <td>{user.phone}</td>
                      <td>
                        <a href='#'>{user.email}</a>
                      </td>
                      <td>{user.isInvalid ? 'Да' : 'Нет'}</td>
                      <td>{user.largeFamily ? 'Да' : 'Нет'}</td>
                    </tr>
                  )}
                </tbody>
                {/* eslint-enable */}
              </Table>

              {
                <Modal isOpen={isOpen} toggle={toggle} style={{ maxWidth: "1100px" }}>
                  <ModalBody>
                    <Row>
                      <Col xs={12} md={1}>
                        <img src="/static/media/a5.jpg" style={{ width: "170%", height: "auto", objectFit: "contain" }}></img>
                      </Col>
                      <Col xs={12} md={11}>
                        <Table className='table-hover'>
                          <thead>
                            <tr>
                              {thead.map((el, index) => <th key={index}>{el}</th>)}
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>{activeNomber.id}</td>
                              <td>{activeNomber.fio}</td>
                              <td>{activeNomber.phone}</td>
                              <td>
                                <a href='#'>{activeNomber.email}</a>
                              </td>
                              <td>{activeNomber.isInvalid ? 'Да' : 'Нет'}</td>
                              <td>{activeNomber.largeFamily ? 'Да' : 'Нет'}</td>
                            </tr>
                          </tbody>
                        </Table>
                      </Col>
                    </Row>
                  </ModalBody>
                </Modal>
              }
            </div>
          </Widget>
        </Col>
      </Row>
    </div>
  );

}

export default Static;
