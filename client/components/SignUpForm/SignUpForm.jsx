import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from '../FormHelpers/RenderField';
import { SubmissionError } from 'redux-form';
import axios from 'axios';
// import { connect } from 'react-redux';

const validate = (values) => {
  const errors = {};


  if (!values.username) {
    errors.username = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.username = 'Invalid email address';
  }

  if (!values.password || !values.passwordConfirm) {
    errors.passwordConfirm = 'Required';
  } else if (values.password !== values.passwordConfirm) {
    errors.passwordConfirm = 'Please check that both passwords match.';
  }

  return errors;
};


class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(userData) {
    console.log(userData);
    this.props.signup(userData);
  }


  render() {
    const { error, handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form >
        {error && (<strong>{error}</strong>)}

        <Field name="username" type="email" component={renderField} label="Email" />
        <Field name="password" type="text" component={renderField} label="Password" />
        <Field name="passwordConfirm" type="text" component={renderField} label="Enter password to confirm" />

        <div>
          <button type="button" disabled={submitting} onClick={handleSubmit(this.onSubmit)}>Sign Up</button>
          <button type="button" onClick={reset}>Clear Values</button>
        </div>
      </form>
    );
  }
}


export default reduxForm({
  form: 'signUpForm',

})(SignUpForm);
