import React from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

import s from './ListGroup.module.scss';

import a3 from '../../../images/people/a3.jpg';
import a5 from '../../../images/people/a5.jpg';

class NotificationsDemo extends React.Component {
  render() {
    return (
      <ListGroup className={[s.listGroup, 'thin-scroll'].join(' ')}>
        <ListGroupItem className={s.listGroupItem}>
          <span className={[s.notificationIcon, 'thumb-sm'].join(' ')}>
            <img className='rounded-circle' src={a3} alt='...' />
          </span>
          <p className='m-0 overflow-hidden'>
            Зарегистрирован 1 новый пользователь -{/* eslint-disable */}
            &nbsp;<a href='#'>Елена Репина</a>.{/* eslint-enable */}
            <time className='help-block m-0'>3 мин назад</time>
          </p>
        </ListGroupItem>
        <ListGroupItem className={s.listGroupItem}>
          <span className={[s.notificationIcon, 'thumb-sm'].join(' ')}>
            <i className='glyphicon glyphicon-upload fa-lg' />
          </span>
          <p className='text-ellipsis m-0'>
            Доступен новый курс.
            <time className='help-block m-0'>3 ч назад</time>
          </p>
        </ListGroupItem>
        <ListGroupItem className={s.listGroupItem}>
          <span className={[s.notificationIcon, 'thumb-sm'].join(' ')}>
            <i className='fa fa-bolt fa-lg' />
          </span>
          <p className='text-ellipsis m-0 overflow-hidden'>
            Получен новый сертификат.
            <time className='help-block m-0'>7 ч назад</time>
          </p>
        </ListGroupItem>
        <ListGroupItem className={s.listGroupItem}>
          <span className={[s.notificationIcon, 'thumb-sm'].join(' ')}>
            <img className='rounded-circle' src={a5} alt='...' />
          </span>
          <p className='m-0 overflow-hidden'>
            {/* eslint-disable */}
            <a href='#'>Алексей</a> приглашает вас на вебинар
            {/* eslint-enable */}
            &nbsp;&nbsp;
            <Button size='xs' color='success' className='mr-1'>
              Принять
            </Button>
            <Button size='xs' color='danger'>
              Отклонить
            </Button>
            <time className='help-block m-0'>12:18</time>
          </p>
        </ListGroupItem>
        <ListGroupItem className={s.listGroupItem}>
          <span className={[s.notificationIcon, 'thumb-sm'].join(' ')}>
            <i className='fa fa-shield fa-lg' />
          </span>
          <p className='m-0 overflow-hidden'>
            {/* eslint-disable */}
            Обнаружен вход с другого устройства, проверьте настройки
            безопасности <a href='#'>безопасность</a>.{/* eslint-enable */}
            <time className='help-block m-0'>12:18</time>
          </p>
        </ListGroupItem>

        <ListGroupItem className={s.listGroupItem}>
          <span className={[s.notificationIcon, 'thumb-sm'].join(' ')}>
            <span className='circle circle-lg bg-gray-dark'>
              <i className='fa fa-circle-o text-white' />
            </span>
          </span>
          <p className='text-ellipsis m-0'>
            Вы пропустили вебинар
            <time className='help-block m-0'>15 Сентября 2020</time>
          </p>
        </ListGroupItem>
      </ListGroup>
    );
  }
}

export default NotificationsDemo;
