const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First Name Must Be Provided.'],
  },
  lastName: {
    type: String,
    required: [true, 'Last Name Must Be Provided.'],
  },
  email: {
    type: String,
    required: [true, 'Email Must Be Provided.'],
    unique: true,
    match: [
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    ].push('Invalid Email.'),
  },
  password: {
    type: String,
    required: [true, 'Password Cannot Be Empty'],
  },
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('User', UserSchema);
