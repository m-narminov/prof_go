import React, { useEffect, useState } from 'react';
import { Row, Col, Table, Modal, FormGroup, Label, Input, InputGroup, Button, InputGroupAddon, InputGroupText } from 'reactstrap';
import ModalBody from 'reactstrap/lib/ModalBody';
import Widget from '../../components/Widget';
import s from '../tables/static/Static.module.scss';

const thead = ['#', 'ФИО', 'Телефон', 'Дата рождения', 'Среднее профессиональное образование']

const Staff = () => {
  const [statements, setStatements] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [activeNumber, setActiveNumber] = useState({})

  const change = (e) => setActiveNumber(statements[e])
  const toggle = () => setIsOpen(!isOpen)

  useEffect(() => {
    fetch('/api/statement')
      .then(res => res.json())
      .then(result => {
        setStatements(result.data)
      })
    return () => {

    }
  }, [])

  return (
    <div className={s.root}>
      <Widget title={<h5>Поиск заявлений</h5>}>
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
        <Button style={{ background: 'rgba(0,0,0,0.6)', float: 'right' }}>Фильтровать</Button>
      </Widget>
      <h2 className='page-title'>Список подавших заявление</h2>
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
                  {statements.map((user, index) =>
                    <tr key={user.id} onClick={() => { change(index); toggle(); }}>
                      <td>{user.id}</td>
                      <td>{user.fio}</td>
                      <td>{user.phone}</td>
                      <td>{user.birthday}</td>
                      <td>{user.spo}</td>
                    </tr>
                  )}
                </tbody>
                {/* eslint-enable */}
              </Table>
              <Modal isOpen={isOpen} toggle={toggle} style={{ maxWidth: "1100px" }}>
                <ModalBody>
                  <Row>
                    {/* <Col xs={12} md={1}>
                      <img src="/static/media/a5.jpg" style={{ width: "170%", height: "auto", objectFit: "contain" }}></img>
                    </Col> */}
                    <Col xs={12} md={12}>
                      <Table className='table-hover'>
                        <thead>
                          <tr>
                            {thead.map((el, index) => <th key={index}>{el}</th>)}
                            <th>Специализация</th>
                            {/* <th>Домашний телефон</th>
                            <th>Наименование школы</th>
                            <th>Номер аттестата</th>
                            <th>Форма обучения</th> */}
                          </tr>
                        </thead>
                        <tbody>
                          {activeNumber &&
                            <tr>
                              <td>{activeNumber.id}</td>
                              <td>{activeNumber.fio}</td>
                              <td>{activeNumber.phone}</td>
                              <td>{activeNumber.birthday}</td>
                              <td>{activeNumber.spo}</td>
                              <td>{activeNumber.specialization}</td>
                            </tr>
                          }
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                </ModalBody>
              </Modal>
            </div>
          </Widget>
        </Col>
      </Row>
    </div>
  )
};

export default Staff;
