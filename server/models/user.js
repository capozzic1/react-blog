const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');
// creating a new schema for the user
const UserSchema = new Schema({
  email: { type: String, unique: true },
  username: String,
  passwordHash: String,
  passwordSalt: String,
  role: { type: String, enum: ['Admin', 'Member'], default: 'Member' },
  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: Date },
},
{
  timestamps: true,
});

UserSchema.pre('save', function (next) {
  const user = this;
  const SALT_FACTOR = 5;

  if (!user.isModified('password')) return next();
  /* eslint-disable */
  bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) return next(err);

      user.password = hash;
      next();
    });
  });
});

//Method to compare password for login
UserSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) { return cb(err); }

    cb(null, isMatch);
  });
}

module.exports = mongoose.model('User', UserSchema);
