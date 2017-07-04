import React, { Component } from 'react';
import './App.css';

import Login from './components/Login';
import Home from './components/Home';
import Terms from './components/Terms';
import About from './components/About';

import PrivateRoute from './components/PrivateRoute';

import AuthService from './components/AuthService';

import { Switch, Route } from 'react-router-dom'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' component={Login} isLoggedIn={this.state.isLoggedIn}/>
        <PrivateRoute isLoggedIn={AuthService.isLogged} path='/terms' component={Terms}/>
        <PrivateRoute isLoggedIn={AuthService.isLogged} path='/home' component={Home}/>
        <PrivateRoute isLoggedIn={AuthService.isLogged} path='/about' component={About}/>
      </Switch>
    );
  }
}

export default App;
