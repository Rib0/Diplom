import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Header';
import Main from './Main';
import About from './About';
import Gallery from './Gallery';
import Info from './Info';
import Product from './Product';
import HowToJoin from './HowToJoin'
import Footer from './Footer';

import { getProducts } from 'api';

export default class App extends Component {

  state = {
    products: []
  }

  componentDidMount () {
    this.getProducts();
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

  render () {

    const { products } = this.state;

    return (
      <div>
        <Route component={Header} />
        <Switch>
          <Route exact path='/' render={props => (
            <Main {...props} products={products} />
          )}/>
          <Route path='/products/:number' render={props => (
            <Product {...props} products={products} />
          )}/>/>
          <Route path='/about' component={About}/>
          <Route path='/gallery' render={props => (
            <Gallery {...props} products={products} />
          )}/>
          <Route path='/info' component={Info}/>
          <Route path='/howtojoin' component={HowToJoin}/>
        </Switch>
        <Footer />
      </div>
    )
  }
}