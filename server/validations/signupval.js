const Validator = require('validator');
const isEmpty = require('lodash/isEmpty');


function ValidateInput(data) {
  const errors = {};

  if (isEmpty(data.username)) {
    errors.username = 'This field is required';
  }

  if (isEmpty(data.email)) {
    errors.email = 'This field is required';
  }

  if (!Validator.isEmail(data.email)) {
    errors.password = 'Email is invalid';
  }

  if (isEmpty(data.password)) {
    errors.password = 'This field is required';
  }

  if (isEmpty(data.passwordConfirm)) {
    errors.passwordConfirm = 'This field is required';
  }

  if (!Validator.equals(data.password, data.passwordConfirm)) {
    errors.passwordConfirm = 'Passwords must match';
  }


  return {
    errors,
    isValid: isEmpty(errors),
  };
}

module.exports = { ValidateInput };
