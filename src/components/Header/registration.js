import React, { Component } from 'react';

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
    const { name, email, password, repeatPass, tel } = this.state;
    e.preventDefault();
    if (password !== repeatPass) {
      alert(222); // not correct pass;
      return
    }
    // makeRequest
  }

  render () {
    const { name, email, password, repeatPass, tel } = this.state;
    const isValid = name => name === '';

    return (
      <form className='register-popUp'>
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