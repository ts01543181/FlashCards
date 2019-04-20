const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema({
    id: {
      type: String,
      required: true
    },
    Collection: {
        type: String,
        required: true
    },
    frontInfo: {
        type: String,
        required: true
    },
    backInfo: {
        type: String
    },
    comment: {
        type: String
    }
  });

  module.exports = Card = mongoose.model('cards', CardSchema);