import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import renderField from '../FormHelpers/RenderField';
import createHistory from 'history/createBrowserHistory';
import Radium, { Style } from 'radium';

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
  constructor(props){
    super(props)


    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(user){
    console.log(user)
    this.props.login(user);

    /* capozzic21@gmail.com
    test*/
  }

  render(){
      const { handleSubmit, pristine, reset, submitting } = this.props;
  return (
    <form onSubmit={handleSubmit(this.onSubmit)}>
      <label>Username
        <Field
          name="username"
          type="text"
          component={renderField}

        />
      </label>
      <label>Password
        <Field
          name="password"
          type="text"
          component={renderField}

        />
      </label>
      <div>
        <button type="submit" disabled={submitting}>Login</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear values</button>
      </div>
      <Style
        scopingSelector=".login-wrap"
        rules={{
          '.login-wrap':{
            height: '100vw'
          },
          form: {
            margin: '0 auto',
            position: 'relative',
            width: '40%',
            top: '3em',
            border: '1px solid lightblue',
            padding: '20px',
            color: 'whitesmoke',
            fontSize: '20px',
          },
          'form input': {
            padding: '6px'
          },
          'label, input': {
            display: 'block'
          },
          input:{
            marginTop:'10px'
          },
          button: {
            marginTop: '20px',
            background: 'white',
            border: '1px solid black',
            padding: '5px',
            color: 'black',
            fontSize: '20px',
            fontWeight: '600',
            width: '50%',
            display: 'block',
          }
        }}
      />
    </form>
  );
}
};


LoginForm = reduxForm({
  form: 'loginForm',
  validate,
})(LoginForm);

const selector = formValueSelector('loginForm');


export default LoginForm;
