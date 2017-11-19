import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import renderField from '../FormHelpers/RenderField';
import createHistory from 'history/createBrowserHistory';

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
    return (<form onSubmit={handleSubmit(this.onSubmit)}>
      <label>Username
        <Field name="username" type="text" component={renderField}/>
      </label>
      <label>Password
        <Field name="password" type="text" component={renderField}/>
      </label>
      <div>
        <button type="submit" disabled={submitting}>Login</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear values</button>
      </div>

    </form>);
  }
};

LoginForm = reduxForm({form: 'loginForm', validate})(LoginForm);

const selector = formValueSelector('loginForm');

export default LoginForm;
