import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import { history } from './helpers';
import Home from './components/Home';
import Filter from './components/Filter';

class Routes extends Component {
  render() {
    return (
      <Router history = {history}>
      <div>
        <Route path='/' component={Home} />
        <Route path='/filter' component={Filter} />
        </div>
      </Router>
    )
  }
}


export default Routes;