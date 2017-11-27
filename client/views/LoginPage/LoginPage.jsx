import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import Layout from '../../components/Layout/Layout';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../redux/actions/signUpActions';

const mapDispatchToProps = dispatch => ({
  login: (userData) => {
    dispatch(login(userData));
  },
});

const mapStateToProps = state => ({ loggedIn: state.signup.loggedIn });

class LoginPage extends React.Component {
  render() {
    return (<Layout>

      {this.props.loggedIn && <Redirect to="/dashboard" />}
      <div className="login-wrap">
        <LoginForm login={this.props.login} />
      </div>

    </Layout>);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
