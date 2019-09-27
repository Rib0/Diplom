import React, { Component } from 'react';
import { connect } from 'react-redux';

import { registration } from 'api/user';
import { toggleToastAsync } from 'api/toast';

class PopUp extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    repeatPass: '',
    tel: '',
  };

  onChange = e => {
    let { name, value } = e.target;
    if (!name) name = 'repeatPass';

    this.setState({
      [name]: value,
    });
  };

  onSumbit = e => {
    e.preventDefault();
    const { name, email, password, repeatPass, tel } = this.state;
    if (repeatPass !== password) {
      this.props.toggleToast('Пароли должны совпадать');
      return;
    }
    if (password.length < 5) {
      this.props.toggleToast('Пароль должен содержать не меньше пяти символов');
      return;
    }
    this.props.registration({ name, email, password, tel });
    this.props.closeForm();
  };

  render() {
    const { name, email, password, repeatPass, tel } = this.state;

    return (
      <form className="register-popUp" onSubmit={this.onSumbit}>
        <h2>Регистрация</h2>
        <input
          type="text"
          name="name"
          placeholder="Имя"
          value={name}
          onChange={this.onChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={email}
          onChange={this.onChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          value={password}
          onChange={this.onChange}
          required
        />
        <input
          type="password"
          placeholder="Повторите пароль"
          value={repeatPass}
          onChange={this.onChange}
          required
        />
        <input
          type="tel"
          name="tel"
          placeholder="Телефон"
          value={tel}
          onChange={this.onChange}
          required
        />
        <input type="submit" value="Регистрация" />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toggleToast: text => dispatch(toggleToastAsync(text)),
  registration: data => dispatch(registration(data)),
});

export default connect(
  null,
  mapDispatchToProps
)(PopUp);
