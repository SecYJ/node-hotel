const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  id: String,
  email: String,
  password: String,
  name: String,
  phone: String,
  date_of_birth: Number,
  address: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
