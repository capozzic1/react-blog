import React from 'react';
import Navigation from '../Navigation/Navigation';

import { connect } from 'react-redux';
import { logout } from '../../redux/actions/signUpActions';

const mapStateToProps = state => ({ loggedIn: state.signup.loggedIn });

const mapDispatchToProps = dispatch => ({
  logout: () => {
    dispatch(logout());
  },
});

class Layout extends React.Component {
  render() {
    // console.log(this.props.posts);
    return (<div className="container">
      <Navigation loggedIn={this.props.loggedIn} logout={this.props.logout} /> {this.props.children}

    </div>);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
