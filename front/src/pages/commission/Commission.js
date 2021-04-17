import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    data: {
      lastName: '',
      firstName: '',
      middleName: '',
      birthday: '',
      spo: '',
      specialization: '',
      phone: '',
      home_phone: '',
      school: '',
      certificate: '',
      isParent: false,
      certificate_scan: '',
      education_form: ''
    },
    allowPersonal: false
  };

  retryNotification = id =>
    toast.update(id, {
      ...this.state.options,
      render: 'Alien planet destroyed!',
      type: toast.TYPE.SUCCESS,
    });

  toSend = event => {
    event.preventDefault();
    const lastName = this.state.data.lastName
    const firstName = this.state.data.firstName
    const middleName = this.state.data.middleName
    const toSendData = {
      ...this.state.data,
      fio: `${lastName} ${firstName} ${middleName}`
    }
    const data = JSON.stringify(toSendData)

    // fetch(`https://flask-hak.herokuapp.com/setmsg?msg=Новый абитуриет у вуза ${event.target.select1.value}! ${event.target.family.value} ${event.target.name.value} ${event.target.nameO.value}, телефон: ${event.target.phone.value}`)
    //   .then(response => {
    //     // return console.log('ok')
    //     return response.json()
    //   })

    fetch('/api/statement', {
      method: 'POST',
      body: data,
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(res => {
        console.log(res)
        return res.json()
      })
      .then(data => {
        console.log(data);
        this.setState({
          ...this.state, data: {
            lastName: '',
            firstName: '',
            middleName: '',
            birthday: '',
            spo: '',
            specialization: '',
            phone: '',
            home_phone: '',
            school: '',
            certificate: '',
            isParent: false,
            certificate_scan: '',
            education_form: ''
          }
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  onChange = e => {
    e.persist()
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    })
  }

  render() {
    return (
      <div className={s.root}>
        <h1 className='page-title'>On-line подача заявления на поступление в проф. уч.</h1>
        <Widget title={<h6> Форма подачи </h6>} close collapse settings>
          <Form onSubmit={this.toSend}>
            <FormGroup check style={{ marginBottom: '30px' }}>
              <Label check>
                <Input type="checkbox" onChange={() =>
                  this.setState({ ...this.state, data: { ...this.state.data, isParent: !this.state.data.isParent } })
                } />{' '}
                Я родитель
              </Label>
            </FormGroup>
            <FormGroup>
              <Label>Фамилия</Label>
              <Input
                type="text"
                name="lastName"
                required
                placeholder="Петров"
                onChange={this.onChange}
                value={this.state.data.lastName}
              />
            </FormGroup>
            <FormGroup>
              <Label>Имя</Label>
              <Input
                type="text"
                name="firstName"
                required
                placeholder="Василий"
                onChange={this.onChange}
                value={this.state.data.firstName}
              />
            </FormGroup>
            <FormGroup>
              <Label>Отчество</Label>
              <Input
                type="text"
                name="middleName"
                required
                placeholder="Василиевич"
                onChange={this.onChange}
                value={this.state.data.middleName}
              />
            </FormGroup>
            <FormGroup>
              <Label>Дата рождения</Label>
              <Input
                type="text"
                name="birthday"
                required
                placeholder="19.05.1999"
                onChange={this.onChange}
                value={this.state.data.birthday}
              />
            </FormGroup>
            <FormGroup>
              <Label for="spo">Среднее профессиональное образование</Label>
              <Input type="select" name="select1" id="spo" name="spo" onChange={this.onChange}>
                <option>Асиновский техникум промышленной индустрии и сервиса</option>
                <option>Каргасокский техникум промышленности и речного транспорта</option>
                <option>Кожевниковский техникум агробизнеса</option>
                <option>Колледж индустрии питания, торговли и сферы услуг</option>
                <option>Томский аграрный колледж</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="specialization">Специализация</Label>
              <Input type="select" name="specialization" id="specialization" onChange={this.onChange}>
                <option>информационные технологии</option>
                <option>Менеджмент</option>
                <option>Фермер и слесарь</option>
                <option>Математика и естественные науки</option>
                <option>Повар</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label>Телефон</Label>
              <Input
                type="text"
                name="phone"
                required
                placeholder="+7 999 999 99 99"
                onChange={this.onChange}
                value={this.state.data.phone}
              />
            </FormGroup>
            <FormGroup>
              <Label>Домашний телефон ( не обязательно )</Label>
              <Input
                type="text"
                name="phoneD"
                placeholder="+4 999 999 99 99"
                onChange={this.onChange}
                value={this.state.data.home_phone}
              />
            </FormGroup>
            <FormGroup>
              <Label for="school">Наименование школы</Label>
              <Input
                type="textarea"
                name="school"
                required id="school"
                placeholder="МОУ СОШ, Муниципальное общеобразовательное учреждение гимназия №1 имени А.С. Пушкина города Томска Томской области"
                onChange={this.onChange}
                value={this.state.data.school}
              />
            </FormGroup>
            <FormGroup>
              <Label>Номер аттестата</Label>
              <Input
                type="text"
                name="certificate"
                required
                placeholder="70 АБ 002004"
                onChange={this.onChange}
                value={this.state.data.certificate}
              />
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
                  <Input
                    type="radio"
                    name="education_form"
                    checked={this.state.data.education_form === 'Очная'}
                    onChange={this.onChange}
                    value="Очная"
                  />{' '}
                  Очная
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="radio"
                    name="education_form"
                    checked={this.state.data.education_form === 'Заочная'}
                    onChange={this.onChange}
                    value="Заочная"
                  />{' '}
                  Заочная
                </Label>
              </FormGroup>
              <FormGroup check disabled>
                <Label check>
                  <Input
                    type="radio"
                    name="education_form"
                    disabled
                    checked={this.state.data.education_form === 'Очно-заочная'}
                    onChange={this.onChange}
                    value="Очно-заочная"
                  />{' '}
                  Очно-заочная
                </Label>
              </FormGroup>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  checked={this.state.allowPersonal}
                  onChange={() => this.setState({ ...this.state, allowPersonal: !this.state.allowPersonal })}
                />{' '}
                Согласен на обработку персональных данных
              </Label>
            </FormGroup>
            <Button
              style={{ marginTop: '10px' }}
              disabled={!this.state.allowPersonal}
            >Отправить</Button>
          </Form>
        </Widget>
      </div>
    );
  }
}

export default Commission;
