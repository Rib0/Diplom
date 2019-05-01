import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {

  render () {
    return (
      <footer className="footer">
        <div className="container footer__inner">
          <ul className="footer-menu">
            <li>
              <a href="#">Вход для партнеров</a>
            </li>
            <li>
              <Link to='/about'>О компании</Link>
            </li>
            <li>
              <a href="#">Контакты</a>
            </li>
          </ul>
          <ul className="footer-contacts">
            <li className="footer-contacts__item">
              <a className="footer-contacts__link" href="#">
                <img src="assets/images/vk@1X.png" alt="vk" />
              </a>        
            </li>
            <li className="footer-contacts__item">
              <a className="footer-contacts__link" href="#">
                <img src="assets/images/ok@1X.png" alt="odnokassniki" />
              </a>
            </li>
            <li className="footer-contacts__item">
              <a className="footer-contacts__link" href="#">
                <img src="assets/images/yt@1X (4).png" alt="youtube" />
              </a>
            </li>
            <li className="footer-contacts__item">
              <a className="footer-contacts__link" href="#">
                <img src="assets/images/insta@1X.png" alt="instagram" />
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="tel: +78005006105">8 800 500-61-05</a>
            </li>
            <li>Круглосуточная поддержка</li>
            <li>© 2019 OOO «Городские Круизы»</li>
          </ul>
        </div>
    </footer>
    )
  }
}