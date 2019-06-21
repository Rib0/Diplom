import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteProductAsync, redactProductAsync } from '../../../../api/products';

class Product extends Component {

  state = {
    ...this.props
  }

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render () {
    const { deleteProduct, redactProduct, id } = this.props;
    const { img, name, road, duration, price, old_price, category } = this.state;
    const data = { id, img, name, road, duration, price, old_price, category };

    return (
      <tr>
        <td>{id}</td>
        <td>
          <div>{img}</div>
          <input type='file' name='img' />
        </td>
        <td>
          <textarea name='name' value={name} onChange={this.onChange} />
        </td>
        <td>
          <textarea name='road' value={road} onChange={this.onChange} />
        </td>
        <td>
          <textarea name='duration' value={duration} onChange={this.onChange} />
        </td>
        <td>
          <textarea name='price' value={price} onChange={this.onChange} />
        </td>
        <td>
          <textarea name='old_price' value={old_price} onChange={this.onChange} />
        </td>
        <td>
          <select name='category' value={category} onChange={this.onChange}>
            <option value='0'>Без категории</option>
            <option value='1'>Со скидкой</option>
            <option value='2'>Все включено</option>
          </select>  
        </td>          
        <td><button onClick={() => redactProduct(data)}>Сохранить</button></td>
        <td><button onClick={() => deleteProduct(id)}>Удалить</button></td>
      </tr>
    )
  }
}

const mapDisptchToProps = dispatch => ({
  deleteProduct: id => dispatch(deleteProductAsync(id)),
  redactProduct: data => dispatch(redactProductAsync(data))
});

export default connect(null, mapDisptchToProps)(Product);