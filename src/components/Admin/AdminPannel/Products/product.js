import React, { Component } from 'react';
import { connect } from 'react-redux';

class Product extends Component {

  state = {
    ...this.props
  }

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render () {

    return (
      <tr>
        {Object.entries(this.props).map(([item, value], index) => (
          <td key={index}>
            {(/id|img/).test(item) ? 
            value :
            item === 'category' ?
            <select name='category' value={this.state[item]} onChange={this.onChange}>
              <option value='0'>
                Без категории
              </option>
              <option value='1'>
                Со скидкой
              </option>
              <option value='2'>
                Все включено
              </option>
            </select> :
            <textarea value={this.state[item]} name={item} onChange={this.onChange} />}
          </td>
        ))}
        <td><button>Сохранить</button></td>
        <td><button>Удалить</button></td>
      </tr>
    )
  }
}

const mapDisptchToProps = dispatch => ({

});

export default connect(null, mapDisptchToProps)(Product);