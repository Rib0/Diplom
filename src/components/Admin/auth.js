import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loginIn } from '../../api/user';

class Auth extends Component {

  state = {
    login: '',
    password: ''
  }

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  onSubmit = e => {
    e.preventDefault();
    const { login, password } = this.state;
    this.props.loginIn({ login, password }, true)
    this.setState({
      login: '',
      password: ''
    })
  }
 
  render () {
    const { login, password } = this.state;

    return (
      <form className='form' onSubmit={this.onSubmit}>
        <input 
          placeholder='Логин' 
          className='form__field' 
          name='login' 
          onChange={this.onChange}
          value={login} 
        />
        <input
          type='password'
          placeholder='Пароль' 
          className='form__field' 
          name='password'
          onChange={this.onChange}
          value={password}
        />
        <input type='submit' value='Вход' className='form__submit' />
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  loginIn: data => dispatch(loginIn(data))
})

export default connect(null, mapDispatchToProps)(Auth);