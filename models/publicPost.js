var mongoose = require('mongoose');

var PublicPostSchema = new mongoose.Schema({
  title : { type: String, required: true},
  message : { type: String, required: true },
  author : { type: String, required: true },
  isPublic : { type: Boolean, required: true }
});

module.exports = mongoose.model('PublicPosts', PublicPostSchema);
