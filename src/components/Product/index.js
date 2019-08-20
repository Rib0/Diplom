import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Comments from './CommentBlock';

class Product extends Component {
  onClick(sum) {
    this.props.history.push({ pathname: '/payment', state: { sum } });
  }

  render() {
    const {
      products,
      match: { params },
    } = this.props;
    const product = products.find(product => product.id === parseInt(params.number, 10));

    return (
      <main className="container container--content product">
        <Link className="link" to="/">
          <img src="assets/images/back.png" />
          Вернуться к каталогу
        </Link>
        {product && (
          <Fragment>
            <h2 className="text-center">{product.name}</h2>
            <div className="product-image-container">
              <img src={`assets/images/${product.img}`} />
            </div>
            <p>Стоимость: {product.price} руб.</p>
            <p>Маршрут: {product.road}</p>
            <p>Продолжительность: {product.duration} часов</p>
            <button
              className="button-blue button-blue--comment"
              onClick={() => this.onClick(product.price)}
            >
              Купить
            </button>
          </Fragment>
        )}
        <h2>Комментарии:</h2>
        <p className="comment-decription">
          Ваш комментарий появится на сайте после проверки модератора
        </p>
        <Comments />
      </main>
    );
  }
}

const mapStateToProps = ({ products }) => ({
  products,
});

export default withRouter(connect(mapStateToProps)(Product));
