import React from 'react';
import Navigation from '../Navigation/Navigation';

import { connect } from 'react-redux';
import { logout } from '../../redux/actions/signUpActions';
import { Grid, Row } from 'react-bootstrap';

const mapStateToProps = state => ({ loggedIn: state.signup.loggedIn });

const mapDispatchToProps = dispatch => ({
  logout: () => {
    dispatch(logout());
  },
});

class Layout extends React.Component {
  render() {
    // console.log(this.props.posts);
    return (<Grid>
      <Row>
        <Navigation loggedIn={this.props.loggedIn} logout={this.props.logout} /> {this.props.children}
      </Row>
    </Grid>);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
