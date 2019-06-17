import React, { Component, Fragment } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Header';
import Main from './Main';
import About from './About';
import Gallery from './Gallery';
import Info from './Info';
import Product from './Product';
import HowToJoin from './HowToJoin'
import Footer from './Footer';
import Basket from './Basket';

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
          <Route exact path='/' render={props => (
            <Main {...props} products={[]} />
          )}/>
          <Route path='/products/:number' render={props => (
            <Product {...props} products={products} name={user.name || 'Анонимно'} isAdmin={user.isadmin} />
          )}/>/>
          <Route path='/about' component={About}/>
          <Route path='/gallery' render={props => (
            <Gallery {...props} products={products} />
          )}/>
          <Route path='/info' component={Info}/>
          <Route path='/howtojoin' component={HowToJoin}/>
          <Route path='/wishlist' render={props => (
            <Basket {...props} products={products} />
          )}/>
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