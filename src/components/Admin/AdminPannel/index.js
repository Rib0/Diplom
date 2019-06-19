import React, { Component } from 'react';
import { connect } from 'react-redux';

import Products from './Products';

const COMPONENTS = [
  {
    name: 'Товары',
    component: <Products />
  },
  {
    name: 'О компании'
  },
  {
    name: 'Информация'
  },
  {
    name: 'Пользователи'
  }
]

class AdminPannel extends Component {

  state = {
    currentPage: 0
  }

  onClick = index => this.setState({ currentPage: index });

  render () {
    const { currentPage } = this.state;

    return (
      <div className='admin__container'>
        <ul className='admin__navigation'>
          {COMPONENTS.map((component, index) => (
            <li 
              onClick={() => this.onClick(index)}
              className='admin__item' 
              key={index}
            >
              {component.name}
            </li>
          ))}
        </ul>
        {COMPONENTS[currentPage].component}
      </div>
    )
  }
}

export default connect(null, null)(AdminPannel);

