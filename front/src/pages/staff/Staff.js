import React, { useEffect, useState } from 'react';
import { Row, Col, Table, Modal } from 'reactstrap';
import ModalBody from 'reactstrap/lib/ModalBody';
import Widget from '../../components/Widget';
import s from '../tables/static/Static.module.scss';

const thead = ['#', 'ФИО', 'Телефон', 'Email', 'Дата рождения', 'Среднее профессиональное образование']
const users = [
  {
    id: 1,
    fio: 'Достоевский Федор Михайлович',
    phone: '9992221155',
    email: 'sam@example.com',
    DateBirth: "25.06.1994",
    education: "Асиновский техникум промышленной индустрии и сервиса"
  },
  {
    id: 2,
    fio: 'Раскольников Родион Романович',
    phone: '9992221155',
    email: 'fat.thor@example.com',
    DateBirth: "25.06.1994",
    education: "Каргасокский техникум промышленности и речного транспорта"
  },
  {
    id: 3,
    fio: 'Мармеладова Соня Семеновна',
    phone: '9992221155',
    email: 'larry@example.com',
    DateBirth: "25.06.1994",
    education: "Томский аграрный колледж"
  },
  {
    id: 4,
    fio: 'Раскольникова Авдотья Романовна',
    phone: '9992221155',
    email: 'peter@example.com',
    DateBirth: "25.06.1994",
    education: "Кожевниковский техникум агробизнеса"
  }
]

const Staff = () => {
  const [statements, setStatements] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [activeNomber, setActiveNomber] = useState(users[0])

  const change = (e) => setActiveNomber(users[e - 1])
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
                  {statements.map(user =>
                    <tr key={user.id} onClick={() => { change(user.id); toggle(); }}>
                      <td>{user.id}</td>
                      <td>{user.fio}</td>
                      <td>{user.phone}</td>
                      <td>
                        <a href='#'>{user.email}</a>
                      </td>
                      <td>{user.DateBirth}</td>
                      <td>{user.education}</td>
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
                              <th>Специализация</th>
                              <th>Домашний телефон</th>
                              <th>Наименование школы</th>
                              <th>Номер аттестата</th>
                              <th>Форма обучения</th>
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
                              <td>{activeNomber.birthday}</td>
                              <td>{activeNomber.education_form}</td>
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
  )
};

export default Staff;
