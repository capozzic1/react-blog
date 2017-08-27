import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';

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

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error },
}) => (<div>
  <label>
    {label}
  </label>
  <div>
    <input {...input} placeholder={label} type={type} />
    {touched &&
      ((error &&
        <span>
          {error}
        </span>))}
  </div>
</div>);
/* eslint-disable */
class LoginForm extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      indentifier: '',
      password: '',
      errors: {},
      isLoading: false
    }

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(user){

    this.props.login(user).then(
      (res, err) => {
        if (err) {
          console.log(err);
        }
        history.push('/dashboard');
        history.go('/dashboard');
    })
  }

  render(){
      const { handleSubmit, pristine, reset, submitting } = this.props;
  return (
    <form onSubmit={handleSubmit(this.onSubmit)}>
      <Field
        name="username"
        type="text"
        component={renderField}
        label="Username"
      />

      <Field
        name="password"
        type="text"
        component={renderField}
        label="Password"
      />
      <div>
        <button type="submit" disabled={submitting}>Login</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear values</button>
      </div>
    </form>
  );
}
};


LoginForm = reduxForm({
  form: 'loginForm',
  validate,
})(LoginForm);

const selector = formValueSelector('loginForm');

LoginForm = connect(
  state => {
  const { username, password } = selector(state, 'username', 'password');
  return {
  username,
  password
  }
})(LoginForm)
export default LoginForm;
