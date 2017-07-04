import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

  render() {
    return (
      <div>
        <div>
          <h2>Welcome to HomePage</h2>
          <Link to="/about">About</Link>
        </div>
      </div>
    );
  }
}

export default Home;
