import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {

  render() {
    return (
      <div>
        <div>
          <h2>Welcome to AboutPage</h2>
          <Link to="/home">Home</Link>
        </div>
      </div>
    );
  }
}

export default About;
