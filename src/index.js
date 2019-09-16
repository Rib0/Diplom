import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import App from './components/App';
import rootReducer from './reducers';

const history = createBrowserHistory();
const store = createStore(rootReducer, applyMiddleware(thunk, logger));
history.listen(() => window.scrollTo(0, 0));

console.log(process.env.NODE_ENV);

render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
);
