import React, { Component, Fragment } from 'react';
import cx from 'classnames'; 
import Button from './scrollButton';
import Registration from './registration';
import { Link } from 'react-router-dom';
import { auth } from 'api';
  
export default class Header extends Component {

  state = {
    activeModal: false,
    activePopUp: false,
    success: false,
    popUpText: '',
    login: '',
    password: ''
  }

  onClick = e => {
    const { tagName } = e.target;
    if (tagName !== 'LI' && tagName !== 'IMG') return;
    const { activeModal } = this.state;
    this.setState({
      activeModal: !activeModal
    })
  }

  onChange = e => {
    const { name } = e.target;
    this.setState({
      [name]: e.target.value,
    })
  }

  openPopUp = () => {
    this.setState({
      activePopUp: true,
      activeModal: false
    })
  }

  closePopUp = () => {
    this.setState({
      activePopUp: false,
    })
  }

  activeRegistrPopUp = (popUpText, isError) => {
    if (this.state.success) return;
    this.setState(() => ({ success: true, activePopUp: isError, popUpText}));
    setTimeout(() => {
      this.setState({ success: false })
    }, 3000);
  }

  auth = () => {
    const { login, password } = this.state;
    if (!login || !password) {
      this.activeRegistrPopUp('Заполните все данные');
      return;
    }
    auth({ login, password })
      .then(resp => {
        console.log(resp)
        if (resp.error) {
          this.activeRegistrPopUp('Неверный логин или пароль');
        }
      })
      .catch(error => {
        console.log(error);
      })
  }

  render () {
    const { activeModal, activePopUp, success, popUpText, login, password } = this.state;
    const { location: { pathname } } = this.props;
    document.body.style.overflow = activePopUp ? 'hidden' : 'auto';
    
    const modalAuthClassName = cx({
      'modal-auth': true,
      'modal-auth--active': activeModal
    })

    const chevronClassName = cx({
      chevron: true,
      'active': activeModal
    })

    const succesRegistration = cx({
      'success-registration': true,
      'success-registration--active': success
    })

    return (
      <header className="header">
        <div className="container">
          {activePopUp && (
            <Fragment>
              <Registration activeRegistrPopUp={this.activeRegistrPopUp}/>
              <div onClick={this.closePopUp} className='shadowField' />
            </Fragment>
          )}
          <div className={succesRegistration}>
            {popUpText}
          </div>
          <ul className="settings">
            <li 
              className="settings__item"
              onClick={this.onClick}
            >
            <div className={modalAuthClassName}>
              <input type="text" name="login" value={login} onChange={this.onChange} placeholder="Логин"/>
              <input type="password" name="password" value={password} onChange={this.onChange} placeholder="Пароль"/>
              <div className="modal-auth__actions">
                <button type='submit' onClick={this.auth} className="modal-auth__button">Вход</button>
                <button className="modal-auth__button" onClick={this.openPopUp}>Регистрация</button>
              </div>
            </div>
              <img className="settings__user" src="../assets/images/user@1X.png" alt="user" />
              Личный кабинет
              <img
                className={chevronClassName} 
                src="../assets/images/Многоугольник 1 копия 2@1X.png" 
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
                <Link to='/' className="menu__item-link">Главная</Link>
              </li>
              <li className="menu__item">
                <Link to='/about' className="menu__item-link">О компании</Link>
              </li>
              <li className="menu__item">
                <Link to='/gallery' className="menu__item-link">Галерея</Link>
              </li>
              <li className="menu__item">
                <Link to='/info' className="menu__item-link" href="#">Информация</Link>
              </li>
              <li className="menu__item">
                <Link to='/howtojoin' className="menu__item-link" href="#">Как доехать</Link>
              </li>
            </ul>
          </nav>
          <div className="header__logo">
            <img src="../assets/images/logo@1X.png" alt="logo" />
          </div>
          <div>
            <p className="header__slogan">Морские прогулки</p>
            <p className="header__slogan--large">По черному морю</p>
          </div>
          {pathname === '/' && (
            <Fragment>
              <Button />
                <div className="header__figure">
                <img src="../assets/images/Фигура 1@1X (1).png" alt="figure" />
              </div>
            </Fragment>
          )}
        </div>
      </header>
    )
  }
}