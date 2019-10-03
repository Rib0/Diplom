import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { isInWishlist } from '../../utils';

class WishList extends Component {
  render() {
    const { products } = this.props;
    let price = 0;

    products.forEach(product => (price += isInWishlist(product.id) ? product.price : 0));

    if (!products.filter(product => isInWishlist(product.id)).length)
      return (
        <main className="container container--content" style={{ textAlign: 'center' }}>
          Список желаний пуст <br />
          <br />
          <Link to="/">Перейти в каталог</Link>
        </main>
      );
    return (
      <main className="container container--content">
        <table className="wishlist">
          <tbody>
            <tr>
              <th>Название</th>
              <th>Маршрут</th>
              <th>Продолжительность</th>
              <th>Цена</th>
              <th>Изображение</th>
            </tr>
            {products.map(product =>
              isInWishlist(product.id) ? (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.road}</td>
                  <td>{product.duration}</td>
                  <td>{product.price}</td>
                  <td>
                    <img src={`/images/${product.img}`} />
                  </td>
                </tr>
              ) : null
            )}
          </tbody>
        </table>
        Общая цена: <b> {price} руб. </b>
      </main>
    );
  }
}

const mapStateToProps = ({ products }) => ({
  products,
});

export default connect(mapStateToProps)(WishList);
