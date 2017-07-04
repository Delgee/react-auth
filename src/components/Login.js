import React, { Component } from 'react';
import AuthService from './AuthService';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errorFlag: ''
    };
  }

  componentDidMount () {
  }

  login = () => {
    if (!this.state.username) {
      return this.setState({errorFlag: 'Please input username'})
    } else if (!this.state.password) {
      return this.setState({errorFlag: 'Please input password'})
    } else {
      AuthService.login({ username: this.state.username, password: this.state.password }, (err) => {
        if (err) {
          this.setState({errorFlag: err})
        } else {
          this.props.history.push('/terms');
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
        <form>
          <div>
            <label>Username</label>
            <input name="username" onChange={this.handleInputChange} />
          </div>
          <div>
            <label>Password</label>
            <input name="password" onChange={this.handleInputChange} type="password" onKeyPress={(event) => {if (event.key == 'Enter') this.login();}} />
          </div>
          {this.state.errorFlag && <div style={{color: 'red'}}>{this.state.errorFlag}</div>}
          <button type="button" onClick={this.login}>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
