
import React from 'react';
import { Link } from 'react-router-dom';
import Radium, { Style } from 'radium';

const color = require('color');
/* eslint-disable */

var styles = {
  nav: {
    position: 'relative',
    top: '20px',
    width: '100%'


  },
  navlink: {
    display:'inline-block',
    textShadow: '1px 1px .5px blue',

    ':hover': {
      textDecoration: 'none',
      background: '#cccccc',
      color: 'white',

    }
  },
  navLinkWrap: {
    width:'70%'
  }

};



let Navigation = () => (

  <nav style={styles.nav}>
    <div className="nav-link-wrap" style={styles.navLinkWrap}>
      <RadiumLink to="/"  className="nav-link" style={styles.navlink}>Lucid Web Dream</RadiumLink>
      <RadiumLink to="/"  className="nav-link" style={styles.navlink}>Blog home</RadiumLink>
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
);


let RadiumLink = Radium(Link);
Navigation = Radium(Navigation);


export default Navigation;
