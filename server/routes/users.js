const express = require('express');
const { ValidateInput } = require('../validations/signupval.js');

const Redirect = require('react-router');

const router = express.Router();

router.post('/', (req, res) => {
  console.log(req.body);
  const { errors, isValid } = ValidateInput(req.body);
  // console.log(errors, isValid);

  if (isValid) {
    // console.log(errors);
    res.status(200).send({ success: true });
  } else {
    res.status(400).send(errors);
  }
});

module.exports = router;
