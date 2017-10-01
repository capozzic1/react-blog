
import React from 'react';
import { Link } from 'react-router-dom';
import Radium, { Style } from 'radium';
import { connect } from 'react-redux';
import { changeRedirect } from '../../redux/actions/postActions';

const color = require('color');
/* eslint-disable */

var styles = {
  nav: {
    position: 'relative',


    width: '100%',
    height: '5em',

  },
  navlink: {
    display:'inline-block',
    color: 'whitesmoke',


    ':hover': {
      textDecoration: 'none',
      background: '#cccccc',
      color: 'darkgreen',

    }
  },
  navLinkWrap: {
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)'

  }


};

const mapDispatchToProps = dispatch => ({

  changeRedirect: (str) => {
    dispatch(changeRedirect(str));
  },
});

class Navigation extends React.Component {
constructor(props){
  super(props)

  this.changeRedirect = this.changeRedirect.bind(this);
}

changeRedirect(){
this.props.changeRedirect('false');
}

render(){
  return (
  <nav style={styles.nav}>
    <div className="nav-link-wrap" style={styles.navLinkWrap}>
      <RadiumLink to="/"  className="nav-link" style={styles.navlink}>Lucid Web Dream</RadiumLink>
      <RadiumLink to="/"  className="nav-link" style={styles.navlink} onClick={this.changeRedirect} >Blog home</RadiumLink>
      {!this.props.loggedIn &&
        <RadiumLink to="/login"  className="nav-link" style={styles.navlink} >Login</RadiumLink>}
      {this.props.loggedIn && <button onClick={this.props.logout}>Logout</button>}
      {this.props.loggedIn &&  <RadiumLink to="/dashboard"  className="nav-link" style={styles.navlink} onClick={this.changeRedirect}>Dashboard</RadiumLink>}
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


export default connect(null, mapDispatchToProps)(Navigation);
