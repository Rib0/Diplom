import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Header';
import Main from './Main';
import About from './About';
import Gallery from './Gallery';
import Info from './Info';
import Product from './Product';
import HowToJoin from './HowToJoin'
import Footer from './Footer';
import Basket from './Basket';

import { getProducts } from 'api';
import { isAuth, authorize } from 'utils';

export default class App extends Component {

  state = {
    products: [],
    user: {
      auth: null,
      name: '',
      email: '',
      isadmin: false
    }
  }

  componentDidMount () {
    this.getProducts();
    this.isAuth();
  }

  getProducts () {
    getProducts()
      .then(products => this.setState({
        products
      }))
      .catch(error => {
        console.log(error);
        this.setState({
          products: []
        })
      })
  }

  authorize = user => {
    this.setState({
      user
    })
    authorize(user);
  }

  isAuth () {
    const user = isAuth();
    if (user.auth)
      this.setState({
        user
      })
  }

  render () {

    const { products, user } = this.state;

    return (
      <Fragment>
        <Route render={props => (
          <Header {...props} authorize={this.authorize} user={user} />
        )}/>
        <Switch>
          <Route exact path='/' render={props => (
            <Main {...props} products={products} />
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