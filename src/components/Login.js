import React, { Component } from 'react';
import AuthService from './AuthService';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      password: '',
      errorFlag: ''
    };
  }

  componentDidMount () {
    if (localStorage.getItem("password")) {
      this.setState({password: localStorage.getItem("password")})
    }
  }

  login = () => {
    if (!this.state.password) {
      return this.setState({errorFlag: 'Please input password'})
    } else {
      localStorage.setItem("password", this.state.password)
      AuthService.login({ password: this.state.password }, (err) => {
        if (err) {
          this.setState({errorFlag: err})
        } else {
          this.props.history.push('/terms' + this.props.location.search);
          console.log('logged in', AuthService);
        }
      });
    }
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({[name]: value});
  }

  render() {
    return (
      <div style={{textAlign: 'center', margin: '40px'}}>
        <h1>Login Page</h1>
        <div>
          <div>
            <label>Password</label>
            <input name="password" onChange={this.handleInputChange} value={this.state.password} type="password" onKeyPress={(event) => {if (event.key === 'Enter') this.login();}} />
          </div>
          {this.state.errorFlag && <div style={{color: 'red'}}>{this.state.errorFlag}</div>}
          <button type="button" onClick={this.login}>Login</button>
        </div>
      </div>
    );
  }
}

export default Login;
