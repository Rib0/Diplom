import React, { Component } from 'react';
import cx from 'classnames';  

export default class Header extends Component {

  state = {
    activeModal: false,
  }

  onClick = e => {
    if (e.target.tagName !== 'LI') return;
    const { activeModal } = this.state;
    this.setState({
      activeModal: !activeModal
    })
  }

  render () {
    const { activeModal } = this.state;
    
    const modalAuthClassName = cx({
      'modal-auth': true,
      'modal-auth--active': activeModal
    })

    const chevronClassName = cx({
      settings__chevron: true,
      'active': activeModal
    })

    return (
      <header className="header">
        <div className="container">
          <ul className="settings">
            <li 
              className="settings__item"
              onClick={this.onClick}
            >
            <div className={modalAuthClassName}>
              <input type="text" placeholder="Логин"/>
              <input type="text" placeholder="Пароль"/>
              <div className="modal-auth__actions">
                <button className="modal-auth__button">Вход</button>
                <button className="modal-auth__button">Регистрация</button>
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
                <a className="menu__item-link" href="#">Главная</a>
              </li>
              <li className="menu__item">
                <a className="menu__item-link" href="#">О компании</a>
              </li>
              <li className="menu__item">
                <a className="menu__item-link" href="#">Галерея</a>
              </li>
              <li className="menu__item">
                <a className="menu__item-link" href="#">Информация</a>
              </li>
              <li className="menu__item">
                <a className="menu__item-link" href="#">Как доехать</a>
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
          <button className="header__choose" id="scroll-button">Выбрать круиз</button>
          <div className="header__figure">
            <img src="../assets/images/Фигура 1@1X (1).png" alt="figure" />
          </div>
        </div>
      </header>
    )
  }
}