import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Product from './product';

const THEADS = [
  'id',
  'Файл',
  'Название',
  'Маршрут',
  'Продолжительность',
  'Цена',
  'Старая цена',
  'Категория',
  'Сохранить',
  'Удалить'
]

class Products extends Component {

  state = {

  }

  render () {
    const { products } = this.props;
    
    return (
      <Fragment>
        <form className='admin__add-form'>
          <div><input type='file' name='img' /></div>
          <div><textarea placeholder='Название' name='name' /></div>
          <div><textarea placeholder='Маршрут' name='road' /></div>
          <div><input placeholder='Продолжительность' name='duration' /></div>
          <div><input placeholder='Цена' name='price' /></div>
          <div><input placeholder='Старая цена' name='old_price' /></div>
          <div>
            <select name='category'>
              <option value='0'>Без категории</option>
              <option value='1'>Со скидкой</option>
              <option value='2'>Все включено</option>
            </select>  
          </div>
          <div><input type='submit' value='Добавить'/></div>
        </form>

        <table className='admin__content'>
          <thead>
            <tr>
              {THEADS.map((thead, index) => (
                <th key={index}>{thead}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <Product {...product} key={product.id} />
            ))}
          </tbody>
        </table>
      </Fragment>
    )
  }
}

const mapStateToProps = ({ products }) => ({
  products
})

export default connect(mapStateToProps)(Products);
