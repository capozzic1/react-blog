
import React from 'react';
import { Link } from 'react-router-dom';
import Radium, { Style } from 'radium';
/* eslint-disable */

var styles = {
  nav: {
    links: {
    paddingLeft:'15'
  }
  },
};



let Navigation = () => (

  <nav>
    <RadiumLink to="/"  className="navtest">Lucid Web Dream</RadiumLink>
    <RadiumLink to="/"  className="navtest">About</RadiumLink>
    <RadiumLink to="/"  className="navtest">Contact</RadiumLink>
    <RadiumLink to="/"  className="navtest">Portfolio</RadiumLink>
    <RadiumLink to="/"  className="navtest">Blog</RadiumLink>
    <Style
      scopeSelector=".navtest"
      rules={{
        paddingLeft: '15px'
      }}
    />
  </nav>
);


let RadiumLink = Radium(Link);
Navigation = Radium(Navigation);


export default Navigation;
