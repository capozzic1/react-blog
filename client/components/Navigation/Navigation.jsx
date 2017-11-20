import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { changeRedirect } from '../../redux/actions/postActions';
import { Row, Col } from 'react-bootstrap';
import './navigation.scss';

const mapDispatchToProps = dispatch => ({

  changeRedirect: (str) => {
    dispatch(changeRedirect(str));
  },
});

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.changeRedirect = this.changeRedirect.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      navShow: false,
    };
  }

  changeRedirect() {
    this.props.changeRedirect('false');
  }

  toggleNav() {
    this.setState({
      navShow: !this.state.navShow,
    });
  }

  render() {
    return (<Row>
      <Col xs={12} className="nav-btn-wrap">
        <button className="btn btn-lg navBtn pull-right" onClick={this.toggleNav}>
          <span className="glyphicon glyphicon-menu-hamburger" />
        </button>
      </Col>
      {
        this.state.navShow
          ? <Col xs={8} className="nav-link-wrap">
            <nav>
              <Link to="/" className="nav-link">Lucid Web Dream</Link>
              <Link to="/" className="nav-link" onClick={this.changeRedirect}>Blog home</Link>
              {!this.props.loggedIn && <Link to="/login" className="nav-link">Login</Link>}
              {this.props.loggedIn && <button onClick={this.props.logout}>Logout</button>}
              {this.props.loggedIn && <Link to="/dashboard" className="nav-link" onClick={this.changeRedirect}>Dashboard</Link>}
            </nav>
          </Col>
          : null
      }

    </Row>);
  }
}

export default connect(null, mapDispatchToProps)(Navigation);
