const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    Collection: [{
      type: Schema.Types.ObjectId
    }]
  });

  module.exports = User = mongoose.model('users', UserSchema);