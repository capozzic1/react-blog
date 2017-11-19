import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { changeRedirect } from '../../redux/actions/postActions';

const color = require('color');
/* eslint-disable */

const mapDispatchToProps = dispatch => ({

  changeRedirect: (str) => {
    dispatch(changeRedirect(str));
  }
});

class Navigation extends React.Component {
  constructor(props) {
    super(props)

    this.changeRedirect = this.changeRedirect.bind(this);
  }

  changeRedirect() {
    this.props.changeRedirect('false');
  }

  render() {
    return (<nav >
      <div className="nav-link-wrap">
        <Link to="/" className="nav-link">Lucid Web Dream</Link>
        <Link to="/" className="nav-link" onClick={this.changeRedirect}>Blog home</Link>
        {!this.props.loggedIn && <Link to="/login" className="nav-link">Login</Link>}
        {this.props.loggedIn && <button onClick={this.props.logout}>Logout</button>}
        {this.props.loggedIn && <Link to="/dashboard" className="nav-link" onClick={this.changeRedirect}>Dashboard</Link>}
      </div>

    </nav>)
  }
}

export default connect(null, mapDispatchToProps)(Navigation);
