import React, { Component, Fragment } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import cx from 'classnames';

import Header from './Header';
import Main from './Main';
import About from './About';
import Gallery from './Gallery';
import Info from './Info';
import Product from './Product';
import Footer from './Footer';
import WishList from './WishList';
import Payment from './Payment';
import Admin from './Admin';

import { getProductsAsync } from 'api/products';
import { logIn } from 'actions';
import { isAuth } from 'utils';

class App extends Component {
  componentDidMount() {
    this.props.getProducts();
    this.props.logIn(isAuth());
  }

  render() {
    const { toast } = this.props;

    const succesRegistration = cx({
      'success-registration': true,
      'success-registration--active': !!toast,
    });

    if (this.props.location.pathname === '/admin')
      return (
        <Fragment>
          <div className={succesRegistration}>{toast}</div>
          <Admin />
        </Fragment>
      );

    return (
      <Fragment>
        <div className={succesRegistration}>{toast}</div>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/products/:number" component={Product} />
          <Route path="/about" component={About} />
          <Route path="/gallery" component={() => <Gallery />} />
          <Route path="/info" component={Info} />
          <Route path="/wishlist" component={WishList} />
          <Route path="/payment" component={Payment} />
        </Switch>
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = ({ toast }) => ({
  toast,
});

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(getProductsAsync()),
  logIn: data => dispatch(logIn(data)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
