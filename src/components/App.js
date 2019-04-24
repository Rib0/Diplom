import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';


import Header from './Header';
import Main from './Main';
import About from './About';
import Footer from './Footer';


const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Main}/>
        <Route exact path='/about' component={About}/>
      </Switch>
      <Footer />
    </div>
  )
}

export default App;

