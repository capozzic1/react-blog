import React from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Layout from '../../components/Layout/Layout';
import { signUp } from '../../redux/actions/signUpActions';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  signup: (user) => {
    dispatch(signUp(user));
  },
});
const SignUp = props => (
  <Layout>
    <SignUpForm signup={props.signup} />;
  </Layout>
);

export default connect(null, mapDispatchToProps)(SignUp);
