import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import renderField from '../FormHelpers/RenderField';
import createHistory from 'history/createBrowserHistory';
import { Col } from 'react-bootstrap';
import './loginForm.scss';

const history = createHistory();

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Required';
  }
  if (!values.password) {
    errors.password = 'Please type in your password';
  }

  return errors;
};

/* eslint-disable */
class LoginForm extends React.Component {
  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(user) {
    console.log(user)
    this.props.login(user);

    /* capozzic21@gmail.com
    test*/
  }

  render() {
    const {handleSubmit, pristine, reset, submitting} = this.props;
    return (<Col sm={6} smOffset={3} xs={12}>
      <form onSubmit={handleSubmit(this.onSubmit)} className="login-form">
        <div className="login-label-wrap">
          <label htmlFor="username" className="login-label">Username</label>
        </div>
        <div className="input-login">

          <Field id="username" name="username" type="text" component={renderField}/>
        </div>
        <div className="login-label-wrap">
          <label htmlFor="password" className="login-label">Password
          </label>
        </div>
        <div className="input-login">

          <Field id="password" name="password" type="text" component={renderField}/></div>

        <div className="form-btns">
          <button type="submit" disabled={submitting}>Login</button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>Clear values</button>
        </div>

      </form>
    </Col>);
  }
};

LoginForm = reduxForm({form: 'loginForm', validate})(LoginForm);

const selector = formValueSelector('loginForm');

export default LoginForm;
