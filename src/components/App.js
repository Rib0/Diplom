import React, { Component, Fragment } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Header';
import Main from './Main';
import About from './About';
import Gallery from './Gallery';
import Info from './Info';
import Product from './Product';
import Footer from './Footer';
import Basket from './Basket';
import Payment from './Payment';

import { getProductsAsync } from 'api/products';
import { logIn } from 'actions';
import { isAuth } from 'utils';

class App extends Component {

  componentDidMount () {
    this.props.getProducts();
    this.props.logIn(isAuth());
  }

  render () {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/products/:number' component={Product} />
          <Route path='/about' component={About} />
          <Route path='/gallery' component={() => <Gallery />} />
          <Route path='/info' component={Info} />
          <Route path='/wishlist' component={Basket} />
          <Route path='/payment' component={Payment} />
        </Switch>
        <Footer />
      </Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(getProductsAsync()),
  logIn: data => dispatch(logIn(data))
})

export default withRouter(connect(null, mapDispatchToProps)(App));