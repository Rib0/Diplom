import React, { Component } from 'react';
import { connect } from 'react-redux';

import Products from './Products';
import Users from './Users';
import { loginOut } from '../../../api/user';

const COMPONENTS = [
  {
    name: 'Товары',
    component: <Products />,
  },
  {
    name: 'Пользователи',
    component: <Users />,
  },
];

class AdminPannel extends Component {
  state = {
    currentPage: 0,
  };

  onClick = index => this.setState({ currentPage: index });

  render() {
    const { currentPage } = this.state;

    return (
      <div className="admin__container">
        <ul className="admin__navigation">
          {COMPONENTS.map((component, index) => (
            <li onClick={() => this.onClick(index)} className="admin__item" key={index}>
              {component.name}
            </li>
          ))}
          <li className="admin__item" onClick={this.props.loginOut}>
            Выход
          </li>
        </ul>
        {COMPONENTS[currentPage].component}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loginOut: () => dispatch(loginOut()),
});

export default connect(
  null,
  mapDispatchToProps
)(AdminPannel);
