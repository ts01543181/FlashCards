const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CollectionSchema = new Schema({
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    Card: [{
      type: Schema.Types.ObjectId
    }]
  });

  module.exports = Collection = mongoose.model('collections', CollectionSchema);