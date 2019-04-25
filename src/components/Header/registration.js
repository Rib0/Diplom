import React, { Component } from 'react';

export default class PopUp extends Component {
  render () {
    return (
      <form className='register-popUp'>
        <h2>Регистрация</h2>
        <input type='text' placeholder='Имя' />
        <input type='email' placeholder='E-mail' />
        <input type='password' placeholder='Пароль' />
        <input type='password' placeholder='Повторите пароль' />
        <input type='tel' placeholder='Телефон' />
      </form>
    )
  }
} 