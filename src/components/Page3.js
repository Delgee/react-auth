import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Page3 extends Component {

  render() {
    return (
      <div>
        <div style={{marginTop: '30px'}}>
          <Link style={{margin: '15px', textTransform: 'uppercase'}} to="/home">Home</Link>
          <Link style={{margin: '15px', textTransform: 'uppercase'}} to="/page1">Page1</Link>
          <Link style={{margin: '15px', textTransform: 'uppercase'}} to="/page2">Page2</Link>
          <Link style={{margin: '15px', textTransform: 'uppercase'}} to="/page3">Page3</Link>
          <Link style={{margin: '15px', textTransform: 'uppercase'}} to="/page4">Page4</Link>
          <Link style={{margin: '15px', textTransform: 'uppercase'}} to="/about">About</Link>
          <h2 style={{textAlign: 'center', margin: '300px'}}>PAGE 3</h2>
        </div>
      </div>
    );
  }
}

export default Page3;
