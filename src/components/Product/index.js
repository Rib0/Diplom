import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Comments from './CommentBlock';

export default class Product extends Component {

  render () {
    const { products, match: { params }, name, isAdmin } = this.props;
    const product = products.find(product => product.id === parseInt(params.number, 10));

    return (
      <main className='container container--content product'>
      <Link className='link' to='/'>
        <img src='assets/images/back.png'/>
        Вернуться к каталогу
      </Link>
      {product && (
        <Fragment>
          <h2 className='text-center'>{product.name}</h2>
          <div className='product-image-container'>
            <img src={`assets/images/${product.img}`}/>
          </div>
          <p>Стоимость: {product.price} руб.</p>
          <p>Маршрут: {product.road}</p>
          <p>Продолжительность: {product.duration} часов</p>
        </Fragment>
      )}
      <h2>Комментарии: </h2>
      <Comments name={name} productId={parseInt(params.number, 10)} isAdmin={isAdmin} />
      </main>
    )
  }
}