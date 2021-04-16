import React from 'react';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Badge,
} from 'reactstrap';
import classnames from 'classnames';
import moment from 'moment';

import data from '../../../data.json';
import s from './Icons.module.scss';

class Testing extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      user: {},
      page: 'testing',
      tabs: [],
      activeTab: '1',
    };
  }

  componentDidMount() {
    const user = data.users.find(
      item => item.email === localStorage.getItem('ElbrusEmail')
    );
    const tabs = data.pages[this.state.page].tabs;
    this.setState({ tabs, user });
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab });
    }
  }

  update() {
    const tabs = data.pages[this.state.page].tabs;
    this.setState({ tabs });
    console.log('update, tabs = ', this.state.tabs);
  }

  render() {
    const tabsRender = this.state.tabs.map(tab => (
      <NavItem key={`${this.state.page}-${tab.id}`}>
        <NavLink
          className={classnames({
            active: this.state.activeTab === `${tab.id}`,
          })}
          onClick={() => {
            this.toggle(`${tab.id}`);
          }}
        >
          <span className='mr-xs'>{tab.name}</span>
          <Badge color='primary'>{tab.id === '1' ? 'new' : ''}</Badge>
        </NavLink>
      </NavItem>
    ));

    return (
      <section className={`${s.root} mb-4`}>
        <h1 className='page-title'>Тесты</h1>
        <div>
          <button
            type='submit'
            class='btn btn-default input-group-no-border btn btn-secondary'
            style={{ color: 'rgb(0, 0, 0)', float: 'right' }}
            onClick={() => {
              this.update();
            }}
          >
            Обновить
          </button>
        </div>

        <Nav className='bg-transparent' tabs>
          {tabsRender}
        </Nav>

        <TabContent activeTab={this.state.activeTab}>
          {this.state.tabs.map(tab => {
            const tabMeetupsRender = tab.meetups.map(meetup => {
              const meetupDate = new Date(meetup.startDate);
              const meetupTime = `${meetupDate
                .getHours()
                .toString()
                .padStart(
                  2,
                  '0'
                )}:${meetupDate.getMinutes().toString().padStart(2, '0')}`;

              return (
                <Row className='icon-list' key={`meetup${tab.id}-${meetup.id}`}>
                  <Col md={2} lg={2} xs={12} className='list-item'>
                    {moment(meetupDate).format('L')}
                  </Col>
                  <Col md={1} lg={1} xs={12} className='list-item'>
                    {meetupTime}
                  </Col>
                  <Col md={2} lg={2} xs={12} className='list-item'>
                    <a
                      href='https://rsv.ru/edu/courses/10/185/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {meetup.title}
                    </a>
                  </Col>
                  <Col md={2} lg={2} xs={12} className='list-item'>
                    Мария Гладышева
                  </Col>
                </Row>
              );
            });

            return (
              <TabPane tabId={`${tab.id}`} key={`tab-pane-${tab.id}`}>
                <Row className='icon-list' key={`${tab.id}-header`}>
                  <Col md={2} lg={2} xs={12} className='list-item'>
                    Дата
                  </Col>
                  <Col md={1} lg={1} xs={12} className='list-item'>
                    Время
                  </Col>
                  <Col md={2} lg={2} xs={12} className='list-item'>
                    Тема
                  </Col>
                  <Col md={2} lg={2} xs={12} className='list-item'>
                    Спикер
                  </Col>
                </Row>

                {tabMeetupsRender}
              </TabPane>
            );
          })}
        </TabContent>
      </section>
    );
  }
}

export default Testing;
