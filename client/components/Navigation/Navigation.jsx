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
    return (<Col xs={12} className="nav-wrap">
      <Row>
        <Col xs={12} className="nav-btn-wrap">
          <button className="btn btn-md navBtn pull-right" onClick={this.toggleNav}>
            <span className="glyphicon glyphicon-menu-hamburger" />
          </button>
        </Col>
        {
          this.state.navShow
            ? <Col xs={10} xsOffset={1} className="nav-link-wrap">
              <nav>

                <Link to="/" className="nav-link" onClick={this.changeRedirect}>Home</Link>
                {!this.props.loggedIn && <Link to="/login" className="nav-link">Login</Link>}
                {this.props.loggedIn && <a onClick={this.props.logout} className="nav-link">Logout</a>}
                {this.props.loggedIn && <Link to="/dashboard" className="nav-link" onClick={this.changeRedirect}>Dashboard</Link>}
              </nav>
            </Col>

            : null
        }
      </Row>
    </Col>);
  }
}

export default connect(null, mapDispatchToProps)(Navigation);
