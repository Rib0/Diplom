import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Product from './product';
import { addProductAsync } from '../../../../api/products';

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
  'Удалить',
];

class Products extends Component {
  state = {
    img: '',
    name: '',
    road: '',
    duration: '',
    price: '',
    old_price: '',
  };

  onSubmit = e => {
    const {
      img: { name },
      category,
    } = this.state;
    e.preventDefault();
    const data = new FormData(this.form);
    this.props
      .addProduct(data, { ...this.state, img: name, category: category || '0' })
      .then(() => {
        this.file.type = '';
        this.file.type = 'file';
        this.reset();
      });
  };

  reset() {
    this.setState({
      name: '',
      road: '',
      duration: '',
      price: '',
      old_price: '',
    });
  }

  isDisabled() {
    for (let key in this.state) {
      if (!this.state[key] && key !== 'old_price') return true;
    }
  }

  onChange = e => {
    const { name, value, type, files } = e.target;
    this.setState({ [name]: type === 'file' ? files[0] : value });
  };

  render() {
    const { products } = this.props;
    const { name, road, duration, price, old_price } = this.state;

    return (
      <Fragment>
        <form className="admin__add-form" ref={elem => (this.form = elem)} onSubmit={this.onSubmit}>
          <div>
            <input
              type="file"
              name="img"
              onChange={this.onChange}
              ref={elem => (this.file = elem)}
            />
          </div>
          <div>
            <textarea placeholder="Название" name="name" onChange={this.onChange} value={name} />
          </div>
          <div>
            <textarea placeholder="Маршрут" name="road" onChange={this.onChange} value={road} />
          </div>
          <div>
            <textarea
              placeholder="Продолжительность"
              onChange={this.onChange}
              name="duration"
              value={duration}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Цена"
              min="0"
              onChange={this.onChange}
              name="price"
              value={price}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Старая цена"
              min="0"
              onChange={this.onChange}
              name="old_price"
              value={old_price}
            />
          </div>
          <div>
            <select name="category" onChange={this.onChange}>
              <option value="0">Без категории</option>
              <option value="1">Со скидкой</option>
              <option value="2">Все включено</option>
            </select>
          </div>
          <div>
            <input type="submit" value="Добавить" disabled={this.isDisabled()} />
          </div>
        </form>
        <table className="admin__content">
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
    );
  }
}

const mapStateToProps = ({ products }) => ({
  products,
});

const mapDispatchToProps = dispatch => ({
  addProduct: (data, insertData) => dispatch(addProductAsync(data, insertData)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
