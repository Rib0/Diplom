import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import cx from 'classnames';
import Button from './scrollButton';
import Registration from './registration';
import Svg from 'javascript/components/Svg';
import { loginIn, loginOut } from 'javascript/api/user';

class Header extends Component {
  state = {
    activeModal: false,
    activeForm: false,
    login: '',
    password: '',
  };

  onClick = e => {
    const { tagName } = e.target;
    if (tagName !== 'LI' && tagName !== 'IMG') return;
    const { activeModal } = this.state;
    this.setState({
      activeModal: !activeModal,
    });
  };

  onChange = e => {
    const { name } = e.target;
    this.setState({
      [name]: e.target.value,
    });
  };

  toggleForm = () => this.setState({ activeForm: !this.state.activeForm });

  closeForm = () => this.setState({ activeForm: false, activeModal: false });

  auth = () => {
    const { login, password } = this.state;
    this.props.loginIn({ login, password });
    this.setState({
      activeModal: false,
      login: '',
      password: '',
    });
  };

  logOut = () => {
    this.setState({ activeModal: false });
    this.props.loginOut();
  };

  render() {
    const { activeModal, activeForm, login, password } = this.state;
    const {
      location: { pathname },
      user,
    } = this.props;
    document.body.style.overflow = activeForm ? 'hidden' : 'auto';

    const modalAuthClassName = cx({
      'modal-auth': true,
      'modal-auth--active': activeModal,
    });

    const chevronClassName = cx({
      chevron: true,
      active: activeModal,
    });

    return (
      <header className="header">
        <div className="container">
          {activeForm && (
            <>
              <Registration closeForm={this.closeForm} />
              <div onClick={this.toggleForm} className="shadowField" />
            </>
          )}
          <ul className="settings">
            <li>
              <Link to="/wishlist">
                <Svg iconName="fave" style={{ width: '50px', fill: 'black' }} />
              </Link>
            </li>
            <li className="settings__item" onClick={this.onClick}>
              <div className={modalAuthClassName}>
                {!user && (
                  <>
                    <input
                      type="text"
                      name="login"
                      value={login}
                      onChange={this.onChange}
                      placeholder="Логин"
                    />
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={this.onChange}
                      placeholder="Пароль"
                    />
                  </>
                )}
                <div className="modal-auth__actions">
                  <button
                    type="submit"
                    onClick={user ? this.logOut : this.auth}
                    className="modal-auth__button"
                  >
                    {user ? 'Выход' : 'Вход'}
                  </button>
                  {!user && (
                    <button className="modal-auth__button" onClick={this.toggleForm}>
                      Регистрация
                    </button>
                  )}
                </div>
              </div>
              <img className="settings__user" src="/images/user@1X.png" alt="user" />
              {user ? user.email : 'Личный кабинет'}
              <img
                className={chevronClassName}
                src="/images/Многоугольник 1 копия 2@1X.png"
                alt="chevron"
              />
            </li>
            <li className="settings__item">
              <a href="tel: +78005006105">8 800 500-61-05</a>
              <p>Круглосуточная поддержка</p>
            </li>
          </ul>
          <nav>
            <ul className="menu">
              <li className="menu__item">
                <Link to="/" className="menu__item-link">
                  Главная
                </Link>
              </li>
              <li className="menu__item">
                <Link to="/about" className="menu__item-link">
                  О компании
                </Link>
              </li>
              <li className="menu__item">
                <Link to="/gallery" className="menu__item-link">
                  Галерея
                </Link>
              </li>
              <li className="menu__item">
                <Link to="/info" className="menu__item-link" href="#">
                  Информация
                </Link>
              </li>
            </ul>
          </nav>
          <div className="header__logo">
            <img src="/images/logo@1X.png" alt="logo" />
          </div>
          <div>
            <p className="header__slogan">Морские прогулки</p>
            <p className="header__slogan--large">По черному морю</p>
          </div>
          {pathname === '/' && (
            <>
              <Button />
              <div className="header__figure">
                <img src="/images/Фигура 1@1X (1).png" alt="figure" />
              </div>
            </>
          )}
        </div>
      </header>
    );
  }
}

const mapStateToProps = ({ toast, user }) => ({
  toast,
  user,
});

const mapDispatchToProps = dispatch => ({
  loginIn: data => dispatch(loginIn(data)),
  loginOut: () => dispatch(loginOut()),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
);
