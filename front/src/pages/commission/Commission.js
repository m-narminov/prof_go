import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import uuid from 'uuid/v4';
import Widget from '../../components/Widget/Widget';
import s from './Notifications.module.scss';

class Commission extends React.Component {
  state = {
    options: {
      position: 'top-right',
      autoClose: 5000,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
    },
  };

  retryNotification = id =>
    toast.update(id, {
      ...this.state.options,
      render: 'Alien planet destroyed!',
      type: toast.TYPE.SUCCESS,
    });

  toSend(event) {
    event.preventDefault();

   fetch(`https://flask-hak.herokuapp.com/setmsg?msg=Новый абитуриет у вуза ${event.target.select1.value}! ${event.target.family.value} ${event.target.name.value} ${event.target.nameO.value}, телефон: ${event.target.phone.value}`)
    .then((response) => {
      return console.log('ok')
    })
  }

  render() {
    return (
      <div className={s.root}>
        <h1 className='page-title'>On-line подача заявления на поступление в проф. уч.</h1>

        <Widget title={<h6> Форма подачи </h6>} close collapse settings>
          <Form onSubmit={this.toSend}>
            <FormGroup check style={{marginBottom: '30px'}}>
              <Label check>
                <Input type="checkbox" />{' '}
                Я родитель
              </Label>
            </FormGroup>
            <FormGroup>
              <Label>Фамилия</Label>
              <Input type="text" name="family" required placeholder="Петров" />              
            </FormGroup>
            <FormGroup>
              <Label>Имя</Label>
              <Input type="text" name="name" required placeholder="Василий" />              
            </FormGroup>  
            <FormGroup>
              <Label>Отчество</Label>
              <Input type="text" name="nameO" required placeholder="Василиевич" />              
            </FormGroup>  
            <FormGroup>
              <Label>Дата рождения</Label>
              <Input type="text" name="date" required placeholder="19.05.1999" />              
            </FormGroup>             
            <FormGroup>
              <Label for="exampleSelect">Вуз профессионального образования</Label>
              <Input type="select" name="select1" id="exampleSelect">
                <option>1 технический</option>
                <option>2 юридический</option>
                <option>3 фермерское дело ГПос</option>
                <option>4 лучший </option>
                <option>5 филиал </option>
              </Input>
            </FormGroup>  
            <FormGroup>
              <Label for="exampleSelect">Специализация</Label>
              <Input type="select" name="select2" id="exampleSelect">
                <option>информационные технологии</option>
                <option>Менеджмент</option>
                <option>Фермер и слесарь</option>
                <option>Математика и естественные науки</option>
                <option>Повар</option>
              </Input>
            </FormGroup>            
            <FormGroup>
              <Label>Телефон</Label>
              <Input type="text" name="phone"  required placeholder="+7 999 999 99 99" />              
            </FormGroup>  
            <FormGroup>
              <Label>Домашний телефон ( не обязательно )</Label>
              <Input type="text" name="phoneD" placeholder="+4 999 999 99 99" />              
            </FormGroup> 
            <FormGroup>
              <Label for="exampleText">Наименование школы</Label>
              <Input type="textarea" name="text" required id="exampleText" placeholder="МОУ СОШ, Муниципальное общеобразовательное учреждение гимназия №1 имени А.С. Пушкина города Томска Томской области"/>
            </FormGroup>
            <FormGroup>
              <Label>Номер аттестата</Label>
              <Input type="text" name="attestat" required  placeholder="70 АБ 002004" />              
            </FormGroup> 
            <FormGroup>
              <Label for="exampleFile">Скан аттестата</Label>
              <Input type="file" name="file" id="exampleFile" />
              <FormText color="muted">
                PDF или JPEG не более 3мб
              </FormText>
            </FormGroup>
            <FormGroup tag="fieldset">
              <legend>Форма обучения</legend>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" />{' '}
                  Очная
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" />{' '}
                  Заочная
                </Label>
              </FormGroup>
              <FormGroup check disabled>
                <Label check>
                  <Input type="radio" name="radio1" disabled />{' '}
                  Очно-заочная
                </Label>
              </FormGroup>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" />{' '}
                Согласен на обработку персональных данных
              </Label>
            </FormGroup>
            <Button style={{marginTop: '10px', background: 'rgba(0,0,0,0.6)'}}>Отправить</Button>
          </Form>
        </Widget>
      </div>
    );
  }
}

export default Commission;
