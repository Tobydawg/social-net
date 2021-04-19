const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  // Add these four attributes to your schema: username, password, email, userCreated
  // YOUR CODE HERE
  //
  username: {
    type: String,
    trim: true,
    required: "username is required"
  },
  password: {
    type: String,
    trim: true,
    required: "password is required",
    validate: [({ length}) => length >= 6, "password should be longer."]
  },
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "please enter valid email"]
  },

  userCreated: {
    type:Date,
    default: Date.now
  }
});


const User = model('User', UserSchema);

module.exports = User;