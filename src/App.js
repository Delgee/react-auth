import React, { Component } from 'react';
import './App.css';

import Login from './components/Login';
import Home from './components/Home';
import Terms from './components/Terms';
import About from './components/About';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';

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
        <PrivateRoute isLoggedIn={AuthService.isLogged} path='/page1' component={Page1}/>
        <PrivateRoute isLoggedIn={AuthService.isLogged} path='/page2' component={Page2}/>
        <PrivateRoute isLoggedIn={AuthService.isLogged} path='/page3' component={Page3}/>
        <PrivateRoute isLoggedIn={AuthService.isLogged} path='/page4' component={Page4}/>
      </Switch>
    );
  }
}

export default App;
