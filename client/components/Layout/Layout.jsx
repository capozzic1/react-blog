
import React from 'react';
import Navigation from '../Navigation/Navigation';
import Radium, { Style } from 'radium';

export default class Layout extends React.Component {
  render() {
    // console.log(this.props.posts);
    return (

      <div className="container">
        <Navigation />
        {this.props.children}
        <Style
          scopeSelector=".container"
          rules={{
            a: { textDecoration: 'none' },
            'a, h1, h2, th, label': { fontFamily: 'Merriweather, serif' },
            'p, td, button': { fontFamily: 'Open Sans, sans-serif' },
          }}
        />
      </div>

    );
  }
}
