import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Terms extends Component {

  render() {
    return (
      <div>
        <div style={{textAlign: 'center'}}>
          <h2>TERMS</h2>
          <Link to="/home">Agree</Link>
        </div>
      </div>
    );
  }
}

export default Terms;
