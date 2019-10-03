import React, { Component, Suspense } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import cx from 'classnames';

import Header from './Header';
import Footer from './Footer';
import routes from 'javascript/routes';

import { getProductsAsync } from 'javascript/api/products';
import { logIn } from 'javascript/actions';
import { isAuth } from 'javascript/utils';

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
        <>
          <div className={succesRegistration}>{toast}</div>
          <Admin />
        </>
      );

    return (
      <>
        <div className={succesRegistration}>{toast}</div>
        <Header />
        <Switch>
          <Suspense fallback={<div>Loading...</div>}>
            {routes.map(({ Component, ...props }, index) => (
              <Route
                render={componentProps => <Component {...componentProps} />}
                key={index}
                {...props}
              />
            ))}
          </Suspense>
        </Switch>
        <Footer />
      </>
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
