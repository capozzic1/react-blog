
import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import { login } from '../../redux/actions/loginActions';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  login: (data) => {
    dispatch(login(data));
  },
});

const LoginPage = props => (
  <div className="login-wrap">
    <LoginForm login={props.login} />
  </div>
);

export default connect(null, mapDispatchToProps)(LoginPage);
