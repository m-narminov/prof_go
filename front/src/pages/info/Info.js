import React, { useState, useEffect } from 'react';
import { Row, Col } from 'reactstrap';
import { Alert, Button, FormGroup, Label, InputGroup, Input } from 'reactstrap';
import Widget from '../../components/Widget';
import data from '../../data.json';

const Info = props => {
  const [user, setUser] = useState({
    id: '',
    birthday: '',
    location: '',
    email: '',
    password: '',
    genders: '',
    events: '',
    organization: '',
    link: {
      vk: '',
      instagram: '',
    },
    phone: '',
    telegram: '',
    surname: '',
    name: '',
    patronymic: '',
    scores: '',
    statusStudy: '',
  });

  const changeField = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    let res = data.users.find(
      item => item.email === localStorage.getItem('ElbrusEmail')
    );
    setUser(res);
    document.getElementById('gender').value = res && res.genders;
    document.getElementById('education').value = res && res.statusStudy;
  }, [user]);

  return (
    <div>
      <h1 className='page-title'>Персональные данные</h1>
      <Row>
        <Col xs={12} md={6}>
          <Widget title={<h5>Личная информация</h5>} close collapse>
            <form
              onSubmit={() => {
                console.log(data.users[user.id - 1]);
                data.users[user.id - 1].surname = 'остоевский';
              }}
            >
              {props.errorMessage && (
                <Alert
                  className='alert-sm widget-middle-overflow rounded-0'
                  color='danger'
                >
                  {props.errorMessage}
                </Alert>
              )}
              <FormGroup className='mt'>
                <Label for='surname'>Фамилия</Label>
                <InputGroup className='input-group-no-border'>
                  <Input
                    id='surname'
                    className='input-transparent pl-3'
                    value={user.surname}
                    onChange={changeField}
                    required
                    name='surname'
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Label for='name'>Имя</Label>
                <InputGroup className='input-group-no-border'>
                  <Input
                    id='name'
                    className='input-transparent pl-3'
                    value={user.name}
                    onChange={changeField}
                    required
                    name='name'
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Label for='partonimyc'>Отчество</Label>
                <InputGroup className='input-group-no-border'>
                  <Input
                    id='patronimyc'
                    className='input-transparent pl-3'
                    value={user.patronymic}
                    onChange={changeField}
                    name='patronimyc'
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Label for='email'>Почтовый адрес</Label>
                <InputGroup className='input-group-no-border'>
                  <Input
                    id='email'
                    className='input-transparent pl-3'
                    value={user.email}
                    onChange={changeField}
                    type='email'
                    required
                    name='email'
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Label for='password'>Логин</Label>
                <InputGroup className='input-group-no-border'>
                  <Input
                    id='password'
                    className='input-transparent pl-3'
                    value={user.password}
                    onChange={changeField}
                    type='password'
                    required
                    name='password'
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Label for='phone'>Номер телефона</Label>
                <InputGroup className='input-group-no-border'>
                  <Input
                    id='phone'
                    className='input-transparent pl-3'
                    value={user.phone}
                    onChange={changeField}
                    type='phone'
                    required
                    name='phone'
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Label for='birthday'>Дата рождения</Label>
                <InputGroup className='input-group-no-border'>
                  <Input
                    id='birthday'
                    className='input-transparent pl-3'
                    value={user.birthday}
                    onChange={changeField}
                    type='date'
                    required
                    name='birthday'
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Label for='birthday'>Пол</Label>
                <InputGroup className='input-group-no-border'>
                  <select
                    name='gender'
                    id='gender'
                    class='input-transparent pl-3 form-control'
                    onChange={changeField}
                  >
                    <option value='male'>Мужской</option>
                    <option value='female'>Женский</option>
                  </select>
                </InputGroup>
              </FormGroup>
              <FormGroup style={{ textAlign: 'center' }}>
                <Button
                  type='submit'
                  className='btn btn-default input-group-no-border'
                  style={{ color: '#000' }}
                >
                  {'Сохранить'}
                </Button>
              </FormGroup>
            </form>
          </Widget>
        </Col>
        <Col xs={12} md={6}>
          <Widget title={<h5>Образование</h5>} close collapse>
            <FormGroup>
              <select
                name='education'
                id='education'
                class='input-transparent pl-3 form-control'
                onChange={changeField}
              >
                <option value='1'>Школьник</option>
                <option value='2'>Среднее</option>
                <option value='3'>Среднее специальное</option>
                <option value='4'>Высшее</option>
                <option value='5'>Аспирантура</option>
                <option value='6'>Ученая степень</option>
              </select>
            </FormGroup>
            <FormGroup>
              <Label for='organization'>Учебное заведение</Label>
              <InputGroup className='input-group-no-border'>
                <Input
                  id='organization'
                  className='input-transparent pl-3'
                  value={user.organization}
                  onChange={changeField}
                  name='organization'
                />
              </InputGroup>
            </FormGroup>
          </Widget>

          <Widget title={<h5>Социальные сети</h5>} close collapse>
            <FormGroup>
              <Label for='linkVK'>Вконтакте</Label>
              <InputGroup className='input-group-no-border'>
                <Input
                  id='linkVK'
                  className='input-transparent pl-3'
                  value={user.link && user.link.vk}
                  onChange={changeField}
                  name='linkVK'
                />
              </InputGroup>
            </FormGroup>

            <FormGroup>
              <Label for='linkInstagram'>Инстаграм</Label>
              <InputGroup className='input-group-no-border'>
                <Input
                  id='linkInstagram'
                  className='input-transparent pl-3'
                  value={user.link && user.link.instagram}
                  onChange={changeField}
                  name='linkInstagram'
                />
              </InputGroup>
            </FormGroup>

            <FormGroup>
              <Label for='linkTlg'>Телеграм</Label>
              <InputGroup className='input-group-no-border'>
                <Input
                  id='linkTlg'
                  className='input-transparent pl-3'
                  value={user.telegram}
                  onChange={changeField}
                  name='linkTlg'
                />
              </InputGroup>
            </FormGroup>
          </Widget>

          <Widget title={<h5>Прочее</h5>} close collapse>
            <FormGroup>
              <Label for='scores'>Эльбрус Коины</Label>
              <InputGroup className='input-group-no-border'>
                <Input
                  id='scores'
                  className='input-transparent pl-3'
                  value={user.scores}
                  onChange={changeField}
                  name='scores'
                />
              </InputGroup>
            </FormGroup>
          </Widget>
        </Col>
      </Row>
    </div>
  );
};

export default Info;
