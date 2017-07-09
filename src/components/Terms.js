import React, { Component } from 'react';

class Terms extends Component {

  constructor(props) {
    super(props);
  }

  handleRoute = () => {
    if (this.props.location.search && this.props.location.search.indexOf("?redirect=") !== -1 && this.props.location.search !== "?redirect=/terms") {

      let temp = JSON.parse(JSON.stringify(this.props.location.search));

      temp = temp.replace('?redirect=', '');
      this.props.history.push(temp);

      // switch (this.props.location.search) {
      //   case "?redirect=/home":
      //     this.props.history.push('/home');
      //     break;
      //   case "?redirect=/about":
      //     this.props.history.push('/about');
      //     break;
      //   case "?redirect=/page1":
      //     this.props.history.push('/page1');
      //     break;
      //   case "?redirect=/page2":
      //     this.props.history.push('/page2');
      //     break;
      //   case "?redirect=/page3":
      //     this.props.history.push('/page3');
      //     break;
      //   case "?redirect=/home":
      //     this.props.history.push('/home');
      //     break;
      //   default:
      //
      // }
    } else {
      this.props.history.push('/home');
    }
    console.log(this.props.location);
  }

  render() {
    return (
      <div>
        <div style={{textAlign: 'center'}}>
          <h2>TERMS</h2>
          <p style={{cursor: 'pointer'}} onClick={this.handleRoute}>Agree</p>
        </div>
      </div>
    );
  }
}

export default Terms;
