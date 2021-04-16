import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

import a1 from '../../../images/people/a1.jpg';
import a2 from '../../../images/people/a2.jpg';
import a4 from '../../../images/people/a4.jpg';
import a6 from '../../../images/people/a6.jpg';
import avatar from '../../../images/avatar.png';

import s from './ListGroup.module.scss'; // eslint-disable-line

class MessagesDemo extends React.Component {
  render() {
    return (
      <ListGroup className={[s.listGroup, 'thin-scroll'].join(' ')}>
        <ListGroupItem
          className={[s.listGroupItem, 'bg-warning-light'].join(' ')}
        >
          <span className={[s.notificationIcon, 'thumb-sm'].join(' ')}>
            <img className='rounded-circle' src={a2} alt='...' />
            <i className='status status-bottom bg-success' />
          </span>
          <time className='text-link help float-right'>10 сек назад</time>
          <h6 className='m-0 fw-bold mb-1'>Олег Гришин</h6>
          <p className='deemphasize text-ellipsis m-0'>
            Отличная работа! Где научился?
          </p>
        </ListGroupItem>
        <ListGroupItem className={s.listGroupItem}>
          <span className={[s.notificationIcon, 'thumb-sm'].join(' ')}>
            <img className='rounded-circle' src={avatar} alt='...' />
            <i className='status status-bottom bg-success' />
          </span>
          <time className='text-link help float-right'>2 мин назад</time>
          <h6 className='m-0 mb-1'>Антон Богуславский</h6>
          <p className='deemphasize text-ellipsis m-0'>
            Привет, у меня есть один вопрос
          </p>
        </ListGroupItem>
        <ListGroupItem className={s.listGroupItem}>
          <span className={[s.notificationIcon, 'thumb-sm'].join(' ')}>
            <img className='rounded-circle' src={a1} alt='...' />
            <i className='status status-bottom bg-warning' />
          </span>
          <time className='text-link help float-right'>9 мин назад</time>
          <h6 className='m-0 mb-1'>Лариса Максимова</h6>
          <p className='deemphasize text-ellipsis m-0'>Посмотри на почте!</p>
        </ListGroupItem>
        <ListGroupItem className={s.listGroupItem}>
          <span className={[s.notificationIcon, 'thumb-sm'].join(' ')}>
            <img className='rounded-circle' src={avatar} alt='...' />
            <i className='status status-bottom bg-danger' />
          </span>
          <time className='text-link help float-right'>12:56</time>
          <h6 className='m-0 mb-1'>Василий Федоров</h6>
          <p className='deemphasize text-ellipsis m-0'>
            1231312312312312312312312
          </p>
        </ListGroupItem>
        <ListGroupItem className={s.listGroupItem}>
          <span className={[s.notificationIcon, 'thumb-sm'].join(' ')}>
            <img className='rounded-circle' src={a4} alt='...' />
            <i className='status status-bottom bg-gray-light' />
          </span>
          <time className='text-link help float-right'>Вчера</time>
          <h6 className='m-0 mb-1'>Никита Орлов</h6>
          <p className='deemphasize text-ellipsis m-0'>
            вафывлаофлырвполфтывлдоалфдыовдлаофыв
          </p>
        </ListGroupItem>
        <ListGroupItem className={s.listGroupItem}>
          <span className={[s.notificationIcon, 'thumb-sm'].join(' ')}>
            <img className='rounded-circle' src={a6} alt='...' />
            <i className='status status-bottom bg-success' />
          </span>
          <time className='text-link help float-right'>23 Апреля 2020</time>
          <h6 className='m-0 mb-1'>Дарья Шапошникова</h6>
          <p className='deemphasize text-ellipsis m-0'>
            фаывафывафывафырвопрфывралорфыоварфлывлоар???
          </p>
        </ListGroupItem>
      </ListGroup>
    );
  }
}

export default MessagesDemo;
