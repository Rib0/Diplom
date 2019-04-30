import React, { Component } from 'react';
import { registration } from 'api'

export default class PopUp extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    repeatPass: '',
    tel: ''
  }

  onChange = e => {
    let { name, value } = e.target;
    if (!name) name = 'repeatPass';

    this.setState({
      [name]: value
    })
  }

  onSumbit = e => {
    e.preventDefault();
    const { name, email, password, repeatPass, tel } = this.state;
    if (repeatPass !== password) {
      this.props.activeRegistrPopUp('Пароли должны совпадать', true);
      return;
    }
    if (password.length < 5) {
      this.props.activeRegistrPopUp('Пароль должен содержать не меньше пяти символов', true);
      return;
    }

    const data = { name, email, password, tel };
    registration(data)
      .then(resp => {
        if (resp.error) {
          this.props.activeRegistrPopUp('Пользователь с таким email уже существует', true);
          return;
        }
        this.props.activeRegistrPopUp('Регистрация прошла успешно');
      })
      .catch(error => {
        this.props.activeRegistrPopUp('Произошла ошибка, попробуйте еще раз...', true)
        console.log(error);
      })
  }

  render () {
    const { name, email, password, repeatPass, tel } = this.state;

    return (
      <form className='register-popUp' onSubmit={this.onSumbit}>
        <h2>Регистрация</h2>
        <input type='text' name='name' placeholder='Имя' value={name} onChange={this.onChange} required />
        <input type='email' name='email' placeholder='E-mail' value={email} onChange={this.onChange} required />
        <input type='password' name='password' placeholder='Пароль' value={password} onChange={this.onChange} required />
        <input type='password' placeholder='Повторите пароль' value={repeatPass} onChange={this.onChange} required />
        <input type='tel' name='tel' placeholder='Телефон' value={tel} onChange={this.onChange} required />
        <input type='submit' value='Регистрация' />
      </form>
    )
  }
} 