import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from '../FormHelpers/RenderField';
import { SubmissionError } from 'redux-form';
import axios from 'axios';

const validate = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = 'Required';
  }

  if (!values.email) {
    errors.username = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password || !values.passwordConfirm) {
    errors.password = 'Required';
  } else if (values.password !== values.passwordConfirm) {
    errors.password = 'Please check that both passwords match.';
  }

  return errors;
};


class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(userData) {
    // this.props.signup(userData);
    axios.post('/api/users', userData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        throw new SubmissionError({ _error: 'Login failed!' });
        console.log(error.response.data);
      });
  }

  render() {
    const { error, handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        {error && (<strong>{error}</strong>)}
        <Field name="username" type="text" component={renderField} label="Username" />
        <Field name="email" type="email" component={renderField} label="Email" />
        <Field name="password" type="text" component={renderField} label="Password" />
        <Field name="passwordConfirm" type="text" component={renderField} label="Enter password to confirm" />

        <div>
          <button type="submit" disabled={submitting}>Sign Up</button>
          <button type="button" onClick={reset}>Clear Values</button>
        </div>
      </form>
    );
  }
}


export default reduxForm({
  form: 'signUpForm',
  validate,

})(SignUpForm);
