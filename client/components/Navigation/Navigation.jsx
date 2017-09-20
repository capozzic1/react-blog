
import React from 'react';
import { Link } from 'react-router-dom';
import Radium, { Style } from 'radium';

const color = require('color');
/* eslint-disable */

var styles = {
  nav: {
    position: 'relative',
    background: 'aliceblue',
    boxShadow: '10px 5px 3px #888888',
    width: '100%',
    height: '5em',

  },
  navlink: {
    display:'inline-block',


    ':hover': {
      textDecoration: 'none',
      background: '#cccccc',
      color: 'white',

    }
  },
  navLinkWrap: {
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)'

  }


};



class Navigation extends React.Component {
constructor(props){
  super(props)
}

render(){
  return (
  <nav style={styles.nav}>
    <div className="nav-link-wrap" style={styles.navLinkWrap}>
      <RadiumLink to="/"  className="nav-link" style={styles.navlink}>Lucid Web Dream</RadiumLink>
      <RadiumLink to="/"  className="nav-link" style={styles.navlink}>Blog home</RadiumLink>
      {this.props.loggedIn && <button onClick={this.props.logout}>Logout</button>}
    </div>


    <Style
      scopeSelector=".nav-link"
      rules={{
        padding: '10px',
        fontSize: '1.5em',
        color: 'black',

      }}
    />
  </nav>
)
}
}


let RadiumLink = Radium(Link);
Navigation = Radium(Navigation);


export default Navigation;
