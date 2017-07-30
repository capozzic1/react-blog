
import React from 'react';
import Navigation from '../Navigation/Navigation';


export default class Layout extends React.Component {
  render() {
    return (

      <div className="container">
        <Navigation />
        {this.props.children}
      </div>

    );
  }
}
