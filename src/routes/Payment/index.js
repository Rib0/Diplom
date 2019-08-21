import React from 'react';
import { withRouter } from 'react-router-dom';

const Payment = ({ location: { state } }) => (
  <main className="container container--content">
    <h1 className="catalog-header">Оплата круиза</h1>
    <p className="paragraph">Переход на страницу оплаты круиза.</p>
    <p className="paragraph">После оплаты с вами свяжется оператор в течении 5 минут.</p>
    <iframe
      src={`https://money.yandex.ru/quickpay/button-widget?targets=%D0%9E%D0%BF%D0%BB%D0%B0%D1%82%D0%B0%20%D0%BA%D1%80%D1%83%D0%B8%D0%B7%D0%B0&default-sum=${state.sum}&button-text=11&any-card-payment-type=on&button-size=l&button-color=orange&fio=on&phone=on&successURL=&quickpay=small&account=410011296643214&`}
      width="227"
      height="48"
      frameBorder="0"
      allowtransparency="true"
      scrolling="no"
    ></iframe>
  </main>
);

export default withRouter(Payment);
