import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Header';
import Main from './Main';
import About from './About';
import Gallery from './Gallery';
import Info from './Info';
import HowToJoin from './HowToJoin'
import Footer from './Footer';

export default () => {
  return (
    <div>
      <Route component={Header} />
      <Switch>
        <Route exact path='/' component={Main}/>
        <Route path='/about' component={About}/>
        <Route path='/gallery' component={Gallery}/>
        <Route path='/info' component={Info}/>
        <Route exact path='/howtojoin' component={HowToJoin}/>
      </Switch>
      <Footer />
    </div>
  )
}