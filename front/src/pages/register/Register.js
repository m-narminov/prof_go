import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Container,
  Alert,
  Button,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Label,
} from 'reactstrap';
import Widget from '../../components/Widget';
import { registerUser, registerError } from '../../actions/register';
import Login from '../login';

import vkLogo from '../../images/social/vkLogo.png';
import facebookLogo from '../../images/social/facebookLogo.png';
import googleLogo from '../../images/social/googleLogo.png';
import rsvLogo from '../../images/social/rsvLogo.png';
import liderLogo from '../../images/social/liderLogo.png';
import logoForm from '../../images/logoForm.png';

class Register extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
    };

    this.doRegister = this.doRegister.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changeConfirmPassword = this.changeConfirmPassword.bind(this);
    this.checkPassword = this.checkPassword.bind(this);
    this.isPasswordValid = this.isPasswordValid.bind(this);
  }

  changeEmail(event) {
    this.setState({ email: event.target.value });
  }

  changePassword(event) {
    this.setState({ password: event.target.value });
  }

  changeConfirmPassword(event) {
    this.setState({ confirmPassword: event.target.value });
  }

  checkPassword() {
    if (!this.isPasswordValid()) {
      if (!this.state.password) {
        this.props.dispatch(registerError('Поле пароля пустое'));
      } else {
        this.props.dispatch(registerError('Пароли не совпадаюат'));
      }
      setTimeout(() => {
        this.props.dispatch(registerError());
      }, 3 * 1000);
    }
  }

  isPasswordValid() {
    return (
      this.state.password && this.state.password === this.state.confirmPassword
    );
  }

  doRegister(e) {
    console.log(e);
    e.preventDefault();
    if (!this.isPasswordValid()) {
      this.checkPassword();
    } else {
      this.props.dispatch(
        registerUser({
          creds: {
            email: this.state.email,
            password: this.state.password,
          },
          history: this.props.history,
        })
      );
    }
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
            title={<h3 className='mt-0'>Регистрация в системе</h3>}
          >
            <p className='widget-auth-info'>Пожалуйста заполните все поля.</p>
            <form onSubmit={this.doRegister}>
              {this.props.errorMessage && (
                <Alert className='alert-sm widget-middle-overflow rounded-0'>
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
                    placeholder='Почтовый адрес'
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
                    placeholder='Пароль'
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Label for='confirmPassword'>Подтвердите пароль</Label>
                <InputGroup className='input-group-no-border'>
                  <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                      <i className='la la-lock text-white' />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    id='confirmPassword'
                    className='input-transparent pl-3'
                    value={this.state.confirmPassword}
                    onChange={this.changeConfirmPassword}
                    onBlur={this.checkPassword}
                    type='password'
                    required
                    name='confirmPassword'
                    placeholder='Подтвердите пароль'
                  />
                </InputGroup>
              </FormGroup>
              <div className='bg-widget-transparent auth-widget-footer'>
                <Button
                  type='submit'
                  color='danger'
                  className='auth-btn'
                  size='sm'
                  style={{ color: '#fff' }}
                >
                  {this.props.isFetching ? 'Загрузка...' : 'Зарегистрироваться'}
                </Button>
                <p className='widget-auth-info mt-4'>
                  Есть аккаунт? Авторизуйся!
                </p>
                <Button
                  type='submit'
                  className='d-block text-center mb-4'
                  value='Войти в систему'
                />
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
    isFetching: state.register.isFetching,
    errorMessage: state.register.errorMessage,
  };
}

export default withRouter(connect(mapStateToProps)(Register));
