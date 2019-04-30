import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class Product extends Component {

  render () {
    const { products, match: { params } } = this.props;
    const product = products.find(product => product.id === parseInt(params.number, 10));
    console.log(products)

    return (
      <main className='container container--content product'>
      <Link className='link' to='/'>
        <img src='../assets/images/back.png'/>
        Вернуться к каталогу
      </Link>
        {product && (
          <Fragment>
            <h2 className='text-center'>{product.name}</h2>
            <div className='product-image-container'>
              <img src={`../assets/images/${product.img}`}/>
            </div>
            <p>Стоимость: {product.price} руб.</p>
            <p>Маршрут: {product.road}</p>
            <p>Продолжительность: {product.duration} часов</p>
          </Fragment>
        )}
      </main>
    )
  }
}