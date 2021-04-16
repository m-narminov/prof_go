import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Container,
  Alert,
  Button,
  FormGroup,
  Label,
  InputGroup,
  InputGroupAddon,
  Input,
  InputGroupText,
} from 'reactstrap';
import Widget from '../../components/Widget';
import { loginUser } from '../../actions/user';

import vkLogo from '../../images/social/vkLogo.png';
import facebookLogo from '../../images/social/facebookLogo.png';
import googleLogo from '../../images/social/googleLogo.png';
import rsvLogo from '../../images/social/rsvLogo.png';
import liderLogo from '../../images/social/liderLogo.png';
import logoForm from '../../images/logoForm.png';

import data from '../../data.json';

class Login extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  static isAuthenticated(token) {
    if (token) return true;
  }

  constructor(props) {
    super(props);

    this.state = {
      email: 'admin@elbrus.ru',
      password: 'password',
    };

    this.doLogin = this.doLogin.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.signUp = this.signUp.bind(this);
  }

  changeEmail(event) {
    this.setState({ email: event.target.value });
  }

  changePassword(event) {
    this.setState({ password: event.target.value });
  }

  doLogin(e) {
    e.preventDefault();
    console.log(data.users);
    let res = data.users.find(
      item =>
        item.email === this.state.email && item.password === this.state.password
    );

    if (res)
      this.props.dispatch(
        loginUser({ email: this.state.email, password: this.state.password })
      );
  }

  signUp() {
    this.props.history.push('/register');
  }

  render() {
    const { from } = this.props.location.state || {
      from: { pathname: '/app' },
    }; // eslint-disable-line

    // cant access login page while logged in
    if (
      Login.isAuthenticated(JSON.parse(localStorage.getItem('authenticated')))
    ) {
      return <Redirect to={from} />;
    }

    return (
      <div className='auth-page'>
        <a
          href='https://club-elbrus.ru/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={logoForm} className='logoForm' alt='logoForm' />
        </a>
        <Container>
          <Widget
            className='widget-auth mx-auto'
            title={<h3 className='mt-0'>Войти в систему</h3>}
          >
            <p className='widget-auth-info'>Используйте Ваш почтоый адрес.</p>
            <form onSubmit={this.doLogin}>
              {this.props.errorMessage && (
                <Alert
                  className='alert-sm widget-middle-overflow rounded-0'
                  color='danger'
                >
                  {this.props.errorMessage}
                </Alert>
              )}
              <FormGroup className='mt'>
                <Label for='email'>Почтовый адрес</Label>
                <InputGroup className='input-group-no-border'>
                  <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                      <i className='la la-user text-white' />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    id='email'
                    className='input-transparent pl-3'
                    value={this.state.email}
                    onChange={this.changeEmail}
                    type='email'
                    required
                    name='email'
                    placeholder='Email'
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Label for='password'>Пароль</Label>
                <InputGroup className='input-group-no-border'>
                  <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                      <i className='la la-lock text-white' />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    id='password'
                    className='input-transparent pl-3'
                    value={this.state.password}
                    onChange={this.changePassword}
                    type='password'
                    required
                    name='password'
                    placeholder='Password'
                  />
                </InputGroup>
              </FormGroup>
              <div className='bg-widget auth-widget-footer'>
                <Button
                  type='submit'
                  className='auth-btn'
                  size='sm'
                  style={{ color: '#fff' }}
                >
                  {this.props.isFetching ? 'Вход...' : 'Вход'}
                </Button>
                <p className='widget-auth-info mt-4'>Нету аккаунта? Создай!</p>
                <Link className='d-block text-center mb-4' to='register'>
                  Создать аккаунт
                </Link>
                <div className='blockLink'>
                  <img src={vkLogo} className='socialIcon' alt='logoVk' />
                  <span className='socialMargin'>
                    <img
                      src={facebookLogo}
                      className='socialIcon'
                      alt='logoFacebook'
                    />
                  </span>
                  <img
                    src={googleLogo}
                    className='socialIcon'
                    alt='logoGooglePlus'
                  />
                  <span className='socialMargin'>
                    <img
                      src={liderLogo}
                      className='socialIcon'
                      alt='liderLogo'
                    />
                  </span>
                  <img src={rsvLogo} className='socialIcon' alt='rsvLogo' />
                </div>
              </div>
            </form>
          </Widget>
        </Container>
        <footer className='auth-footer'>2020 &copy; web.elbrus.ru</footer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.auth.isFetching,
    isAuthenticated: state.auth.isAuthenticated,
    errorMessage: state.auth.errorMessage,
  };
}

export default withRouter(connect(mapStateToProps)(Login));
