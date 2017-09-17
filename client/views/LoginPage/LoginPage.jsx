
import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import Layout from '../../components/Layout/Layout';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/signUpActions';

const mapDispatchToProps = dispatch => ({
  login: (userData) => {
    dispatch(login(userData));
  },
});

class LoginPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="login-wrap">
          <LoginForm login={this.props.login} />
        </div>
      </Layout>
    );
  }
}


export default connect(null, mapDispatchToProps)(LoginPage);
