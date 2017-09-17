import React from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Layout from '../../components/Layout/Layout';
import { signUp, addFlashMessage } from '../../redux/actions/signUpActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const mapStateToProps = state => ({
  signupRedirect: state.signup.signupRedirect,
});

const mapDispatchToProps = dispatch => ({
  signup: (user) => {
    dispatch(signUp(user));
  },
  addFlashMessage: (data) => {
    dispatch(addFlashMessage(data));
  },
});


class SignUp extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);

    if (nextProps.signupRedirect) {
      this.props.addFlashMessage({
        type: 'success',
        text: 'You signed up successfully. Welcome!',
      });
      this.props.history.push('/login');

      // <Redirect to="/" />;
    }
  }

  render() {
    return (
      <Layout>
        <SignUpForm signup={this.props.signup} />;
      </Layout>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
