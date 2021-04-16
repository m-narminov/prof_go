import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Input,
  Dropdown,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  Form,
  FormGroup,
} from 'reactstrap';
import Notifications from '../Notifications';
import { logoutUser } from '../../actions/user';
import {
  openSidebar,
  closeSidebar,
  changeSidebarPosition,
  changeSidebarVisibility,
} from '../../actions/navigation';

import data from '../../data.json';
import sender1 from '../../images/1.png';
import sender2 from '../../images/2.png';
import sender3 from '../../images/3.png';

import avatar from '../../images/people/a5.jpg';

import s from './Header.module.scss';
import 'animate.css';

class Header extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    sidebarPosition: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.doLogout = this.doLogout.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
    this.toggleMessagesDropdown = this.toggleMessagesDropdown.bind(this);
    this.toggleSupportDropdown = this.toggleSupportDropdown.bind(this);
    this.toggleSettingsDropdown = this.toggleSettingsDropdown.bind(this);
    this.toggleAccountDropdown = this.toggleAccountDropdown.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.toggleSearchOpen = this.toggleSearchOpen.bind(this);

    this.state = {
      visible: true,
      messagesOpen: false,
      supportOpen: false,
      settingsOpen: false,
      searchFocused: false,
      searchOpen: false,
      notificationsOpen: false,
      user: {
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
      },
    };
  }

  componentDidMount() {
    let res = data.users.find(
      item => item.email === localStorage.getItem('ElbrusEmail')
    );

    this.setState({ user: res });
  }

  toggleNotifications = () => {
    this.setState({
      notificationsOpen: !this.state.notificationsOpen,
    });
  };

  onDismiss() {
    this.setState({ visible: false });
  }

  doLogout() {
    this.props.dispatch(logoutUser());
  }

  toggleMessagesDropdown() {
    this.setState({
      messagesOpen: !this.state.messagesOpen,
    });
  }

  toggleSupportDropdown() {
    this.setState({
      supportOpen: !this.state.supportOpen,
    });
  }

  toggleSettingsDropdown() {
    this.setState({
      settingsOpen: !this.state.settingsOpen,
    });
  }

  toggleAccountDropdown() {
    this.setState({
      accountOpen: !this.state.accountOpen,
    });
  }

  toggleSearchOpen() {
    this.setState({
      searchOpen: !this.state.searchOpen,
    });
  }

  toggleSidebar() {
    this.props.isSidebarOpened
      ? this.props.dispatch(closeSidebar())
      : this.props.dispatch(openSidebar());
  }

  moveSidebar(position) {
    this.props.dispatch(changeSidebarPosition(position));
  }

  toggleVisibilitySidebar(visibility) {
    this.props.dispatch(changeSidebarVisibility(visibility));
  }

  render() {
    return (
      <Navbar className={`d-print-none ${s.root}`}>
        <Collapse
          className={`${s.searchCollapse} ml-lg-0 mr-md-3`}
          isOpen={this.state.searchOpen}
        >
          <InputGroup
            className={`${s.navbarForm} ${
              this.state.searchFocused ? s.navbarFormFocused : ''
            }`}
          >
            <InputGroupAddon addonType='prepend' className={s.inputAddon}>
              <InputGroupText>
                <i className='fa fa-search' />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              id='search-input-2'
              placeholder='Поиск...'
              className='input-transparent'
              onFocus={() => this.setState({ searchFocused: true })}
              onBlur={() => this.setState({ searchFocused: false })}
            />
          </InputGroup>
        </Collapse>
        <Form className='d-md-down-none mr-3 ml-3' inline>
          <FormGroup>
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
        </Form>

        <Nav className='ml-md-0 d-flex nav-responsive'>
          <Dropdown
            nav
            isOpen={this.state.notificationsOpen}
            toggle={this.toggleNotifications}
            id='basic-nav-dropdown'
            className={`${s.notificationsMenu}`}
            style={{ marginRight: 'auto' }}
          >
            <DropdownToggle nav caret style={{ color: '#f4f4f5', padding: 0 }}>
              <span
                className={`${s.avatar} rounded-circle thumb-sm float-left mr-2`}
              >
                <img src={avatar} alt='...' />
              </span>
              <span
                className={`small ${s.accountCheck}`}
              >{`${this.state.user.name} ${this.state.user.surname}`}</span>
              <Badge className={s.badge} color='primary'>
                13
              </Badge>
            </DropdownToggle>
            <DropdownMenu
              right
              className={`${s.notificationsWrapper} py-0 animate__animated animate__faster animate__fadeInUp`}
            >
              <Notifications />
            </DropdownMenu>
          </Dropdown>
          <NavItem className='d-lg-none d-md-block d-sm-none'>
            <NavLink
              onClick={this.toggleSearchOpen}
              className={s.navItem}
              href='#'
            >
              <i className='glyphicon glyphicon-search text-white' />
            </NavLink>
          </NavItem>
          <Dropdown
            nav
            isOpen={this.state.messagesOpen}
            toggle={this.toggleMessagesDropdown}
          >
            <DropdownToggle nav className={`${s.navItem} text-white`}>
              <i className='glyphicon glyphicon-comments' />
            </DropdownToggle>
            <DropdownMenu className={`${s.dropdownMenu} ${s.messages}`}>
              <DropdownItem>
                <img className={s.image} src={sender1} alt='' />
                <div className={s.details}>
                  <div>Тамара Васильева</div>
                  <div className={s.text}>
                    Привет, напоминаю, что сегодня ...
                  </div>
                </div>
              </DropdownItem>
              <DropdownItem>
                <img className={s.image} src={sender2} alt='' />
                <div className={s.details}>
                  <div>Владимир Смирнов</div>
                  <div className={s.text}>Сегодня я занят</div>
                </div>
              </DropdownItem>
              <DropdownItem>
                <img className={s.image} src={sender3} alt='' />
                <div className={s.details}>
                  <div>Михаил Михайлов</div>
                  <div className={s.text}>Это так необходимо? А как же ...</div>
                </div>
              </DropdownItem>
              <DropdownItem>
                {/* eslint-disable-next-line */}
                <a href='#' className='text-white'>
                  Просмотреть все сообщения <i className='fa fa-arrow-right' />
                </a>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavItem className={`${s.divider} text-white`} />
          <Dropdown
            nav
            isOpen={this.state.supportOpen}
            toggle={this.toggleSupportDropdown}
          >
            <DropdownMenu right className={`${s.dropdownMenu} ${s.support}`}>
              <DropdownItem>
                <Badge color='danger'>
                  <i className='fa fa-bell-o' />
                </Badge>
                <div className={s.details}>Check out this awesome ticket</div>
              </DropdownItem>
              <DropdownItem>
                <Badge color='warning'>
                  <i className='fa fa-question-circle' />
                </Badge>
                <div className={s.details}>What is the best way to get ...</div>
              </DropdownItem>
              <DropdownItem>
                <Badge color='success'>
                  <i className='fa fa-info-circle' />
                </Badge>
                <div className={s.details}>
                  This is just a simple notification
                </div>
              </DropdownItem>
              <DropdownItem>
                <Badge color='info'>
                  <i className='fa fa-plus' />
                </Badge>
                <div className={s.details}>12 new orders has arrived today</div>
              </DropdownItem>
              <DropdownItem>
                <Badge color='danger'>
                  <i className='fa fa-tag' />
                </Badge>
                <div className={s.details}>
                  One more thing that just happened
                </div>
              </DropdownItem>
              <DropdownItem>
                {/* eslint-disable-next-line */}
                <a href='#' className='text-white'>
                  See all tickets <i className='fa fa-arrow-right' />
                </a>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavItem>
            <NavLink
              onClick={this.doLogout}
              className={`${s.navItem} text-white`}
              href='#'
            >
              <i className='glyphicon glyphicon-off' />
            </NavLink>
          </NavItem>
          <NavItem className='d-md-none'>
            <NavLink
              onClick={this.toggleSidebar}
              className={`${s.navItem} text-white`}
              href='#'
            >
              <i className='fa fa-bars' />
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

function mapStateToProps(store) {
  return {
    isSidebarOpened: store.navigation.sidebarOpened,
    sidebarVisibility: store.navigation.sidebarVisibility,
    sidebarPosition: store.navigation.sidebarPosition,
  };
}

export default withRouter(connect(mapStateToProps)(Header));
